import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // esto crea una clase global que se añade a los link activos
    linkActiveClass: "active",
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/form',
        name: 'form',
        component: () => import('../views/FormContact.vue')
      },
      {
        path: '/workinprogress',
        name: 'workinprogress',
        component: () => import('../views/WokInProgres.vue')
      },

    ]
  })
  
  export default router