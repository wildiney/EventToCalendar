import { CalendarEvent, office365 } from 'calendar-link'

export default class EventToCalendar {
  protected event

  constructor (event: CalendarEvent) {
    this.event = event
  }

  setEventOnOffice () {
    const link = office365(this.event)
    return link
  }

  async copyURL (url: string) {
    await console.log(url)
  }
}
