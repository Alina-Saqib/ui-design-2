import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";
import { ScriptableContext } from "chart.js/auto";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, // 1. Import Filler plugin
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // 1. Register Filler plugin
);

// export const options = {
//   responsive: true,
//   tension: 0.3, // 2. Set the tension (curvature) of the line to your liking.  (You may want to lower this a smidge.)
// };

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      data: [
        "0",
        "30",
        "60",
        "30",
        "87",
        "60",
        "90",
        "0",
        "30",
        "60",
        "30",
        "93",
        "60",
        "90",
        "30",
        "60",
        "30",
        "53",
        "60",
        "90",
        "0",
        "30",
        "60",
        "30",
        "33",
        "60",
        "90",
        "30",
        "60",
        "30",
        "66",
        "60",
        "90",
        "0",
        "30",
        "60",
        "30",
        "120",
        "60",
        "90",
        "20",
        "50",
      ],
      borderColor: "#009FE3",
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 250);
        gradient.addColorStop(0, "#0078E3");
        gradient.addColorStop(1, "rgba(255,255,255,1)");
        return gradient;
      },

      fill: {
        target: "start", // Set the fill options
        // above: (context: ScriptableContext<"line">) => {
        //   const ctx = context.chart.ctx;
        //   const gradient = ctx.createLinearGradient(0, 0, 0, 250);
        //   gradient.addColorStop(0, "rgba(0,120,227,1)");
        //   gradient.addColorStop(1, "rgba(255,255,255,1)");
        //   return gradient;
        // },
      },
    },
  ],
};

const Graph = () => {
  return (
    <Box component="div" sx={{ height: "300px" }}>
      <Line
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          // tension: 0.3,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              boxWidth: 50,
              titleAlign: "center",
              bodyAlign: "center",
              usePointStyle: true,
              callbacks: {
                labelColor: (context) => {
                  return {
                    borderColor: "rgb(0,120,227,1)",
                    backgroundColor: "rgb(0,120,227,1)",
                    borderWidth: 0,
                    borderDash: [2, 2],
                    borderRadius: 2,
                  };
                },
              },
            },
          },
          elements: {
            point: {
              radius: 0,
              hoverRadius: 8,
              hoverBackgroundColor: "#2196F3",
              hoverBorderWidth: 2,
              hoverBorderColor: "white",
            },
            line: {
              tension: 0.3,
              borderWidth: 2,
            },
          },
          scales: {
            x: {
              ticks: {
                callback: () => "",
              },
              grid: {
                display: false,
              },
            },
            y: {
              border: {
                display: false,
              },
            },
          },
        }}
      />
    </Box>
  );
};

export default Graph;
