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
    await console.log(' ')
    await console.log('############### COPY THE LINK BELOW ###############')
    await console.log(' ')
    await console.log(url)
    await console.log(' ')
    await console.log('###################################################')
  }
}
