import React from 'react'
import Fade from 'react-reveal/Fade'
import Section from '../../components/Section'
import Button from '../../components/Button'
import Title from '../../components/Title'
import styles from './styles.module.scss'
import { detectMobile } from '../../utils'
import { PhoneOutlined, MailOutlined } from '@ant-design/icons'

const isMobile = detectMobile()

const Contact = () => (
  <Section
    id="contact"
    className={styles.contact}
    style={{ backgroundAttachment: isMobile ? 'initial' : 'fixed' }}
  >
    <Title tag="h2" style={{ color: '#fff' }}>
      找到我 🙋‍♂️
    </Title>

    <Fade bottom>
      <div className={styles.container}>
        <Button className={styles.emailBtn} bg="#7d0000">
          <PhoneOutlined />
          &nbsp;
          18664743505&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Button>
        <Button className={styles.emailBtn} bg="#7d0000">
          <MailOutlined />
          &nbsp; 18664743505@163.com
        </Button>
      </div>
    </Fade>
  </Section>
)

export default Contact
