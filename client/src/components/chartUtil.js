import Chart from "chart.js";

const chartUtil = () => {
  new Chart(document.getElementById("pie-chart"), {
    type: "doughnut",
    data: {
      labels: ["Proteins(%)", "Fats(%)", "Carbs(%)", "Fibres(%)"],
      datasets: [
        {
          label: "Nutrients (percentage)",
          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#c45850"],
          data: [30, 30, 30, 10]
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
