'use client';
import { useAppSelector } from '@/app/lib/hooks';
import Miniature from './Miniature';

// import { boardGames } from '../../assets/data';

function CardsGroup() {
  const boardGames = useAppSelector((state) => state);
  console.log(boardGames);

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

// grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
