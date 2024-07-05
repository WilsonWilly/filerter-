import Head from "next/head";
import Image from "next/image";

export default function Login() {
  return (
    <div className="flex h-screen">
      <Head>
        <title>O&apos;jeuxDeSociete - Connexion</title>
        <meta name="description" content="Page de connexion O'jeuxDeSociete" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-1/2 relative">
        <Image
          src="/images/jeux-de-societe.jpg"
          alt="Jeux de société"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="w-1/2 bg-gray-100 flex justify-center items-center">
        <form className="bg-white p-8 rounded-lg shadow-md w-80">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Connexion
          </h2>
          <input
            type="text"
            placeholder="Nom"
            className="w-full p-2 mb-4 border border-gray-300 rounded hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Adresse e-mail"
            className="w-full p-2 mb-6 border border-gray-300 rounded hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
