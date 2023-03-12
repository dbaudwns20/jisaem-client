declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare bulma-calendar
declare module 'bulma-calendar/dist/js/bulma-calendar.min.js'
