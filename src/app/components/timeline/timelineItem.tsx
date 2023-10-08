import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typeography from '@mui/material/Typography';

export default function EmploymentTimelineItem(job: any) {
  // convert /n in summary to <br />
  let fixedSummary = '';
  if (!job.job.summary) {
    fixedSummary = '';
  } else {
    let summary = job.job.summary;
    fixedSummary = summary.split(`\n`).map((subStr: string) => {
      return (
        <>
          {subStr}
          <br />
        </>
      );
    });
  }
  return (
    <TimelineItem>
      {/* <TimelineOppositeContent color="text.secondary">
    {job.job.startDate} - {job.job.endDate ? job.job.endDate : 'Present'}
  </TimelineOppositeContent> */}
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Card sx={{ p: '1rem' }}>
          <h2>{job.job.name}</h2>
          <h3>{job.job.position}</h3>
          <h4>
            <Typeography gutterBottom>
              <Typeography color="primary" component="span" variant="inherit">
                {job.job.startDate} -
              </Typeography>
              {'\u00A0'}
              {job.job.endDate ? job.job.endDate : 'Present'}
            </Typeography>
          </h4>
          {fixedSummary === '' ? null : (
            <Box sx={{ mt: '1rem' }}>
              <p>{fixedSummary}</p>
            </Box>
          )}
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
}
