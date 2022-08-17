window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(231,233,237)'
  };
  
  var randomScalingFactor = function() {
    return (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 100);
  };
  
  var incomeData = [1200, 700, 200, 900, 200, 300, 400, 800,89, 894, 889,99, ];
  
  var expenseData = [700, 300, 1200, 700, 200, 900, 200, 300, 400, 800,89, 894, ];
  
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var config = {
    type: 'line',
    data: {
      labels: MONTHS,
      datasets: [{
        label: "Income",
        backgroundColor: window.chartColors.green,
        borderColor: window.chartColors.green,
        data: incomeData,
        fill: false,
      }, {
        label: "Expense",
        fill: false,
        backgroundColor: window.chartColors.red,
        borderColor: window.chartColors.red,
        data: expenseData,
      }]
    },
    options: {
      responsive: true,
      title:{
        display:true,
        text:'Chart.js Line Chart'
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
     hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
          },
        }]
      }
    }
  };
  
  var ctx = document.getElementById("lineChart").getContext("2d");
  var myLine = new Chart(ctx, config);