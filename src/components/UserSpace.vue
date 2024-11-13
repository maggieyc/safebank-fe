<template>
  <div class="jumbotron vertical-center">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1>Your Account</h1>
          <hr />
          <br />

          <!-- Alert Message -->
          <b-alert v-if="showMessage" variant="success" show>{{ message }}</b-alert>

          <!-- Account Table -->
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Account Name</th>
                <th scope="col">Account Number</th>
                <th scope="col">Account Balance</th>
                <th scope="col">Account Currency</th>
                <th scope="col">Account Country</th>
                <th scope="col">Account Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="account">
                <td>{{ account.name }}</td>
                <td>{{ account.account_number }}</td>
                <td>{{ account.balance }}</td>
                <td>{{ account.currency }}</td>
                <td>{{ account.country }}</td>
                <td>
                  <span
                    v-if="account.status == 'Active'"
                    class="badge badge-success"
                    >{{ account.status }}</span
                  >
                  <span v-else class="badge badge-danger">{{ account.status }}</span>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-info btn-sm"
                    v-b-modal.edit-account-modal
                    @click="editAccount(account)"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <footer class="text-center">
            Copyright &copy; All Rights Reserved.
          </footer>
        </div>
      </div>

      <!-- Modal for Edit Account -->
      <b-modal
        ref="editAccountModal"
        id="edit-account-modal"
        title="Edit Account"
        hide-backdrop
        hide-footer
      >
        <b-form @submit="onSubmitUpdate" class="w-100">
          <b-form-group
            id="form-edit-name-group"
            label="Account Name:"
            label-for="form-edit-name-input"
          >
            <b-form-input
              id="form-edit-name-input"
              type="text"
              v-model="editAccountForm.name"
              placeholder="Account Name"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="form-edit-country-group"
            label="Country:"
            label-for="form-edit-country-input"
          >
            <b-form-input
              id="form-edit-country-input"
              type="text"
              v-model="editAccountForm.country"
              placeholder="Enter Country"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="outline-info">Update</b-button>
        </b-form>
      </b-modal>
      <!-- End of Modal for Edit Account -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserAccount",
  data() {
    return {
      account: null, // Change to store only the user's account
      editAccountForm: {
        id: "",
        name: "",
        country: "",
      },
      showMessage: false,
      message: "",
    };
  },
  methods: {
    /***************************************************
     * RESTful requests
     ***************************************************/

    // GET function to fetch the logged-in user's account
    RESTgetAccount() {
      const path = `${process.env.VUE_APP_ROOT_URL}/account`; // Adjust API endpoint to fetch only the user's account
      axios
        .get(path)
        .then((response) => {
          this.account = response.data.account;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    // Update function
    RESTupdateAccount(payload, accountId) {
      const path = `${process.env.VUE_APP_ROOT_URL}/accounts/${accountId}`;
      axios
        .put(path, payload)
        .then((response) => {
          this.RESTgetAccount();
          this.message = "Account Updated successfully!";
          this.showMessage = true;
          setTimeout(() => {
            this.showMessage = false;
          }, 3000);
        })
        .catch((error) => {
          console.error(error);
          this.RESTgetAccount();
        });
    },

    /***************************************************
     * FORM MANAGEMENT
     ***************************************************/

    initForm() {
      this.editAccountForm.id = "";
      this.editAccountForm.name = "";
      this.editAccountForm.country = "";
    },

    // Handle submit event for editing account
    onSubmitUpdate(e) {
      e.preventDefault();
      this.$refs.editAccountModal.hide();
      const payload = {
        name: this.editAccountForm.name,
        country: this.editAccountForm.country,
      };
      this.RESTupdateAccount(payload, this.editAccountForm.id);
      this.initForm();
    },

    // Handle edit button click
    editAccount(account) {
      this.editAccountForm = account;
    },
  },

  /***************************************************
   * LIFECYCLE HOOKS
   ***************************************************/
  created() {
    this.RESTgetAccount(); // Fetch the user's account when the component is created
  },
};
</script>
