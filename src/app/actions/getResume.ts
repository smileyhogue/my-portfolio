'use server';

import { revalidateTag } from 'next/cache';

export default async function GetResume(): Promise<Object> {
  const resume = await fetch(
    'https://gist.githubusercontent.com/smileyhogue/8a1d8c926d08cbe0a8604dac4f6b94aa/raw/c169450c50baeddaa82ccf414c87b45fa526291a/thogue.json',
    { next: { tags: ['resume'], revalidate: 3600 } }
  );
  const resumeData = JSON.parse(await resume.text());
  revalidateTag('resume');
  return resumeData;
}
