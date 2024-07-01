import { Card, Image, CardFooter } from '@nextui-org/react';

interface MiniatureProps {
  name: string;
  description: string;
  picture: string;
}

function Miniature({ name, description, picture }: MiniatureProps) {
  return (
    <Card
      isFooterBlurred
      fullWidth
      radius="lg"
      className="m-1 h-32 sm:w-40 sm:h-40 md:w-50 md:h-50 lg:w-60 lg:h-60"
    >
      <Image
        isZoomed
        removeWrapper
        alt="Boardgame cover"
        className="z-0 w-full h-full object-cover md:object-top"
        src={picture}
      />
      <CardFooter className="absolute z-10 bottom-0 flex-col !items-start bg-white/35 rounded-lg">
        <h3 className="text-black text-medium uppercase font-bold">{name}</h3>
        <h4 className="text-blueNight font-extralight text-xs truncate overflow-hidden ... h-1/5 w-full">
          {description}
        </h4>
      </CardFooter>
    </Card>
  );
}

export default Miniature;
