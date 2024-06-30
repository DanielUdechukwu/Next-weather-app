import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { useGlobalContext } from "../context/AppContext";

const Hero = () => {
  const { weatherInfo, setWeatherInfo } = useGlobalContext();
  const { initials } = useGlobalContext();
  const { currentCountry, setCurrentCountry } = useGlobalContext();

  // useEffect(() => {

  //   FetchCountry();
  // }, []);

  return (
    <>
      <section className="flex flex-col md:flex-row justify-between items-center w-[95%] pb-8 mx-auto mt-[5rem] border-b border-[#282D2D] 2xl:w-[70%] lg:w-[90%]">
        <div className="text-center md:text-start">
          <h3 className="2xl:text-[13rem] text-[3rem] lg:text-[8rem] font-semibold md:text-[5rem]">
            {weatherInfo.currentTemp}&deg;C
          </h3>
          <div className="py-2 px-5 font-semibold text-[1.3rem] bg-[#282D2D] rounded-full">
            {weatherInfo.currentCity}, {currentCountry}
          </div>
        </div>
        <div>
          <Image
            src="/images/cloud.png"
            width={700}
            height={150}
            alt="Clouds"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
