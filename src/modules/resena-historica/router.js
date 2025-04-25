import PublicLayout from '@/layouts/PublicLayout.vue'
import ResenaHistoricaView from './views/ResenaHistoricaView.vue'

export default [
  {
    path: '/resena-historica',
    component: PublicLayout,
    children: [
      {
        path: '',
        component: ResenaHistoricaView,
        meta: { title: 'Reseña Histórica' },
      },
    ],
  },
]
