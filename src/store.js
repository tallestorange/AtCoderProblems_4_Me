import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

function convertToDateString(epoch_second) {
  let dt = new Date(0);
  dt.setUTCSeconds(epoch_second);
  let yr = dt.getFullYear();
  let mn = ("00" + (dt.getMonth() + 1)).slice(-2);
  let dy = ("00" + dt.getDate()).slice(-2);
  let dateStr = yr + "-" + mn + "-" + dy;
  return dateStr
}

export default new Vuex.Store({
  state: {
    isInitialLoad: true,
    isNowLoading: false,
    isDarkMode: false,
    problemsDictionary: {},
    scoresDictionary: {},
    submissionsDictionary: {},
    selectedSearchTags: [],
    selectedDate: "",
    userName: "",
    rivalsList: {}
  },
  getters: {
    getIsInitialLoad: (state, getters) => {
      return state.isInitialLoad;
    },
    getIsNowLoading: (state, getters) => {
      return state.isNowLoading;
    },
    getRivalsList: (state, getters) => {
      return state.rivalsList
    },
    getSelectedDate: (state, getters) => {
      return state.selectedDate
    },
    getIsDarkMode: (state, getters) => {
      return state.isDarkMode
    },
    getScoresDictionary: (state, getters) => {
      return state.scoresDictionary;
    },
    getScores: state => userName => {
      return state.scoresDictionary[userName];
    },
    getSelectedSearchTags: (state, getters) => {
      return state.selectedSearchTags;
    },
    getProblemsDictionary: (state, getters) => {
      return state.problemsDictionary;
    },
    getSubmissionsDictionary: (state, getters) => {
      return state.submissionsDictionary;
    },
    getSelectedDate: (state, getters) => {
      return state.selectedDate
    },
    getUserName: (state, getters) => {
      return state.userName
    },
    getSubmissions: state => userName => {
      return state.submissionsDictionary[userName]
    }
  },
  mutations: {
    setUserName(state, payload) {
      state.userName = payload
    },
    addRivalsList(state, payload) {
      state.rivalsList[payload.name] = payload.data
    },
    setIsNowLoading(state, payload) {
      state.isNowLoading = payload
    },
    setIsDarkMode(state, payload) {
      state.isDarkMode = payload
    },
    setIsInitialLoad(state, payload) {
      state.isInitialLoad = payload
    },
    setSelectedDate(state, payload) {
      state.selectedDate = payload
    },
    setSelectedSearchTags(state, payload) {
      state.selectedSearchTags = payload
    },
    setProblemsDictionary(state, payload) {
      state.problemsDictionary = payload;
    },
    setScoresDictionary(state, payload) {
      state.scoresDictionary = payload;
    },
    setSubmissionsDictionary(state, payload) {
      state.submissionsDictionary[payload.userName] = payload.data;
    },
    setProblemsDataFromAPI(state, payload) {
      const problemsData = payload
      const db = Vue.prototype.$db
      const userName = state.userName
      let scoresDict = {}
      scoresDict[userName] = {}
      let problemsDict = {}

      for (let key in problemsData) {
        let problem = problemsData[key]
        problemsDict[problem.id] = problem
        problemsDict[problem.id].your_ac_count = 0
        problemsDict[problem.id].your_wa_count = 0
        problemsDict[problem.id].url = "https://atcoder.jp/contests/" + problem.contest_id + "/tasks/" + problem.id

        if (scoresDict[userName][problem.point]){
          scoresDict[userName][problem.point].problems_count += 1
        }
        else {
          scoresDict[userName][problem.point] = {
            problems_count: 1,
            accepted_count: 0
          }
        }
      }

      db.scores.put({id: userName, value: scoresDict[userName]});
      db.problems.put({id: "problemsDictionary", value: problemsDict});

      state.problemsDictionary = problemsDict
      state.scoresDictionary = scoresDict
    },
    setSubmissionDataFromAPI(state, payload) {
      const submissionsData = payload.data
      const userName = payload.userName
      const db = Vue.prototype.$db
      let submissionsDict = {}

      for (let key in submissionsData) {
        let submission = submissionsData[key]
        let dateStr = convertToDateString(submission.epoch_second)
        let isAccepted = (submission.result == "AC") ? true:false
        
        if (submissionsDict[dateStr]) {
          submissionsDict[dateStr].submissions.push(submission)
        }
        else {
          submissionsDict[dateStr] = {
            submissions: [submission],
            accepted_count: 0,
            submissions_count: 0,
            point_sum: 0,
          }
        }
        submissionsDict[dateStr].submissions_count += 1
        if (isAccepted){
          submissionsDict[dateStr].accepted_count += 1
          submissionsDict[dateStr].point_sum += submission.point
        }
      }

      db.submissions.put({id: userName, value: submissionsDict});
      state.submissionsDictionary[userName] = submissionsDict
    },
    updateSubmissionsData(state, payload) {
      const problems = state.problemsDictionary;
      const db = Vue.prototype.$db
      const userName = payload
      let submissions = JSON.parse(JSON.stringify(state.submissionsDictionary[userName]));

      for (let dateStr in submissions) {
        let data = submissions[dateStr].submissions        
        for (let key in data) {
          let submission = data[key]
          let problem_info = problems[submission.problem_id]

          submission.score = problem_info.point
          submission.title = problem_info.title
          submission.problem_url = problem_info.url
          submission.submission_url = "https://atcoder.jp/contests/" + submission.contest_id + "/submissions/" + submission.id
        }
      }

      db.submissions.put({id: userName, value: submissions});
      state.submissionsDictionary[userName] = submissions
    },
    updateProblemsData(state, payload) {
      const userName = payload
      const submissions = state.submissionsDictionary[userName];
      const db = Vue.prototype.$db
      let problems = JSON.parse(JSON.stringify(state.problemsDictionary));
      let scores = JSON.parse(JSON.stringify(state.scoresDictionary[userName]));

      for (let dateStr in submissions) {
        let data = submissions[dateStr].submissions
        for (let key in data) {
          let submission = data[key]
          if (submission.result == "AC") {
            problems[submission.problem_id].your_ac_count += 1
          }
          else {
            problems[submission.problem_id].your_wa_count += 1
          }
        }
      }

      for (let key in problems) {
        let data = problems[key]
        if (data.your_ac_count > 0) {
          scores[data.point].accepted_count += 1
        }
      }

      db.problems.put({id: "problemsDictionary", value: problems});
      state.problemsDictionary = problems

      db.scores.put({id: userName, value: scores});
      state.scoresDictionary[userName] = scores
    }
  },
  actions: {
    async fetchProblemsData(context) {
      console.log("Fetching from Atcoder Problems API(Problems Data)");
      let result = [];

      await axios
        .get("https://kenkoooo.com/atcoder/resources/merged-problems.json")
        .then(res => {
          console.log("Successful to fetch Problems Data")
          result = res.data
      })
      context.commit("setProblemsDataFromAPI", result)
    },
    async fetchSubmissionsData(context, payload) {
      console.log("Fetching from Atcoder Problems API(Submissions Data)");
      let result = {};
      const userName = payload
      result.userName = userName

      await axios
        .get("https://kenkoooo.com/atcoder/atcoder-api/results?user=" + userName)
        .then(res => {
          console.log("Successful to fetch Submissions Data")
          result.data = res.data
      })

      context.commit("setSubmissionDataFromAPI", result)
    },
    async fetchAll(context) {
      context.commit("setIsNowLoading", true)
      const userName = context.getters.getUserName
      await context.dispatch("fetchProblemsData").then(() => {})
      
      await context.dispatch("fetchSubmissionsData", userName).then(() => {})
      context.commit("updateSubmissionsData",userName)
      
      context.commit("updateProblemsData",userName)
      context.commit("setIsNowLoading", false)
    },
    async loadDataFromIDB(context) {
      console.log("Loading Data From IndexedDB")
      context.commit("setIsNowLoading", true)
      const db = Vue.prototype.$db

      await db.inputs.get("userName").then( (data) => {
        context.commit("setUserName", data.value)
      }).catch( error => {
      });
      const userName = context.getters.getUserName
      await db.submissions.get(userName).then( (res) => {
        let result = {
          data: res.value,
          userName: userName
        }
        context.commit("setSubmissionsDictionary", result)
      }).catch( error => {
      });
      await db.scores.toArray().then( (res) => {
        let result = {}
        for(let key in res) {
          let data = res[key]
          result[data.id] = data.value
        }
        context.commit("setScoresDictionary", result)
      }).catch( error => {
        context.dispatch("fetchProblemsData")
      });
      await db.problems.get("problemsDictionary").then( (data) => {
        context.commit("setProblemsDictionary", data.value)
      }).catch( error => {
      });
      await db.inputs.get("selectedSearchTags").then( (data) => {
        context.commit("setSelectedSearchTags", data.value)
      }).catch( error => {
      });

      context.commit("setIsInitialLoad", false)
      context.commit("setIsNowLoading", false)
    }
  }
});
