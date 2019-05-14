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


Être d'abord sûr que la page soit prête avec l'arborescence DOM construite, grâce à la fonction suivante:
```
$(document).ready(function() {
	alert('La page est prête !);
});
```
La première ligne indique "quand le document est prêt, lance la fonction suivante". C'est un élément que vous rencontrerez très souvent lors de vos expériences avec jQuery.



Autre librairies permettant la manipulation du DOM : MooTools, Prototype & Closure.



# Sources :

- http://youmightnotneedjquery.com/
- https://github.com/nefe/You-Dont-Need-jQuery
- http://mediatheque.cite-musique.fr/MediaComposite/Debug/Dossier-Orchestre/ressources/jQuery.Novice.to.Ninja.2nd.Edition.pdf
- http://nicholasjohnson.com/javascript-book/ (partie jQuery)
- http://vanilla-js.com/
- https://plainjs.com/
- https://github.com/lanneyre/jQuery
