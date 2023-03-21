import Head from 'next/head'
import Layout from '@components/Layout';
import Container from '@components/Container';
import styles from '@styles/Page.module.scss'

export default function About() {
  return (
    <Layout>
      <Head>
        <title> Mangastore site de vente de mangas en ligne</title>
        <meta name="description" content="Découvrez notre site de vente de mangas en ligne. Nous proposons une sélection exclusive de mangas  pour tous les goûts, des grands classiques aux dernières nouveautés." />
      </Head>

      <Container>
        <h1>Bienvenue sur notre site de vente de mangas en ligne !</h1>
    <img src="/images/space-jelly-gear-banner.jpg" alt="Image de manga" />
    <p>Vous voulez sans doute savoir ce qu’on fait, pourquoi on le fait, ou peut-être découvrir qui on est: </p>
    <p> Bien plus qu’une simple boutique en ligne, Mangastore est le projet de quatre passionnés de mangas, d’animes et de culture populaire japonaise.</p>

<p>À travers Mangastore nous avons voulu proposer un site web qui vous permet de retrouver en quelques clics seulement les derniers produits dérivés à un prix défiant toute concurrence.</p>

<p>Vous retrouverez les licences les plus populaires et les dernières nouveautés.</p>

<p>Nous prenons également un soin particulier à satisfaire l’intégralité de nos clients et si vous avez besoin de nous contacter directement, nous restons disponibles 7J/7 et 24h/24 pour vous répondre. Vous pouvez nous joindre facilement.</p>

<p>Nous espérons sincèrement que vous trouverez votre bonheur sur Mangastore.</p>

À très vite !
    
      </Container>
    </Layout>
  )
}
