'use client';

//import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import Miniature from './Miniature';
// import { RootState } from '@reduxjs/toolkit/query';
// import { useEffect } from 'react';
// import { thunkFetchBoardGamesList } from '@/app/lib/middlewares/thunkFetchBoardGamesList';

import { boardGames } from '../../assets/data';

function CardsGroup() {
  // const dispatch = useAppDispatch();
  // const boardGames = useAppSelector((state) => state.boardGames.boardGamesList);
  // console.log(boardGames);

  // useEffect(() => {
  //  dispatch(thunkFetchBoardGamesList());
  // }, []);

  return (
    <div className="flex flex-1 flex-wrap justify-around">
      {boardGames.map((boardGame) => (
        <Miniature
          key={boardGame.id}
          name={boardGame.name}
          description={boardGame.description}
          picture={boardGame.picture}
        />
      ))}
    </div>
  );
}

export default CardsGroup;
