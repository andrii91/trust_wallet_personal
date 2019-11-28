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
    ctx1.canvas.height = 136;

    if ($('body').hasClass('btc-template')) {
      //background-image: linear-gradient(to top, #f2bd42 0%, #fed01a 100%);
      var white_gradient_usd = ctx1.createLinearGradient(0, 0, 0, 400);
      white_gradient_usd.addColorStop(0, 'rgba(254, 208, 26, 0)');
      white_gradient_usd.addColorStop(1, 'rgba(254, 208, 26, 0.5)');
      var color_graf = "#fed01a";
    } else {
      var white_gradient_usd = ctx1.createLinearGradient(0, 0, 0, 400);
      white_gradient_usd.addColorStop(0, 'rgba(106, 211, 110, 0)');
      white_gradient_usd.addColorStop(1, 'rgba(106, 211, 110, 0.25)');
      var color_graf = "#2fc738";

    }


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
        borderColor: color_graf,
        borderWidth: 3,
        strokeColor: "#4e9a00",
        pointColor: "#fff",
        pointBorderColor: color_graf,
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
  }

  if ($("#total-chart1").length > 0) {

    var ctx2 = document.getElementById("total-chart1").getContext("2d");
    ctx2.canvas.height = 136;


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
        borderColor: color_graf,
        borderWidth: 2,
        strokeColor: "#fff",
        pointColor: "#fff",
        pointBorderColor: color_graf,
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

  $('.rang-scale').each(function () {
    var $from = $(this);
    $from.find('span').css({
      'width': ($from.data('scale') / $from.data('all') * 100) + '%'
    })
  })


  $('#table-deposit').DataTable({
    "dom": '<pft>',
    "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
    "pagingType": "simple_numbers",
    responsive: true
  });

  $('#table-transactions').DataTable({
    "dom": '<pft>',
    "lengthMenu": [[10, 250, -1], [10, 25, 50, "All"]],
    "pagingType": "simple_numbers",
    responsive: true
  });


  $('#table-exchange').DataTable({
    "dom": '<pft>',
    "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
    "pagingType": "simple_numbers",
    responsive: true
  });


  $('.ranks-table').DataTable({
    "dom": '<t>',
    "lengthMenu": [[8, 16, 25, 50, -1], [8, 16, 25, 50, "All"]],
    "pagingType": "simple_numbers",
    responsive: true
  });

  $('.invest-table').DataTable({
    "dom": '<tp>',
    "lengthMenu": [[4, 8, 16, 32, -1], [4, 8, 16, 32, "All"]],
    "pagingType": "simple_numbers",
    responsive: true
  });





  $("#calculator_input_usd").ionRangeSlider({
    skin: "round",
    grid: false,
    hide_min_max: true,
    hide_from_to: true,
    min: 0,
    max: 50000,
    from: 1000
  });


  function usd_calc() {
    var usd_sum = Number($('#calculator_input_usd').val());
    var usd_percent = Number($('#calculator_input_usd').data('percent') / 100);
    var amount = 0;
    var in_day = $('#day_usd');
    var in_month = $('#month_usd');
    var in_end = $('#year_usd');

    amount = usd_sum * usd_percent;
    /*    if (usd_sum <= 4999) {
          amount = usd_sum * 0.07;
        } else if (usd_sum >= 5000 && usd_sum <= 9999) {
          amount = usd_sum * 0.08;
        } else {
          amount = usd_sum * 0.1;
        }*/

    in_day.text('$' + (amount / new Date(new Date().getFullYear(), new Date().getMonth() - 1, 0).getDate()).toFixed(2));
    in_month.text('$' + new Intl.NumberFormat('ru-RU').format(amount.toFixed(2)));
    in_end.text('$' + new Intl.NumberFormat('ru-RU').format((amount * 12).toFixed(2)));


  }

  var calculator_input_usd = Number($('#calculator_input_usd').val());

  $('#calc_val_usd').val(calculator_input_usd);
  /*Считает сколько $ девиденты*/

  usd_calc();


  $("#calculator_input_usd").change(function () {
    var $from = $(this);
    calculator_input_usd = Number($from.val());
    $('#calc_val_usd').val(calculator_input_usd);
    /*Считает сколько $ девиденты*/
    usd_calc();



  })

  $("#calc_val_usd").change(function () {
    var $from = $(this);
    var calc_val_usd = Number($from.val());

    var sliderOne = $("#calculator_input_usd").data("ionRangeSlider");

    sliderOne.update({
      from: calc_val_usd
    });
  })

  $('.calc-radio li').click(function () {
    $('.calc-radio li').removeClass('active');
    $(this).addClass('active');
    $('#calculator_input_usd').data('percent', $(this).data('percent'));
    $('.calc-percent .num').text($(this).data('percent') + '%');
    usd_calc();
  })

  $('[data-popup]').magnificPopup({
    type: 'inline',
    preloader: false
  });

  $('.tab-currency a').click(function (e) {
    e.preventDefault();
    $('.tab-currency li').removeClass('active');
    $('.tab-item').removeClass('active');
    $(this).parent().addClass('active');
    $($(this).attr('href')).addClass('active');

  })

  $('.invest-tab a').click(function (e) {
    e.preventDefault();
    $('.invest-tab a').removeClass('active');
    $('.invest-item').removeClass('active');
    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');

  })

  $('.pay-close').click(function () {
    $('.mfp-close').trigger('click')
  })

  $('.form-pay').on('submit', function (e) {
    e.preventDefault();
    $(this).addClass('submit-form');
  })

  $('#nav-icon').click(function () {
    $(this).toggleClass('open');
    $(this).parents('.nav').toggleClass('open');
    $('.nav-menu').slideToggle(200);
  });

  $('.menu-fixed').click(function () {
    $(this).toggleClass('m-close')
  })


  /*====================*/
  var exchange_rate = '7646.6';
  $('.currency-exchange').each(function () {
    $(this).find('.card').matchHeight();
  });

  var course = exchange_rate;
  var selectFrom = $('#currency-select-from');
  var selectTo = $('#currency-select-to');
  var balanceFrom = selectFrom.find('option:selected').attr('data-balance');
  var currencyFrom = selectFrom.find('option:selected').text();
  var balanceTo = selectTo.find('option:selected').attr('data-balance');
  var currencyTo = selectTo.find('option:selected').text();
  $('#curr_available_from').text(balanceFrom + ' ' + currencyFrom);
  $('#curr_available_to').text(balanceTo + ' ' + currencyTo);

  $('input#curr-from').numericInput({
    allowFloat: true,
    allowNegative: false
  });
  $('input#curr-to').numericInput({
    allowFloat: true,
    allowNegative: false
  });

  $('.exchange-object select').on('change', function () {
    var inputCurrencyFrom = $('input#curr-from');
    var inputCurrencyFrom__val = inputCurrencyFrom.val();
    var inputCurrencyTo = $('input#curr-to');
    var inputCurrencyTo__val = inputCurrencyTo.val();

    inputCurrencyFrom.val(inputCurrencyTo__val);
    inputCurrencyTo.val(inputCurrencyFrom__val);
  });

  selectFrom.on('change', function () {
    var sel__option = $(this).find('option:selected').siblings().val();
    selectTo.val(sel__option);

    var balanceTo = selectTo.find('option:selected').attr('data-balance');
    var currencyTo = selectTo.find('option:selected').text();
    $('#curr_available_to').text(balanceTo + ' ' + currencyTo);

    var avBalance = $(this).find('option:selected').attr('data-balance');
    var avCurrency = $(this).find('option:selected').text();
    $('#curr_available_from').text(avBalance + ' ' + avCurrency);
  });

  selectTo.on('change', function () {
    var sel__option = $(this).find('option:selected').siblings().val();
    selectFrom.val(sel__option);

    var balanceFrom = selectFrom.find('option:selected').attr('data-balance');
    var currencyFrom = selectFrom.find('option:selected').text();
    $('#curr_available_from').text(balanceFrom + ' ' + currencyFrom);

    var avBalance = $(this).find('option:selected').attr('data-balance');
    var avCurrency = $(this).find('option:selected').text();
    $('#curr_available_to').text(avBalance + ' ' + avCurrency);

  });


  $('input#curr-from').on('input', function () {
    var thisCurrency = $(this).parents('.input-group').find('select option:selected');
    var inputCurrencyTo = $('input#curr-to');
    var inputCurrencyFrom = $('input#curr-from');

    switch (thisCurrency.val()) {
      case 'usd':
        inputCurrencyTo.val(($(this).val() / course).toFixed(5));
        break;

      case 'btc':
        inputCurrencyTo.val(($(this).val() * course).toFixed(2));
        break;

    }

    var fromCurrency = inputCurrencyFrom.parents('.input-group').find('select option:selected');
    var toCurrency = inputCurrencyTo.parents('.input-group').find('select option:selected');
    $('.balance-minus').text(-1 * inputCurrencyFrom.val() + ' ' + fromCurrency.text());
    $('.balance-plus').text(inputCurrencyTo.val() + ' ' + toCurrency.text());
  });

  $('input#curr-to').on('input', function () {
    var thisCurrency = $(this).parents('.input-group').find('select option:selected');
    var inputCurrencyTo = $('input#curr-to');
    var inputCurrencyFrom = $('input#curr-from');
    switch (thisCurrency.val()) {
      case 'usd':
        inputCurrencyFrom.val(($(this).val() / course).toFixed(5));
        break;

      case 'btc':
        inputCurrencyFrom.val(($(this).val() * course).toFixed(2));
        break;
    }
    var fromCurrency = inputCurrencyFrom.parents('.input-group').find('select option:selected');
    var toCurrency = inputCurrencyTo.parents('.input-group').find('select option:selected');
    $('.balance-minus').text(-1 * inputCurrencyFrom.val() + ' ' + fromCurrency.text());
    $('.balance-plus').text(inputCurrencyTo.val() + ' ' + toCurrency.text());
  });


  /*===========================*/
  $('.team-content').each(function () {
    var teamItemAll = $(this).find('.team-item').length;
    if (teamItemAll > 1) {
      $(this).find('.team-item').addClass('block-icon');
    }
  })

  $('.block-icon').click(function () {
    $(this).addClass('show-next');
    $(this).next().css('display', 'flex');
    
  })

  //  $('.team-content .team-item').length
});