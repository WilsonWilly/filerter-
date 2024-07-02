import { Image } from '@nextui-org/react';

import { detailsGame } from '../../assets/detailsGame';
import { Button } from '@nextui-org/react';
import { Heart, PlusSquare } from 'react-feather';

export default function BoardGame() {
  console.log(detailsGame);
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center p-2 text-black ">
      <section className="w-full flex justify-between mb-1">
        <div className="w-1/2 text-center bg-orange-300 py-2">
          {detailsGame.game.name}
        </div>
        <div className="w-1/4 text-center bg-orange-300 py-2">
          {detailsGame.game.rating}
        </div>
      </section>
      <Image
        alt="Boardgame cover"
        className="z-0 w-full h-full object-cover p-2"
        src={detailsGame.game.picture}
        width="75vh"
        height={100}
      />

      <section className="w-full bg-orange-300 py-8 text-center mb-4">
        <p>{detailsGame.game.description} </p>
        <p>Difficulté : {detailsGame.game.difficulty}</p>
      </section>
      <section className="w-full flex flex-col items-center space-y-4">
        <div className="w-full flex justify-around space-x-4">
          <Button
            className="p-2 bg-orange-300 flex items-center space-x-2"
            radius="sm"
            startContent={<PlusSquare className="w-18 h-18" />}
          >
            Ajouter à ma bibliothéque
          </Button>
          <button className="bg-orange-300 p-2">
            AJOUTER UN JEU A MA LISTE
          </button>
        </div>
        <div className="w-full flex justify-around space-x-4">
          <button className="w-1/4 bg-orange-300 py-2 px-2">
            DONNEZ VOTRE AVIS
          </button>
          <div className="w-3/4 bg-orange-300 p-4 overflow-y-auto h-32">
            {detailsGame.opinions.map((opinion) => (
              <div className="p-2 mb-2 last:mb-0" key={opinion.id}>
                <div className="flex justify-between mb-2">
                  <div>{opinion.pseudo}</div>
                  <div>{opinion.rating}</div>
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
