import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPython, faSquareJs, faJava, faGolang, faRust, faVuejs, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faC, faDatabase, faDumbbell, faFutbol, faWind, faCookieBite, faEnvelope, faAt } from '@fortawesome/free-solid-svg-icons'

library.add(faPython, faSquareJs, faJava, faGolang, faRust, faC, faDatabase, faDumbbell, faFutbol, faVuejs, faWind, faCookieBite, faGithub, faTelegram, faEnvelope, faAt)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
