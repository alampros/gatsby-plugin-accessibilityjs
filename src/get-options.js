import defaults from 'lodash/defaults'

module.exports = (opts) => defaults(opts, {
  injectStyles: `
    .accessibility-error {
      border: 3px solid #f00;
    }
  `,
  errorClassName: `accessibility-error`,
  onError: (error) => {
    console.warn(`%cA11y Error:%c`, `border-radius: 3px; padding: 1px 3px; background: #2d81a2; color: white`, ``, error.name, error.element)
  },
})
