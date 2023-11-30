import gql from "graphql-tag";

// LOGIN USER

// SIGNUP USER
export const SIGNUP_MUTATION = gql`
  mutation (
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
  query ($id: ID!) {
    getUser(id: $id) {
      id
      role
      name
      email
      password
      createdAt
    }
  }
`;

// UPDATE USER
export const UPDATE_USER_MUTATION = gql`
  mutation (
    $role: String!
    $name: String!
    $email: String!
    $password: String!
    $createdAt: String!
  ) {
    updateUser(
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

// DELETE USER
export const DELETE_USER_MUTATION = gql`
  mutation ($id: ID!) {
    deleteUser(id: $id) {
      id
      role
      name
      email
      password
      createdAt
    }
  }
`;