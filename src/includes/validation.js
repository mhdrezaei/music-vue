import { Form as veeForm, Field as veeField } from 'vee-validate'

export default {
  install(app) {
    app.component('veeForm', veeForm)
    app.component('veeField', veeField)
  },
}
