import React from 'react'
import styles from '../styles/Events.module.css'
import Image from 'next/image'

const events = () => {
  return (
    <div>

    <div className={styles.container}>
      <h1 className={styles.title}>Temporary closure of Cross-Galactic Events</h1>
      <p className={styles.desc}>
        Jupiter Obelisk Plague has caused massive pandemic across all first-order living organisms.
        We strive for keeping our customers alive to continue providing top quality planetary pizza,
        that is why we decided to temporarily stop all cross-galactic food events.
        We appreciate your patience and we will provide any news as soon as we can. 
      </p>
      
    </div>
    <div className={styles.cancelImage}>

    <Image src='/img/cosmo events cancelled.png' alt='NO_IMG' width='400' height="400"/>
    </div>
    </div>
  )
}

export default events