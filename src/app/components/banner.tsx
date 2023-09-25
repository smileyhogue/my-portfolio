import getWeather from '@/app/utils/weather'
import Image from 'next/image';

export default async function Banner() {
  const { currentTempF, currentForcast } = await getWeather();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1
          className="text-8xl md:text-9xl lg:text-10xl"
          style={{ fontSize: "10vw" }}
        >
          Tristen Hogue
        </h1>
        <h2 className="mt-4 text-gray-500" style={{ fontSize: "2.5vw" }}>
          Fullstack Developer - Tier 3 Support
        </h2>
        <p className="mt-4 text-gray-500" style={{ fontSize: "1.5vw" }}>in East TN where it is {currentTempF}° and {currentForcast} </p>
      </div>
    </div>
  );
}
