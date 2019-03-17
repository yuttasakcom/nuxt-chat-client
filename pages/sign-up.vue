<template>
  <div>
    <h1>Sign-Up</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-group row">
        <label for="username" class="col-sm-2 col-form-label">Username</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="Username" v-model="username">
        </div>
      </div>

      <div class="form-group row">
        <label for="email" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" placeholder="Email" v-model="email">
        </div>
      </div>

      <div class="form-group row">
        <label for="password" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" placeholder="******" v-model="password">
        </div>
      </div>

      <div class="form-group row">
        <span class="col-sm-2 col-form-label"></span>
        <div class="col-sm-10">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.username === "" || this.email === "" || this.password === "")
        return;

      const signupInput = {
        username: this.username,
        email: this.email,
        password: this.password
      };

      console.log(signupInput);
    }
  }
};
</script>