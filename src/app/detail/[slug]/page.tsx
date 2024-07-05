'use client';

import { Image, Spinner } from '@nextui-org/react';
import { detailsGame } from '../../../assets/detailsGame';
import { Button } from '@nextui-org/react';
import { Heart, PlusSquare } from 'react-feather';
import ModalOpinion from '@/components/Modal/ModalOpinion';
import Rating from '@/components/Rating/Rating';
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { thunkFetchBoardGameDetails } from '@/app/lib/middlewares/thunkFetchBoardGameDetails';

export default function BoardGame() {
  const dispatch = useAppDispatch();

  // On récupère la liste de jeux qui est dans le store Redux pour vérifier si le slug existe bien
  const boardGames = useAppSelector((state) => state.boardGames.boardGamesList);
  console.log(boardGames);

  // On récupère le slug depuis l'url
  const { slug } = useParams<{ slug: string }>();
  console.log(slug);

  // On vérifie dans la liste de jeux si le slug existe bien
  if (boardGames) {
    const slugFounded = boardGames.find((game) => game.slug === slug);
    console.log(slugFounded);

    if (slugFounded)
      useEffect(() => {
        dispatch(thunkFetchBoardGameDetails(slug));
      }, []);
  }

  // On récupère l'état de chargement
  const isLoading = useAppSelector((state) => state.boardGameDetails.isLoading);

  const detailsGame = useAppSelector(
    (state) => state.boardGameDetails.boardGameDetails
  );
  console.log(detailsGame);

  if (isLoading) {
    return <Spinner color="secondary" size="lg" />;
  } else if (detailsGame) {
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
          <p>Age minimum : {detailsGame.game.minAge} ans</p>
          <p>Temps d'une partie : {detailsGame.game.time}</p>
          <p>
            Nombre de joueur(s) : de {detailsGame.game.minPlayers} à
            {detailsGame.game.maxPlayers} Joueurs
          </p>
        </section>
        <section className="w-full flex flex-col items-center space-y-4 ">
          <div className="w-full flex justify-around space-x-4">
            <Button
              // onPress={actionAjoutCree}
              className=" border border-black  active:black"
              startContent={<PlusSquare />}
            >
              Ajouter à ma ludothéque
            </Button>

            <Button
              // onPress={actionAjoutCree}
              className="  border border-black  active:black"
              startContent={<PlusSquare />}
            >
              Ajouter à ma liste de souhait
            </Button>
          </div>
          <div className="w-full flex items-center justify-around space-x-4">
            <ModalOpinion />
            <div className="w-3/4 bg-blueNight p-1 overflow-y-auto h-40 border border-black rounded-md">
              {detailsGame.opinions.map((opinion) => (
                <div
                  className=" bg-orangePastel mb-1 last:mb-0 border border-black rounded-md p-1"
                  key={opinion.id}
                >
                  <div className="flex justify-between mb-2 ">
                    <div className=" flex items-center text-lg">
                      {opinion.pseudo}
                    </div>
                    <Rating goldRating={opinion.rating} />
                  </div>
                  <div className="text-sm">{opinion.comment}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  } else {
    return <div>ça marche po</div>;
  }
}
