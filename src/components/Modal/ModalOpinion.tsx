"use client";

import React, { useState } from "react";
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
} from "@nextui-org/react";
import { detailsGame } from "../../assets/detailsGame";
import Rating from "../Rating/Rating";

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
                  placeholder="Selectionnez votre pingouin !"
                  className="max-w-xs"
                >
                  <SelectItem key={0}>
                    <Rating goldRating={0} />
                  </SelectItem>
                  <SelectItem key={1}>
                    {" "}
                    <Rating goldRating={1} />
                  </SelectItem>
                  <SelectItem key={2}>
                    {" "}
                    <Rating goldRating={2} />
                  </SelectItem>
                  <SelectItem key={3}>
                    {" "}
                    <Rating goldRating={3} />
                  </SelectItem>
                  <SelectItem key={4}>
                    {" "}
                    <Rating goldRating={4} />
                  </SelectItem>
                  <SelectItem key={5}>
                    {" "}
                    <Rating goldRating={5} />
                  </SelectItem>
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
