// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

import $ from 'jquery'
import Typed from 'typed.js'

const main = () => {
  // Navbar on scrolling
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.navbar').fadeIn('slow').css('display', 'flex')
    } else {
      $('.navbar').fadeOut('slow').css('display', 'none')
    }
  })


  // Smooth scrolling on the navbar links
  $('.navbar-nav a').on('click', function (event) {
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

  // Modal Video
  $(document).ready(function () {
    var $videoSrc
    $('.btn-play').click(function () {
      $videoSrc = $(this).data('src')
    })
    console.log($videoSrc)

    $('#videoModal').on('shown.bs.modal', function () {
      $('#video').attr('src', $videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0')
    })

    $('#videoModal').on('hide.bs.modal', function () {
      $('#video').attr('src', $videoSrc)
    })
  })

  // Scroll to Bottom
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scroll-to-bottom').fadeOut('slow')
    } else {
      $('.scroll-to-bottom').fadeIn('slow')
    }
  })

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.back-to-top').fadeIn('slow')
    } else {
      $('.back-to-top').fadeOut('slow')
    }
  })
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000, 'linear')
    return false
  })
}

main()
