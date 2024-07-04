'use client';

import { Card, Image, CardFooter, Tooltip } from '@nextui-org/react';
import Link from 'next/link';

interface MiniatureProps {
  name: string;
  description: string;
  picture: string;
  slug: string;
}

function Miniature({ name, description, picture, slug }: MiniatureProps) {
  console.log(slug);

  return (
    <Link href={`/detail/${encodeURIComponent(slug)}`}>
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
        <Tooltip
          content={
            <div className="px-1 py-2">
              <div className="text-small font-bold">{name}</div>
              <div className="text-tiny">{description}</div>
            </div>
          }
        >
          <CardFooter className="absolute z-10 bottom-0 flex-col !items-start bg-white/35 rounded-lg h-2/5 ">
            <h3 className="text-black text-sm uppercase font-bold truncate ... w-full">
              {name}
            </h3>
            <h4 className="text-blueNight font-extralight text-xs truncate overflow-hidden ... w-full">
              {description}
            </h4>
          </CardFooter>
        </Tooltip>
      </Card>
    </Link>
  );
}

export default Miniature;
