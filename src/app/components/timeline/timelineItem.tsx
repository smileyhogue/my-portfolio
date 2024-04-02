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
import styled from '@mui/material/styles/styled';

import React, { useEffect, useState } from 'react';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // Default color
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main, // Change background color on hover
    color: theme.palette.secondary.contrastText, // Change text color on hover
  },
}));

export default function EmploymentTimelineItem(job: any) {
  const [showSummary, setShowSummary] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsSmallScreen((window as any).innerWidth <= 768);
    } else {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 768);
      };

      handleResize(); // Call once immediately to set initial state

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
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
          <Typeography color="secondary.light" component="h3" variant="inherit">
            {job.job.position}
          </Typeography>
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
                <CustomButton
                  variant="contained"
                  onClick={() => setShowSummary(!showSummary)}
                >
                  {showSummary ? (
                    <Typeography
                      color="primary"
                      component="span"
                      variant="inherit"
                    >
                      Hide Summary
                    </Typeography>
                  ) : (
                    <Typeography
                      color="primary"
                      component="span"
                      variant="inherit"
                    >
                      Show Summary
                    </Typeography>
                  )}
                </CustomButton>
              )}
            </>
          )}
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
}
