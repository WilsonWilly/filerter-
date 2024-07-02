import { Card, Image, CardFooter } from '@nextui-org/react';
import { Suspense } from 'react';

interface MiniatureProps {
  name: string;
  description: string;
  picture: string;
  name: string;
  description: string;
  picture: string;
}

function Miniature({ name, description, picture }: MiniatureProps) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="mx-2 my-1 w-full max-h-32 sm:mx-0.5 sm:size-36 md:size-44 md:max-h-40"
    >
      <Image
        isZoomed
        removeWrapper
        alt="Boardgame cover"
        className="z-0 w-full h-full object-cover sm:object-top"
        src={picture}
      />
      <CardFooter className="absolute z-10 bottom-0 flex-col !items-start bg-white/35 rounded-lg h-2/5 ">
        <h3 className="text-black text-sm uppercase font-bold truncate ... w-full">
          {name}
        </h3>
        <h4 className="text-blueNight font-extralight text-xs truncate overflow-hidden ... w-full">
          {description}
        </h4>
      </CardFooter>
    </Card>
  );
}

export default Miniature;

// sm:w-40 sm:h-40 md:w-50 md:h-50 lg:w-60 lg:h-60
