{% extends 'layout.swig' %}
{% set title = 'Homepage Title' %}
{% block body %}
  <h1>Homepage!</h1>
  <p>Welcome to the homepage!</p>
  <p>Current date is: {{ currentDate }}</p>

  <p>Run count is: {{ runCount }}</p>

<div class="ct-chart ct-perfect-fourth"></div>>

<script>
var data = {
  labels: ['Bananas', 'Apples', 'Grapes'],
  series: [20, 15, 40]
};

var options = {
  labelInterpolationFnc: function(value) {
    return value[0]
  }
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    chartPadding: 30,
    labelOffset: 100,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    labelOffset: 80,
    chartPadding: 20
  }]
];

new Chartist.Pie('.ct-chart', data, options, responsiveOptions);
</script>
    <!-- </script> -->


{% endblock %}