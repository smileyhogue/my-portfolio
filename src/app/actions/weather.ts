'use server';

import { revalidateTag } from 'next/cache';

export default async function getWeather() {
  // fetch forcast from NWS api
  const forcast = await fetch(
    'https://api.weather.gov/gridpoints/MRX/112,80/forecast',
    { next: { tags: ['forcast'], revalidate: 3600 } }
  );
  const observations = await fetch(
    'https://api.weather.gov/stations/KTRI/observations',
    { next: { tags: ['observation'], revalidate: 3600 } }
  );
  const observartionData = await observations.json();
  const forcastData = await forcast.json();
  // get the current temp
  const currentTemp = observartionData.features[0].properties.temperature.value;
  // conver to fahrenheit and limit to 1 decimal place
  const currentTempF = ((currentTemp * 9) / 5 + 32).toFixed(0);
  // get the current forcast
  const currentForcast = forcastData.properties.periods[0].shortForecast;
  // return the current temp and forcast as JSON
  //console.log({ currentTemp, currentForcast })
  console.log({ currentTempF, currentForcast });
  revalidateTag('forcast');
  revalidateTag('observation');
  return { currentTempF, currentForcast };
}
