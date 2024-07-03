export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">O&apos;JeuxDeSociété</h1>
      <h2 className="text-2xl font-semibold mb-4">
        Découvrez, partagez et jouez !
      </h2>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Présentation</h3>
        <p>
          Dans un monde où les jeux de société connaissent un véritable essor,
          O&apos;JeuxDeSociété vous propose une plateforme unique pour explorer
          l&apos;univers ludique. Notre site vous offre une vue d&apos;ensemble
          des jeux les plus appréciés, basée sur les votes de notre communauté.
          De plus, les utilisateurs inscrits peuvent créer leur propre
          bibliothèque de jeux et une liste de souhaits personnalisée.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Notre Mission</h3>
        <p>
          Nous vous permettons de gérer et d&apos;enrichir votre ludothèque tout
          en partageant vos expériences avec une communauté passionnée,
          qu&apos;elle soit composée de joueurs occasionnels ou chevronnés.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Nos Fonctionnalités</h3>
        <ul className="list-disc pl-5">
          <li>Une vaste liste de jeux de société triable et filtrable</li>
          <li>
            Des pages détaillées pour chaque jeu avec images, descriptions et
            avis
          </li>
          <li>
            La possibilité de créer un compte utilisateur pour plus de
            fonctionnalités
          </li>
          <li>
            Gestion de votre ludothèque personnelle et de votre liste de
            souhaits
          </li>
          <li>
            Participation active à la communauté en ajoutant de nouveaux jeux
          </li>
        </ul>
      </section>
    </div>
  );
}
