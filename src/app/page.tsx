import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const metadata: Metadata = {
    title: 'Title OG',
    description: 'Description OG',
  }
  return metadata;
}

export default function Home() {
  return (
    <div>main 2</div>
  );
}
