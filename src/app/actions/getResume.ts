'use server';

import { revalidateTag } from 'next/cache';

export default async function GetResume(): Promise<Object> {
  const resume = await fetch(
    'https://gist.githubusercontent.com/smileyhogue/80c59982492aba1e5890cf3e305a4247/raw/40c8314653ec8e14b3f6cbe5ce761f3b70f9a9aa/thogue.json',
    { next: { tags: ['resume'], revalidate: 3600 } }
  );
  const resumeData = JSON.parse(await resume.text());
  revalidateTag('resume');
  return resumeData;
}
