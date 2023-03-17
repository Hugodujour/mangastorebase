import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';

import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';

import products from '@data/products';

import styles from '@styles/Page.module.scss'

export default function Figurines() {
  return (
    <Layout>
      <Head>
        <title>Manga Store</title>
        <meta name="description" content="Get your Space Jelly gear!" />
      </Head>

      <Container>
        <h2 className={styles.heading}>Figurines</h2>

        <ul className={styles.products}>
          {products.map(product => {
            return (
              <li key={product.id}>
                <Link href="#">
                  <a>
                    <div className={styles.productImage}>
                      <Image width="500" height="500" src={product.image} alt="" />
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