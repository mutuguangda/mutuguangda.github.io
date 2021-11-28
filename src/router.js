import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/views/Content.vue'
import Article from '@/views/Article.vue'
import Archive from '@/views/Archive.vue'
import About from '@/views/About.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
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
    {
      path: '/archive',
      name: 'Archive',
      component: Archive
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ]
})
