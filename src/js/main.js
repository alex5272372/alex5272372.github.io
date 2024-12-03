// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

import $ from 'jquery'
import Typed from 'typed.js'

const main = () => {
  $(window).on('scroll', () => {
    const top = $(window).scrollTop()

    if (top > 100) {
      $('.scroll-to-bottom').fadeOut('slow')
      $('.back-to-top').fadeIn('slow')
      $('.navbar').fadeIn('slow').css('display', 'flex')
    } else {
      $('.scroll-to-bottom').fadeIn('slow')
      $('.back-to-top').fadeOut('slow')
      $('.navbar').fadeOut('slow').css('display', 'none')
    }

    // Skills
    if (top > 2000) {
      $('.progress .progress-bar').each(function () {
        $(this).css('width', $(this).attr('aria-valuenow') + '%')
      })
    }
  })

  // Smooth scrolling on the navbar links
  $('.navbar-nav a').on('click', event => {
    if (this.hash !== '') {
      event.preventDefault()

      $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 45
      }, 1000, 'linear')

      if ($(this).parents('.navbar-nav').length) {
        $('.navbar-nav .active').removeClass('active')
        $(this).closest('a').addClass('active')
      }
    }
  })

  // Typed Initiate
  if ($('.typed-text-output').length == 1) {
    const typed_strings = $('.typed-text').text()
    new Typed('.typed-text-output', {
      strings: typed_strings.split(', '),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true
    })
  }

  // Back to top button
  $('.back-to-top').on('click', () => {
    $('html, body').animate({ scrollTop: 0 }, 1000, 'linear')
    return false
  })
}

main()
