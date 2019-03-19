import { CHAT_MESSAGE } from "../graphql/chat/chatRoom";

export const state = () => ({
  chatRooms: [],
});

export const mutations = {
  SET_CHAT_ROOMS(state, chatRooms) {
    state.chatRooms = chatRooms;
  },
};

export const actions = {
  async getChatMessage({ commit }, chatRoomId) {
    const client = this.app.apolloProvider.defaultClient;
    const chatMessages = await client.query({
      query: CHAT_MESSAGE,
      variables: {
        where: {
          chatRoom: {
            id: chatRoomId,
          },
        },
      },
    });
    return chatMessages;
  },
};
