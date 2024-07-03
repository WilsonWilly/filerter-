'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Input, Textarea, Button } from '@nextui-org/react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer les données du formulaire
    console.log('Formulaire soumis:', formData);
    // Réinitialiser le formulaire après soumission
    setFormData({ name: '', email: '', message: '' });
    // TODO: Ajouter ici une notification de succès pour l'utilisateur
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>
      <p className="mb-6">
        Nous sommes là pour répondre à vos questions. N&apos hésitez pas à nous
        contacter !
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Nom"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit" color="primary">
          Envoyer
        </Button>
      </form>
    </div>
  );
}
