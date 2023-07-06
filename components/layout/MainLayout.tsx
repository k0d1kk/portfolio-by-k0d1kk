import { FC } from 'react';

import Head from 'next/head';

import { IMainLayout } from './types';
import { Main } from './MainLayoutStyled';

export const MainLayout: FC<IMainLayout> = ({ title, desc, children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="it,portfolio,k0d1kk,kodik,kodikk,frontend,fullstack,backend,developer,frontenddeveloper,fullstackdeveloper,backenddeveloper,ukraine
"
        />
      </Head>
      <Main>{children}</Main>
    </>
  );
};
