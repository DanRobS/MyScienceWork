import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faLinkedin, faTwitter, faOrcid
         } from '@fortawesome/free-brands-svg-icons'
import { faUpload, faUser, faFileAlt, faHome,
        faCalendarDay, 
        faPlus,
        faMinus,
        faPen,
        faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookSquare, faLinkedin, faTwitter, faOrcid,
        faUpload, faUser, faFileAlt, faHome, faCalendarDay,
        faPlus, faMinus, faTrashAlt, faPen)

Vue.component('font-awesome-icon', FontAwesomeIcon)
