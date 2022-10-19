import React, { FC } from 'react'

import classNames from 'classnames'

import { IContainerProps } from './Container.def'
import { styles } from './Container.style'

export const Container: FC<IContainerProps> = (props) => {
  const { children, margin, className, ...otherProps } = props

  return (
    <div
      {...otherProps}
      className={classNames(styles.container, className, {
        [styles.margin]: margin,
      })}
    >
      {children}
    </div>
  )
}
