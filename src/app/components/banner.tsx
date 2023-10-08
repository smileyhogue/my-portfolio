import getWeather from '@/app/actions/weather';
import { Box, Container, Button, Typography, Grid } from '@mui/material/';

export default async function Banner(resume: any) {
  const { currentTempF, currentForcast } = await getWeather();
  const resumeData = resume.resume;
  return (
    <Box component="section" id="home">
      <Container
        sx={{
          minHeight: {
            xs: '100vh',
            lg: '95vh',
          },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundImage: {
            lg: `url('/banner-graphic.svg')`,
          },
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right -2rem bottom',
        }}
      >
        <Box mb={7}>
          <Typography gutterBottom component="h4" variant="h5">
            <Typography color="primary" component="span" variant="inherit">
              Hello,
            </Typography>
            {'\u00A0'}I&apos;m Tristen Hogue
          </Typography>

          <Typography gutterBottom component="h1" variant="h2">
            {resumeData.work[0].position}
          </Typography>

          <Typography color="textSecondary" component="p" variant="subtitle1">
            in East TN where it is {currentTempF}° and {currentForcast}
          </Typography>
        </Box>

        {/* <Grid container spacing={2}>
          <Grid item>
            <Button
              color="primary"
              href="#portfolio"
              size="large"
              variant="contained"
            >
              {t.button1}
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              href="#contact"
              size="large"
              variant="outlined"
            >
              {t.button2}
            </Button>
          </Grid>
        </Grid> */}
      </Container>
    </Box>
  );
}

// return (
//   <div className="flex justify-center items-center h-screen">
//     <div className="text-center">
//       <h1
//         className="text-8xl md:text-9xl lg:text-10xl"
//         style={{ fontSize: '10vw' }}
//       >
//         {resumeData.basics.name}
//       </h1>
//       <h2 className="mt-4 text-gray-500" style={{ fontSize: '2.5vw' }}>
//         {resumeData.work[0].position} - {resumeData.work[0].name}
//       </h2>
//       <p className="mt-4 text-gray-500" style={{ fontSize: '1.5vw' }}>
//         in East TN where it is {currentTempF}° and {currentForcast}{' '}
//       </p>
//     </div>
//   </div>
// );
