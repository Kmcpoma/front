import AuthLayout from '@/layouts/AuthLayout.vue'
import LoginView from './views/LoginView.vue'
import RegisterView from './views/RegisterView.vue'

export default [
  {
    path: '/inicio-sesion',
    name: 'login',
    component: AuthLayout,
    children: [
      {
        path: '',
        component: LoginView,
        meta: { title: 'Inicio sesion' },
      },
      {
        path: 'register',
        component: RegisterView,
        meta: { title: 'Registro' },
      },
    ],
  },
]
