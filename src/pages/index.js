/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link';
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";

import Image from 'next/image';
import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';



import styles from '@styles/Page.module.scss'


export default function Home({ products })  {
  return (
    <Layout>
      <Head>
        <title>Manga Store</title>
        <meta name="description" content="Le meilleur du manga!" />
      </Head>

      <Container>
        <h1 className="sr-only">Manga Store</h1>

        <div className={styles.hero}>
          <Link href="/">
            <a>
              <div className={styles.heroContent}>
                <h2>Collectionner n&apos;est pas un crime.</h2>
                <p>Le meilleur du manga !</p>
              </div>
              <Image className={styles.heroImage} src="/images/space-jelly-gear-banner.jpg" alt="" width={1200} height={400} />
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
                <Button className="snipcart-add-item fill"
      data-item-id={product.id}
      data-item-price={product.price}
      data-item-url={`localhost:3000/products/${product.name}`}
      data-item-image={product.image.url}
      data-item-description={product.description?.text}
      data-item-name={product.name}>
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
    uri: 'https://api-eu-west-2.hygraph.com/v2/clfccf2653egz01ue0esw2vd3/master',
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
    query Products {
      products (last: 4) {
        createdAt
        id
        name
        price
        publishedAt
        slug
        updatedAt
        image {
          url
          width
          height
        }
      }
    }
    `
  })

  const home = data.data.page;
  const products = data.data.products;

  return {
    props: {
      products
    }
  }
}
