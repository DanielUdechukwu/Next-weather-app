import { useGlobalContext } from "../context/AppContext";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function ChartSection() {
  const { weatherDetails } = useGlobalContext();
  const data = {
    labels: [
      "Humidity",
      "Pressure (psi)",
      "Wind Speed",
      "Temp max (C)",
      "Temp min (C)",
      "Feels like (C)",
      "Gust",
    ],
    datasets: [
      {
        label: "Weather Parameters",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        data: [
          weatherDetails.humidity,
          weatherDetails.pressure / 68.948,
          weatherDetails.wind_speed,
          weatherDetails.temp_max,
          weatherDetails.temp_min,
          weatherDetails.feels_like,
          weatherDetails.gust,
        ],
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <section className="w-[90%] mx-auto 2xl:w-[70%] my-[4rem]">
        <div className="flex justify-center">
          <Bar data={data} />
        </div>
      </section>
    </>
  );
}
