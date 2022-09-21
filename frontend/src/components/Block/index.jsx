import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import style from './index.module.sass'

const Block = ({ children, className }) => (
  <div className={classNames(style.block, className)}>
    {children}
  </div>
)

Block.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node
}

Block.defaultProps = {
  className: ''
}

export default Block