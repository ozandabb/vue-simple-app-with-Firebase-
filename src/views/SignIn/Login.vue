<template>
  <div class="container">
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm">
        <h3>Login Portal</h3>
        <form>
          <div class="mb-3">
            <input
              type="email"
              placeholder="Enter Email address"
              class="form-control"
              v-model="email"
              id="email"
              required
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              placeholder="Enter Password"
              v-model="password"
              class="form-control"
              required
              id="password"
            />
          </div>
          <button  class="btn btn-primary form-control">Login</button>
        </form>
      </div>
      <div class="col-sm"></div>
    </div>
  </div>
</template>

<script>
export default {
    name:"login",
    data() {
        return {
            email:"",
            password: ""

        }
    },
    methods:{
        login: function() {
            console.log("email"+  this.email);
            console.log("password"+  this.password);

            
        }
    }

}
</script>

<style>
.container {
  margin-top: 150px;
}
</style>