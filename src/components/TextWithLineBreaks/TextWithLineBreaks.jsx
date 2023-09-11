import React from 'react'

function TextWithLineBreaks ({ children }) {
  return children
    .split('\n')
    .map((line, index) => <React.Fragment key={index}>{line.trim()}<br /></React.Fragment>)
}

export default TextWithLineBreaks