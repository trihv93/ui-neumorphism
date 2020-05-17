import React from 'react'

import { Button } from '../index'

import { BUTTON_PROP_TYPES } from '../../assets/index'
class IconButton extends React.Component {
  static displayName = 'NuIconButton'

  static propTypes = BUTTON_PROP_TYPES

  render() {
    const { children } = this.props
    return (
      <Button {...this.props} text type='icon' block={false} depressed={false}>
        {children}
      </Button>
    )
  }
}

export default IconButton
