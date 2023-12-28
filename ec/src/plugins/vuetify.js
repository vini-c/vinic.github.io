/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files

// Composables
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'




// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides



export default createVuetify({
 
  icons: {
    sets: {
      fa,
    },
  },
})