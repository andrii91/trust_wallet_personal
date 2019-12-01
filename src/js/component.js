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

  if ($("#reportgraf").length > 0) {

    new Chart('reportgraf', {
      type: 'line',
      data: {
        labels: [0, 20, 50, 35, 40, 30, 45, 50, 35, 40, 30, 45, 55, 56, 59, 65, 40, 56, 45, 50, 35, 40, 30, 45],
        datasets: [{
          backgroundColor: 'transparent',
          borderColor: '#2fc738',
          data: [0, 20, 50, 35, 40, 30, 45, 50, 35, -40, 30, 45, 55, -56, -59, 65, 40, 56, 45, 50, 35, 40, 30, 45],
          label: 'График монеты',
          //						fill: boundary
					}]
      },
      options: {
        maintainAspectRatio: false,
        spanGaps: false,
        elements: {
          line: {
            tension: 0.000001
          }
        },
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            ticks: {
              autoSkip: false,
              maxRotation: 0
            }
				}]
        }
      }
    });
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

  $('.report-table table').dataTable({
    responsive: true,
    "dom": '<fltp>'
  });







  $('#property-table').DataTable({
    "dom": '<pft>',
    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
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

  $('.order-table table').DataTable({
    "scrollY": "200px",
    "pagingType": "simple_numbers",
    "scrollCollapse": true,
    "dom": '<t>',
    "paging": false,
    responsive: true
  });

  $('.book-order table').DataTable({
    "scrollY": "234px",
    "pagingType": "simple_numbers",
    "scrollCollapse": true,
    "dom": '<t>',
    "paging": false,
    responsive: true
  });

  $('.order-table table .icon-arrow-down, .book-order_2 table .icon-arrow-down').each(function () {
    $(this).parents('tr').addClass('red-bg')
  })




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
    if ($(this).hasClass('active')) {
      $('.calc-radio li').addClass('active');
      $(this).removeClass('active');
      $('#calculator_input_usd').data('percent', $('.calc-radio li.active').data('percent'));
      $('.calc-percent .num').text($('.calc-radio li.active').data('percent') + '%');
    } else {
      $('.calc-radio li').removeClass('active');
      $(this).addClass('active');
      $('#calculator_input_usd').data('percent', $(this).data('percent'));
      $('.calc-percent .num').text($(this).data('percent') + '%');
    }
    if ($('.calc-radio li.active').hasClass('active') && $('.calc-radio li.active').data('click') == 'show') {
      console.log('1');
      $('.security-show').trigger('click');
    }

    usd_calc();
  })

  $('[data-popup]').magnificPopup({
    type: 'inline',
    preloader: false,
    callbacks: {
      close: function () {
        $('body').removeClass('m-hidden');

      }
    }
  });

  $('[data-popup]').click(function () {
    $('body').addClass('m-hidden');
  })


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

    if ($(this).hasClass('show-next')) {
      $(this).removeClass('show-next');
      $(this).next().css('display', 'none');
/*      $(this).nextAll().removeClass('show-next');
      $(this).nextAll().css('display', 'none');*/
    } else {
      $(this).addClass('show-next');
      $(this).next().css('display', 'flex');

    }


  })

  /*================================================*/


  if ($("#chartContainer").length > 0) {

    var dataPoints = [];

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light1", // "light1", "light2", "dark1", "dark2"
      exportEnabled: true,
      /*	title: {
      		text: "Netflix Stock Price in 2016"
      	},
      	subtitles: [{
      		text: "Weekly Averages"
      	}],*/
      axisX: {
        interval: 1,
        valueFormatString: "MMM"
      },
      axisY: {
        includeZero: false,
        prefix: "$",
        title: "Price"
      },
      toolTip: {
        content: "Date: {x}<br /><strong>Price:</strong><br />Open: {y[0]}, Close: {y[3]}<br />High: {y[1]}, Low: {y[2]}"
      },
      data: [{
        type: "candlestick",
        risingColor: "#2fc738",
        color: "#fdc825",
        yValueFormatString: "$##0.00",
        dataPoints: dataPoints
	}]
    });

    $.get("js/netflix-stock-price.csv", getDataPointsFromCSV);

    function getDataPointsFromCSV(csv) {
      var csvLines = points = [];
      csvLines = csv.split(/[\r?\n|\r|\n]+/);
      for (var i = 0; i < csvLines.length; i++) {
        if (csvLines[i].length > 0) {
          points = csvLines[i].split(",");
          dataPoints.push({
            x: new Date(
              parseInt(points[0].split("-")[0]),
              parseInt(points[0].split("-")[1]),
              parseInt(points[0].split("-")[2])
            ),
            y: [
					parseFloat(points[1]),
					parseFloat(points[2]),
					parseFloat(points[3]),
					parseFloat(points[4])
				]
          });
        }
      }
      chart.render();
    }

    setTimeout(function () {
      $('.canvasjs-chart-credit').hide();
    }, 500)

  }
  /*=================*/


  $('#input-price').on('change', function () {
    var summ = Number($(this).val()) * Number($('#input-amount').val());
    $('#input-all').text(summ);
  })

  $('#input-amount').on('change', function () {
    var summ = Number($(this).val()) * Number($('#input-price').val());
    $('#input-all').text(summ);
  })



  $('.settings-tab a').click(function (e) {
    e.preventDefault();
    $('.settings-tab a').removeClass('active');
    $('.settings-item').removeClass('active');
    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
  })



  $('input[type="tel"]').intlTelInput({
    defaultCountry: "ua",
    initialCountry: "auto",
    preferredCountries: ["ua", "ru", 'az', 'am', 'by', 'kz', 'kg', 'md', 'tj', 'uz', 'tm', 'ge'],
    autoPlaceholder: 'aggressive',
    nationalMode: false,
    customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
      return "+" + selectedCountryData.dialCode;
    },
    geoIpLookup: function (success, failure) {
      /*
      $.get( "https://ip-api.com/json/", function( data ) {
      	var countryCode = (data.countryCode) ? data.countryCode : "ru";
      	success(countryCode);
      }, "json" );*/

      $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
        var countryCode = (resp && resp.country) ? resp.country : "ua";
        success(countryCode);
      });
    },
    separateDialCode: false,
    formatOnDisplay: false,
    //		utilsScript: 'https://mk.beauty-matrix.ru/assets/plugins/intltelinput/js/utils.js',
  });


  $('.check').each(function () {
    $(this).on('change', function () {
      var form = $(this).parents('form');

      if ($(this).prop('checked')) {

        form.find('.phone').slideDown();
      } else {
        form.find('.phone').slideUp();
      }
    });
  });

  $('.referal-form button').click(function () {
    var copyText = document.getElementById("referal-link");
    copyText.select();

    document.execCommand("copy");
  })

  $('.video').each(function () {
    $(this).find('img').attr('src', 'http://i1.ytimg.com/vi/' + $(this).data('youtube_id') + '/maxresdefault.jpg')
  });

  $('.play-btn').click(function () {
    var $from = $(this);
    var imgWidth = $from.parents('.video').find('img').width();
    var imgHeight = $from.parents('.video').find('img').height();
    $from.parents('.video').find('img').hide();
    $from.parents('.video').find('.video-bg').hide();
    $from.hide();

    $from.parents('.video').append('<iframe width="' + imgWidth + '" height="' + imgHeight + '" src="https://www.youtube.com/embed/' + $from.parents(".video").data("youtube_id") + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  })
  $('.menu-fixed').addClass('m-close');


  $('.transfer-form select[name="type"]').change(function () {
    if ($(this).val() == '2') {
      $('.card-plus').show();
    } else {
      $('.card-plus').hide();

    }
  })



  //  https://stripe.dev/jquery.payment/example/

//  $('[data-numeric]').payment('restrictNumeric');
  $('.cc-number').payment('formatCardNumber');
//  $('.cc-exp').payment('formatCardExpiry');
//  $('.cc-cvc').payment('formatCardCVC');
/*  $.fn.toggleInputError = function (erred) {
    this.parent('.form-group').toggleClass('has-error', erred);
    return this;
  };
  $('form').submit(function (e) {
    e.preventDefault();
    var cardType = $.payment.cardType($('.cc-number').val());
    $('.cc-number').toggleInputError(!$.payment.validateCardNumber($('.cc-number').val()));
    $('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
    $('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
    $('.cc-brand').text(cardType);
    $('.validation').removeClass('text-danger text-success');
    $('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');
  });*/

});
