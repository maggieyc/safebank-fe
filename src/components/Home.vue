<template>
  <div id="body">
    <header>
      <div class="logo">IE SafeBank</div>
      <div class="itemList">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/clientlogin">Client Login</router-link></li>
          <li><router-link to="/clientsignup">Client Signup</router-link></li>
          <li><router-link to="/adminlogin">Admin Login</router-link></li>
        </ul>
      </div>
    </header>

    <main>
      <section class="mainpage">
        <h1 class="send">
          Start <span class="highlight">sending and receiving money</span> today.
        </h1>
        <p class="description">
          High-level security bank tailored to our customer's needs. Enjoy 0% commission transfers from everywhere in the world!
        </p>
        <div class="buttons">
          <button class="action-btn1"><router-link to="/clientlogin">Client Login</router-link></button>
          <button class="action-btn1"><router-link to="/clientsignup">Client Signup</router-link></button>
          <button class="action-btn2"><router-link to="/adminlogin">Admin Login</router-link></button>
        </div>
      </section>
    </main>
  </div>
</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Protest+Strike&display=swap');

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  color: #333;
  overflow-x: hidden;
  max-width: auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  padding-top: 10px;
  max-width: 65%;
  margin: 20px auto;
  background: transparent;
}

a{
  text-decoration: none;
  color:inherit;
}

a:hover{
  text-decoration:none;
  color:inherit;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(90deg, #ff7676, #ff803c);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.itemList {
  display: flex;
  justify-content: right;
}

.itemList ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.itemList li {
  margin: 0 15px;
  font-size: 16px;
  cursor: pointer;
}

.mainpage {
  text-align: center;
  padding: 40px 0 0;
  height: 85vh;
  margin-bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(180deg, #ffffff, #ffd1b9);
}

.send {
  font-size: 64px;
  font-family: 'Protest Strike', sans-serif;
  font-weight: 400;
  margin: 10px auto 20px;
  max-width: 800px;
  text-align: center;
}

.highlight {
  background: linear-gradient(90deg, #ff7676, #ff803c);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.description {
  font-size: 18px;
  margin: 20px auto;
  max-width: 550px;
  color: #6666669b;
  text-align: center;
}

.buttons {
  display: flex;
  justify-content: center;
}

.action-btn1 {
  margin: 10px;
  padding: 17px 50px;
  background-image: radial-gradient(#ff7676, #ff803c);
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-size: 17px;
}

.action-btn1:hover {
  background-color: #ff0b0b;
  filter: drop-shadow(0 0 5px #ff0b0b);
}

.action-btn2 {
  margin: 10px;
  padding: 17px 30px;
  background-color: #fffaf4;
  color: #ff7676;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
  border: 2px solid #ff7676;
  font-size: 17px;
}

.action-btn2:hover {
  background-color: #fcd6c9;
  filter: drop-shadow(0 0 5px #ff7676);
}

</style>
