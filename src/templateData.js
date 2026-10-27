import projects from './data/projects.json' with { type: 'json' }
import education from './data/education.json' with { type: 'json' }
import experience from './data/experience.json' with { type: 'json' }
import skills from './data/skills.json' with { type: 'json' }
import testimonials from './data/testimonials.json' with { type: 'json' }

const appState = 'main'
const filterByState = items => items.filter(item => item.state === appState)

export default {
  projects: filterByState(projects),
  education: filterByState(education),
  experience: filterByState(experience),
  skills: skills.map(filterByState),
  testimonials: filterByState(testimonials)
}
