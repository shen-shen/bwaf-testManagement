<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>{{ title|default('The Default Title') }}</title>
    <link rel="stylesheet"
          href="styles/chartist.min.css">
    <link rel="stylesheet"
          href="styles/extentx.css">
    <script src="js/chartist.min.js">
    </script>
  </head>
  <body>
    {% block body %}{% endblock %}
  </body>
</html>