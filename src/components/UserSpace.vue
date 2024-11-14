<template>
  <div class="jumbotron vertical-center">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1>User Accounts</h1>
          <hr />
          <br />
          <!-- Allert Message -->
          <b-alert v-if="showMessage" variant="success" show>{{
            message
          }}</b-alert>
          <!-- b-alert v-if="error" variant="danger" show>{{ error }}</b-alert-->

          <button
            type="button"
            class="btn btn-success btn-sm"
            v-b-modal.transfer-modal
          >
            Transfer
          </button>
          <br /><br />
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Username</th>
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
              <tr v-for="account in accounts" :key="account.id">
                <td>{{ account.username }}</td>
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
                  <span v-else class="badge badge-danger">{{
                    account.status
                  }}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <footer class="text-center">
            Copyright &copy; All Rights Reserved.
          </footer>
        </div>
      </div>
      <b-modal
        ref="transferModal"
        id="transfer-modal"
        title="Transfer Money"
        hide-backdrop
        hide-footer
      >
        <b-form @submit="onSubmit" class="w-100">
          <b-form-group
            id="form-source-group"
            label="Source Account Number:"
            label-for="form-source-input"
          >
            <b-form-input
              id="form-source-input"
              type="text"
              v-model="transfer.source"
              placeholder="Source Account"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            id="form-Target-group"
            label="Target Account Number:"
            label-for="form-Target-input"
          >
            <b-form-input
              id="form-Target-input"
              type="text"
              v-model="transfer.target"
              placeholder="Target Account"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            id="form-currency-group"
            label="Currency:"
            label-for="form-currency-input"
          >
            <b-form-input
              id="form-currency-input"
              type="text"
              v-model="transfer.currency"
              placeholder="$ or €"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            id="form-amount-group"
            label="Amount:"
            label-for="form--input"
          >
            <b-form-input
              id="form-amount-input"
              type="text"
              v-model="transfer.amount"
              placeholder="Enter Amount"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-button type="submit" variant="outline-info">Submit</b-button>
        </b-form>
      </b-modal>
      <!-- End of Modal for Transfer-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Account",
  data() {
    return {
      username: this.$route.params.username,  // Accessing username from route params
      accounts: [],
      showMessage: false,
      message: "",
      transfer:{
        username: "",
        source: "",
        target: "",
        amount: "",
      }
    };
  },
  methods: {
    /***************************************************
     * RESTful requests
     ***************************************************/

    //GET function
    RESTgetUserAccounts() {
      const path = `${process.env.VUE_APP_ROOT_URL}/userspace/${this.username}/accounts`;
      axios
        .get(path)
        .then((response) => {
          this.accounts = response.data.accounts;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    // Transfer Money
    RESTtransferMoney(payload, username){
      const path = `${process.env.VUE_APP_ROOT_URL}/userspace/${username}/transfer`;
      axios
        .put(path, payload)
        .then((response) => {
          // show updated account
          // this.RESTgetAccounts();

          // For message alert
          this.message = "Transfer Made Successfuly!";
          // To actually show the message
          this.showMessage = true;
          // To hide the message after 3 seconds
          setTimeout(() => {
            this.showMessage = false;
          }, 3000);
        })
        .catch((error) => {

          // For message alert
          this.message = "Transfer Not Completed.";
          // To actually show the message
          this.showMessage = true;
          // To hide the message after 3 seconds
          setTimeout(() => {
            this.showMessage = false;
          }, 3000);

          console.error(error);
          this.RESTgetUserAccounts();
        });
    },

    /***************************************************
     * FORM MANAGEMENT
     * *************************************************/

    // Initialize forms empty
    initForm() {
      this.transfer.source = "";
      this.transfer.target = "";
      this.transfer.amount = "";
    },

    // Handle transfer form button
    onSubmitTransfer(e) {
      e.preventDefault(); //prevent default form submit form the browser
      this.$refs.transferModal.hide(); //hide the modal when submitted

      this.RESTtransferMoney(this.transfer, this.transfer.username);
      this.initForm();
    },
  },

  /***************************************************
   * LIFECYClE HOOKS
   ***************************************************/
  created() {
    this.RESTgetUserAccounts(); 
  },
};
</script>

