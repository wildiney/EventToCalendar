import { CalendarEvent } from 'calendar-link'
import EventToCalendar from './classes/EventToCalendar'

const eventInfo: CalendarEvent = {
  title: '',
  description: '',
  start: '2022-03-25 10:10:00 -0300',
  duration: [1, 'hour'],
  busy: true
}

const palestraEdwaldo = new EventToCalendar(eventInfo)
palestraEdwaldo.copyURL(palestraEdwaldo.setEventOnOffice())
