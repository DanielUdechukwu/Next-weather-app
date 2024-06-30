import React, { useState, createContext, useContext } from "react";

const AppContext = createContext();

export const GlobalContext = ({ children }) => {
  // const [currentCity, setCurrentCity] = useState();
  // const [currentCountry, setCurrentCountry] = useState();
  const [coordinates, setCoordinates] = useState({
    longitude: "",
    latitude: "",
  });
  const [weatherInfo, setWeatherInfo] = useState({
    currentTemp: "",
    currentCity: "",
    currentCountry: "",
    weather: "",
    fullWeather: "",
    icon: "",
  });
  const [initials, setInitials] = useState();
  const [currentCountry, setCurrentCountry] = useState();
  const [weatherDetails, setWeatherDetails] = useState({
    pressure: "",
    humidity: "",
    wind_speed: "",
    gust: "",
    feels_like: "",
    temp_max: "",
    temp_min: "",
  });

  return (
    <AppContext.Provider
      value={{
        coordinates,
        setCoordinates,
        weatherInfo,
        setWeatherInfo,
        initials,
        setInitials,
        currentCountry,
        setCurrentCountry,
        weatherDetails,
        setWeatherDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// export { GlobalContext, AppContext };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
