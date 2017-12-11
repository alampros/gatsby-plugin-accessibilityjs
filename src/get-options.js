import defaults from 'lodash/defaults'

module.exports = (opts) => defaults(opts, {
  injectStyles: `
    .accessibility-error {
      box-shadow: 0 0 3px 1px #f00;
      background-color: rgba(255, 0, 0, 0.25);
      position: relative;
    }
    .accessibility-error:before {
      content: "A11Y";
      position: absolute;
      top: 0;
      left: 0;
      padding: 1px 3px;
      border-radius: 3px 3px 0 0;
      color: #fff;
      font-size: 10px;
      background-color: #f00;
      transform: translateY(-100%);
    }
  `,
  errorClassName: `accessibility-error`,
  onError: (error) => {
    console.warn(`%cA11y Error:%c`, `border-radius: 3px; padding: 1px 3px; background: #2d81a2; color: white`, ``, error.name, error.element)
  },
})
