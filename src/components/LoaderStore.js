//import Vue from 'vue'
import axios from 'axios'
export default {
  namespaced: true,
  state: {
    isLoading: false,
    fullPage: true,
    G1Data: {},
    G2Data: {},

    F1Data: {},
    F2Data: {},

    users: {},
    totalStudent: 0,
    totalMale: 0,
    totalFemale: 0
  },
  mutations: {
    LoadTableData(state, data) {
      state.users = data;
    },
    LoadData(state, data) {
      state.G1Data = data.count;
      state.G2Data = data.gender;
      console.log(data.gender)
      //state.G2Data = data.G2;
      //state.G3Data = data.G3;
    },
    LoadDataTwo(state, data) {
      state.F1Data = data.count;
      state.F2Data = data.job;
      console.log(data.job)
      //state.G2Data = data.G2;
      //state.G3Data = data.G3;
    },
  },
  actions: {
    async getTableData({ commit, state }) {
      state.isLoading = true;
      this.dataTable = $("#user-table").DataTable({});
      axios({
        url: `users`,
      })
        .then((response) => {
          state.totalMale = response.data.male
          state.totalFemale = response.data.female
          state.totalStudent = response.data.count;
          commit('LoadTableData', response.data.data)

          state.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getGraphDara({ commit, state }) {
      state.isLoading = true
      //state.data = {}
      await axios({
        url: 'graphData',
        method: 'GET',
      })
        .then((response) => {
          if (response.data.code == 200) {
            //console.log(response)
            commit('LoadData', response.data)
          }
        })
        .catch((error) => {
          console.log(error)
        })
      state.isLoading = false
    },

    async getGraphDaraTwo({ commit, state }) {
      state.isLoading = true
      //state.data = {}
      await axios({
        url: 'graphDataTwo',
        method: 'GET',
      })
        .then((response) => {
          if (response.data.code == 200) {
            //console.log(response)
            commit('LoadDataTwo', response.data)
          }
        })
        .catch((error) => {
          console.log(error)
        })
      state.isLoading = false
    },
  },
}