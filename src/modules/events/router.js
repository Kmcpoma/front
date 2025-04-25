import OrganizerLayout from '@/layouts/OrganizerLayout.vue'
import EventsView from './views/EventsView.vue'
import EventView from './views/EventView.vue'
import RequestsView from './views/RequestsView.vue'
import CalendarView from './views/CalendarView.vue'
import ProfileView from './views/ProfileView.vue'
import NewEventView from './views/NewEventView.vue'

export default [
  {
    path: '/events/',
    component: OrganizerLayout,
    meta: { requieresAuth: false, isOrganizer: false },
    children: [
      {
        path: 'event',
        component: EventView,
        meta: { title: 'Inicio' },
      },
      {
        path: 'events',
        component: EventsView,
        meta: { title: 'Mis Eventos' },
      },
      {
        path: 'requests',
        component: RequestsView,
        meta: { title: 'Mis Solicitudes' },
      },
      {
        path: 'calendar',
        component: CalendarView,
        meta: { title: 'Calendario' },
      },
      {
        path: 'profile',
        component: ProfileView,
        meta: { title: 'Mi Perfil' },
      },
      {
        path: 'new',
        component: NewEventView,
        meta: { title: 'Nuevo Evento' },
      },
      {
        path: 'edit/:id',
        component: NewEventView,
        meta: { title: 'Editar Evento' },
      },
    ],
  },
]
