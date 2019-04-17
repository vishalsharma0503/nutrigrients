import Chart from "chart.js";

const chartUtil = data => {
  new Chart(document.getElementById("pie-chart"), {
    type: "doughnut",
    data: {
      labels: ["Proteins(%)", "Fats(%)", "Carbs(%)", "Fibres(%)"],
      datasets: [
        {
          label: "Nutrients (percentage)",
          backgroundColor: ["#c45850", "#8e5ea2", "#3CBA86", "#3e95cd"],
          data:
            data === undefined || data === null
              ? [30, 30, 30, 10]
              : [data.pro, data.fat, data.carbs, data.fibre]
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: "My Ideal Plate"
      }
    }
  });
};

export default chartUtil;
