import gql from "graphql-tag";

export default gql`
  mutation($data: SignUpInput!) {
    signup(data: $data) {
      id
      name
      email
      status
      role
      createdAt
      updatedAt
    }
  }
`;
