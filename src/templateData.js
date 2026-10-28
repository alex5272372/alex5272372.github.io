import projects from './data/projects.json' with { type: 'json' }
import education from './data/education.json' with { type: 'json' }
import experience from './data/experience.json' with { type: 'json' }
import skills from './data/skills.json' with { type: 'json' }
import testimonials from './data/testimonials.json' with { type: 'json' }
import summary from './data/summary.json' with { type: 'json' }
import contact from './data/contact.json' with { type: 'json' }
import achievements from './data/achievements.json' with { type: 'json' }
import certifications from './data/certifications.json' with { type: 'json' }
import languages from './data/languages.json' with { type: 'json' }
import training from './data/training.json' with { type: 'json' }
import interests from './data/interests.json' with { type: 'json' }

const appState = 'main'
const filterByState = items => items.filter(item => item.state === appState)
const filterAndSortByStartDate = items =>
  filterByState(items).sort((a, b) => b.startDate.localeCompare(a.startDate))
const formatDate = value => {
  if (!value) return ''

  const [year, month, day] = value.split('-').map(Number)
  const options = day === 1
    ? { month: 'long', year: 'numeric', timeZone: 'UTC' }
    : { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }

  return new Intl.DateTimeFormat('en-US', options)
    .format(new Date(Date.UTC(year, month - 1, day)))
}

export default {
  formatDate,
  projects: filterByState(projects),
  education: filterAndSortByStartDate(education),
  experience: filterAndSortByStartDate(experience),
  skills: skills.map(filterByState),
  testimonials: filterByState(testimonials),
  summary: filterByState(summary),
  contact: filterByState(contact),
  achievements: filterByState(achievements),
  certifications: filterByState(certifications),
  languages: filterByState(languages),
  training: filterByState(training),
  interests: filterByState(interests)
}
