import gql from "graphql-tag";

export default gql`
  mutation($data: SignUpInput!) {
    createUser(data: $data) {
      id
      username
    }
  }
`;
