import React from 'react'
import styles from './page.module.css'
import Card from '../components/Card/Card'

function page() {
  return (
    <>
    <div className={styles.box}>
    <Card name="Therapy for adults and children" price="50 -200 ₾"/>
    <Card name="Pediatric and adult surgery" price="140 - 300 ₾"/>
    <Card name="Periodontology" price="375 - 490 ₾"/>
    </div>
    <div className={styles.box}>
    <Card name="Gnathology" price="150 ₾"/>
    <Card name="Orthodontics" price="85 ₾ -დან"/>
    <Card name="orthopedics" price="150 - 250 ₾"/>
    </div>
    <div className={styles.box}>
    <Card name="diagnostics" price="მკურნალობის ფასი ინდივიდუალურია"/>
    <Card name="Aesthetic dentistry" price="1450 ₾"/>
    <Card name="Therapy for adults and children" price="50 -200 ₾"/>
    </div>
    

    </>
  )
}

export default page