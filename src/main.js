// create an ApolloClient instance:

// Create the Apollo client
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "http://localhost:5000/graphql/api/v1",
});

// Create the Apollo provider
import { createApolloProvider } from "@vue/apollo-option";

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

// Add the provider to your app
import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp({
  render: () => h(App),
});

app.use(apolloProvider);
app.use(router); //

app.mount("#app");
