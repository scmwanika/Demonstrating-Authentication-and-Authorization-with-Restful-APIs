import { createRouter, createWebHistory } from 'vue-router';
//import { navigationGuard } from '@okta/okta-vue';
import SignUp from '@/components/Users/SignUp.vue';
import LogIn from '@/components/Users/LogIn.vue';
import ListUsers from '@/components/Users/ListUsers.vue';
import EditUser from '@/components/Users/EditUser.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/',
      name: 'LogIn',
      component: LogIn,
    },
    {
      path: '/users',
      name: 'ListUsers',
      component: ListUsers,
    },
    {
      path: '/users/:id',
      name: 'EditUser',
      component: EditUser,
      //props: true,
    },
  ],
});

//router.beforeEach(navigationGuard);

export default router;
