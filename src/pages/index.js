import Head from 'next/head'
import Link from 'next/link';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import Image from 'next/image';
import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';



import styles from '@styles/Page.module.scss'

export default function Home({ home, products }) {
  
  const { heroTitle, heroText, heroLink, heroBackground } = home
  console.log('products', products)
  console.log('home', home)
  return (
    <Layout>
      <Head>
        <title>Manga Store</title>
        <meta name="description" content="Le meilleur du manga!" />
      </Head>

      <Container>
        <h1 className="sr-only">Manga Store</h1>

        <div className={styles.hero}>
          <Link href={ heroLink }>
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
          {products?.map(product => {
            return (
              <li key={product.slug}>
                <Link href={`/products/${product.slug}`}>
                  <a>
                    <div className={styles.productImage}>
                      <img width="500" height="500" src={product.image.url} alt="" />
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
                  <Button className="fill">
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

export async function getStaticProps(context) {
  const client = new ApolloClient({
    uri: 'https://api-eu-west-2.hygraph.com/v2/clf842ld96zae01td5ube6sxu/master',
    cache: new InMemoryCache()
  });

  const data = await client.query({
    query: gql`
    query MyQuery {
      page(where: {slug: "home"}) {
        id
        heroLink
        heroText
        heroTitle
        name
        slug
        heroBackground {
          height
          width
          url
        }
      }
      products(first: 4){
        name
        price
        slug
        image {
          height
          url
          width
        }
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