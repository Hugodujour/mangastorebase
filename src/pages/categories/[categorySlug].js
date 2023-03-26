import Head from 'next/head'
import Link from 'next/link';
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";
import Image from 'next/image';
import Layout from '@components/Layout';
import Header from '@components/Header';
import Container from '@components/Container';
import Button from '@components/Button';

import styles from '@styles/Page.module.scss'

export default function Category({ category, products }) {
  return (
    <Layout>
      <Head>
        <title>{ category.name }</title>
        <meta name="description" content="Find everythings at MangaStore" />
      </Head>

      <Container>

      <div className={styles.hero}>
              <div className={styles.heroContent}>
                <h2>Collectionner n&apos;est pas un crime.</h2>
                <p>Le meilleur du manga !</p>
              </div>
              <div className={styles.test}>
              <Image src="/images/manga-banner.jpg" alt="Image of Hero Banner" width={1200} height={400} />
              </div>
        </div>


        <h1>{ category.name }</h1>

        <ul className={styles.products}>
          {products.map(product => {
            return (
              <li key={product.id}>
                <Link href={`/products/${product.slug}`}>
                  <a>
                    <div className={`${styles.productImage} ${styles.bordered}`}>
                      <Image width={product.image.width} height={product.image.height} src={product.image.url} alt={`Picture of ${product.name}`} placeholder="blur" blurDataURL={product.image.url}/>
                    </div>
                    <h3 className={styles.productTitle}>
                      { product.name }
                    </h3>
                    <p className={styles.productPrice}>
                      { product.price.toFixed(2) }€
                    </p>
                  </a>
                </Link>
                <p>
                <Button className="snipcart-add-item fill"
                  data-item-id={product.slug}
                  data-item-price={product.price}
                  data-item-url={`/products/${product.slug}`}
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

export async function getStaticProps({ params }) {
  const client = new ApolloClient({
    uri: 'https://api-eu-west-2.hygraph.com/v2/clfccf2653egz01ue0esw2vd3/master',
    cache: new InMemoryCache()
  });

  const data = await client.query({
    query: gql`
      query PageCategory($slug: String = "") {
        category(where: {slug: $slug}) {
          id
          name
          slug
          products (orderBy: publishedAt_ASC){
            id
            image {
              url
              width
              height
            }
            name
            price
            slug
          }
        }
      }
    `,
    variables: {
      slug: params.categorySlug
    }
  });

  const category = data.data.category;

  return {
    props: {
      category,
      products: category.products
    }
  }
}

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: 'https://api-eu-west-2.hygraph.com/v2/clfccf2653egz01ue0esw2vd3/master',
    cache: new InMemoryCache()
  });

  const data = await client.query({
    query: gql`
      query PageCategories {
        categories {
          id
          slug
        }
      }
    `
  });

  const paths = data.data.categories.map(category => {
    return {
      params: {
        categorySlug: category.slug
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}