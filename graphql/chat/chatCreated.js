import gql from "graphql-tag";

export default gql`
  subscription($chatRoom: ID!) {
    chatCreated(chatRoom: $chatRoom) {
      id
      text
      chatRoom {
        id
        name
      }
      sender {
        id
        name
      }
    }
  }
`;
