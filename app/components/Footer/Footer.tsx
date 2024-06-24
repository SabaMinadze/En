import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'


function Footer() {
  return (
    <div className={styles.footer}>
      <h1 className={styles.txt}>MADE BY SABA MINADZE</h1>
      <h2 className={styles.txt3}>Instagram: minadzesaba16</h2>
      <br/><br/>
      <h1>Language</h1>
      <Link href="https://algani-denti.vercel.app/"><button className={styles.btn}>ქართული</button></Link>


      <h2 className={styles.txt2}>algandent.ge Algani all rights reserved. © 2023 - 2024</h2>


    </div>
  )
}

export default Footer