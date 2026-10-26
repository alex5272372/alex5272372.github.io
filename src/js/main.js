import '../scss/styles.scss'

const initTypedText = () => {
  const output = document.querySelector('.typed-text-output')
  const source = document.querySelector('.typed-text')

  if (!output || !source) return

  const strings = source.textContent.split(',').map(text => text.trim()).filter(Boolean)
  if (!strings.length) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    output.textContent = strings[0]
    return
  }

  let stringIndex = 0
  let characterIndex = 0
  let deleting = false

  const type = () => {
    const currentString = strings[stringIndex]
    output.textContent = currentString.slice(0, characterIndex)

    let delay = deleting ? 20 : 100
    if (!deleting && characterIndex === currentString.length) {
      deleting = true
      delay = 1000
    } else if (deleting && characterIndex === 0) {
      deleting = false
      stringIndex = (stringIndex + 1) % strings.length
      delay = 500
    }

    characterIndex += deleting ? -1 : 1
    window.setTimeout(type, delay)
  }

  type()
}

const main = () => {
  const navbar = document.querySelector('.navbar')
  const scrollToBottom = document.querySelector('.scroll-to-bottom')
  const backToTop = document.querySelector('.back-to-top')
  const progressBars = document.querySelectorAll('.progress .progress-bar')

  const updateScrollState = () => {
    const isScrolled = window.scrollY > 100

    if (scrollToBottom) scrollToBottom.style.display = isScrolled ? 'none' : ''
    if (backToTop) backToTop.style.display = isScrolled ? 'block' : 'none'
    if (navbar) navbar.style.display = isScrolled ? 'flex' : 'none'

    if (window.scrollY > 2000) {
      progressBars.forEach(progressBar => {
        progressBar.style.width = `${progressBar.getAttribute('aria-valuenow')}%`
      })
    }
  }

  window.addEventListener('scroll', updateScrollState, { passive: true })
  updateScrollState()

  document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'))
      if (!target) return

      event.preventDefault()
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 45,
        behavior: 'smooth'
      })

      document.querySelectorAll('.navbar-nav .active').forEach(activeLink => {
        activeLink.classList.remove('active')
      })
      link.classList.add('active')
    })
  })

  backToTop?.addEventListener('click', event => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  initTypedText()
}

main()
