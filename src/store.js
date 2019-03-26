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
    contestsDictionary: {},
    submissionsDictionary: {},
    selectedSearchTags: [],
    selectedDate: "",
    userName: "",
    rivalsList: [],
    searchTagsForView: [],
    problemsForView: [],
    scoresForView: {}
  },
  getters: {
    getIsInitialLoad: (state, getters) => {
      return state.isInitialLoad;
    },
    getSearchTagsForView: (state, getters) => {
      return state.searchTagsForView
    },
    getProblemsForView: (state, getters) => {
      return state.problemsForView
    },
    getScoresForView: (state, getters) => {
      return state.scoresForView
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
    getProblems: state => userName => {
      return state.problemsDictionary[userName];
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
    },
    getContestsDictionary: (state, getters) => {
      return state.contestsDictionary
    }
  },
  mutations: {
    setUserName(state, payload) {
      state.userName = payload
    },
    addRivalsList(state, payload) {
      state.rivalsList.push(payload)
    },
    setSearchTagsForView(state, payload) {
      state.searchTagsForView = payload
    },
    setProblemsForView(state, payload) {
      state.problemsForView = payload
    },
    setScoresForView(state, payload) {
      state.scoresForView = payload
    },
    setRivalsList(state, payload) {
      state.rivalsList = payload
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
      const problemsData = payload.data
      const db = Vue.prototype.$db
      const userName = payload.userName
      const contestsData = state.contestsDictionary

      let scoresDict = {}
      let problemsDict = {}

      for (let key in problemsData) {
        let problem = problemsData[key]
        problemsDict[problem.id] = problem
        problemsDict[problem.id].contest_title = contestsData[problem.contest_id].title
        problemsDict[problem.id].your_ac_count = 0
        problemsDict[problem.id].your_wa_count = 0
        problemsDict[problem.id].url = "https://atcoder.jp/contests/" + problem.contest_id + "/tasks/" + problem.id

        if (scoresDict[problem.point]){
          scoresDict[problem.point].problems_count += 1
        }
        else {
          scoresDict[problem.point] = {
            problems_count: 1,
            accepted_count: 0
          }
        }
      }

      db.scores.put({id: userName, value: scoresDict});
      db.problems.put({id: userName, value: problemsDict});

      state.problemsDictionary[userName] = problemsDict
      state.scoresDictionary[userName] = scoresDict

      let searchTags = Object.keys(scoresDict)
      state.searchTagsForView = searchTags
      db.inputs.put({id: "searchTags", value: searchTags});
    },
    setContestsDataFromAPI(state, payload) {
      let result = {}
      for (let key in payload) {
        let data = payload[key]
        result[data.id] = data
      }
      state.contestsDictionary = result
    },
    setSubmissionsDataFromAPI(state, payload) {
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
        }
      }

      db.submissions.put({id: userName, value: submissionsDict});
      state.submissionsDictionary[userName] = submissionsDict
    },
    updateSubmissionsData(state, payload) {
      const userName = payload
      const problems = state.problemsDictionary[userName];
      const db = Vue.prototype.$db
      
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
          if(typeof submission.score !== "undefined"){
            submissions[dateStr].point_sum += submission.point
          }
        }
      }

      db.submissions.put({id: userName, value: submissions});
      state.submissionsDictionary[userName] = submissions
    },
    updateProblemsData(state, payload) {
      const userName = payload
      const submissions = state.submissionsDictionary[userName];
      const db = Vue.prototype.$db
      let problems = JSON.parse(JSON.stringify(state.problemsDictionary[userName]));
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

      db.problems.put({id: userName, value: problems});
      state.problemsDictionary[userName] = problems

      db.scores.put({id: userName, value: scores});
      state.scoresDictionary[userName] = scores
    }
  },
  actions: {
    async fetchProblemsData(context, payload) {
      console.log("Fetching from Atcoder Problems API(Problems Data)");
      let result = {};

      await axios
        .get("https://kenkoooo.com/atcoder/resources/merged-problems.json")
        .then(res => {
          console.log("Successful to fetch Problems Data")
          result.data = res.data
      })
      result.userName = payload
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
      context.commit("setSubmissionsDataFromAPI", result)
    },
    async fetchContestsData(context, payload) {
      let result = []
      await axios
        .get("https://kenkoooo.com/atcoder/resources/contests.json")
        .then(res => {
          result = res.data
      })
      context.commit("setContestsDataFromAPI", result)
    },
    async fetchAll(context, payload) {
      context.commit("setIsNowLoading", true)
      const userName = payload

      await context.dispatch("fetchContestsData").then(() => {})
      await context.dispatch("fetchProblemsData", userName).then(() => {})
      await context.dispatch("fetchSubmissionsData", userName).then(() => {})

      context.commit("updateSubmissionsData",userName)
      context.commit("updateProblemsData",userName)
      context.commit("setIsNowLoading", false)
    },
    async loadDataFromIDB(context) {
      console.log("Loading Data From IndexedDB")
      context.commit("setIsNowLoading", true)
      const db = Vue.prototype.$db

      await db.inputs.get("searchTags").then( (data) => {
        context.commit("setSearchTagsForView", data.value)
      }).catch( error => {
      });

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

      let isEmpty = true
      await db.scores.toArray().then( (res) => {
        let result = {}
        for(let key in res) {
          let data = res[key]
          result[data.id] = data.value
        }
        if (Object.keys(result).length != 0) {
          context.commit("setScoresDictionary", result)
          context.commit("setScoresForView", result[userName])
          isEmpty = false
        }
      }).catch( error => {
      });
      if (isEmpty) {
        await context.dispatch("fetchContestsData").then(() => {})
        await context.dispatch("fetchProblemsData", userName).then( (res) => {})
      }

      await db.problems.toArray().then( (res) => {
        let result = {}
        for(let key in res) {
          let data = res[key]
          result[data.id] = data.value
        }
        const problems = Object.values(result[userName])
        context.commit("setProblemsForView", problems)
        context.commit("setProblemsDictionary", result)
      }).catch( error => {
      });

      await db.inputs.get("selectedSearchTags").then( (data) => {
        context.commit("setSelectedSearchTags", data.value)
      }).catch( error => {
      });

      await db.rivals.toArray().then( (res) => {
        context.commit("setRivalsList", res)
      })

      context.commit("setIsInitialLoad", false)
      context.commit("setIsNowLoading", false)
    }
  }
});
