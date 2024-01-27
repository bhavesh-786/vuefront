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
import { mapState } from "vuex";
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
  created() {
    this.$store.dispatch("LoaderStore/getTableData");
  },
  // mounted() {
  //   this.LoaderStore.isLoading = true;
  //   this.dataTable = $("#user-table").DataTable({});
  //   axios({
  //     url: `users`,
  //   })
  //     .then((response) => {
  //       response.data.data.forEach((item) => {
  //         this.users.push(item);
  //       });

  //       this.users.forEach((user, index) => {
  //         this.dataTable.row
  //           .add([
  //             index + 1,
  //             '<a href="#">' + user.school + "</a>",
  //             user.sex,
  //             user.G1,
  //             user.G2,
  //             user.G3,
  //           ])
  //           .draw(false);
  //       });
  //       this.LoaderStore.isLoading = false;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   console.log(this.dataTable);
  // },
  /**
   * Watcher to check updated users listing on Load & set datatable
  */
  watch: {
    "LoaderStore.users": {
      handler() {
        if (this.LoaderStore.users.length > 0) {
          this.dataTable = $("#user-table").DataTable({});
          this.LoaderStore.users.forEach((user, index) => {
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
        }
      },
      deep: true,
    },
  },
  // Table component logic
};
</script>
<style>
@import "datatables.net-dt";
</style>
