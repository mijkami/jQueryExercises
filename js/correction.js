// Pour l'instant le seul script présent est la fonction ready(), 
//    qui attend que le navigateur finisse de construire l'arborescence DOM
//    avant de lancer le script compris entre les crochets {} encore vides.
//
//
// Nous avons des images avec une classe 'product-photo' mais elles 
// n'apparaissent pas sur le site, car leur propriété display est réglée sur :
// 
//    .product-photo {
//      display: none;
//    }
//
// Sélectionnez via jQuery la classe correspondante et appliquez une méthode
// permettant de l'afficher !
//
// Eléments à utiliser :
// 		.product-photo
//		.show() (ou .toggle())
// 		$();


$(document).ready(() => {
	$('.product-photo').toggle(); //solution possible
});



// En manipulant uniquement l'arborescence DOM (uniquement les balises, pas de sélection de class/ID) :
// 	Dans le dropdown (shoes & contact + les listes) de la navbar, ajoutez à chaque 2nd élément
//	de la liste l'élément : "<span> - 2nd!</span>"


$(document).ready(() => {
	 $("body > div:first ul li:nth-child(2)").append("<span> - 2nd!</span>"); //solution possible
});



// En manipulant uniquement l'arborescence DOM (uniquement les balises, pas de sélection de class/ID) : 
//	changez la couleur (du background) du menu de la navbar (logo, menu, login) en bleu 

$(document).ready(() => {
	$("nav").css("backgroundColor", "blue"); //solution possible
});


// En manipulant uniquement l'arborescence DOM (uniquement les balises, pas de sélection de class/ID) : 
// changez la couleur (du background) du menu "dropdown" (shoes & contact + les listes) en dessous de la navbar en rouge

$(document).ready(() => {
	// $("nav").css("background-color", "red");
	// $("nav").next().css("background-color", "red");
	
	$("body").children().eq(1).css('background-color', 'red'); //solution possible (2 autres en commentaires)
});



// Maintenant, sélectionnez l'id nav-dropdown (shoes & contact + les listes) et cachez-moi cette navbar !

$(document).ready(() => {
   // $("#nav-dropdown").hide();
   $("#nav-dropdown").toggle(); //solution possible (1 autre en commentaires)

});



// Faites une modification sur le texte "Menu" de la navbar (haut logo, menu, login)
// pour afficher/cacher (toggle) la dropdown (shoes & contact + les listes) avec un clic.
$(document).ready(() => {
    $(".menu-button").click(function(){
        $("#nav-dropdown").slideToggle("slow"); //solution possible
    })
});



// Merci d'avoir suivi les exercices jusqu'au bout et amusez-vous bien pour la suite !