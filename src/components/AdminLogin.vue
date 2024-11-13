<template>
  <div class="signup-page"> 
    <div class="signup-form">
      <h2>Log in as an admin</h2>
      
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>

        <button type="submit">Log in</button>
      </form>

      <p>
        <div class = "back"> Go back to the <a href="/">Homepage</a>.</div>
      </p>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async hashPassword(password) {
      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    },
    async handleSubmit() {

      const hashedPassword = await this.hashPassword(this.password);
      
      const userData = {
        username: this.username,
        password: hashedPassword
      };
      
      console.log('Submitting user data:', userData);

      this.username = '';
      this.password = '';
      
      alert('Login successful');
    }
  }
};
</script>

<style scoped>
.signup-page {
  margin-top: -60px;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #ff7676, #ff803c);
  font-family: Arial, sans-serif;
}

.signup-form {
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: white; 
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #ff803c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #ff7676;
}

</style>
