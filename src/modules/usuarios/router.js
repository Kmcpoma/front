import PublicLayout from '@/layouts/PublicLayout.vue'
import UsuariosView from './views/UsuariosView.vue'

export default [
  {
    path: '/usuarios',
    component: PublicLayout,
    children: [
      {
        path: '',
        component: UsuariosView,
        meta: { title: 'Usuarios' },
      },
    ],
  },
]
