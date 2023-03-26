import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <p>
        &copy; Manga Store, {new Date().getFullYear()} 
      </p>
    </footer>
  )
}

export default Footer;