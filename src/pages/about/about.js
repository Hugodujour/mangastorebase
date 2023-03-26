import Head from 'next/head'
import Layout from '@components/Layout';
import Container from '@components/Container';

export default function About() {
  return (
    <Layout>
      <Head>
        <title> Mangastore site de vente de mangas en ligne</title>
        <meta name="description" content="Découvrez notre site de vente de mangas en ligne. Nous proposons une sélection exclusive de mangas  pour tous les goûts, des grands classiques aux dernières nouveautés." />
      </Head>

      <Container>
      	<header>
	  	  <h1>Politique de confidentialité</h1>
		  <p>Chez Manga Store, nous prenons très au sérieux la confidentialité et la sécurité des informations de nos clients. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons les informations personnelles que vous nous fournissez lorsque vous utilisez notre site.</p>
		</header>

		<main>
			<h2>Collecte d&apos;informations</h2>
			<p>Nous collectons des informations personnelles, telles que votre nom, votre adresse e-mail, votre adresse postale et votre numéro de téléphone, lorsque vous passez une commande sur notre site. Nous pouvons également collecter des informations sur les produits que vous achetez, les pages que vous visitez sur notre site et les termes de recherche que vous utilisez.</p>
			<h2>Utilisation des informations</h2>
			<p>Nous utilisons les informations que nous collectons pour traiter vos commandes, personnaliser votre expérience dachat et communiquer avec vous au sujet de votre commande. Nous pouvons également utiliser vos informations pour vous envoyer des e-mails marketing sur nos produits et services, mais nous ne partagerons jamais vos informations avec des tiers à des fins de marketing.</p>
			<h2>Protection des informations</h2>
			<p>Nous prenons des mesures pour protéger les informations personnelles de nos clients, y compris la mise en place de mesures de sécurité techniques et organisationnelles appropriées pour empêcher la perte, l&apos;utilisation abusive ou la modification non autorisée de vos informations personnelles. Nous ne divulguons jamais vos informations à des tiers, sauf si cela est nécessaire pour traiter votre commande ou si nous sommes tenus de le faire par la loi.</p>
			<h2>Accès et contrôle des informations</h2>
			<p>Vous avez le droit d&apos;accéder, de corriger ou de supprimer les informations personnelles que nous avons collectées à votre sujet. Si vous souhaitez exercer ces droits, veuillez nous contacter en utilisant les coordonnées fournies sur notre site.</p>
			<h2>Modifications de la politique de confidentialité</h2>
			<p>Nous pouvons modifier cette politique de confidentialité à tout moment en affichant une version mise à jour sur notre site. Nous vous encourageons à consulter régulièrement notre politique de confidentialité pour rester informé de toute modification.</p>
			<h2>Contactez-nous</h2>
			<p>Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, veuillez nous contacter en utilisant les coordonnées fournies sur notre site.</p>
		</main>

      </Container>
    </Layout>
  )
}
