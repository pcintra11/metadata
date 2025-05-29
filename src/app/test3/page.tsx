import { Metadata } from 'next';

export default async function Page() {
  return (
    <div>Home</div>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata: Metadata = {
    //metadataBase: new URL(AppEnvDeployConfig().app_url),
    title: 'Titulo Test3 OG',
    description: 'Descrição Test3 OG',
  }
  return metadata;
}