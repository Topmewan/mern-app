import React, {useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);

  const activeLink = (r) => {
    if (r === router.pathname) {
      return styles.active
    }
    return ''
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link href='/'>Home</Link>
      </div>

      <ul className={styles.buttons}>
        <li>
          <Link href='/cart'>
            <a className={`${activeLink('/cart')}`}>Cart</a>
          </Link>
        </li>
        <li>
          <Link href='/signin'>
            <a className={`${activeLink('/signin')}`}>
              Sign In
            </a>
          </Link>
        </li>
      </ul>

    </div>
  )

};

export default Navbar;