// components/HamburgerMenu.js
import Link from 'next/link';
import styles from './Burgernav.module.css'

const Burgernav = () => (
  <>
    <label className={styles.hamburgerMenu}>
            <input type="checkbox" />
          </label>
          <aside className={styles.sidebar}>
            <nav>
            <Link href="/aboutus" className={styles.txt}><div>About us</div></Link>
            <br/>
            <Link href="/stomatologi" className={styles.txt}><div>Our dentists</div></Link>
            <br/>
            <Link href="/achievements" className={styles.txt}><div>Achievements</div></Link>
            <br/>
            <Link href="/questions" className={styles.txt}><div>Questions</div></Link>
            <br/>
            <Link href="/servicesandprices" className={styles.txt}><div>Services and Prices</div></Link>
            <br/><br/><br/><br/>
            <Link href="/contactus" className={styles.txt2}><div>Contuct us</div></Link>
            </nav>
          </aside>
  </>
);

export default Burgernav;