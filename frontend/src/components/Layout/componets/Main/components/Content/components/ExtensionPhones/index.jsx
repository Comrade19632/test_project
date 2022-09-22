import React from 'react'
import Block from 'components/Block'
import Table from './components/Table'
import style from './index.module.sass'

const ExtensionPhones = () => (
  <div className={style.extensionPhones}>
    <Block>
      <Table/>
    </Block>
  </div>
)

export default ExtensionPhones