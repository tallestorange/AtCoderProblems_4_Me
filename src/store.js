import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    submissionData: null,
    errored: false,
    graphData: null,
  },
  getters: {
    getLoadingState: (state, getters) => {
      return state.loading
    },
    getGraphData: (state, getters) => {
      return state.graphData
    }
  },
  mutations: {
    setSubmissionData(state, payload) {
      state.submissionData = payload.submissionData
      var result = {}
      for (var key in payload.submissionData) {
        if (payload.submissionData[key].result == "AC") {
          result[payload.submissionData[key].problem_id] = payload.submissionData[key].point
        }
      }

      var graph = {}
      for (var key in result) {
        let value = result[key]
        if (graph[value]) {
          graph[value] += 1
        }
        else {
          graph[value] = 1
        }
      }

      var od = []
      for (var key in graph){
        var value = graph[key]
        od.push({value:value,name:String(key)})
      }

      state.loading = false
      state.graphData = JSON.parse(JSON.stringify(od))
    },
    changeLoadingState(state, payload) {
      state.loading = !state.loading
    }
  },
  actions: {
    async getSubmissionData(context,{name}) {
      const payload = {
        submissionData: '',
      }
      context.commit("changeLoadingState")
      await axios.get('https://kenkoooo.com/atcoder/atcoder-api/results?user=' + name)
      .then((res) => {
        payload.submissionData = res.data
      })
      context.commit("setSubmissionData", payload)
    }
  }
});
