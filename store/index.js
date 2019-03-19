import { CHAT_ROOMS } from "../graphql/chat/chatRoom";

export const actions = {
  async nuxtServerInit(vuexCtx, ctx) {
    const client = ctx.app.apolloProvider.defaultClient;
    const chatRooms = await client.query({
      query: CHAT_ROOMS,
      variables: {
        orderBy: "name_ASC"
      }
    });
    vuexCtx.commit("chat/SET_CHAT_ROOMS", chatRooms.data.chatRooms);
  }
};
