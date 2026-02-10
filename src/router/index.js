import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '../pages/Beranda.vue'
import About from '../pages/About.vue'
import Project from '../pages/Project.vue'
import ProjectDetails from '../pages/ProjectDetails.vue'
import Contact from '../pages/Contact.vue'


const routes = [
  { path: '/', name: 'beranda', component: Beranda },
  { path: '/about', name: 'about', component: About },
  { path: '/project', name: 'project', component: Project},
  { path: '/contact', name: 'contact', component: Contact},

  {
    path: '/project/:name',
    name: 'ProjectDetails',
    component: ProjectDetails,
    props: true 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
