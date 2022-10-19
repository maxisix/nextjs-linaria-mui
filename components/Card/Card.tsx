import Button from '@mui/material/Button'
import React, { FC } from 'react'

import { CardProps } from './Card.def'
import { styles } from './Card.style'

export const Card: FC<CardProps> = (props) => {
  const { imageSrc, title, buttonLink } = props

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={imageSrc} alt={title} />
      </div>
      <div className={styles.content}>{title}</div>
      <div className={styles.footer}>
        <Button
          className={styles.button}
          classes={{
            root: styles.buttonRoot,
          }}
          component={'button'}
          href={buttonLink}
        >
          See more
        </Button>
      </div>
    </div>
  )
}
