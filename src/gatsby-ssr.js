import React from 'react'
import getOptions from './get-options.js'

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  const {
    injectStyles,
  } = getOptions(pluginOptions)
  if(injectStyles) {
    setPostBodyComponents([
      <style
        key="gatsby-plugin-accessibilityjs"
        dangerouslySetInnerHTML={{
          __html: injectStyles,
        }}
      />,
    ])
  }
}
