<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <script>
var prix = prompt ("Quelle est le prix de l'article");
var quantite = prompt ("Quelle est la quantité de l'article");
var avant = parseFloat (prix * quantite);
var apres = parseFloat (avant * 1.13);
apres = Math.floor (apres * 100) / 100;
(apres.toFixed(2));
alert ("Ton prix totale est égale à " + apres + " dollars.")
</script>
  </body>
</html>

