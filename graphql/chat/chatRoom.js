import gql from "graphql-tag";

export const CHAT_ROOMS = gql`
  query($orderBy: ChatRoomOrderByInput) {
    chatRooms(orderBy: $orderBy) {
      id
      name
    }
  }
`;

export const CHAT_MESSAGE = gql`
  query($where: ChatMessageWhereInput) {
    chats(where: $where, first: 30) {
      id
      text
      sender {
        id
        name
      }
      chatRoom {
        id
        name
      }
    }
  }
`;
