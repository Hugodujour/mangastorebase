/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link';
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";

import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';

import products from '@data/products';

import styles from '@styles/Page.module.scss'


export default function Home({ products })  {
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
              <img className={styles.heroImage} src="/images/space-jelly-gear-banner.jpg" alt="" />
            </a>
          </Link>
        </div>

        <h2 className={styles.heading}>Derniers articles</h2>

        <ul className={styles.products}>
          {products.map(product => {
            return (
              <li key={product.slug}>
                <Link href={`/products/${product.slug}`}>
                  <a>
                    <div className={styles.productImage}>
                      <img width={product.image.width} height={product.image.height} src={product.image.url} alt="" />
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

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://api-us-east-1.graphcms.com/v2/ckzvrda212z1d01za7m8y55rc/master',
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query PageHome {
        page(where: {slug: "home"}) {
          id
          heroLink
          heroText
          heroTitle
          name
          slug
          heroBackground
        }
        products(where: {categories_some: {slug: "featured"}}) {
          id
          name
          price
          slug
          image
        }
      }
    `
  })

  const home = data.data.page;
  const products = data.data.products;

  return {
    props: {
      home,
      products
    }
  }
}
