import signup from "../graphql/user/signup.js";

export const actions = {
  async signup({ commit }, data) {
    const client = this.app.apolloProvider.defaultClient;
    const user = await client.mutate({
      mutation: signup,
      variables: {
        data
      }
    });
    return user;
  }
};
