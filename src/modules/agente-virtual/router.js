import AgenteVirtualView from './views/AgenteVirtualView.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default [
  {
    path: '/agent',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: AgenteVirtualView,
        meta: { title: 'Agente Virtual' },
      },
    ],
  },
]
