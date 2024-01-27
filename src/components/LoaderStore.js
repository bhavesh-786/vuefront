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
    },
    LoadDataTwo(state, data) {
      state.F1Data = data.count;
      state.F2Data = data.job;
      console.log(data.job)
    },
  },
  actions: {
    /**
     * To fetch data for table component
     * @param {*} param0 
     */
    async getTableData({ commit, state }) {
      state.isLoading = true;
      this.dataTable = $("#user-table").DataTable({});
      axios({
        url: `users`,
      })
        .then((response) => {
          //set total male count
          state.totalMale = response.data.male
          //set total female count
          state.totalFemale = response.data.female
          //set total students count
          state.totalStudent = response.data.count;
          commit('LoadTableData', response.data.data)

          state.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /**
     * To fetch data for Line chart
     * @param {*} param0 
     */
    async getGraphDara({ commit, state }) {
      state.isLoading = true
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
    /**
     * To Fetch data for bar chart
     * @param {*} param0 
     */
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