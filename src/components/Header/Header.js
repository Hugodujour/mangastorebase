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
            <Link href="/categories/manga">
              <a>Mangas</a>
            </Link>
          </li>
          <li>
          <Link href="/categories/figurine">
              <a>Figurines</a>
            </Link>
          </li>
        </ul>
        <p className={styles.headerCart}>
          <button>
            <FaShoppingCart />
            <span>
              $0.00
            </span>
          </button>
        </p>
        <ul className={styles.headerLocales}>
          <li>
            <Link href="#">
              <a>
                ES
              </a>
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  )
}

export default Header;