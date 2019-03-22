import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errored: false,
    problemsData: null,
    problemsDict: null,
    problemsIsLoading: false,
    submissionsData: [],
    submissionsIsLoading: false,
    submissionsDetail: {},
    ratedSubmissionsData: null,
    viewSubmissionsData: null,
    ratedGraphData: null,
    heatMapData: {},
    userName: "",
    selectedDate: "",
    searchTags: [],
    statusGraphData: null,
    isDarkMode: false,
    isLoaded: false,
  },
  getters: {
    getLoadingState: (state, getters) => {
      if (!state.submissionsIsLoading && !state.problemsIsLoading) {
        return false;
      } else {
        return true;
      }
    },
    getIsLoaded: (state, getters) => {
      return state.isLoaded
    },
    getIsDarkMode: (state, getters) => {
      return state.isDarkMode;
    },
    getStatusGraphData: (state, getters) => {
      return state.statusGraphData;
    },
    getSearchTags: (state, getters) => {
      return state.searchTags;
    },
    getSelectedDate: (state, getters) => {
      return state.selectedDate;
    },
    getGraphData: (state, getters) => {
      return state.graphData;
    },
    getSubmissionsData: (state, getters) => {
      return state.submissionsDetail;
    },
    getSubmissionsRawData: (state, getters) => {
      return state.submissionsData;
    },
    getProblemsData: (state, getters) => {
      return state.problemsDict;
    },
    getRatedSubmissionsData: (state, getters) => {
      return state.ratedSubmissionsData;
    },
    getHeatMapData: (state, getters) => {
      return state.heatMapData;
    },
    getRatedGraphData: (state, getters) => {
      return state.ratedGraphData;
    },
    getUserName: (state, getters) => {
      return state.userName;
    },
    getViewSubmissionsData: (state, getters) => {
      return state.viewSubmissionsData;
    }
  },
  mutations: {
    setIsLoaded(state, payload) {
      state.isLoaded = payload
    },
    setSubmissionsData(state, payload) {
      const submissions = payload.submissionsData;
      submissions.sort(function(a, b) {
        if (a.id < b.id) return 1;
        if (a.id > b.id) return -1;
        return 0;
      });
      state.submissionsData = submissions;
    },
    setIsDarkMode(state, payload) {
      state.isDarkMode = payload;
    },
    setStatusGraphData(state, payload) {
      state.statusGraphData = payload;
    },
    setSearchTags(state, payload) {
      Vue.prototype.$db.inputs.put({id: "searchTags", value: payload});
      state.searchTags = payload;
    },
    setViewSubmissionsData(state, payload) {
      let submissions = payload.submissionsData;

      let result = {};
      for (let i in submissions) {
        let submission = submissions[i];

        let dt = new Date(0);
        dt.setUTCSeconds(submission.epoch_second);
        let yr = dt.getFullYear();
        let mn = ("00" + (dt.getMonth() + 1)).slice(-2);
        let dy = ("00" + dt.getDate()).slice(-2);
        let dateStr = yr + "-" + mn + "-" + dy;

        if (result[dateStr]) {
          result[dateStr].push(submission);
        } else {
          result[dateStr] = [submission];
        }
      }
      state.viewSubmissionsData = result;
    },
    setSelectedDate(state, payload) {
      Vue.prototype.$db.inputs.put({id: "selectedDate", value: payload});
      state.selectedDate = payload;
    },
    setCurrentDate(state, payload) {
      let dt = new Date();
      let yr = dt.getFullYear();
      let mn = ("00" + (dt.getMonth() + 1)).slice(-2);
      let dy = ("00" + dt.getDate()).slice(-2);
      let dateStr = yr + "-" + mn + "-" + dy;
      state.selectedDate = dateStr;
    },
    setUserName(state, payload) {
      Vue.prototype.$db.inputs.put({id: "userName", value: payload});
      state.userName = payload;
    },
    setRatedSubmissionsData(state, payload) {
      const problemsDict = state.problemsDict;
      const submissionsDetail = state.submissionsDetail;

      let result = {};
      for (let key in submissionsDetail) {
        if (problemsDict[key] && problemsDict[key].point) {
          let submission = submissionsDetail[key];
          result[key] = submission;
          result[key].point = problemsDict[key].point;
        } else {
          let submission = submissionsDetail[key];
          result[key] = submission;
          result[key].point = null;
        }
      }
      state.ratedSubmissionsData = result;
    },
    setRatedGraphData(state, payload) {
      const ratedSubmissionsData = state.ratedSubmissionsData;
      let scoresDict = {};
      let scoresArray = [];

      for (let key in ratedSubmissionsData) {
        let submission = ratedSubmissionsData[key];
        if (submission.your_ac_count == 0) {
          continue;
        }
        if (scoresDict[submission.point]) {
          scoresDict[submission.point] += 1;
        } else {
          scoresDict[submission.point] = 1;
        }
      }

      for (let key in scoresDict) {
        if (key == "null") {
          scoresArray.push({ value: scoresDict[key], name: "0" });
        } else {
          scoresArray.push({ value: scoresDict[key], name: String(key) });
        }
      }

      state.ratedGraphData = scoresArray;
    },
    changeLoadingState(state, payload) {
      state.loading = !state.loading;
    },
    changeSubmissionsLoadingState(state, payload) {
      state.submissionsIsLoading = payload;
    },
    changeProblemsLoadingState(state, payload) {
      state.problemsIsLoading = payload;
    },
    setProblemsData(state, payload) {
      state.problemsData = payload.problemsData;
    },
    setProblemsDict(state, payload) {
      let problems = state.problemsData;
      var result = {};

      for (let key in problems) {
        let problem = problems[key];
        result[problem.id] = {
          title: problem.title,
          point: problem.point,
          contest_id: problem.contest_id,
          solver_count: problem.solver_count,
          first_submission_id: problem.first_submission_id
        };
      }
      state.problemsDict = result;
      state.problemsIsLoading = false;
    },
    setHeatMapData(state, payload) {
      let submissionsData = state.viewSubmissionsData;
      let submissionsDict = {};

      for (let dateStr in submissionsData) {
        let submissions = submissionsData[dateStr];
        for (let key in submissions) {
          let submission = submissions[key];
          if (submissionsDict[dateStr]) {
            submissionsDict[dateStr].submissions += 1;
          } else {
            submissionsDict[dateStr] = {
              submissions: 1,
              point_sum: 0,
              accepted: 0
            };
          }
          if (submission.result != "AC" || submission.point <= 0) {
            continue;
          }
          submissionsDict[dateStr].point_sum += submission.point;
          submissionsDict[dateStr].accepted += 1;
        }
      }

      state.heatMapData = submissionsDict;
      state.submissionsIsLoading = false;
    },
    setSubmissionsDetailPerProblem(state, payload) {
      let submissions = state.submissionsData;
      var result = {};

      for (let key in submissions) {
        let submission = submissions[key];

        if (result[submission.problem_id]) {
          if (submission.result == "AC") {
            result[submission.problem_id].your_ac_count += 1;
            result[submission.problem_id].ac_submissions.push(submission.id);
          } else {
            result[submission.problem_id].your_wa_count += 1;
            result[submission.problem_id].wa_submissions.push(submission.id);
          }
        } else {
          result[submission.problem_id] = {};
          result[submission.problem_id].contest_id = submission.contest_id;

          if (submission.result == "AC") {
            result[submission.problem_id].your_ac_count = 1;
            result[submission.problem_id].your_wa_count = 0;
            result[submission.problem_id].ac_submissions = [submission.id];
            result[submission.problem_id].wa_submissions = [];
            result[submission.problem_id].point = submission.point;
          } else {
            result[submission.problem_id].your_ac_count = 0;
            result[submission.problem_id].your_wa_count = 1;
            result[submission.problem_id].ac_submissions = [];
            result[submission.problem_id].wa_submissions = [submission.id];
          }
        }
      }
      state.submissionsDetail = result;
    }
  },
  actions: {
    async fetchSubmissionsData(context) {
      const payload = {
        submissionsData: []
      };

      const name = context.getters.getUserName;
      context.commit("changeSubmissionsLoadingState", true);

      const db = Vue.prototype.$db
      await axios
        .get("https://kenkoooo.com/atcoder/atcoder-api/results?user=" + name)
        .then(res => {
          payload.submissionsData = res.data;
          db.submissions.put({id:name,contents:res.data});
        });

      await db.submissions.get(name).then( (data) => {
        console.log(data)
      }).catch( error => {
      });

      context.commit("setSubmissionsData", payload);
      context.commit("setViewSubmissionsData", payload);
      context.commit("setSubmissionsDetailPerProblem", payload);
      context.commit("setHeatMapData", payload);
    },
    async loadSubmissionsData(context) {
      const payload = {
        submissionsData: []
      };

      let name = ""
      const db = Vue.prototype.$db
      await db.inputs.get("userName").then( (data) => {
        name = data.value
      }).catch( error => {
      });

      if (name == ""){
        console.log("UserID is empty")
        return
      }

      context.commit("changeSubmissionsLoadingState", true);
      await db.submissions.get(name).then( (data) => {
        payload.submissionsData = data.contents
      }).catch( error => {
      });

      context.commit("setSubmissionsData", payload);
      context.commit("setViewSubmissionsData", payload);
      context.commit("setSubmissionsDetailPerProblem", payload);
      context.commit("setHeatMapData", payload);
    },
    async fetchProblemsData(context) {
      const payload = {
        problemsData: null
      };
      context.commit("changeProblemsLoadingState", true);
      console.log("loading from API")

      const db = Vue.prototype.$db
      await axios
        .get("https://kenkoooo.com/atcoder/resources/merged-problems.json")
        .then(res => {
          payload.problemsData = res.data;
          db.problems.bulkPut(res.data);
      })
      context.commit("setProblemsData", payload);
      context.commit("setProblemsDict", payload);
    },
    async loadProblemsData(context) {
      const payload = {
        problemsData: null
      };
      context.commit("changeProblemsLoadingState", true);

      const db = Vue.prototype.$db
      console.log("loading from IndexedDB")
      await db.problems
        .toArray()
        .then(function (data) {
          payload.problemsData = data
        });

      if (payload.problemsData.length > 0) {
        context.commit("setProblemsData", payload);
        context.commit("setProblemsDict", payload);
        return
      }
      else {
        context.dispatch("fetchProblemsData")
      }
    }
  }
});
