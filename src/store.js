import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    errored: false,
    graphData: null,
    problemsData: null,
    problemsDict: null,
    problemsIsLoading: false,
    submissionsData: null,
    submissionsIsLoading: false,
    submissionsDetail: null,
    ratedSubmissionsData: null,
  },
  getters: {
    getLoadingState: (state, getters) => {
      if (!state.submissionsIsLoading && !state.problemsIsLoading) {
        return false
      }
      else {
        return true
      }
    },
    getGraphData: (state, getters) => {
      return state.graphData
    },
    getSubmissionsData: (state, getters) => {
      return state.submissionsDetail
    },
    getProblemsData: (state, getters) => {
      return state.problemsDict
    }
  },
  mutations: {
    setSubmissionsData(state, payload) {
      state.submissionsData = payload.submissionsData
    },
    setSubmissionDetail(state, payload) {
      var result = {}
      for (var key in state.submissionsData) {
        if (state.submissionsData[key].result == "AC") {
          result[state.submissionsData[key].problem_id] = state.submissionsData[key].point
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
    setRatedSubmissionsData(state, payload) {
      const problemsDict = JSON.parse(JSON.stringify(state.problemsDict))
      const submissionsDetail = JSON.parse(JSON.stringify(state.submissionsDetail))
      console.log(submissionsDetail)

      let result = {}
      for (let key in submissionsDetail) {
        console.log(key)
        if(problemsDict[key] && problemsDict[key].point){
          let submission = submissionsDetail[key]
          result[key] = submission
        }
      }

      console.log(result)


    },
    changeLoadingState(state, payload) {
      state.loading = !state.loading
    },
    changeSubmissionsLoadingState(state, payload) {
      state.submissionsIsLoading = payload
    },
    changeProblemsLoadingState(state, payload) {
      state.problemsIsLoading = payload
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
      state.problemsDict = result
      state.problemsIsLoading = false
    },
    setSubmissionDetailPerProblem(state,payload) {
      let submissions = state.submissionsData
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
      state.submissionsIsLoading = false
    }
  },
  actions: {
    async fetchSubmissionsData(context,{name}) {
      const payload = {
        submissionsData: '',
      }
      context.commit("changeLoadingState")
      context.commit("changeSubmissionsLoadingState",true)
      await axios.get('https://kenkoooo.com/atcoder/atcoder-api/results?user=' + name)
      .then((res) => {
        payload.submissionsData = res.data
      })
      context.commit("setSubmissionsData", payload)
      context.commit("setSubmissionDetail", payload)
      context.commit("setSubmissionDetailPerProblem", payload)
    },
    async fetchProblemsData(context) {
      const payload = {
        problemsData: '',
      }
      context.commit("changeProblemsLoadingState",true)
      await axios.get('https://kenkoooo.com/atcoder/resources/merged-problems.json')
      .then((res) => {
        payload.problemsData = res.data
      })
      context.commit("setProblemsData", payload)
      context.commit("setProblemsDict", payload)
    }
  },
});
