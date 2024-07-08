// Composant qui fait son rendu côté client

"use client";

import { useEffect } from "react";
import { Spinner } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "../../app/lib/hooks";
import Miniature from "./Miniature";
import { thunkFetchBoardGamesList } from "../../app/lib/middlewares/thunkFetchBoardGamesList";

// import { boardGames } from '../../assets/data';

function CardsGroup() {
  // const dispatch = useAppDispatch();
  // const boardGames = useAppSelector((state) => state.boardGames.boardGamesList);
  // console.log(boardGames);
  const dispatch = useAppDispatch();

  // On récupère la liste des jeux depuis le store Redux
  const boardGames = useAppSelector((state) => state.boardGames.boardGamesList);

  // On récupère l'état de chargement depuis le store Redux
  const isLoading = useAppSelector((state) => state.boardGames.isLoading);

  // useEffect(() => {
  //  dispatch(thunkFetchBoardGamesList());
  // }, []);
  // On lance l'appel API au 1er chargement de la page
  useEffect(() => {
    dispatch(thunkFetchBoardGamesList());
  }, []);

  return (
    <div className="flex flex-1 flex-wrap justify-around min-h-screen">
      {isLoading && <Spinner color="secondary" size="lg" />}

      {boardGames.map((boardGame) => (
        <Miniature
          key={boardGame.id}
          name={boardGame.name}
          description={boardGame.description}
          picture={boardGame.picture}
          slug={boardGame.slug}
        />
      ))}
    </div>
  );
}

export default CardsGroup;
