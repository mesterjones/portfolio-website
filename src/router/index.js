import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import WhereSurf from '../components/WhereSurf.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/where-surf',
    name: 'whereSurf',
    component: WhereSurf
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Add this to handle 404s in GitHub Pages
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next('/');
  } else {
    next();
  }
});

export default router