import Image from 'next/image';
import Hero from './components/views/Hero';
import { client } from '../../sanity/lib/client';

const getSanityData = async () => {
  const res = await client.fetch(`*[_type=='category']`);
  return res;
};

export default async function Home() {
  const data = await getSanityData();
  console.log(data);
  return (
    <main>
      <Hero />
      <div></div>
    </main>
  );
}
