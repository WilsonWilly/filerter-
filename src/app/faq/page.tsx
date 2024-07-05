// pages/faq.js

import Head from "next/head";

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <Head>
        <title>FAQ - o&apos;jeuxDeSociete</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans">
        <h1 className="text-3xl font-bold text-gray-800 my-6">
          Foire Aux Questions
        </h1>

        <dl className="space-y-6">
          <div>
            <dt className="text-lg font-semibold text-gray-700">
              Quels types de jeux proposez-vous ?
            </dt>
            <dd className="mt-2 text-gray-600">
              Nous proposons une large gamme de jeux de société, incluant des
              jeux de stratégie, de cartes, familiaux et pour enfants.
            </dd>
          </div>

          <div>
            <dt className="text-lg font-semibold text-gray-700">
              Comment puis-je commander ?
            </dt>
            <dd className="mt-2 text-gray-600">
              Vous pouvez commander directement sur notre site web ou visiter
              notre boutique physique.
            </dd>
          </div>

          <div>
            <dt className="text-lg font-semibold text-gray-700">
              Quels sont les délais de livraison ?
            </dt>
            <dd className="mt-2 text-gray-600">
              Les délais de livraison varient généralement entre 2 à 5 jours
              ouvrés selon votre localisation.
            </dd>
          </div>

          <div>
            <dt className="text-lg font-semibold text-gray-700">
              Acceptez-vous les retours ?
            </dt>
            <dd className="mt-2 text-gray-600">
              Oui, nous acceptons les retours sous 14 jours pour tout produit
              non ouvert et en parfait état.
            </dd>
          </div>

          <div>
            <dt className="text-lg font-semibold text-gray-700">
              Proposez-vous des réductions ?
            </dt>
            <dd className="mt-2 text-gray-600">
              Nous offrons régulièrement des promotions. Inscrivez-vous à notre
              newsletter pour être informé(e).
            </dd>
          </div>
        </dl>
      </main>
    </div>
  );
}
