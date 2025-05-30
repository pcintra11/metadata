import { Metadata } from 'next';

import PageIndex from './client';

export default async function Page() {
  return (
    <PageIndex />
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata: Metadata = {
    //metadataBase: new URL('https://paulo2.vercel.app/'),
    title: 'Titulo Test1 - new ',
    description: 'Descrição Test1 - new',
    keywords: ['aaa', 'bbbbbbb'],
    robots: ({ index: false, follow: false }),
    openGraph: {
      title: 'Titulo Test1 OG - new',
      description: 'Descrição Test1 OG - new',
      url: new URL('https://paulo2.vercel.app/test1xxx'),
      images: [
        { url: new URL('https://res.cloudinary.com/pcintra/image/upload/v1748578059/vizinet/prd/generatedByAI/business/%2Atest_periodic%2A-01748578059361-0.png') },
      ],
      siteName: 'testABCD',
      locale: 'pr_BR',
      type: 'website',
    }
  }
  return metadata;
}