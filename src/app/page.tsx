import Banner from '@/app/components/banner';
import About from '@/app/components/about';
import GetResume from '@/app/actions/getResume';
import { Suspense } from 'react';
import theme from '@/app/components/style/theme';
import { ThemeProvider } from '@mui/material/styles';
import EmploymentTimeline from '@/app/components/timeline/timeline';

export default async function Home() {
  let resumeJSON = await GetResume();
  resumeJSON = JSON.parse(JSON.stringify(resumeJSON));

  return (
    <ThemeProvider theme={theme}>
      {resumeJSON ? <Banner resume={resumeJSON} /> : null}
      {resumeJSON ? <About resume={resumeJSON} /> : null}
      {resumeJSON ? <EmploymentTimeline resume={resumeJSON} /> : null}
    </ThemeProvider>
  );
}
