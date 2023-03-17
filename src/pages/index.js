import Head from 'next/head'
import Link from 'next/link';

import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';
import Image from 'next/image';

import products from '@data/products';

import styles from '@styles/Page.module.scss'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Manga Store</title>
        <meta name="description" content="Get your Space Jelly gear!" />
      </Head>

      <Container>
        <h1 className="sr-only">Space Jelly Gear</h1>

        <div className={styles.hero}>
          <Link href="#">
            <a>
              <div className={styles.heroContent}>
                <h2>À tous les fans de mangas.</h2>
                <p>Nous vous proposons le meilleur choix !</p>
              </div>
              <Image className={styles.heroImage} src="/images/space-jelly-gear-banner.jpg" alt="" width={1200} height={400} />
            </a>
          </Link>
        </div>

        <h2 className={styles.heading}>Derniers articles</h2>

        <ul className={styles.products}>
          {products.slice(0, 4).map(product => {
            return (
              <li key={product.id}>
                <Link href="/products/product">
                  <a>
                    <div className={styles.productImage}>
                      <Image width="500" height="500" src="/images/luffy.jpg" alt="" />
                    </div>
                    <h3 className={styles.productTitle}>
                      { product.name }
                    </h3>
                    <p className={styles.productPrice}>
                      ${ product.price }
                    </p>
                  </a>
                </Link>
                <p>
                  <Button>
                    Ajouter au panier
                  </Button>
                </p>
              </li>
            )
          })}
        </ul>
      </Container>
    </Layout>
  )
}