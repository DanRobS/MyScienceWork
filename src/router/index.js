import Vue from 'vue'
import VueRouter from 'vue-router'
import VueGenerale from '../views/Tabs/VueGenerale.vue'
import Profil from '../views/Tabs/MonProfil.vue'
import Publications from '../views/Tabs/Publications.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/vuegenerale',
    name: 'VueGenerale',
    component: VueGenerale
  },
  {
    path: '/profil',
    name: 'MonProfil',
    component: Profil
  },
  {
    path: '/publications',
    name: 'Publications',
    component: Publications
  }
]

const router = new VueRouter({
  routes
})

export default router
