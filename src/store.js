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
    problemsData: null,
    problemsDict: null,
    problemsIsLoading: false,
    submissionsDetail: null,
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
    },
    setSubmissionDetail(state, payload) {
      var result = {}
      for (var key in state.submissionData) {
        if (state.submissionData[key].result == "AC") {
          result[state.submissionData[key].problem_id] = state.submissionData[key].point
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
    },
    setProblemsData(state,payload) {
      state.problemsData = payload.problemsData
    },
    setProblemsDict(state,payload) {
      let problems = state.problemsData
      var result = {}

      for (let key in problems) {
        let problem = problems[key]
        result[problem.id] = {
          "title": problem.title,
          "point": problem.point,
          "contest_id": problem.contest_id
        }
      }
      console.log(result)
      state.problemsDict = result
      state.problemsIsLoading = false
    },
    setSubmissionDetailPerProblem(state,payload) {
      let submissions = state.submissionData
      var result = {}

      for (let key in submissions) {
        let submission = submissions[key]

        if (result[submission.problem_id]) {
          if (submission.result == "AC") {
            result[submission.problem_id].your_ac_count +=1
            result[submission.problem_id].ac_submissions.push(submission.id)
          }
          else {
            result[submission.problem_id].your_wa_count +=1
            result[submission.problem_id].wa_submissions.push(submission.id)
          }
        }
        else {
          result[submission.problem_id] = {}
          result[submission.problem_id].contest_id = submission.contest_id

          if (submission.result == "AC") {
            result[submission.problem_id].your_ac_count = 1
            result[submission.problem_id].your_wa_count = 0
            result[submission.problem_id].ac_submissions = [submission.id]
            result[submission.problem_id].wa_submissions = []
            result[submission.problem_id].point = submission.point
          }
          else {
            result[submission.problem_id].your_ac_count = 0
            result[submission.problem_id].your_wa_count = 1
            result[submission.problem_id].ac_submissions = []
            result[submission.problem_id].wa_submissions = [submission.id]
          }
        }
      }
      state.submissionsDetail = result
      console.log(result)
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
      context.commit("setSubmissionDetail", payload)
      context.commit("setSubmissionDetailPerProblem", payload)
    },
    async getProblemsData(context) {
      const payload = {
        problemsData: '',
      }
      await axios.get('https://kenkoooo.com/atcoder/resources/merged-problems.json')
      .then((res) => {
        payload.problemsData = res.data
      })
      context.commit("setProblemsData", payload)
      context.commit("setProblemsDict", payload)
    }
  }
});
