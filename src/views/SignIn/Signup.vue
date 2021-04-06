<template>
  <div class="container">
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm">
        <div class="row">
          <h3>Register Here !</h3>
        </div>
        <form>
          <div class="mb-3">
            <input
              type="text"
              placeholder="Enter Fullname"
              required
              v-model="fullName"
              class="form-control"
              id="fullName"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              placeholder="Enter your Email"
              required
              v-model="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"

            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              placeholder="Enter password"
              required
              v-model="password"
              class="form-control"
              id="password"
            />
          </div>
          <div
            v-if="password.length > 1 && password.length < 6"
            class="text-danger"
          >Password length shoul be greater than</div>
          <div class="mb-3">
            <input
              type="password"
              placeholder="Enter password again to confirm"
              required
              v-model="conPassword"
              class="form-control"
              id="conPassword"
            />
          </div>
          <div v-if="password != conPassword" class="text-danger">Password not match</div>
          <button class="btn btn-primary form-control">Register</button>
        </form>
      </div>
      <div class="col-sm"></div>
    </div>
  </div>
</template>

<script>
export default {
    name:"register",
    data() {
        return {
            email:"",
            fullName:"",
            password: "",
            conPassword:"",
        }
    },
    methods:{
        register: function() {
            console.log("rmail" + this.email);
            
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then((user) =>{
                console.log(user.user);
                
            })
            .catch(function(error) {
                alert("unable to register")
            });
        }
    }

}
</script>

<style>
.container {
  margin-top: 150px;
}
</style>