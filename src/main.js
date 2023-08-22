import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import '@/index.css'
import App from '@/App.vue'

library.add(faSearch)
library.add(faUpRightFromSquare)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
