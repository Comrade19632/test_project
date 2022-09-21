import React from 'react'
import PropTypes from 'prop-types'
import style from './index.module.sass'

const Block = ({ children }) => (
  <div className={style.block}>
    {children}
  </div>
)

Block.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Block