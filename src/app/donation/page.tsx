'use client';

import React, { useState } from 'react';
import { Input, Textarea, Card } from '@nextui-org/react';

const DonationPage: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    setError('');
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) {
      setError('Veuillez entrer un montant valide.');
    } else {
      setIsSubmitted(true);
      setError('');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Card className="p-8 max-w-md w-full">
        <h2 className="text-center mb-6 text-2xl font-bold">
          Faites un don pour soutenir O&apos;jeuxDeSociété
        </h2>

        {!isSubmitted ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              label="Montant du don (€)"
              type="number"
              placeholder="Entrez le montant"
              value={amount}
              onChange={handleAmountChange}
              required
            />
            <Textarea
              label="Votre message (optionnel)"
              placeholder="Laissez un message d'encouragement"
              value={message}
              onChange={handleMessageChange}
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Envoyer le don
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="mb-4 text-xl font-semibold">
              Merci pour votre générosité !
            </h3>
            <p>
              Votre don de {amount}€ nous aide à continuer notre passion pour
              les jeux de société.
            </p>
            {message && <p className="mt-4 italic">{message}</p>}
          </div>
        )}

        <p className="text-center mt-6 text-sm text-gray-600">
          Votre soutien nous permet de continuer à créer et partager des
          expériences de jeu inoubliables.
        </p>
      </Card>
    </div>
  );
};

export default DonationPage;
