import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faLinkedin, faTwitter, faOrcid
         } from '@fortawesome/free-brands-svg-icons'
import { faFileArchive } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookSquare, faLinkedin, faTwitter, faOrcid,
        faFileArchive)

Vue.component('font-awesome-icon', FontAwesomeIcon)
