import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from '@/views/Article.vue'
import Content from '@/views/Content.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Content',
    component: Content
  },
  {
    path: '/article/:articleId',
    name: 'Article',
    component: Article
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
