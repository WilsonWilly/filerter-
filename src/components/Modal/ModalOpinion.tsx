'use client';

import React, { useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { detailsGame } from '@/assets/detailsGame';

export default function ModalOpinion() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button onPress={openModal} className="border border-black">
        Donnez votre avis
      </Button>
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Votre avis sur {detailsGame.game.name} ?
              </ModalHeader>
              <ModalBody>
                <Select
                  label="Quel note donneriez vous ?"
                  placeholder="Selectionnez votre pinguin !"
                  className="max-w-xs"
                >
                  <SelectItem key={0}> 0/5</SelectItem>
                  <SelectItem key={1}> 1/5</SelectItem>
                  <SelectItem key={2}> 2/5</SelectItem>
                  <SelectItem key={3}> 3/5</SelectItem>
                  <SelectItem key={4}> 4/5</SelectItem>
                  <SelectItem key={5}> 5/5</SelectItem>
                </Select>
                <Textarea
                  label="Laissez un commentaire :"
                  placeholder="Dites nous ce que vous avez aimé, ou pas ! "
                  variant="bordered"
                />
                <Input
                  autoFocus
                  label="A quel prix avez vous eu ce jeu ? "
                  placeholder="Laissez votre prix ici !"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={closeModal}>
                  Fermer
                </Button>
                <Button color="primary" onPress={closeModal}>
                  Ajoutez votre avis !
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
