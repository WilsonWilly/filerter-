"use client";

import React, { useState } from "react";
import { Input, Button, Textarea, Card } from "@nextui-org/react";

// Définition du composant fonctionnel DonationPage
export default function DonationPage() {
  // Déclaration des états locaux pour gérer le montant du don, le message, et l'état de soumission
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)
    // Ici, vous implémenterez la logique pour traiter le don (par exemple, envoyer les données à un serveur)
    console.log("Don soumis:", { amount, message });
    setIsSubmitted(true); // Met à jour l'état pour indiquer que le formulaire a été soumis
  };

  return (
    // Conteneur principal avec styles pour centrer le contenu et ajouter un fond dégradé
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Card className="p-8 max-w-md w-full">
        <Textarea className="text-center mb-6">
          Faites un don pour soutenir O &aposjeuxDeSociété
        </Textarea>

        {!isSubmitted ? (
          // Formulaire de don qui s'affiche si le formulaire n'a pas encore été soumis
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Montant du don (€)"
              type="number"
              placeholder="Entrez le montant"
              value={amount}
              onChange={(e) => setAmount(e.target.value)} // Met à jour l'état 'amount' à chaque changement de valeur
              required // Champ obligatoire
            />
            <Textarea
              label="Votre message (optionnel)"
              placeholder="Laissez un message d'encouragement"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Met à jour l'état 'message' à chaque changement de valeur
            />
            <Button type="submit" color="primary" className="w-full">
              Faire un don
            </Button>
          </form>
        ) : (
          // Message de remerciement qui s'affiche après la soumission du formulaire
          <div className="text-center">
            <Textarea className="mb-4">Merci pour votre générosité !</Textarea>
            <Textarea>
              Votre don de {amount}€ nous aide à continuer notre passion pour
              les jeux de société.
            </Textarea>
            {message && (
              // Affiche le message de l'utilisateur s'il a été renseigné
              <Textarea className="mt-4 italic">{message}</Textarea>
            )}
          </div>
        )}

        <Textarea className="text-center mt-6 text-sm text-gray-600">
          Votre soutien nous permet de continuer à créer et partager des
          expériences de jeu inoubliables.
        </Textarea>
      </Card>
    </div>
  );
}
