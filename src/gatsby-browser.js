import { scanForProblems } from "accessibilityjs"
import getOptions from './get-options.js'

function handleError(error, opts) {
  const {
    errorClassName,
    onError,
  } = opts
  if(errorClassName) {
    error.element.classList.add(errorClassName)
  }
  if(onError) {
    onError(error)
  }
}

exports.onRouteUpdate = function({ location }, pluginOptions) {
  if(process.env.NODE_ENV !== `development`) {
    return
  }
  const opts = getOptions(pluginOptions)
  // Wait to ensure page is rendered first.
  setTimeout(() => {
    scanForProblems(document, error => handleError(error, opts))
  }, 100)
}
