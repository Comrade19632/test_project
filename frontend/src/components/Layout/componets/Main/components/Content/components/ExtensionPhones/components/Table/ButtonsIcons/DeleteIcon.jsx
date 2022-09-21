import React from 'react'
import PropTypes from 'prop-types'

const DeleteIcon = ({ className }) => (
  <svg className={className} width="1em" height="1em" viewBox="0 0 512 512">
    <polygon style={{fill: '#E21B1B'}} points="404.176,0 256,148.176 107.824,0 0,107.824 148.176,256 0,404.176 107.824,512 256,363.824   404.176,512 512,404.176 363.824,256 512,107.824 " />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
  </svg>
)

DeleteIcon.propTypes = {
  className: PropTypes.string,
}

DeleteIcon.defaultProps = {
  className: null
}

export default DeleteIcon
