import React from 'react'
import styles from './Subnav.module.css'
import Link from 'next/link'

function Subnav() {
  return (
    <>
    <div className={styles.contentcontainer}>
      <Link href="/aboutus" className={styles.txt}>About us</Link>
      <Link href="/stomatologi" className={styles.txt}>Our Dentists</Link>
      <Link href="/achievements" className={styles.txt}>Achievements</Link>
      <Link href="/questions" className={styles.txt}>Questions</Link>
      <Link href="/servicesandprices" className={styles.txt}>Services and prices</Link>
      <Link href="/contactus" className={styles.txt2}>Contact Us</Link>
    </div>
    <br/>
    </>
  )
}

export default Subnav