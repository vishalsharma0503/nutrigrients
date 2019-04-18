import Chart from "chart.js";

const chartUtil = data => {
  new Chart(document.getElementById("pie-chart"), {
    type: "doughnut",
    data: {
      labels: ["Proteins(%)", "Fats(%)", "Carbs(%)", "Fibres(%)"],
      datasets: [
        {
          label: "Nutrients (percentage)",
          backgroundColor: ["#c45850", "#FFF000", "#3CBA86", "#14C4B9"],
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
