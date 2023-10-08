'use client';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typeography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import React, { useEffect, useState } from 'react';

export default function EmploymentTimelineItem(job: any) {
  const [showSummary, setShowSummary] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
          {fixedSummary !== '' && (
            <>
              <Box
                sx={{
                  mt: '1rem',
                  '@media (max-width: 768px)': {
                    display: showSummary ? 'block' : 'none', // Only hide the summary on small screens when showSummary is false
                  },
                }}
              >
                <p>{fixedSummary}</p>
              </Box>
              {isSmallScreen && !showSummary && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setShowSummary(!showSummary)}
                >
                  {showSummary ? 'Hide Summary' : 'Show Summary'}
                </Button>
              )}
            </>
          )}
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
}
