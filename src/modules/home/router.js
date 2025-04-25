import PublicLayout from '@/layouts/PublicLayout.vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import FaqView from './views/Faq.vue'

export default [
  {
    path: '/',
    component: PublicLayout,
    children: [
      {
        path: '',
        component: HomeView,
        meta: { title: 'Inicio' },
      },
      {
        path: 'about',
        component: AboutView,
        meta: { title: 'About' },
      },
      {
        path: 'faq',
        component: FaqView,
        meta: { title: 'Faq c' },
      },
    ],
  },
]
