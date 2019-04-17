import Chart from "chart.js";

const chartUtil = data => {
  new Chart(document.getElementById("pie-chart"), {
    type: "doughnut",
    data: {
      labels: ["Proteins(%)", "Fats(%)", "Carbs(%)", "Fibres(%)"],
      datasets: [
        {
          label: "Nutrients (percentage)",
          backgroundColor: ["#3e95cd", "#8e5ea2", "#3CBA86", "#c45850"],
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
