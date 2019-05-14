<pre>
______               ____  ___     
| ___ \             | |  \/  |     
| |_/ /___  __ _  __| | .  . | ___ 
|    // _ \/ _` |/ _` | |\/| |/ _ \
| |\ \  __/ (_| | (_| | |  | |  __/
\_| \_\___|\__,_|\__,_\_|  |_/\___|
</pre>   

# Exercices jQuery / Formation web & mobile ICS - Nice

![https://learn.jquery.com/](https://cdn.freebiesupply.com/logos/large/2x/jquery-2-logo-png-transparent.png)

# Description :

🚀 Le repo ici-présent contient quelques petits exercices sur jQuery.

# Comment faire :

- **cloner ou télécharger** via le bouton vert en haut à droite
- **ouvrir index.html** dans votre navigateur préféré
- **ouvrir js/main.js**
- suivre les instructions !


# Introduction

jQuery a été mis en place pour s'intégrer facilement avec le HTML et le CSS.

Au niveau des sélecteurs CSS, si vous savez déjà que div#heading réfère à un élément 'div' ayant l'id "heading" ; la transition se fera rapidement.

![https://fr.wikipedia.org/wiki/Document_Object_Model](https://cf.ppt-online.org/files/slide/l/lG6hjyFR8carDYH7oVAtPW3exEOg0sSpQ1JKfm/slide-4.jpg)


A noter que le DOM a déjà été décrit comme étant "la pire API jamais conçue" (Douglas Crockford)...

Outre la prise en charge des différents navigateurs, jQuery est aussi renommé pour avoir fourni aux développeurs des sélecteurs d'éléments utilisant une syntaxe bien plus simple que celle existante au départ. 

Aujourd'hui, l'usage de ces sélecteurs est toujours possible mais n'est plus aussi intéressant que par le passé depuis l'implémentation en 2009  de Javascript Version 5 a amenée différents outils venant de jQuery, dont les querySelectors utilisés dans le JavaScript "simple" (aussi appelé "vanilla JavaScript").

## ![Comparaison JS/jQuery](http://youmightnotneedjquery.com/)

Histoire de comparer, voyons comment ajouter "Bonjour" après un élément quelconque via les différentes syntaxes à disposition :

- en **JavaScript pur** (aussi appelé "vanilla". C'est une version exagérément longue que l'on peut retrouver parfois) :
```
var bloc = document.createElement("p");
var txt = document.createTextNode("bonjour");
bloc.appendChild(txt);
console.log(bloc);
document.getElementsByTagName("ul")[0].appendChild(bloc);
```

- toujours en **javascript**, ce cas peut se simplifier :
```
document.getElementsByTagName("ul")[0].innerHTML += "<p>Bonjour</p>";
```

- en **jQuery**, on aura :
```
$("ul").first().append("<p>Bonjour</p>");
```

- en **JavaScript simple/vanilla** On a aussi l' [API Selectors](https://www.alsacreations.com/article/lire/1445-dom-queryselector-queryselectorall-selectors-api.html) disponible en  :
```
document.querySelectorAll('ul') += "<p>Bonjour</p>"
```
ou encore
```
ul.firstChild.appendChild("<p>Bonjour</p>")
```

## Méthodes de navigation directe :

- parent() : renvoie le parent direct du/des élements sélectionnés
```
	$("ul".parent().append("<div>Bonjour</div>");
```
- children() : renvoie tous les enfants de la sélection
```
	$("ul".children().append("<div>Bonjour</div>");
```
- next() : renvoie le sibling (frère/soeur) suivant la sélection
```
	$("ul".next().append("<div>Bonjour</div>");
```
- prev() : renvoie le sibling (frère/soeur) précédent la sélection
```
	$("ul".prev().append("<div>Bonjour</div>");
```
- first() : renvoie le premier élément de la sélection
```
	$("ul".first().append("<div>Bonjour</div>");
```
- last() : renvoie le dernier élément de la sélection
```
	$("ul".last().append("<div>Bonjour</div>");
```
- last() : renvoie le dernier élément de la sélection
```
	$("ul".last().append("<div>Bonjour</div>");
```
- eq(i) : renvoie l'élément d'index i (démarre à 0) parmi la sélection
```
	$("ul".children().eq(2).append("<div>Bonjour</div>");
```

## Méthodes d'ajout / suppression d'éléments

- append("nouvel élément") : ajoute les éléments entre parenthèses comme enfants **à la fin** des éléments sélectionnés initialement
```
	$("ul").append("<div>Bonjour</div>");
```
- prepend("nouvel élément") : ajoute les éléments entre parenthèses comme enfants **au début** des éléments sélectionnés initialement
```
	$("ul").prepend("<div>Bonjour</div>");
```
- after("nouvel élément") : ajoute les éléments entre parenthèses comme siblings (frères/soeurs) **après** les éléments sélectionnés initialement
```
	$("ul").after("<div>Bonjour</div>");
```
- before("nouvel élément") : ajoute les éléments entre parenthèses comme siblings (frères/soeurs) **avant** les éléments sélectionnés initialement
```
	$("ul").before("<div>Bonjour</div>");
```
- remove() : **retire / supprime** les éléments sélectionnés **et tout leur contenu**
```
	$("ul").remove();
```
- empty() : **retire / supprime uniquement le contenu** des éléments sélectionnés (texte compris)
```
	$("ul").empty();
```

# Rappel général pour l'exercice :

Être d'abord sûr que la page soit prête avec l'arborescence DOM construite, grâce à la fonction suivante :
```
$(document).ready(function() {
	alert('La page est prête !);
});
```
La première ligne indique "quand le document est prêt, lance la fonction suivante". C'est un élément que vous rencontrerez très souvent lors de vos expériences avec jQuery.



Autre librairies permettant la manipulation du DOM : MooTools, Prototype & Closure.



# Sources :

- https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model
- https://www.sitepoint.com/jquery-vs-raw-javascript-1-dom-forms/
- https://gist.github.com/joyrexus/7307312
- http://youmightnotneedjquery.com/
- https://github.com/nefe/You-Dont-Need-jQuery
- http://mediatheque.cite-musique.fr/MediaComposite/Debug/Dossier-Orchestre/ressources/jQuery.Novice.to.Ninja.2nd.Edition.pdf
- http://nicholasjohnson.com/javascript-book/ (partie jQuery)
- http://vanilla-js.com/
- https://plainjs.com/
- https://www.alsacreations.com/article/lire/1445-dom-queryselector-queryselectorall-selectors-api.html
- https://github.com/lanneyre/jQuery
- http://www.jqueryfacile.com/par-l-exemple
- https://makclass.com/books/introducing-jquery/3
- https://openclassrooms.com/fr/courses/3504441-introduction-a-jquery?status=published
