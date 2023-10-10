'use server';

import { revalidateTag } from 'next/cache';

export default async function GetResume(): Promise<Object> {
  const resume = await fetch(
    'https://gist.githubusercontent.com/smileyhogue/80c59982492aba1e5890cf3e305a4247/raw/4da6d8246f02a127b0b73db0d4958d50d27633f3/thogue.json',
    { next: { tags: ['resume'], revalidate: 3600 } }
  );
  const resumeData = JSON.parse(await resume.text());
  revalidateTag('resume');
  return resumeData;
}
