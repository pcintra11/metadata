import { Metadata } from 'next';

import PageIndex from './client';

export default async function Page() {
  return (
    <PageIndex />
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata: Metadata = {
    //metadataBase: new URL(AppEnvDeployConfig().app_url),
    title: 'Titulo Test1 OG',
    description: 'Descrição Test1 OG',
  }
  return metadata;
}