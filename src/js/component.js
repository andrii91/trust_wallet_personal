$(document).ready(function () {
  $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > $('.menu-top').height());
  });



  $('.show_tooltip').hover(function () {
    $(this).append('<div class="tooltip">' + $(this).data('tooltip') + '</div>')
  }, function () {
    $('.tooltip').remove();
  });


  // USD CHART
  if ($("#total-chart").length > 0) {
    var ctx1 = document.getElementById("total-chart").getContext("2d");
    ctx1.canvas.height = 130;

    var white_gradient_usd = ctx1.createLinearGradient(0, 0, 0, 400);
    white_gradient_usd.addColorStop(0, 'rgba(106, 211, 110, 0)');
    white_gradient_usd.addColorStop(1, 'rgba(106, 211, 110, 0.25)');
    var empSatOptionsUSD = {
      responsive: true,
      maintainAspectRatio: false,
      datasetStrokeWidth: 3,
      pointDotStrokeWidth: 4,
      tooltipFillColor: "rgba(0,0,0,0.8)",
      legend: {
        display: false
      },
      hover: {
        mode: 'label'
      },
      scales: {
        xAxes: [{
          display: false
                }],
        yAxes: [{
          display: false,
          ticks: {
            min: 0,
            max: 85
          }
                }]
      },
      title: {
        display: false,
        fontColor: "#FFF",
        fullWidth: false,
        fontSize: 40,
        text: '82%'
      }
    };
    var empSatDataUSD = {
      labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль"],
      datasets: [{
        label: "Доход:",
        data: [28, 35, 36, 48, 46, 42, 60],
        backgroundColor: white_gradient_usd,
        borderColor: "#2fc738",
        borderWidth: 3,
        strokeColor: "#4e9a00",
        pointColor: "#fff",
        pointBorderColor: "#2fc738",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 5,
        pointHoverBorderWidth: 7,
        pointRadius: 5
            }]
    };
    var empSatConfigUSD = {
      type: 'line',
      options: empSatOptionsUSD,
      data: empSatDataUSD
    };
    new Chart(ctx1, empSatConfigUSD);


    var ctx2 = document.getElementById("total-chart1").getContext("2d");
    ctx2.canvas.height = 130;


    var empSatOptionsUSD_1 = {
      responsive: true,
      maintainAspectRatio: false,
      datasetStrokeWidth: 3,
      pointDotStrokeWidth: 4,
      tooltipFillColor: "rgba(0,0,0,0.8)",
      legend: {
        display: false
      },
      hover: {
        mode: 'label'
      },
      scales: {
        xAxes: [{
          display: false
                }],
        yAxes: [{
          display: false,
          ticks: {
            min: 0,
            max: 85
          }
                }]
      },
      title: {
        display: false,
        fontColor: "#FFF",
        fullWidth: false,
        fontSize: 40,
        text: '82%'
      }
    };

    var empSatDataUSD_1 = {
      labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      datasets: [{
        label: "Доход:",
        data: [0, 20, 50, 35, 40, 30, 45, 50, 35, 40, 30, 45, 55, 56, 59, 65, 40, 56, 45, 50, 35, 40, 30, 45],
        backgroundColor: white_gradient_usd,
        borderColor: "#2fc738",
        borderWidth: 2,
        strokeColor: "#fff",
        pointColor: "#fff",
        pointBorderColor: "#2fc738",
        pointBackgroundColor: "#ffffff",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 4,
        lineTension: 0,
        //        "fill": false,

        pointRadius: 2
            }]
    };
    var empSatConfigUSD_1 = {
      type: 'line',
      options: empSatOptionsUSD_1,
      data: empSatDataUSD_1
    };
    new Chart(ctx2, empSatConfigUSD_1);
  }



  $(".item-scroll").mCustomScrollbar({
    scrollButtons: {
      enable: true
    }
  });
  
  $('.rang-scale').each(function(){
    var $from = $(this);
    $from.find('span').css({
      'width' : ($from.data('scale')/$from.data('all')*100)+'%'
    })
  })

});