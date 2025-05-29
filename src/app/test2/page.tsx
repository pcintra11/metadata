import { Metadata } from 'next';

import PageIndex from './client';

export default async function Page() {
  return (
    <PageIndex />
  )
}

export const metadata: Metadata = {
  title: 'Titulo Test2 OG',
  description: 'Descrição Test2 OG',
}
