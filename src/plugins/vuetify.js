import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.base,
    secondary: colors.lime.base,
    background: colors.lime.lighten5,
    selected: colors.lime.lighten3,
    accent: colors.orange.accent3,
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  iconfont: 'md',
})
