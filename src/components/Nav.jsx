import Image from "next/image";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../context/AppContext";

export default function Nav() {
  const { coordinates, setCoordinates } = useGlobalContext();
  const { weatherInfo, setWeatherInfo } = useGlobalContext();
  const { initials, setInitials } = useGlobalContext();
  const { currentCountry, setCurrentCountry } = useGlobalContext();
  const { weatherDetails, setWeatherDetails } = useGlobalContext();

  useEffect(() => {
    setCoordinates({
      latitude: null,
      longitude: null,
    });

    setWeatherInfo({
      currentTemp: "",
      currentCity: "",
      currentCountry: "",
      weather: "",
      fullWeather: "",
      icon: "",
    });

    const getUserLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      });
    };

    getUserLocation();
  }, []);

  useEffect(() => {
    if (coordinates.longitude && coordinates.latitude) {
      const GetLocation = async () => {
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=metric&appid=9878f2cdd129a976734d74fcd9e2592f`
          );

          const data = await res.json();
          console.log(data);

          setWeatherInfo({
            weather: data.weather[0].main,
            fullWeather: data.weather[0].description,
            icon: data.weather[0].icon,
            currentTemp: data.main.temp,
            currentCity: data.name,
            currentCountry: data.sys.country,
          });

          setWeatherDetails({
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            gust: data.wind.gust,
            temp_max: data.main.temp_max,
            temp_min: data.main.temp_min,
            feels_like: data.main.feels_like,
            wind_speed: data.wind.speed,
          });

          setInitials(data.sys.country);
        } catch (error) {
          console.log(error);
        }
      };

      GetLocation();
    }
  }, [coordinates]);

  useEffect(() => {
    if (initials) {
      const FetchCountry = async () => {
        try {
          const response = await fetch(
            `https://api.first.org/data/v1/countries`
          );

          const res = await response.json();
          const country = res.data[initials].country;
          setCurrentCountry(country);
        } catch (error) {
          console.log(error);
        }
      };

      FetchCountry();
    }
  }, [initials]);

  return (
    <>
      <header>
        <nav className="w-[95%] mx-auto flex md:flex-row flex-col md:justify-between items-center border-b border-[#282D2D]">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <img
              src={`http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
              alt="Weather Status Icon"
            />
            <div className="bg-[#060707] w-[2.8rem] h-[2.8rem] items-center justify-center rounded-full hidden">
              <Image
                src="/images/user.svg"
                alt="User Icon"
                width={20}
                height={20}
              />
            </div>

            <div>
              <p className="text-[.9rem] font-semibold">
                {weatherInfo.weather}:{" "}
                <span>{weatherInfo.fullWeather} Today</span>
              </p>
            </div>
          </div>

          <div className="hidden md:flex">
            <ul className="flex gap-10">
              <li className="py-5 cursor-pointer">Real time</li>
              <li className="py-5 cursor-pointer">Week plan</li>
              <li className="py-5 cursor-pointer">Month plan</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
