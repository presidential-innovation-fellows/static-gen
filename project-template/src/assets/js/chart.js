var midaas = midaas || {};

midaas.chart = {

  addGrayBars: function(chart) {
    $(".ct-series .ct-bar").each(function() {
      var x = $(this).attr("x1"),
          y = $(this).attr("y1"),
          y2 = 10;

      chart.svg.querySelector(".ct-series").elem("line", {
        x1: x,
        x2: x,
        y1: y,
        y2: y2
      }, "gray-line", true);
    });
  },

  addStrokeWidth: function(data) {
    if(data.type === "bar") {
      data.element.attr({
        style: "stroke-width: 15px"
      });
    }
  },

  createChart: function(labels, data) {
    var chart = new Chartist.Bar("#chart", {
      labels: labels,
      series: data
      }, {
        axisX: { showLabel: true, showGrid: false },
        axisY: {
          showLabel: true,
          showGrid: false,
          labelInterpolationFnc: function(value) {
            return midaas.formatMoney.toDollars(value);
          }
        },
        chartPadding: { left: 15, top: 10, right: -10 },
        fullWidth: true,
        height: "350px",
        low: 0,
    });

    chart.on("draw", function(context) {
      midaas.chart.addStrokeWidth(context);
    });

    chart.on("created", function(createdChart) {
      midaas.chart.addGrayBars(createdChart);
      midaas.chart.removeLoadingIcon();
    });

    return chart;
  },

  removeLoadingIcon: function() {
    $("#loading-icon").fadeOut("fast");
  },

  returnError: function(error) {
    $("#loading-icon").fadeOut("fast");
    $("#chart-error").fadeIn("fast");
  },
};
