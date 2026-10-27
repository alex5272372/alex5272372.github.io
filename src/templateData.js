import projects from './data/projects.json' with { type: 'json' }
import education from './data/education.json' with { type: 'json' }
import experience from './data/experience.json' with { type: 'json' }
import skills from './data/skills.json' with { type: 'json' }
import testimonials from './data/testimonials.json' with { type: 'json' }
import summary from './data/summary.json' with { type: 'json' }
import contact from './data/contact.json' with { type: 'json' }
import achievements from './data/achievements.json' with { type: 'json' }
import certifications from './data/certifications.json' with { type: 'json' }
import licenses from './data/licenses.json' with { type: 'json' }
import languages from './data/languages.json' with { type: 'json' }
import volunteering from './data/volunteering.json' with { type: 'json' }
import awards from './data/awards.json' with { type: 'json' }
import publications from './data/publications.json' with { type: 'json' }
import presentations from './data/presentations.json' with { type: 'json' }
import patents from './data/patents.json' with { type: 'json' }
import memberships from './data/memberships.json' with { type: 'json' }
import training from './data/training.json' with { type: 'json' }
import interests from './data/interests.json' with { type: 'json' }

const appState = 'main'
const filterByState = items => items.filter(item => item.state === appState)

export default {
  projects: filterByState(projects),
  education: filterByState(education),
  experience: filterByState(experience),
  skills: skills.map(filterByState),
  testimonials: filterByState(testimonials),
  summary: filterByState(summary),
  contact: filterByState(contact),
  achievements: filterByState(achievements),
  certifications: filterByState(certifications),
  licenses: filterByState(licenses),
  languages: filterByState(languages),
  volunteering: filterByState(volunteering),
  awards: filterByState(awards),
  publications: filterByState(publications),
  presentations: filterByState(presentations),
  patents: filterByState(patents),
  memberships: filterByState(memberships),
  training: filterByState(training),
  interests: filterByState(interests)
}
