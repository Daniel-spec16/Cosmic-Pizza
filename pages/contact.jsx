import React from 'react'
import styles from '../styles/Contact.module.css'
import Image from 'next/image'

const contact = () => {
  return (
    <div>

    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us!</h1>
      <h3 className={styles.extraMessage}>Any form of InterSpace communication welcome!</h3>
      <p className={styles.desc}>
        Salute to any life form you are!
        Reach us at InterSpace email: h1785467.meteroidcomplex17@mail.galaxy
      </p>
      
    </div>
    <div className={styles.businessImage}>

    <Image src='/img/cosmo business.png' alt='NO_IMG' width='400' height="400"/>
    </div>
      <p className={styles.business}>
        Headmaster of Octara Pizza: Danila Larin danillarin03633@gmail.com
      </p>
      <p className={styles.business}>Contact for business purposes only.</p>
    </div>
  )
}

export default contact