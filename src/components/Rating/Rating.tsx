'use client';

import React from 'react';
import { detailsGame } from '../../assets/detailsGame';
import Image from 'next/image';

export default function StarRating({ goldRating }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < goldRating) {
      stars.push(
        <Image
          src="/images/pinguin_note.png"
          alt="pinguin gold"
          width={35}
          height={35}
          objectFit="contain"
        />
      ); // étoile pleine
    } else {
      stars.push(
        <Image
          src="/images/pinguin_note_nb.png"
          alt="pinguin grey"
          width={35}
          height={35}
          objectFit="contain"
        />
      ); // étoile vide
    }
  }

  return <div className="flex">{stars}</div>;
}
