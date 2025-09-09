import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
