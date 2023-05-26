// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

import $ from 'jquery'
import Typed from 'typed.js'

const main = () => {
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
}

main()
