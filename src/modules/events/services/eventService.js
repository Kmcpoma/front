// Obtener todos los eventos desde localStorage
export const fetchEvents = async () => {
  const storedEvents = JSON.parse(localStorage.getItem('events')) || []
  return storedEvents
}

// Guardar un nuevo evento
export const saveEvent = async (event) => {
  const events = await fetchEvents()
  const newId = events.length ? Math.max(...events.map((e) => e.id)) + 1 : 1
  const newEvent = { id: newId, ...event }
  events.push(newEvent)
  localStorage.setItem('events', JSON.stringify(events))
  return newEvent
}

// Actualizar un evento existente
export const updateEvent = async (id, updatedEvent) => {
  const events = await fetchEvents()
  const index = events.findIndex((event) => event.id === parseInt(id))
  if (index !== -1) {
    events[index] = { ...events[index], ...updatedEvent }
    localStorage.setItem('events', JSON.stringify(events))
    return events[index]
  }
  throw new Error('Evento no encontrado')
}

// Eliminar un evento
export const deleteEvent = async (id) => {
  const events = await fetchEvents()
  const updatedEvents = events.filter((event) => event.id !== id)
  localStorage.setItem('events', JSON.stringify(updatedEvents))
  return updatedEvents
}
