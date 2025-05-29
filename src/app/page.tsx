import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const metadata: Metadata = {
    title: 'Home OG',
    description: 'Home OG',
  }
  return metadata;
}

export default function Home() {
  return (
    <div>main</div>
  );
}
