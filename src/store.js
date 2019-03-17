import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errored: false,
    problemsData: null,
    problemsDict: null,
    problemsIsLoading: false,
    submissionsData: null,
    submissionsIsLoading: false,
    submissionsDetail: null,
    ratedSubmissionsData: null,
    ratedGraphData: null,
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
    getSubmissionsRawData: (state, getters) => {
      return state.submissionsData
    },
    getProblemsData: (state, getters) => {
      return state.problemsDict
    },
    getRatedSubmissionsData: (state, getters) => {
      return state.ratedSubmissionsData
    },
    getRatedGraphData: (state, getters) => {
      return state.ratedGraphData
    }
  },
  mutations: {
    setSubmissionsData(state, payload) {
      state.submissionsData = payload.submissionsData
    },
    setRatedSubmissionsData(state, payload) {
      const problemsDict = JSON.parse(JSON.stringify(state.problemsDict))
      const submissionsDetail = JSON.parse(JSON.stringify(state.submissionsDetail))

      let result = {}
      for (let key in submissionsDetail) {
        if(problemsDict[key] && problemsDict[key].point){
          let submission = submissionsDetail[key]
          result[key] = submission
          result[key].point = problemsDict[key].point
        }
        else {
          let submission = submissionsDetail[key]
          result[key] = submission
          result[key].point = null
        }
      }
      state.ratedSubmissionsData = result
    },
    setRatedGraphData(state, payload) {
      const ratedSubmissionsData = state.ratedSubmissionsData
      let scoresDict = {}
      let scoresArray = []

      for (let key in ratedSubmissionsData) {
        let submission = ratedSubmissionsData[key]
        if (submission.your_ac_count == 0) {
          continue
        }
        if (scoresDict[submission.point]){
          scoresDict[submission.point] += 1
        }
        else {
          scoresDict[submission.point] = 1
        }
      }

      for (let key in scoresDict) {
        if (key == "null") {
          scoresArray.push({value:scoresDict[key],name:"0"})
        }
        else {
          scoresArray.push({value:scoresDict[key],name:String(key)})
        }
      }

      state.ratedGraphData = scoresArray
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
    setSubmissionsDetailPerProblem(state,payload) {
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
      // context.commit("setSubmissionDetail", payload)
      context.commit("setSubmissionsDetailPerProblem", payload)
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
})
