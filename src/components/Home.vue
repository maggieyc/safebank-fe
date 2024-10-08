<template>
  <div class="home-page">
    <div class="jumbotron vertical-center">
      <div class="container text-center">
        <h1>Welcome to IE Bank</h1>
        <p class="lead">Your financial partner for a better tomorrow</p>
        <br />
        <button class="btn btn-primary btn-lg" @click="goToAccounts">
          View Accounts
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goToAccounts() {
      this.$router.push("/accounts");
    },
  },
};
</script>

<style scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
}

.jumbotron {
  background-color: #007bff;
  color: white;
  padding: 2rem;
  border-radius: 0.5rem;
}

.btn {
  font-size: 1.25rem;
  padding: 0.75rem 1.5rem;
}
</style>
