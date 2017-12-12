import defaults from 'lodash/defaults'

module.exports = (opts) => defaults(opts, {
  injectStyles: `
    .accessibility-error {
      border: 3px solid #f00;
    }
  `,
  errorClassName: `accessibility-error`,
  onError: (error) => {
    const style = {
      name: 'color: #895F24; font-weight: 900;',
      label: 'padding: 1px 3px; text-transform: uppercase; border-radius: 3px; background: #FEE0AF; color: #5C3611;',
      reset: '',
    }
    const { name, element, message } = error
    console.groupCollapsed('%cA11y Error:%c %c%s%c', style.label, style.reset, style.name, name, style.reset, element)
    console.warn(message)
    console.groupEnd()
  },
})
