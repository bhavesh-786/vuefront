<template>
  <div>
    <div id="demo" class="display">
      <table
        id="user-table"
        class="display table-bordered nowrap"
        cellspacing="0"
        width="100%"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>School</th>
            <th>Gender</th>
            <th>G1</th>
            <th>G2</th>
            <th>G3</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import $ from "jquery";
import axios from "axios";

DataTable.use(DataTablesCore);
export default {
  // props: [isLoad],
  data() {
    return {
      users: [],
      id: "",
      name: "",
      email: "",
      dataTable: null,
    };
  },
  methods: {},
  computed: {
    ...mapState(["LoaderStore"]),
  },
  mounted() {
    this.LoaderStore.isLoading = true;
    this.dataTable = $("#user-table").DataTable({});
    axios({
      url: `users`,
    })
      .then((response) => {
        response.data.data.forEach((item) => {
          this.users.push(item);
        });

        this.users.forEach((user, index) => {
          this.dataTable.row
            .add([
              index + 1,
              '<a href="#">' + user.school + "</a>",
              user.sex,
              user.G1,
              user.G2,
              user.G3,
            ])
            .draw(false);
        });
        this.LoaderStore.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
      });

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     data.forEach((item) => {
    //       this.users.push(item);
    //     });

    //     this.users.forEach((user) => {
    //       this.dataTable.row
    //         .add([user.age, '<a href="#">' + user.school + "</a>", user.sex])
    //         .draw(false);
    //     });
    //   });
    console.log(this.dataTable);
  },
  // Table component logic
};
</script>
<style>
@import "datatables.net-dt";
</style>
