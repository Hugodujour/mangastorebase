import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <p>
        &copy; Manga Store, {new Date().getFullYear()} -
      </p>
      <Link href="/about/about">
        <a>Politique de confidentialité</a>
      </Link>
    </footer>
    
  )
}

export default Footer;