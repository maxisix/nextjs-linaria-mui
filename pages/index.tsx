import type { NextPage } from 'next'
import { Card } from '../components/Card/Card'
import { Container } from '../components/Container/Container'
import { styles } from './index.style'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <menu className={styles.menu}>
        <a
          href="https://mui.com/material-ui/react-button/"
          target="_blank"
          rel="noreferrer"
        >
          Docs
        </a>
      </menu>

      <Container>
        <Card
          imageSrc="https://www.fillmurray.com/640/360"
          title="Bill Murray et Sofia Coppola refont équipe"
          buttonLink="google.com"
        />

        <Card
          imageSrc="https://loremflickr.com/640/360"
          title="Les chats de Saskia Thuot"
          buttonLink="google.com"
        />
      </Container>
    </div>
  )
}

export default Home
