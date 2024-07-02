import { Image } from '@nextui-org/react';

import { detailsGame } from '../../assets/detailsGame';
import { Button } from '@nextui-org/react';
import { Heart, PlusSquare } from 'react-feather';
import ModalOpinion from '@/components/Modal/ModalOpinion';
import Rating from '@/components/Rating/Rating';

export default function BoardGame() {
  return (
    <main className="flex text-sm flex-col items-center justify-center p-2 text-black ">
      <section className="w-full flex justify-between mb-1">
        <div className="w-1/2 text-center text-3xl py-2  rounded-md p-4">
          {detailsGame.game.name}
        </div>
        <div className="w-1/2  rounded-md p-1">
          <Rating goldRating={detailsGame.game.rating} />
        </div>
      </section>
      <div className="p-2">
        <Image
          alt="Boardgame cover"
          className="z-0 w-full h-full object-cover border border-black rounded-md p-8"
          src={detailsGame.game.picture}
          width="75vh"
          height={100}
        />
      </div>
      <section className="w-full py-8 text-center mb-4 border border-black rounded-md p-4">
        <p>{detailsGame.game.description} </p>
        <p>Difficulté : {detailsGame.game.difficulty}</p>
      </section>
      <section className="w-full flex flex-col items-center space-y-4 ">
        <div className="w-full flex justify-around space-x-4">
          <Button
            // onPress={actionAjoutCree}
            className=" flex items-center border border-black  active:black"
            radius="sm"
            startContent={<PlusSquare className="w-20 h-20" />}
          >
            Ajouter à ma bibliothéque
          </Button>

          <Button
            // onPress={actionAjoutCree}
            className=" flex items-center border border-black  active:black"
            radius="sm"
            startContent={<PlusSquare className="w-20 h-20" />}
          >
            Ajouter à ma liste de souhait
          </Button>
        </div>
        <div className="w-full flex items-center justify-around space-x-4">
          <ModalOpinion />
          <div className="w-3/4  p-1 overflow-y-auto h-40 border border-black rounded-md">
            {detailsGame.opinions.map((opinion) => (
              <div
                className="p-2  mb-1 last:mb-0 border border-black rounded-md p-1"
                key={opinion.id}
              >
                <div className="flex justify-between mb-2 ">
                  <div>{opinion.pseudo}</div>
                  <div>
                    <Rating goldRating={opinion.rating} />
                  </div>
                </div>
                <div>{opinion.comment}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
