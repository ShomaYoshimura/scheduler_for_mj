"use client"
import React from 'react'
import Link from 'next/link'

type Props = {
    root:string,
    displayWord:string
}

const RootLink: React.FC<Props> =({ root, displayWord })  => {
  return (
        <ul>
          <li>
            <Link href={root}>{displayWord}</Link>
          </li>
        </ul>

  );
}

export default RootLink;
