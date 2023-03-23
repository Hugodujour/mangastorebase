import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

import Container from '@components/Container';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            <a>Manga Store
            </a>
          </Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
          <Link href="/about/about">
              <a>À Propos</a>
            </Link>
          </li>
          <li>
            <Link href="/test/test">
              <a>Catégories</a>
            </Link>
          </li>
          <li>
            <Link href="/private">
              <a>Private</a>
            </Link>
          </li>
            
            
        </ul>
        <p className={styles.headerCart}>
        <button className="snipcart-checkout">
            <FaShoppingCart />
            <span className="snipcart-total-price">0.00 $US</span>
          </button>
        </p>
      </Container>
    </header>
  )
}

export default Header;