import React from 'react'
import PropTypes from 'prop-types'

const ExpandIcon = ({ className }) => (
  <svg className={className} width="1em" height="1em" viewBox="0 0 32 32">
    <g>
      <path fill="#828282" d="M32,30.5v-29C32,0.673,31.327,0,30.5,0h-29C0.673,0,0,0.673,0,1.5v9C0,10.776,0.224,11,0.5,11   S1,10.776,1,10.5v-9C1,1.224,1.225,1,1.5,1h29C30.775,1,31,1.224,31,1.5v29c0,0.276-0.225,0.5-0.5,0.5h-9   c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h9C31.327,32,32,31.327,32,30.5z" />
      <path fill="#828282" d="M1.5,13C0.673,13,0,13.673,0,14.5v16C0,31.327,0.673,32,1.5,32h16c0.827,0,1.5-0.673,1.5-1.5V13.707l7-7   V13.5c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-8C27,5.224,26.776,5,26.5,5h-8C18.224,5,18,5.224,18,5.5S18.224,6,18.5,6   h6.792l-7,7H1.5z M18,30.5c0,0.276-0.225,0.5-0.5,0.5h-16C1.225,31,1,30.776,1,30.5v-16C1,14.224,1.225,14,1.5,14H18V30.5z" />
    </g>
  </svg>
)

ExpandIcon.propTypes = {
  className: PropTypes.string,
}

ExpandIcon.defaultProps = {
  className: null
}

export default ExpandIcon
