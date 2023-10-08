'use client';
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import EmploymentTimelineItem from './timelineItem';

export default function EmploymentTimeline(resume: any) {
  const resumeData = resume.resume;
  return (
    <Timeline position="alternate">
      {/* iterate through resumeData.work and create a timeline item for each */}
      {resumeData.work.slice(0, 6).map((job: any) => (
        <EmploymentTimelineItem key={job.name} job={job} />
      ))}
    </Timeline>
  );
}
