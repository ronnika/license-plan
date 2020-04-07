new Chart(document.getElementById("line-chart"), {
    maintainAspectRatio: false,
    type: 'line',
    data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          datasets: [{ 
          data: [15,10,11,32,30,35,31,36,33],          
          borderColor: "#2c7594",
          pointBackgroundColor: "#2c7594",
          pointRadius: 3,
          fill: false,
          lineTension: 0
        }
      ]
    },
    options: {
        events: [],
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        },
        scales:{
            xAxes: [{
                ticks: {
                   "fontSize": 0,
                },
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                ticks: {
                    display: false
                },
                gridLines: {
                    display:false
                }
            }]
        },       
    }
  });