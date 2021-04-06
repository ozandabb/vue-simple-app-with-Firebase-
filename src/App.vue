<template>
<div>
  <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand"><router-link to="/">Navbar</router-link></a>
          <form class="d-flex">
            <button class="btn btn-outline-success" type="submit"><router-link to="/Login">Login</router-link></button>
            <button class="btn btn-outline-success" type="submit"><router-link to="/SignIn">Register now</router-link></button>
          </form>
        </div>
      </nav>

  <!-- <div id="nav"> -->

    

    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/Login">Login</router-link> |
    <router-link to="/SignIn">SignUp</router-link> -->
  <!-- </div> -->

  <router-view />
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
