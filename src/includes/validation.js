import { required, min, max, alpha_spaces as alphaSpaces, email } from '@vee-validate/rules'
import { Form as veeForm, Field as veeField, defineRule, ErrorMessage } from 'vee-validate'
export default {
  install(app) {
    app.component('veeForm', veeForm)
    app.component('veeField', veeField)
    app.component('ErrorMessage', ErrorMessage)
    defineRule('required', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alphaSpaces', alphaSpaces)
    defineRule('email', email)
  },
}
