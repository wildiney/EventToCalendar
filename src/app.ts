import { CalendarEvent } from 'calendar-link'
import EventToCalendar from './classes/EventToCalendar'
import inquirer from 'inquirer'

inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What\'s the event title?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What\'s the event description?'
  },
  {
    type: 'input',
    name: 'start',
    message: 'When the event starts? [YYYY-mm-dd HH:MM:SS GMT]',
    default () {
      return '2022-03-25 10:10:00 -0300'
    }
  },
  {
    type: 'input',
    name: 'duration',
    message: 'What\'s the event duration?',
    default () {
      return '1 hour'
    }
  },
  {
    type: 'input',
    name: 'busy',
    message: 'Mark as busy?',
    default () {
      return true
    }
  }
]).then((answers) => {
  const eventInfo: CalendarEvent = {
    title: answers.title,
    description: answers.description,
    start: answers.start,
    duration: [answers.duration.split(' ')[0], answers.duration.split(' ')[0]],
    busy: answers.busy
  }
  const palestraEdwaldo = new EventToCalendar(eventInfo)
  palestraEdwaldo.copyURL(palestraEdwaldo.setEventOnOffice())
})
