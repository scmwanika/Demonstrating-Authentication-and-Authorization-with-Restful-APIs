import gql from "graphql-tag";

// CREATE USER
export const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $role: String!
    $name: String!
    $email: String!
    $password: String!
    $createdAt: String!
  ) {
    createUser(
      role: $role
      name: $name
      email: $email
      password: $password
      createdAt: $createdAt
    ) {
      role
      name
      email
      password
      createdAt
    }
  }
`;

// LOGIN
export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

// GET ALL USERS
export const ALL_USERS_QUERY = gql`
  query {
    getUsers {
      id
      role
      name
      email
      password
      createdAt
    }
  }
`;

// GET USER BY ID
export const USER_QUERY = gql`
  query {
    getUser {
      id
      role
      name
      email
      password
      createdAt
    }
  }
`;
