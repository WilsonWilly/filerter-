import React from 'react';

export default function MentionsLegales() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Mentions Légales</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Informations légales</h2>
        <p>
          Nom du site : O&apos;JeuxDeSociété
          <br />
          URL : [Votre URL]
          <br />
          Propriétaire : [Votre nom ou nom de l&apos;entreprise]
          <br />
          Adresse : [Votre adresse]
          <br />
          Email : [Votre email]
          <br />
          Téléphone : [Votre numéro de téléphone]
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
        <p>
          Le site O&apos; JeuxDeSociété est hébergé par [Nom de
          l&apos;hébergeur]
          <br />
          Adresse : [Adresse de l &apos;hébergeur]
          <br />
          Téléphone : [Numéro de téléphone de l &apos;hébergeur]
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. Propriété intellectuelle
        </h2>
        <p>
          L&apos; ensemble de ce site relève de la législation française et
          internationale sur le droit d&apos;auteur et la propriété
          intellectuelle. Tous les droits de reproduction sont réservés, y
          compris pour les documents téléchargeables et les représentations
          iconographiques et photographiques.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          4. Protection des données personnelles
        </h2>
        <p>
          Conformément à la loi Informatique et Libertés du 6 janvier 1978, vous
          disposez d&apos; un droit d&apos; accès, de rectification et de
          suppression des données vous concernant. Vous pouvez exercer ce droit
          en nous contactant à l&apos; adresse email indiquée ci-dessus.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
        <p>
          Notre site utilise des cookies pour améliorer l&apos; expérience
          utilisateur. En continuant à naviguer sur ce site, vous acceptez
          l&apos; utilisation de cookies conformément à notre politique de
          confidentialité.
        </p>
      </section>
    </div>
  );
}
