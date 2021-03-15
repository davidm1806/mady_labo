var xhr = null;

function getXhr(){

if(window.XMLHttpRequest) // Firefox et autres

xhr = new XMLHttpRequest(); 

else if(window.ActiveXObject){ // Internet Explorer 

   try {

    xhr = new ActiveXObject("Msxml2.XMLHTTP"); 

   } catch (e) {

     xhr = new ActiveXObject("Microsoft.XMLHTTP"); 

  }

}

else { // XMLHttpRequest non supporté par le navigateur 

alert("Votre navigateur ne supporte pas les objets XMLHTTPRequest...");

xhr = false;

}

}





function addslashes(str) {

       str=str.replace(/\'/g,'\\\'');

         str=str.replace(/\"/g,'\\"');

         str=str.replace(/\\/g,'\\\\');

         str=str.replace(/\0/g,'\\0')

         return str;

}

   

   

 var popUpWin=0;

function popUpWindow(URLStr, left, top, width, height)

{

  if(popUpWin)

  {

    if(!popUpWin.closed) popUpWin.close();

  }

  popUpWin = open(URLStr, 'popUpWin', 'toolbar=1,location=no,directories=1,statusbar=false,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=yes,width='+width+',height='+height+',left='+left+', top='+top+',screenX='+left+',screenY='+top+'');

}



function ChangeModule(){



 self.location="?module="+document.getElementById("lemodule").value;

 

}



function verifdt(id){

	

	verdat=removeLeadingAndTrailingChar (document.getElementById(id).value, " ");

	datej= new Date()

	anneej=datej.getFullYear()+"*";

	anneej=anneej.substring(0,2)

	

	if (verdat.length ==6) {

	verdat=verdat.substring(0,2)+"/"+verdat.substring(4,2)+"/"+anneej+verdat.substring(6,4);

	document.getElementById(id).value=verdat

	}

	if (verdat.length ==8) {

	verdat=verdat.substring(0,2)+"/"+verdat.substring(4,2)+"/"+verdat.substring(8,4);

	document.getElementById(id).value=verdat;

	

	}

	

	if(!isValidDate(verdat))alert("Date  invalide ou pas au bon format.\n format : jj/mm/aaaa");

	else document.myform.dateop.value = verdat;





}



	function isValidDate(d) {

		  var dateRegEx = /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/;

		  return d.match(dateRegEx);

	}



function isDate(txtDate)

{

	  txtDate=replaceMulti(txtDate, "/", "-");

	  alert(txtDate);

return txtDate.match(/^d\d?\/\d\d?\/\d\d\d\d$/);

}



function isValidDate2(dateString) {

  dateString=replaceMulti(dateString, "/", "-");

  var regEx = /^\d{4}-\d{2}-\d{2}$/;

  return dateString.match(regEx) != null;

}



function replaceMulti(haystack, needle, replacement)

{

    return haystack.split(needle).join(replacement);

}



function removeLeadingAndTrailingChar (inputString, removeChar) 

{

	var returnString = inputString;

	if (removeChar.length)

	{

	  while(''+returnString.charAt(0)==removeChar)

		{

		  returnString=returnString.substring(1,returnString.length);

		}

		while(''+returnString.charAt(returnString.length-1)==removeChar)

	  {

	    returnString=returnString.substring(0,returnString.length-1);

	  }

	}

	return returnString;

}

		

function Enregistrement_pays(){

	  

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_pays").value, " ");

	 var nationalite=removeLeadingAndTrailingChar (document.getElementById("nationalite").value, " ");

	 if(nom=="" || nationalite=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

		//alert("mmkk"); 

			

			 document.getElementById('resultat').innerHTML="<span style='color:red'><b>Traitement encours ... veuillez patienter !</b></span>";

			 document.getElementById("article2").style.width=document.getElementById("page").offsetWidth+"px";

			 document.getElementById("article2").style.height=document.getElementById("page").offsetHeight+"px";

			 document.getElementById("article2").style.display='inline';

			 document.getElementById("formulaire_pays").submit();



	 }

	 

}

		



function recherche_pays(menu,smenu,debut,page,total){

		

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_pays").value, " ");

	 var nationalite=removeLeadingAndTrailingChar (document.getElementById("nationalite").value, " ");

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_pays').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_pays.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom="+nom+"&nationalite="+nationalite+"&debut="+debut+"&page="+page+"&total="+total+"&idmenu="+menu+"&idsmenu="+smenu);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_pays').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}







function supprimer_pays(menu,smenu,idpays,debut,page,total){

		

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_pays").value, " ");

	 var nationalite=removeLeadingAndTrailingChar (document.getElementById("nationalite").value, " ");

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_pays').innerHTML= leselect   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_pays.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom="+nom+"&nationalite="+nationalite+"&idmenu="+menu+"&idsmenu="+smenu+"&idpays="+idpays+"&debut="+debut+"&page="+page+"&total="+total+"&suppression=yes");

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_pays').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	}

}







function Enregistrement_ville(){

	 

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_ville").value, " ");

	 var pays=removeLeadingAndTrailingChar (document.getElementById("pays").value, " ");

	 if(nom=="" || pays=="0")alert("Tous les champs en (*) sont obligatoires");

	 else{

			 document.getElementById('resultat').innerHTML="<span style='color:red'><b>Traitement encours ... veuillez patienter !</b></span>";

			 document.getElementById("article2").style.width=document.getElementById("page").offsetWidth+"px";

			 document.getElementById("article2").style.height=document.getElementById("page").offsetHeight+"px";

			 document.getElementById("article2").style.display='inline';

			 document.getElementById("formulaire_ville").submit();

	 }

	 

}

		



function recherche_ville(menu,smenu,debut,page,total){

		

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_ville").value, " ");

	 var pays=removeLeadingAndTrailingChar (document.getElementById("pays").value, " ");

		 

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_ville').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_ville.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom="+nom+"&pays="+pays+"&debut="+debut+"&page="+page+"&total="+total+"&idmenu="+menu+"&idsmenu="+smenu);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_ville').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}









function supprimer_ville(menu,smenu,idville,debut,page,total){

	 

	 var pays=removeLeadingAndTrailingChar (document.getElementById("pays").value, " ");

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_ville").value, " ");

	  

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_ville').innerHTML= leselect   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_ville.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom="+nom+"&pays="+pays+"&idville="+idville+"&idmenu="+menu+"&idsmenu="+smenu+"&debut="+debut+"&page="+page+"&total="+total+"&suppression=yes");

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_ville').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	}

}







function Enregistrement_fonction(){

	 

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_fonction").value, " ");

	 if(nom=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

			 document.getElementById('resultat').innerHTML="<span style='color:red'><b>Traitement encours ... veuillez patienter !</b></span>";

			 document.getElementById("article2").style.width=document.getElementById("page").offsetWidth+"px";

			 document.getElementById("article2").style.height=document.getElementById("page").offsetHeight+"px";

			 document.getElementById("article2").style.display='inline';

			 document.getElementById("formulaire_fonction").submit();

	 }

	 

}

		



function recherche_fonction(menu,smenu,debut,page,total){

		

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_fonction").value, " ");

		 

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_fonction').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_fonction.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom="+nom+"&debut="+debut+"&page="+page+"&total="+total+"&idmenu="+menu+"&idsmenu="+smenu);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_fonction').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}









function supprimer_fonction(menu,smenu,idfonction,debut,page,total){

	 

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_fonction").value, " ");

	  

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_fonction').innerHTML= leselect   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_fonction.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom="+nom+"&idfonction="+idfonction+"&idmenu="+menu+"&idsmenu="+smenu+"&debut="+debut+"&page="+page+"&total="+total+"&suppression=yes");

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_fonction').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	}

}







function Enregistrement_specialite(){

	 

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_specialite").value, " ");

	 var fonction=removeLeadingAndTrailingChar (document.getElementById("fonction").value, " ");

	 if(nom=="" || fonction=="0")alert("Tous les champs en (*) sont obligatoires");

	 else{

			 document.getElementById('resultat').innerHTML="<span style='color:red'><b>Traitement encours ... veuillez patienter !</b></span>";

			 document.getElementById("article2").style.width=document.getElementById("page").offsetWidth+"px";

			 document.getElementById("article2").style.height=document.getElementById("page").offsetHeight+"px";

			 document.getElementById("article2").style.display='inline';

			 document.getElementById("formulaire_specialite").submit();

	 }

	 

}

		



function recherche_specialite(menu,smenu,debut,page,total){

		

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_specialite").value, " ");

	 var fonction=removeLeadingAndTrailingChar (document.getElementById("fonction").value, " ");

		 

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_specialite').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_specialite.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom="+nom+"&fonction="+fonction+"&debut="+debut+"&page="+page+"&total="+total+"&idmenu="+menu+"&idsmenu="+smenu);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_specialite').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}









function supprimer_specialite(menu,smenu,idspecialite,debut,page,total){

	 

	 var fonction=removeLeadingAndTrailingChar (document.getElementById("fonction").value, " ");

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_specialite").value, " ");

	  

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_specialite').innerHTML= leselect   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_specialite.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom="+nom+"&fonction="+fonction+"&idspecialite="+idspecialite+"&idmenu="+menu+"&idsmenu="+smenu+"&debut="+debut+"&page="+page+"&total="+total+"&suppression=yes");

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_specialite').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	}

}





function Enregistrer_employer_new(){

	 

	 var matricule=removeLeadingAndTrailingChar (document.getElementById("matricule").value, " ");

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_employe").value, " ");

	 var prenom=removeLeadingAndTrailingChar (document.getElementById("prenom").value, " ");

	 var civilite=removeLeadingAndTrailingChar (document.getElementById("civilite").value, " ");

	 var sexe=removeLeadingAndTrailingChar (document.getElementById("sexe").value, " ");

	 var regime=removeLeadingAndTrailingChar (document.getElementById("regime").value, " ");

	 var date_naissance=removeLeadingAndTrailingChar (document.getElementById("date_naissance").value, " ");

	 var nationalite=removeLeadingAndTrailingChar (document.getElementById("nationalite").value, " ");

	 var titre=removeLeadingAndTrailingChar (document.getElementById("titre").value, " ");

	 

	 if(matricule=="" || nom=="" || prenom=="" || date_naissance=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

		 

			 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				  // alert(leselect);

				

				   var reponse = eval('(' + leselect + ')');

				   document.getElementById("article2").style.display='none';

				   if(reponse.erreur=="oui"){

					document.getElementById("resultat").innerHTML = reponse.message;

				   }else{

					 self.location="?tab=tab-enregistrer&lapage=gestion_employe.php&page=employe_formulaire_detail_info_contact_new.php&matricule="+matricule+"&menu=Informations personnelles&smenu=Informations de contact";					

				   }			   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","enregistrer_employe.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded'); 

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom="+nom+"&matricule="+matricule+"&titre="+titre+"&sexe="+sexe+"&civilite="+civilite+"&prenom="+prenom+"&regime="+regime+"&statut="+statut_matrimoniale+"&date_naissance="+date_naissance+"&nationalite="+nationalite);

			 //alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('resultat').innerHTML="<span style='color:red'><b>Traitement encours ... veuillez patienter !</b></span>";

			 document.getElementById("article2").style.width=document.getElementById("page").offsetWidth+"px";

			 document.getElementById("article2").style.height=document.getElementById("page").offsetHeight+"px";

			 document.getElementById("article2").style.display='inline';



		

	 }

	 

}





function Enregistrer_contact_employer(idemploye){

	 

	 var pays=removeLeadingAndTrailingChar (document.getElementById("pays").value, " ");

	 var ville=removeLeadingAndTrailingChar (document.getElementById("ville").value, " ");

	 var quartier=removeLeadingAndTrailingChar (document.getElementById("quartier").value, " ");

	 var rue=removeLeadingAndTrailingChar (document.getElementById("rue").value, " ");

	 var telephone1=removeLeadingAndTrailingChar (document.getElementById("telephone1").value, " ");

	 var telephone2=removeLeadingAndTrailingChar (document.getElementById("telephone2").value, " ");

	 var telephone3=removeLeadingAndTrailingChar (document.getElementById("telephone3").value, " ");

	 var email1=removeLeadingAndTrailingChar (document.getElementById("email1").value, " ");

	 var email2=removeLeadingAndTrailingChar (document.getElementById("email2").value, " ");

	 var fax=removeLeadingAndTrailingChar (document.getElementById("fax").value, " ");

	 var bp=removeLeadingAndTrailingChar (document.getElementById("bp").value, " ");

	 

	

		 

			 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				

				   var reponse = eval('(' + leselect + ')');

				   document.getElementById("article2").style.display='none';

				   if(reponse.erreur=="oui"){

					document.getElementById("resultat").innerHTML = reponse.message;

				   }else{

                    document.getElementById("resultat").innerHTML = reponse.message;				   }			   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","enregistrer_contact.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded'); 

			 // ne pas oublier de poster les arguments // 

			 xhr.send("pays="+pays+"&ville="+ville+"&quartier="+quartier+"&rue="+rue+"&telephone1="+telephone1+"&telephone2="+telephone2+"&telephone3="+telephone3+"&email1="+email1+"&email2="+email2+"&fax="+fax+"&bp="+bp+"&idemploye="+idemploye);

			 //alert("pays="+pays+"&ville="+ville+"&quartier="+quartier+"&rue="+rue+"&telephone1="+telephone1+"&telephone2="+telephone2+"&telephone3="+telephone3+"&email1="+email1+"&email2="+email2+"&fax="+fax+"&bp="+bp+"&idemploye="+idemploye);

			 document.getElementById('resultat').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";

			 document.getElementById("article2").style.width=document.getElementById("page").offsetWidth+"px";

			 document.getElementById("article2").style.height=document.getElementById("page").offsetHeight+"px";

			 document.getElementById("article2").style.display='inline';



		

	

	 

}







function Enregistrer_contact_employer_new(idemploye,matricule){

	 

	 var pays=removeLeadingAndTrailingChar (document.getElementById("pays").value, " ");

	 var ville=removeLeadingAndTrailingChar (document.getElementById("ville").value, " ");

	 var quartier=removeLeadingAndTrailingChar (document.getElementById("quartier").value, " ");

	 var rue=removeLeadingAndTrailingChar (document.getElementById("rue").value, " ");

	 var telephone1=removeLeadingAndTrailingChar (document.getElementById("telephone1").value, " ");

	 var telephone2=removeLeadingAndTrailingChar (document.getElementById("telephone2").value, " ");

	 var telephone3=removeLeadingAndTrailingChar (document.getElementById("telephone3").value, " ");

	 var email1=removeLeadingAndTrailingChar (document.getElementById("email1").value, " ");

	 var email2=removeLeadingAndTrailingChar (document.getElementById("email2").value, " ");

	 var fax=removeLeadingAndTrailingChar (document.getElementById("fax").value, " ");

	 var bp=removeLeadingAndTrailingChar (document.getElementById("bp").value, " ");

	 

	

		 

			 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				

				   var reponse = eval('(' + leselect + ')');

				   document.getElementById("article2").style.display='none';

				   if(reponse.erreur=="oui"){

					document.getElementById("resultat").innerHTML = reponse.message;

				   }else{

                    document.getElementById("resultat").innerHTML = reponse.message;

					self.location="?tab=tab-enregistrer&lapage=gestion_employe.php&page=employe_formulaire_diplome_new.php&matricule="+matricule+"&menu=Qualifications&smenu=Diplômes / formations";

						

                    //self.location="?tab=tab-enregistrer&lapage=gestion_employe.php&page=employe_formulaire_detail_info_emploi_new.php&matricule="+matricule+"&menu=Informations emploi&smenu=Détail infos emploi";				   

                   }			   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","enregistrer_contact.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded'); 

			 // ne pas oublier de poster les arguments // 

			 xhr.send("pays="+pays+"&ville="+ville+"&quartier="+quartier+"&rue="+rue+"&telephone1="+telephone1+"&telephone2="+telephone2+"&telephone3="+telephone3+"&email1="+email1+"&email2="+email2+"&fax="+fax+"&bp="+bp+"&idemploye="+idemploye);

			 //alert("pays="+pays+"&ville="+ville+"&quartier="+quartier+"&rue="+rue+"&telephone1="+telephone1+"&telephone2="+telephone2+"&telephone3="+telephone3+"&email1="+email1+"&email2="+email2+"&fax="+fax+"&bp="+bp+"&idemploye="+idemploye);

			 document.getElementById('resultat').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";

			 document.getElementById("article2").style.width=document.getElementById("page").offsetWidth+"px";

			 document.getElementById("article2").style.height=document.getElementById("page").offsetHeight+"px";

			 document.getElementById("article2").style.display='inline';



		

	

	 

}





function Enregistrer_emploi_employer_new(idemploye,matricule){

	 

	 var service=removeLeadingAndTrailingChar (document.getElementById("service").value, " ");

	 var fonction=removeLeadingAndTrailingChar (document.getElementById("fonction").value, " ");

	 var categorie=removeLeadingAndTrailingChar (document.getElementById("categorie").value, " ");

	 var salaire=removeLeadingAndTrailingChar (document.getElementById("salaire_base").value, " ");

	 var date_embauche=removeLeadingAndTrailingChar (document.getElementById("date_embauche").value, " ");

	 var tache=removeLeadingAndTrailingChar (document.getElementById("tache").value, " ");

	 var date_retraite=removeLeadingAndTrailingChar (document.getElementById("date_retraite").value, " ");

	 if(salaire=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

	

		 

			 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				

				   var reponse = eval('(' + leselect + ')');

				   document.getElementById("article2").style.display='none';

				   if(reponse.erreur=="oui"){

					document.getElementById("resultat").innerHTML = reponse.message;

				   }else{

                    document.getElementById("resultat").innerHTML = reponse.message;

                    self.location="?tab=tab-enregistrer&lapage=gestion_employe.php&page=employe_formulaire_diplome_new.php&matricule="+matricule+"&menu=Qualifications&smenu=Diplômes / formations";				   

				    }			   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","enregistrer_emploi.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded'); 

			 // ne pas oublier de poster les arguments // 

			 xhr.send("service="+service+"&fonction="+fonction+"&categorie="+categorie+"&salaire="+salaire+"&date_embauche="+date_embauche+"&date_retraite="+date_retraite+"&tache="+tache+"&idemploye="+idemploye);

			 document.getElementById('resultat').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";

			 document.getElementById("article2").style.width=document.getElementById("page").offsetWidth+"px";

			 document.getElementById("article2").style.height=document.getElementById("page").offsetHeight+"px";

			 document.getElementById("article2").style.display='inline';



	 }

	

	 

}



function Enregistrement_diplome_employe_new(action,iddiplome,idemploye,matricule){

	

	 var diplome=addslashes(removeLeadingAndTrailingChar (document.getElementById("diplome").value, " "));

	 var etablissement=addslashes(removeLeadingAndTrailingChar (document.getElementById("etablissement").value, " "));

	 var date_obtention=addslashes(removeLeadingAndTrailingChar (document.getElementById("date_obtention").value, " "));

	 var commentaire=addslashes(removeLeadingAndTrailingChar (document.getElementById("commentaire").value, " "));

	 

	 if(diplome=="" || etablissement=="" || date_obtention=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

		

			 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   var reponse = eval('(' + leselect + ')');

				   

				   if(reponse.erreur=="oui"){

					document.getElementById("resultat_diplome").innerHTML = reponse.message;

				   }else{

					document.getElementById('resultat_diplome').innerHTML = reponse.message;

										

					if(action!="insertion"){

						self.location="?tab=tab-enregistrer&lapage=gestion_employe.php&page=employe_formulaire_diplome_new.php&matricule="+matricule+"&menu=Qualifications&smenu=Diplômes / formations";

					}

					document.getElementById("formulaire_diplome").reset();

					recherche_diplome_employe_new(idemploye,'0');

					setTimeout ("document.getElementById('resultat_diplome').innerHTML=''",3000);

				   }			   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","insertion_modification_diplome_employe.php",true); // ne pas oublier ça pour le post 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

			 // ne pas oublier de poster les arguments // 

			 //alert("diplome="+diplome+"&etablissement="+etablissement+"&date_obtention="+date_obtention+"&commentaire="+commentaire+"&action="+action+"&iddiplome="+iddiplome+"&idemploye="+idemploye+"&new=yes");

			 xhr.send("diplome="+diplome+"&etablissement="+etablissement+"&date_obtention="+date_obtention+"&commentaire="+commentaire+"&action="+action+"&iddiplome="+iddiplome+"&idemploye="+idemploye+"&new=yes");

			 //alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('resultat_diplome').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";

		}

	

	 

}





function recherche_diplome_employe_new(idemploye,resultat){

		

	 var diplome=addslashes(removeLeadingAndTrailingChar (document.getElementById("diplome").value, " "));

		 

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_diplome').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_diplome_employe_new.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("diplome="+diplome+"&idemploye="+idemploye+"&resultat="+resultat);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}











function supprimer_diplome_employe_new(iddiplome,idemploye){

		

	 var diplome=addslashes(removeLeadingAndTrailingChar (document.getElementById("diplome").value, " "));

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_diplome').innerHTML= leselect   

				} 



			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_diplome_employe_new.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("diplome="+diplome+"&iddiplome="+iddiplome+"&suppression=yes"+"&idemploye="+idemploye);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_diplome').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	}

}





function Enregistrement_experience_employe_new(action,idexperience,idemploye,matricule){

	

	 var fonction=addslashes(removeLeadingAndTrailingChar (document.getElementById("fonction").value, " "));

	 var entreprise=addslashes(removeLeadingAndTrailingChar (document.getElementById("entreprise").value, " "));

	 var debut=addslashes(removeLeadingAndTrailingChar (document.getElementById("debut").value, " "));

	 var fin=addslashes(removeLeadingAndTrailingChar (document.getElementById("fin").value, " "));

	 var commentaire=addslashes(removeLeadingAndTrailingChar (document.getElementById("commentaire").value, " "));

	 if(fonction=="" || entreprise=="" || debut=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

		

			

			 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   var reponse = eval('(' + leselect + ')');

				   

				   if(reponse.erreur=="oui"){

					document.getElementById("resultat_experience").innerHTML = reponse.message;

				   }else{

					document.getElementById('resultat_experience').innerHTML = reponse.message;

										

					if(action!="insertion"){

						self.location="?tab=tab-enregistrer&lapage=gestion_employe.php&page=employe_formulaire_experience_new.php&matricule="+matricule+"&menu=Qualifications&smenu=Expérience professionnelle";

					}

					document.getElementById("formulaire_experience").reset();

					recherche_experience_employe_new(idemploye);

				   }			   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","insertion_modification_experience_employe.php",true); // ne pas oublier ça pour le post 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

			 // ne pas oublier de poster les arguments // 

			 //alert("fonction="+fonction+"&entreprise="+entreprise+"&debut="+debut+"&fin="+fin+"&commentaire="+commentaire+"&action="+action+"&idexperience="+idexperience+"&idemploye="+idemploye);

			 xhr.send("fonction="+fonction+"&entreprise="+entreprise+"&debut="+debut+"&fin="+fin+"&commentaire="+commentaire+"&action="+action+"&idexperience="+idexperience+"&idemploye="+idemploye);

			 //alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('resultat_experience').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";

		}

 

	 

}

		



function recherche_experience_employe_new(idemploye){

		

	 var fonction=addslashes(removeLeadingAndTrailingChar (document.getElementById("fonction").value, " "));

	 var entreprise=addslashes(removeLeadingAndTrailingChar (document.getElementById("entreprise").value, " "));

		 

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_experience').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_experience_employe_new.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("fonction="+fonction+"&entreprise="+entreprise+"&idemploye="+idemploye);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}







function supprimer_experience_employe_new(idexperience,idemploye){

		

	 var fonction=addslashes(removeLeadingAndTrailingChar (document.getElementById("fonction").value, " "));

	 var entreprise=addslashes(removeLeadingAndTrailingChar (document.getElementById("entreprise").value, " "));

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_experience').innerHTML= leselect   

				} 



			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_experience_employe_new.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("fonction="+fonction+"&entreprise="+entreprise+"&idexperience="+idexperience+"&suppression=yes"+"&idemploye="+idemploye);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	}

}







function Enregistrement_contrat_employe(action,idcontrat,idemploye,matricule){

	

	 var debut=addslashes(removeLeadingAndTrailingChar (document.getElementById("debut").value, " "));

	 var fin=addslashes(removeLeadingAndTrailingChar (document.getElementById("fin").value, " "));

	 var commentaire=addslashes(removeLeadingAndTrailingChar (document.getElementById("commentaire").value, " "));

	 if(debut==""  || fin=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

		 

		if(fin<debut) alert("Les dates ne semblent pas chronologiques");

		else{

			

			 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   var reponse = eval('(' + leselect + ')');

				   

				   if(reponse.erreur=="oui"){

					document.getElementById("resultat_contrat").innerHTML = reponse.message;

				   }else{

					document.getElementById('resultat_contrat').innerHTML = reponse.message;

										

					if(action!="insertion"){

						self.location="?page=employe.php&spage=employe_formulaire_contrat.php&matricule="+matricule+"&menu=Qualifications&smenu=Périodes de contrat";

					}

					document.getElementById("formulaire_contrat").reset();

					recherche_contrat_employe(idemploye);

				   }			   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","insertion_modification_contrat_employe.php",true); // ne pas oublier ça pour le post 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

			 // ne pas oublier de poster les arguments // 

			 //alert("fonction="+fonction+"&entreprise="+entreprise+"&debut="+debut+"&fin="+fin+"&commentaire="+commentaire+"&action="+action+"&idcontrat="+idcontrat+"&idemploye="+idemploye);

			 xhr.send("debut="+debut+"&fin="+fin+"&commentaire="+commentaire+"&action="+action+"&idcontrat="+idcontrat+"&idemploye="+idemploye);

			 //alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('resultat_contrat').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";

		}

	 }

	 

}

		



function recherche_contrat_employe(idemploye){

		

		 

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_contrat').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_contrat_employe.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("idemploye="+idemploye);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}







function supprimer_contrat_employe(idcontrat,idemploye){

		

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_contrat').innerHTML= leselect   

				} 



			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_contrat_employe.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("idcontrat="+idcontrat+"&suppression=yes"+"&idemploye="+idemploye);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	}

}





function Enregistrement_historique_employe(action,idhistorique,idemploye,matricule){

	

	var service=addslashes(removeLeadingAndTrailingChar (document.getElementById("service").value, " "));

	 var categorie=addslashes(removeLeadingAndTrailingChar (document.getElementById("categorie").value, " "));

	 var fonction=addslashes(removeLeadingAndTrailingChar (document.getElementById("fonction").value, " "));

	

	 var debut=addslashes(removeLeadingAndTrailingChar (document.getElementById("debut").value, " "));

	 var fin=addslashes(removeLeadingAndTrailingChar (document.getElementById("fin").value, " "));

	 var commentaire=addslashes(removeLeadingAndTrailingChar (document.getElementById("commentaire").value, " "));

	 if(debut==""  || fin=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

		 

		if(fin<debut) alert("Les dates ne semblent pas chronologiques");

		else{

			

			 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				  // alert(leselect);

				   var reponse = eval('(' + leselect + ')');

				   

				   if(reponse.erreur=="oui"){

					document.getElementById("resultat_historique").innerHTML = reponse.message;

				   }else{

					document.getElementById('resultat_historique').innerHTML = reponse.message;

										

					if(action!="insertion"){

						self.location="?page=employe.php&spage=employe_formulaire_historique.php&matricule="+matricule+"&menu=Qualifications&smenu=Historique fonctions/postes";

					}

					document.getElementById("formulaire_historique").reset();

					recherche_historique_employe(idemploye);

				   }			   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","insertion_modification_historique_employe.php",true); // ne pas oublier ça pour le post 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

			 // ne pas oublier de poster les arguments // 

			 //alert("fonction="+fonction+"&entreprise="+entreprise+"&debut="+debut+"&fin="+fin+"&commentaire="+commentaire+"&action="+action+"&idhistorique="+idhistorique+"&idemploye="+idemploye);

			 xhr.send("debut="+debut+"&fin="+fin+"&service="+service+"&fonction="+fonction+"&categorie="+categorie+"&commentaire="+commentaire+"&action="+action+"&idhistorique="+idhistorique+"&idemploye="+idemploye);

			 //alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('resultat_historique').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";

		}

	 }

	 

}

		



function recherche_historique_employe(idemploye){

	var service=addslashes(removeLeadingAndTrailingChar (document.getElementById("service").value, " "));

	 var categorie=addslashes(removeLeadingAndTrailingChar (document.getElementById("categorie").value, " "));

	 var fonction=addslashes(removeLeadingAndTrailingChar (document.getElementById("fonction").value, " "));

		 

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_historique').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_historique_employe.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("idemploye="+idemploye+"&service="+service+"&fonction="+fonction+"&categorie="+categorie);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}







function supprimer_historique_employe(idhistorique,idemploye){

	var service=addslashes(removeLeadingAndTrailingChar (document.getElementById("service").value, " "));

	 var categorie=addslashes(removeLeadingAndTrailingChar (document.getElementById("categorie").value, " "));

	 var fonction=addslashes(removeLeadingAndTrailingChar (document.getElementById("fonction").value, " "));

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_historique').innerHTML= leselect   

				} 



			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_historique_employe.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("idhistorique="+idhistorique+"&suppression=yes"+"&idemploye="+idemploye+"&service="+service+"&fonction="+fonction+"&categorie="+categorie);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	}

}





function Cocher_Decocher(action){



  var obj = document.getElementsByTagName('input');

  var i=0;

  

  while(i < obj.length ){

    

    if (action=="cocher" && obj[i].type=="checkbox")obj[i].checked=true;

	if (action=="decocher" && obj[i].type=="checkbox")obj[i].checked=false;

	i++;

  }  

}





function recherche_employe_2(debut,page,total){// UTILISEE DANS LE TRAITEMENT DES SALAIRES

		

	 var service=removeLeadingAndTrailingChar (document.getElementById("service_r1").value, " ");

	 var fonction=removeLeadingAndTrailingChar (document.getElementById("fonction_r1").value, " ");

	 var categorie=removeLeadingAndTrailingChar (document.getElementById("categorie_r1").value, " ");

	

		 

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_r1').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_employe_traitement_salaire.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("service="+service+"&fonction="+fonction+"&categorie="+categorie+"&debut="+debut+"&page="+page+"&total="+total);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_r1').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}



function Modifier_employer(idemploye){

	 

	 var matricule=removeLeadingAndTrailingChar (document.getElementById("matricule").value, " ");

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom").value, " ");

	 var prenom=removeLeadingAndTrailingChar (document.getElementById("prenom").value, " ");

	 var civilite=removeLeadingAndTrailingChar (document.getElementById("civilite").value, " "); 

	 var sexe=removeLeadingAndTrailingChar (document.getElementById("sexe").value, " ");

	 var date=removeLeadingAndTrailingChar (document.getElementById("date_naissance").value, " ");

	 var nationalite=removeLeadingAndTrailingChar (document.getElementById("nationalite").value, " ");

	 var titre=removeLeadingAndTrailingChar (document.getElementById("titre_employe").value, " ");//alert("kk");

	 

	 if(matricule=="" || nom=="" || prenom=="" || date=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

		 if(!isValidDate(date))alert("la date de naissance n'est pas valide ou n'est pas au bon format.\n format : jj/mm/aaaa");

		 else{

			

			 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				

				   var reponse = eval('(' + leselect + ')');

				   document.getElementById("article2").style.display='none';

				   if(reponse.erreur=="oui"){

					document.getElementById("resultat").innerHTML = reponse.message;

				   }else{

					  //Afficher_infos2('notification.php?message=FELICITATIONS !!! <br />enregistrement a été enregistré avec succes...','600','100')

					  document.getElementById("resultat").innerHTML = reponse.message;

				   }			   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","modifier_employe.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded'); 

			 // ne pas oublier de poster les arguments // 

			 

			 xhr.send("nom="+nom+"&matricule="+matricule+"&titre="+titre+"&sexe="+sexe+"&civilite="+civilite+"&prenom="+prenom+"&matricule="+matricule+"&date_naissance="+date+"&nationalite="+nationalite+"&idemploye="+idemploye);

			 //alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('resultat').innerHTML="<span style='color:red'><b>Traitement encours ... veuillez patienter !</b></span>";

			 document.getElementById("article2").style.width=document.getElementById("page").offsetWidth+"px";

			 document.getElementById("article2").style.height=document.getElementById("page").offsetHeight+"px";

			 document.getElementById("article2").style.display='inline';



		 }

	 }

	 

}





var statut_matrimoniale="Marie";

function Enregistrer_emploi_statut_mat(idemploye){

	 var regime=removeLeadingAndTrailingChar (document.getElementById("regime").value, " ");

	 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				

				   var reponse = eval('(' + leselect + ')');

				   document.getElementById("article2").style.display='none';

				   if(reponse.erreur=="oui"){

					document.getElementById("resultat").innerHTML = reponse.message;

				   }else{

                    document.getElementById("resultat").innerHTML = reponse.message;	

					location.reload();

				   }			   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","enregistrer_statut_mat.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded'); 

			 // ne pas oublier de poster les arguments // 

			 xhr.send("regime="+regime+"&statut="+statut_matrimoniale+"&idemploye="+idemploye);

			 document.getElementById('resultat').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";

			 document.getElementById("article2").style.width=document.getElementById("page").offsetWidth+"px";

			 document.getElementById("article2").style.height=document.getElementById("page").offsetHeight+"px";

			 document.getElementById("article2").style.display='inline';

	 

}





function Enregistrement_enfant(action,idenfant,idemploye,matricule){

	

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_enfant").value, " ");

	 var date=removeLeadingAndTrailingChar (document.getElementById("date_naissance").value, " ");

	 if(nom=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

		//alert("mmkk"); 

			 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   var reponse = eval('(' + leselect + ')');

				   

				   if(reponse.erreur=="oui"){

					document.getElementById("resultat_enfant").innerHTML = reponse.message;

				   }else{

					document.getElementById('resultat_enfant').innerHTML = reponse.message;

										

					if(action!="insertion"){

						self.location="?page=employe.php&spage=employe_formulaire_statut_matrimonial.php&matricule="+matricule+"&menu=Informations personnelles&smenu=Statut matrimonial";

					}else{

				      document.getElementById("formulaire_enfant").reset();

					  recherche_enfant(idemploye);

					}

					

				   }			   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","insertion_modification_enfant.php",true); // ne pas oublier ça pour le post 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

			 // ne pas oublier de poster les arguments // 

			 //alert("nom="+nom+"&entreprise="+entreprise+"&email="+email+"&telephone="+telephone);

			 xhr.send("nom="+nom+"&date_naissance="+date+"&action="+action+"&idenfant="+idenfant+"&idemploye="+idemploye);

			 //alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('resultat_enfant').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	 }

	 

}

		



function recherche_enfant(idemploye){

		

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_enfant").value, " ");

	 var date=removeLeadingAndTrailingChar (document.getElementById("date_naissance").value, " ");

		 

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_enfant').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_enfant.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom="+nom+"&date_naissance="+date+"&idemploye="+idemploye);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}







function supprimer_enfant(idenfant,idemploye){

		

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_enfant").value, " ");

	 var date=removeLeadingAndTrailingChar (document.getElementById("date_naissance").value, " ");

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_enfant').innerHTML= leselect   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_enfant.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom="+nom+"&idenfant="+idenfant+"&suppression=yes"+"&idemploye="+idemploye);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	}

}





function Enregistrement_conjoint(action,idconjoint,idemploye,matricule){

	

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_conjoint").value, " ");

	 if(nom=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

		//alert("mmkk"); 

			 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   var reponse = eval('(' + leselect + ')');

				   

				   if(reponse.erreur=="oui"){

					document.getElementById("resultat_conjoint").innerHTML = reponse.message;

				   }else{

					document.getElementById('resultat_conjoint').innerHTML = reponse.message;

										

					if(action!="insertion"){

						self.location="?page=employe.php&spage=employe_formulaire_statut_matrimonial.php&matricule="+matricule+"&menu=Informations personnelles&smenu=Statut matrimonial";

					}else{

				      document.getElementById("formulaire_conjoint").reset();

					  recherche_conjoint(idemploye);

					}

					

				   }			   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","insertion_modification_conjoint.php",true); // ne pas oublier ça pour le post 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

			 // ne pas oublier de poster les arguments // 

			 //alert("nom="+nom+"&entreprise="+entreprise+"&email="+email+"&telephone="+telephone);

			 xhr.send("nom="+nom+"&action="+action+"&idconjoint="+idconjoint+"&idemploye="+idemploye);

			 //alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('resultat_conjoint').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	 }

	 

}

		



function recherche_conjoint(idemploye){

		

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_conjoint").value, " ");

		 

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_conjoint').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_conjoint.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom="+nom+"&idemploye="+idemploye);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}







function supprimer_conjoint(idconjoint,idemploye){

		

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_conjoint").value, " ");

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_conjoint').innerHTML= leselect   

				} 



			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_conjoint.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom="+nom+"&idconjoint="+idconjoint+"&suppression=yes"+"&idemploye="+idemploye);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	}

}







function Enregistrement_urgence(action,idurgence,idemploye,matricule){

	

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_urgence").value, " ");

	 var email=removeLeadingAndTrailingChar (document.getElementById("email").value, " ");

	 var ville=removeLeadingAndTrailingChar (document.getElementById("ville").value, " ");

	 var telephone=removeLeadingAndTrailingChar (document.getElementById("telephone").value, " ");

	 if(nom=="" || ville=="" || telephone=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

		//alert("mmkk"); 

			 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   var reponse = eval('(' + leselect + ')');

				   

				   if(reponse.erreur=="oui"){

					document.getElementById("resultat_urgence").innerHTML = reponse.message;

				   }else{

					document.getElementById('resultat_urgence').innerHTML = reponse.message;

										

					if(action!="insertion"){

						self.location="?page=employe.php&spage=employe_formulaire_contact_urgence.php&matricule="+matricule+"&menu=Informations personnelles&smenu=Contacts en cas d'urgence";

					}else{

				      document.getElementById("formulaire_urgence").reset();

					  recherche_urgence(idemploye);

					}

					

				   }			   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","insertion_modification_urgence.php",true); // ne pas oublier ça pour le post 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

			 // ne pas oublier de poster les arguments // 

			 //alert("nom="+nom+"&entreprise="+entreprise+"&email="+email+"&telephone="+telephone);

			 xhr.send("nom="+nom+"&email="+email+"&ville="+ville+"&telephone="+telephone+"&action="+action+"&idurgence="+idurgence+"&idemploye="+idemploye);

			 //alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('resultat_urgence').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	 }

	 

}

		



function recherche_urgence(idemploye){

		

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_urgence").value, " ");

		 

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_urgence').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_urgence.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom="+nom+"&idemploye="+idemploye);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}







function supprimer_urgence(idurgence,idemploye){

		

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_urgence").value, " ");

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_urgence').innerHTML= leselect   

				} 



			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_urgence.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom="+nom+"&idurgence="+idurgence+"&suppression=yes"+"&idemploye="+idemploye);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	}

}





function Enregistrement_diplome_employe(action,iddiplome,idemploye,matricule){

	

	 var diplome=addslashes(removeLeadingAndTrailingChar (document.getElementById("diplome").value, " "));

	 var etablissement=addslashes(removeLeadingAndTrailingChar (document.getElementById("etablissement").value, " "));

	 var date_obtention=addslashes(removeLeadingAndTrailingChar (document.getElementById("date_obtention").value, " "));

	 var commentaire=addslashes(removeLeadingAndTrailingChar (document.getElementById("commentaire").value, " "));

	 if(diplome=="" || etablissement=="" || date_obtention=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

		if(!isValidDate(date_obtention)) alert("Date d'obtention invalide");

		else{

			 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   var reponse = eval('(' + leselect + ')');

				   

				   if(reponse.erreur=="oui"){

					document.getElementById("resultat_diplome").innerHTML = reponse.message;

				   }else{

					document.getElementById('resultat_diplome').innerHTML = reponse.message;

										

					if(action!="insertion"){

						self.location="?page=employe.php&spage=employe_formulaire_diplome.php&matricule="+matricule+"&menu=Qualifications&smenu=Diplômes / formations";

					}

					document.getElementById("formulaire_diplome").reset();

					recherche_diplome_employe(idemploye,'0');

				   }			   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","insertion_modification_diplome_employe.php",true); // ne pas oublier ça pour le post 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

			 // ne pas oublier de poster les arguments // 

			 //alert("diplome="+diplome+"&base="+base+"&taux="+taux+"&action="+action+"&iddiplome="+iddiplome+"&idemploye="+idemploye);

			 xhr.send("diplome="+diplome+"&etablissement="+etablissement+"&date_obtention="+date_obtention+"&commentaire="+commentaire+"&action="+action+"&iddiplome="+iddiplome+"&idemploye="+idemploye);

			 //alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('resultat_diplome').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";

		}

	 }

	 

}

		



function recherche_diplome_employe(idemploye,resultat){

		

	 var diplome=addslashes(removeLeadingAndTrailingChar (document.getElementById("diplome").value, " "));

		 

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_diplome').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_diplome_employe.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("diplome="+diplome+"&idemploye="+idemploye+"&resultat="+resultat);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}







function supprimer_diplome_employe(iddiplome,idemploye){

		

	 var diplome=addslashes(removeLeadingAndTrailingChar (document.getElementById("diplome").value, " "));

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_diplome').innerHTML= leselect   

				} 



			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_diplome_employe.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("diplome="+diplome+"&iddiplome="+iddiplome+"&suppression=yes"+"&idemploye="+idemploye);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	}

}







function Enregistrement_experience_employe(action,idexperience,idemploye,matricule){

	

	 var fonction=addslashes(removeLeadingAndTrailingChar (document.getElementById("fonction").value, " "));

	 var entreprise=addslashes(removeLeadingAndTrailingChar (document.getElementById("entreprise").value, " "));

	 var debut=addslashes(removeLeadingAndTrailingChar (document.getElementById("debut").value, " "));

	 var fin=addslashes(removeLeadingAndTrailingChar (document.getElementById("fin").value, " "));

	 var commentaire=addslashes(removeLeadingAndTrailingChar (document.getElementById("commentaire").value, " "));

	 if(fonction=="" || entreprise=="" || debut=="" )alert("Tous les champs en (*) sont obligatoires");

	 else{

		

			

			 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   var reponse = eval('(' + leselect + ')');

				   

				   if(reponse.erreur=="oui"){

					document.getElementById("resultat_experience").innerHTML = reponse.message;

				   }else{

					document.getElementById('resultat_experience').innerHTML = reponse.message;

										

					if(action!="insertion"){

						self.location="?page=employe.php&spage=employe_formulaire_experience.php&matricule="+matricule+"&menu=Qualifications&smenu=Expérience professionnelle";

					}

					document.getElementById("formulaire_experience").reset();

					recherche_experience_employe(idemploye);

				   }			   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","insertion_modification_experience_employe.php",true); // ne pas oublier ça pour le post 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

			 // ne pas oublier de poster les arguments // 

			 //alert("fonction="+fonction+"&entreprise="+entreprise+"&debut="+debut+"&fin="+fin+"&commentaire="+commentaire+"&action="+action+"&idexperience="+idexperience+"&idemploye="+idemploye);

			 xhr.send("fonction="+fonction+"&entreprise="+entreprise+"&debut="+debut+"&fin="+fin+"&commentaire="+commentaire+"&action="+action+"&idexperience="+idexperience+"&idemploye="+idemploye);

			 //alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('resultat_experience').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";

		}

	 

	 

}

		



function recherche_experience_employe(idemploye){

		

	 var fonction=addslashes(removeLeadingAndTrailingChar (document.getElementById("fonction").value, " "));

	 var entreprise=addslashes(removeLeadingAndTrailingChar (document.getElementById("entreprise").value, " "));

		 

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_experience').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_experience_employe.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("fonction="+fonction+"&entreprise="+entreprise+"&idemploye="+idemploye);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}







function supprimer_experience_employe(idexperience,idemploye){

		

	 var fonction=addslashes(removeLeadingAndTrailingChar (document.getElementById("fonction").value, " "));

	 var entreprise=addslashes(removeLeadingAndTrailingChar (document.getElementById("entreprise").value, " "));

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_experience').innerHTML= leselect   

				} 



			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_experience_employe.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("fonction="+fonction+"&entreprise="+entreprise+"&idexperience="+idexperience+"&suppression=yes"+"&idemploye="+idemploye);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	}

}







function Enregistrement_fichier_employe(){

	

	 var titre=addslashes(removeLeadingAndTrailingChar (document.getElementById("titre").value, " "));

	 if(titre=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

		document.getElementById("formulaire_fichier").submit()

	 }

	 

}

		



function Enregistrement_secteur_employe(action,idsecteur,idemploye,matricule){

	

	 var secteur=addslashes(removeLeadingAndTrailingChar (document.getElementById("secteur").value, " "));

	 if(secteur=="0" )alert("Les champs en (*) sont obligatoires");

	 else{

		

			 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   var reponse = eval('(' + leselect + ')');

				   

				   if(reponse.erreur=="oui"){

					document.getElementById("resultat_secteur").innerHTML = reponse.message;

				   }else{

					document.getElementById('resultat_secteur').innerHTML = reponse.message;

										

					if(action!="insertion"){

						self.location="?page=employe.php&spage=employe_formulaire_secteur.php&matricule="+matricule+"&menu=Qualifications&amp;smenu=Secteurs d'activit&eacute;s";

					}

					document.getElementById("formulaire_secteur").reset();

					recherche_secteur_employe(idemploye,'0');

				   }			   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","insertion_modification_secteur_employe.php",true); // ne pas oublier ça pour le post 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

			 // ne pas oublier de poster les arguments // 

			 //alert("secteur="+secteur+"&base="+base+"&taux="+taux+"&action="+action+"&idsecteur="+idsecteur+"&idemploye="+idemploye);

			 xhr.send("secteur="+secteur+"&action="+action+"&idsecteur="+idsecteur+"&idemploye="+idemploye);

			 //alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('resultat_secteur').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";

		

	 }

	 

}

		



function recherche_secteur_employe(idemploye,resultat){

		

	 var secteur=addslashes(removeLeadingAndTrailingChar (document.getElementById("secteur").value, " "));

		 

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_secteur').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_secteur_employe.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("secteur="+secteur+"&idemploye="+idemploye+"&resultat="+resultat);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_secteur').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}







function supprimer_secteur_employe(idsecteur,idemploye){

		

	 var secteur=addslashes(removeLeadingAndTrailingChar (document.getElementById("secteur").value, " "));

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_secteur').innerHTML= leselect   

				} 



			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_secteur_employe.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("secteur="+secteur+"&idsecteur="+idsecteur+"&suppression=yes"+"&idemploye="+idemploye);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_secteur').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	}

}





function Select_specialite(idemploye){

	 

	 var fonction=removeLeadingAndTrailingChar (document.getElementById("fonction").value, " ");

	 

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('div_site').innerHTML= leselect   

				   recherche_fonction_employe(idemploye,'0');

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","fiche_filtre_specialite.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("fonction="+fonction);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('div_site').innerHTML="<span style='color:red'><b>Chargement en cours ...</b></span>";



}



function Enregistrement_fonction_employe(action,idfonction,idemploye,matricule){

	

	 var fonction=addslashes(removeLeadingAndTrailingChar (document.getElementById("fonction").value, " "));

	 var specialite=addslashes(removeLeadingAndTrailingChar (document.getElementById("specialite").value, " "));

	 if(fonction=="0" )alert("Les champs en (*) sont obligatoires");

	 else{

		

			 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				  // alert(leselect);

				   var reponse = eval('(' + leselect + ')');

				   

				   if(reponse.erreur=="oui"){

					document.getElementById("resultat_fonction").innerHTML = reponse.message;

				   }else{

					document.getElementById('resultat_fonction').innerHTML = reponse.message;

										

					if(action!="insertion"){

						self.location="?page=employe.php&spage=employe_formulaire_fonction.php&matricule="+matricule+"&menu=Qualifications&amp;smenu=Fonction et sp&eacute;cialit&eacute;s";

					}

					

					document.getElementById("formulaire_fonction").reset();

					recherche_fonction_employe(idemploye,'0');

				   }			   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","insertion_modification_fonction_employe.php",true); // ne pas oublier ça pour le post 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

			 // ne pas oublier de poster les arguments // 

			 //alert("fonction="+fonction+"&base="+base+"&taux="+taux+"&action="+action+"&idfonction="+idfonction+"&idemploye="+idemploye);

			 xhr.send("fonction="+fonction+"&specialite="+specialite+"&action="+action+"&idfonction="+idfonction+"&idemploye="+idemploye);

			 //alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('resultat_fonction').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";

		

	 }

	 

}

		



function recherche_fonction_employe(idemploye,resultat){

		

	 var fonction=addslashes(removeLeadingAndTrailingChar (document.getElementById("fonction").value, " "));

	 var specialite=addslashes(removeLeadingAndTrailingChar (document.getElementById("specialite").value, " "));

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_fonction').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_fonction_employe.php",true); // ne pas oublier ça pour le post 

			

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("fonction="+fonction+"&specialite="+specialite+"&idemploye="+idemploye+"&resultat="+resultat);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_fonction').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}







function supprimer_fonction_employe(idfonction,idemploye){

		

	 var fonction=addslashes(removeLeadingAndTrailingChar (document.getElementById("fonction").value, " "));

	 var specialite=addslashes(removeLeadingAndTrailingChar (document.getElementById("specialite").value, " "));

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_fonction').innerHTML= leselect   

				} 



			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_fonction_employe.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("fonction="+fonction+"&specialite="+specialite+"&idfonction="+idfonction+"&suppression=yes"+"&idemploye="+idemploye);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_fonction').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	}

}





function Enregistrement_langue(){

	 

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_langue").value, " ");

	 if(nom=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

			 document.getElementById('resultat').innerHTML="<span style='color:red'><b>Traitement encours ... veuillez patienter !</b></span>";

			 document.getElementById("article2").style.width=document.getElementById("page").offsetWidth+"px";

			 document.getElementById("article2").style.height=document.getElementById("page").offsetHeight+"px";

			 document.getElementById("article2").style.display='inline';

			 document.getElementById("formulaire_langue").submit();

	 }

	 

}

		



function recherche_langue(menu,smenu,debut,page,total){

		

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_langue").value, " ");

		 

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_langue').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_langue.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom="+nom+"&debut="+debut+"&page="+page+"&total="+total+"&idmenu="+menu+"&idsmenu="+smenu);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_langue').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}









function supprimer_langue(menu,smenu,idlangue,debut,page,total){

	 

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_langue").value, " ");

	  

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_langue').innerHTML= leselect   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_langue.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom="+nom+"&idlangue="+idlangue+"&idmenu="+menu+"&idsmenu="+smenu+"&debut="+debut+"&page="+page+"&total="+total+"&suppression=yes");

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_langue').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	}

}



function Enregistrement_langue_employe(action,idlangue,idemploye,matricule){

	

	 var langue=addslashes(removeLeadingAndTrailingChar (document.getElementById("langue").value, " "));

	 var niveau=addslashes(removeLeadingAndTrailingChar (document.getElementById("niveau").value, " "));

	 if(langue=="0" || niveau=="0" )alert("Les champs en (*) sont obligatoires");

	 else{

		

			 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				  // alert(leselect);

				   var reponse = eval('(' + leselect + ')');

				   

				   if(reponse.erreur=="oui"){

					document.getElementById("resultat_langue").innerHTML = reponse.message;

				   }else{

					document.getElementById('resultat_langue').innerHTML = reponse.message;

										

					if(action!="insertion"){

						self.location="?page=employe.php&spage=employe_formulaire_langue.php&matricule="+matricule+"&menu=Qualifications&amp;smenu=Langues";

					}

					

					

					document.getElementById("formulaire_langue").reset();

					recherche_langue_employe(idemploye,'0');

				   }			   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","insertion_modification_langue_employe.php",true); // ne pas oublier ça pour le post 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

			 // ne pas oublier de poster les arguments // 

			 //alert("langue="+langue+"&base="+base+"&taux="+taux+"&action="+action+"&idlangue="+idlangue+"&idemploye="+idemploye);

			 xhr.send("langue="+langue+"&niveau="+niveau+"&action="+action+"&idlangue="+idlangue+"&idemploye="+idemploye);

			 //alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('resultat_langue').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";

		

	 }

	 

}

		



function recherche_langue_employe(idemploye,resultat){

		

	 var langue=addslashes(removeLeadingAndTrailingChar (document.getElementById("langue").value, " "));

	 var niveau=addslashes(removeLeadingAndTrailingChar (document.getElementById("niveau").value, " "));

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_langue').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_langue_employe.php",true); // ne pas oublier ça pour le post 

			

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("langue="+langue+"&niveau="+niveau+"&idemploye="+idemploye+"&resultat="+resultat);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_langue').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}







function supprimer_langue_employe(idlangue,idemploye){

		

	 var langue=addslashes(removeLeadingAndTrailingChar (document.getElementById("langue").value, " "));

	 var niveau=addslashes(removeLeadingAndTrailingChar (document.getElementById("niveau").value, " "));

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_langue').innerHTML= leselect   

				} 



			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_langue_employe.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("langue="+langue+"&niveau="+niveau+"&idlangue="+idlangue+"&suppression=yes"+"&idemploye="+idemploye);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_langue').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	}

}



function Enregistrement_competence_employe(){

	

	 var titre=addslashes(removeLeadingAndTrailingChar (document.getElementById("titre").value, " "));

	 if(titre=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

		document.getElementById("formulaire_competence").submit()

	 }

	 

}



function supprimer_competence_employe(idcompetence,idemploye){

		

	 var competence=addslashes(removeLeadingAndTrailingChar (document.getElementById("titre").value, " "));

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_competence').innerHTML= leselect   

				} 



			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_competence_employe.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("competence="+competence+"&idcompetence="+idcompetence+"&suppression=yes"+"&idemploye="+idemploye);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_competence').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	}

}





function Enregistrement_complement_employe(){

	

	 var titre=addslashes(removeLeadingAndTrailingChar (document.getElementById("titre").value, " "));

	 if(titre=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

		document.getElementById("formulaire_complement").submit()

	 }

	 

}



function recherche_employe(menu,smenu,debut,page,total){

	

	 var chaine=removeLeadingAndTrailingChar (document.getElementById("chaine").value, " ");

		 

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_r1').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_employe.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("chaine="+chaine+"&debut="+debut+"&page="+page+"&total="+total+"&idmenu="+menu+"&idsmenu="+smenu);

			 //alert("chaine="+chaine+"&debut="+debut+"&page="+page+"&total="+total+"&idmenu="+menu+"&idsmenu="+smenu);//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_r1').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}





function Enregistrement_photo_employe(){

	

	 var photo=addslashes(removeLeadingAndTrailingChar (document.getElementById("photo").value, " "));

	 if(photo=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

		document.getElementById("formulaire_photo").submit()

	 }

	 

}

	

function Afficher_infos2(page,largeur,top){

  

  var x_left=(document.body.clientWidth-largeur)/2; 

  document.getElementById("article").style.left=x_left+"px";

  document.getElementById("article").style.width=largeur+"px";

  document.getElementById("article").style.top=top+"px";

  

  document.getElementById("div_recherche").style.width=document.getElementById("page").offsetWidth+"px";

  document.getElementById("div_recherche").style.height=document.getElementById("page").offsetHeight+"px";

  

  document.getElementById("div_recherche").style.display='inline';

  document.getElementById("article").style.display='inline';

  document.getElementById("mon_menu").style.display='none';



  document.getElementById("article").innerHTML="<table width='100%'  border='0'>  <tr>    <td height='170' align='center' valign='middle' class='titre_la_une' style='color:white'>Chargement en cours ... Veuillez patienter <br>    <img src='images/loadinfo.net.gif' width='24' height='24'></td>  </tr></table>";

 

   window.scrollTo(0,0);

   getXhr();

  // On défini ce qu'on va faire quand on aura la réponse 

  xhr.onreadystatechange = function(){

    // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

    if(xhr.readyState == 4 && xhr.status == 200){ 

     var leselect = xhr.responseText; 

	  //alert(leselect);

	  document.getElementById('article').innerHTML = leselect;

	   

    } 

  }

  // Ici on va voir comment faire du post 

  xhr.open("POST",page,true); // ne pas oublier ça pour le post 

  xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

  // ne pas oublier de poster les arguments // 

   

  xhr.send("");

}

function Fermer(){

	  

	  document.getElementById("mon_menu").style.display='inline';

      document.getElementById("div_recherche").style.display='none';

	  document.getElementById('article').style.display='none';

	  //document.getElementById('div_recherche').style.display='none';

 

	 

 }

 

 function Fermeture(){

	

	document.getElementById("div_recherche").style.display='none';

    document.getElementById("article").style.display='none';

	document.getElementById("mon_menu").style.display='inline';

}





function supprimer_employe(idemploye,menu, smenu,debut,page,total){

		

	 var chaine=removeLeadingAndTrailingChar (document.getElementById("chaine").value, " ");

	  

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_r1').innerHTML= leselect   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_employe.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("chaine="+chaine+"&idmenu="+menu+"&idsmenu="+smenu+"&idemploye="+idemploye+"&debut="+debut+"&page="+page+"&total="+total+"&suppression=yes");

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_r1').innerHTML="<span style='color:red'><b>Traitement encours ... veuillez patienter !</b></span>";



	}

}



function Imprimer(page,left,top){

	var width=screen.width; 

	var height=screen.height; 

	popUpWindow(page, left, top, width, height);

	

	

}



function Enregistrement_pays(){

	  

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_pays").value, " ");

	 if(nom=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

		//alert("mmkk"); 

			

			 document.getElementById('resultat').innerHTML="<span style='color:red'><b>Traitement encours ... veuillez patienter !</b></span>";

			 document.getElementById("article2").style.width=document.getElementById("page").offsetWidth+"px";

			 document.getElementById("article2").style.height=document.getElementById("page").offsetHeight+"px";

			 document.getElementById("article2").style.display='inline';

			 document.getElementById("formulaire_pays").submit();



	 }

	 

}

		



function recherche_pays(menu,smenu,debut,page,total){

		

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_pays").value, " ");

	 var nationalite=removeLeadingAndTrailingChar (document.getElementById("nationalite").value, " ");

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_pays').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_pays.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom="+nom+"&nationalite="+nationalite+"&debut="+debut+"&page="+page+"&total="+total+"&idmenu="+menu+"&idsmenu="+smenu);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_pays').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



		 

}







function supprimer_pays(menu,smenu,idpays,debut,page,total){

		

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom_pays").value, " ");

	 var nationalite=removeLeadingAndTrailingChar (document.getElementById("nationalite").value, " ");

	if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT")==true){

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste_pays').innerHTML= leselect   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_pays.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom="+nom+"&nationalite="+nationalite+"&idmenu="+menu+"&idsmenu="+smenu+"&idpays="+idpays+"&debut="+debut+"&page="+page+"&total="+total+"&suppression=yes");

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste_pays').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";



	}

}





function Enregistrement_utilisateur(){

	

	 var nom=removeLeadingAndTrailingChar (document.getElementById("nom").value, " ");

	 var compte=removeLeadingAndTrailingChar (document.getElementById("compte").value, " ");

	 var email=removeLeadingAndTrailingChar (document.getElementById("email").value, " ");

	 var pwd=removeLeadingAndTrailingChar (document.getElementById("pwd").value, " ");

	 var droit=removeLeadingAndTrailingChar (document.getElementById("droit").value, " ");

       



	 if(nom==""  || email=="" || pwd=="" || compte=="")alert("Tous les champs en (*) sont obligatoires");

	 else{

		if(droit=="")alert("Vous devez donner au moins un accès"); 

		else{

			 document.getElementById('resultat').innerHTML="<span style='color:red'><b>Traitement encours ... veuillez patienter !</b></span>";

			 document.getElementById("article2").style.width=document.getElementById("page").offsetWidth+"px";

			 document.getElementById("article2").style.height=document.getElementById("page").offsetHeight+"px";

			 document.getElementById("article2").style.display='inline';

			 document.getElementById("formulaire_utilisateur").submit();

	         document.getElementById('resultat').innerHTML="<span style='color:red'><b>Traitement encours ... veuillez patienter !</b></span>";



	 }

  }

}











function recherche_utilisateur(debut,page,total,le_module){

	 var droit=0;

	 var nom_utilisateur=removeLeadingAndTrailingChar (document.getElementById("nom").value, " ");

	 var compte=removeLeadingAndTrailingChar (document.getElementById("compte").value, " ");

	 var email=removeLeadingAndTrailingChar (document.getElementById("email").value, " ");

	 droit=removeLeadingAndTrailingChar (document.getElementById("droit").value, " ");

	 

	 

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste').innerHTML= leselect   

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_utilisateur.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 xhr.send("nom_utilisateur="+nom_utilisateur+"&compte="+compte+"&email="+email+"&droit="+droit+"&debut="+debut+"&page="+page+"&total="+total+"&le_module="+le_module);

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste').innerHTML="<span style='color:red'><b>Traitement encours ... veuillez patienter !</b></span>";



		 

}



function supprimer_utilisateur(idutilisateur,menu,smenu,debut,page,total,le_module){

		

	 var nom_utilisateur=removeLeadingAndTrailingChar (document.getElementById("nom").value, " ");

	 var compte=removeLeadingAndTrailingChar (document.getElementById("compte").value, " ");

	 var email=removeLeadingAndTrailingChar (document.getElementById("email").value, " ");



     if(confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER CET ENREGISTREMENT ?")==true){	

		 getXhr();

			 // On défini ce qu'on va faire quand on aura la réponse 

			 xhr.onreadystatechange = function(){  

			 // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

				if(xhr.readyState == 4 && xhr.status == 200){ 

				   var leselect = xhr.responseText; 

				   //alert(leselect);

				   document.getElementById('liste').innerHTML= leselect ;

				   //alert("khh");

				} 

			  }

			  

			 // Ici on va voir comment faire du post 

			 xhr.open("POST","recherche_utilisateur.php",true); // ne pas oublier ça pour le post 

			 

			 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  

			 // ne pas oublier de poster les arguments // 

			 //alert("nom_utilisateur="+nom_utilisateur+"&compte="+compte+"&email="+email+"&idmenu="+menu+"&idsmenu="+smenu+"&debut="+debut+"&page="+page+"&total="+total+"&suppression=yes");

			 xhr.send("nom_utilisateur="+nom_utilisateur+"&idutilisateur="+idutilisateur+"&le_module="+le_module+"&compte="+compte+"&email="+email+"&idmenu="+menu+"&idsmenu="+smenu+"&debut="+debut+"&page="+page+"&total="+total+"&suppression=yes");

			 //alert("bonjour");//alert("titre="+titre+"&commentaire="+commentaire+"&idarticle="+idarticle+"&email="+email+"&pseudo="+pseudo);

			 document.getElementById('liste').innerHTML="<span style='color:red'><b>Traitement en cours ... veuillez patienter !</b></span>";

	 }

		 

}





function Afficher_cacher_smenu(idmenu, dataid){

	

	if($("#"+idmenu+"").css("display")=="inline"){

		 $("#"+idmenu+"").css("display","none");

		 $("div [data-id="+dataid+"]").addClass("bottom");

	     $("div [data-id="+dataid+"]").removeClass("top");

	}else{

		 $("#"+idmenu+"").css("display","inline");

		 $("div [data-id="+dataid+"]").addClass("top");

	     $("div [data-id="+dataid+"]").removeClass("bottom");

	}

}







function getScrollXY() {

    var x = 0, y = 0;

    if( typeof( window.pageYOffset ) == 'number' ) {

        // Netscape

        x = window.pageXOffset;

        y = window.pageYOffset;

    } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {

        // DOM

        x = document.body.scrollLeft;

        y = document.body.scrollTop;

    } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {

        // IE6 standards compliant mode

        x = document.documentElement.scrollLeft;

        y = document.documentElement.scrollTop;

    }

    return  y;

}



function Afficher_information_traitement(div_information){

	document.getElementById("opacite").innerHTML =document.getElementById(div_information).innerHTML;

}



function Afficher_information_traitement2(div_information, div_conteneur){

	document.getElementById(div_conteneur).innerHTML =document.getElementById(div_information).innerHTML;

}





function Affichage_page(fichier){

     getXhr();

     // On défini ce qu'on va faire quand on aura la réponse 

     xhr.onreadystatechange = function(){

     // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

        if(xhr.readyState == 4 && xhr.status == 200){ 

           var leselect = xhr.responseText; 

		      //alert(leselect); 

			  document.getElementById("opacite").innerHTML = leselect;

        } 

      }



     // Ici on va voir comment faire du post 

     xhr.open("POST",fichier,true); // ne pas oublier ça pour le post 

     xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

	 Afficher_opaciter_commentaire2();

	 //Afficher_information_traitement('div_traitement');

     xhr.send("");

}













function Cacher_opaciter_div(div){

	document.getElementById("page").style.overflow="auto";

	document.getElementById(div).style.display="none";

}



function Cacher_opaciter(div){

	document.getElementById("page").style.overflow="auto";

	document.getElementById(div).style.display="none"; 

}







function Afficher_opaciter(div, scrooller){

	var hauteur=document.getElementById("page").offsetHeight;

	if(window.innerHeight>hauteur)hauteur=window.innerHeight;

	document.getElementById(div).style.paddingTop=(getScrollXY())+"px";

	if(scrooller==0)document.getElementById("page").style.overflow="hidden";

	document.getElementById(div).style.height=hauteur+"px";

	document.getElementById(div).style.display="inline";

}



function Affichage_box64(fichier,opacite,traitement, scrooller){

	fichier=base64_decode(fichier);

     getXhr();

     // On défini ce qu'on va faire quand on aura la réponse 

     xhr.onreadystatechange = function(){

     // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

        if(xhr.readyState == 4 && xhr.status == 200){ 

           var leselect = xhr.responseText; 

		      //alert(leselect); 

			  document.getElementById(opacite).innerHTML = leselect;

        } 



      }



     // Ici on va voir comment faire du post 

     xhr.open("POST",fichier,true); // ne pas oublier ça pour le post 

     xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

	 Afficher_opaciter(opacite,scrooller); 

	 Afficher_information_traitement2(traitement, opacite);

     xhr.send("");

}





function Affichage_box(fichier,opacite,traitement, scrooller){

     getXhr();

     // On défini ce qu'on va faire quand on aura la réponse 

     xhr.onreadystatechange = function(){

     // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

        if(xhr.readyState == 4 && xhr.status == 200){ 

           var leselect = xhr.responseText; 

		      //alert(leselect); 

			  document.getElementById(opacite).innerHTML = leselect;

        } 



      }



     // Ici on va voir comment faire du post 

     xhr.open("POST",fichier,true); // ne pas oublier ça pour le post 

     xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

	 Afficher_opaciter(opacite,scrooller); 

	 Afficher_information_traitement2(traitement, opacite);

     xhr.send("");

}



function Acceder_cpt2(destination,idcpt,idpwd,indicateur){

	//alert("khhk");

   getXhr();

  // On défini ce qu'on va faire quand on aura la réponse 

  xhr.onreadystatechange = function(){

    // On ne fait quelque chose que si on a tout reçu et que le serveur est ok

    if(xhr.readyState == 4 && xhr.status == 200){ 

     var leselect =xhr.responseText; 

     //alert(leselect);

	  var reponse = eval('(' + leselect + ')'); 

	        if(reponse.erreur=="oui"){

			   Cacher_opaciter('opacite2');

		       document.getElementById(indicateur).innerHTML=reponse.message;

			   $("#"+indicateur+"").css("display","inline");

	        }else{

			   destination=base64_decode(destination);

			   document.getElementById("opacite2").innerHTML=reponse.message;

			   if(destination!="" && destination!="index.php"){

				   if(stripos(destination, "cmd")===false)setTimeout("self.location='"+(destination)+"'",3000);

				   else{ Commande_enregistrer_commande();}

			   }else{

				   self.location=self.location;

			   }

			}	

    } 



  }

  // Ici on va voir comment faire du post 



  xhr.open("POST","fiche-control-connexion.php",true); // ne pas oublier ça pour le post 



  xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');



  // ne pas oublier de poster les arguments // 

  var pwd = removeLeadingAndTrailingChar (document.getElementById(idpwd).value, " ");

  var compte = removeLeadingAndTrailingChar (document.getElementById(idcpt).value, " ");

  if(pwd=="" || compte=="")alert("Vous devez saisir un compte et un mot de passe!");

  else{

	  

	 $("#"+indicateur).html("");

	 xhr.send("pwd="+pwd+"&compte="+compte);

	 Afficher_opaciter('opacite2',1);

	 Afficher_information_traitement2('div_traitement2','opacite2');

  }

}





function Acceder_cpt2(destination,idcpt,idpwd,indicateur){

  var pwd = removeLeadingAndTrailingChar (document.getElementById(idpwd).value, " ");

  var compte = removeLeadingAndTrailingChar (document.getElementById(idcpt).value, " ");

  if(pwd=="" || compte=="")alert("Vous devez saisir un compte et un mot de passe!");

  else{

	  

	 $("#"+indicateur).html("");

	 Afficher_opaciter('opacite2',1);

	 Afficher_information_traitement2('div_traitement2','opacite2');

	 

	 $.ajax({

       url : "fiche-control-connexion.php",

       type : 'POST', // Le type de la requête HTTP, ici devenu POST

       data : "pwd="+pwd+"&compte="+compte, 

       success : function(data, statut){ // success est toujours en place, bien sûr !

          //alert("225");

		  var reponse = eval('(' + data + ')'); 

	        if(reponse.erreur=="oui"){

			   Cacher_opaciter('opacite2');

		       document.getElementById(indicateur).innerHTML=reponse.message;

			   $("#"+indicateur+"").css("display","inline");

	        }else{

			   destination=base64_decode(destination);

			   document.getElementById("opacite2").innerHTML=reponse.message;

			   if(destination!="" && destination!="index.php"){

				   if(stripos(destination, "validation")===false)setTimeout("self.location='"+(destination)+"'",3000);

				   else{ Commande_enregistrer_commande();}

			   }else{

				   self.location=self.location;

			   }

			}	

       },



       error : function(resultat, statut, erreur){

             alert(erreur);

       }

    });

  }

}





function Acceder_cpt(destination,idcpt,idpwd,indicateur){

  var pwd = removeLeadingAndTrailingChar (document.getElementById(idpwd).value, " ");

  var compte = removeLeadingAndTrailingChar (document.getElementById(idcpt).value, " ");

  if(pwd=="" || compte=="")alert("Vous devez saisir un compte et un mot de passe!");

  else{

	  

	 $("#"+indicateur).html("");

	 Afficher_opaciter('opacite2',1);

	 Afficher_information_traitement2('div_traitement2','opacite2');

	 

	 $.ajax({

       url : "fiche-control-connexion.php",

       type : 'POST', // Le type de la requête HTTP, ici devenu POST

       data : "pwd="+pwd+"&compte="+compte, 

       success : function(data, statut){ // success est toujours en place, bien sûr !
             alert(data);
		  var reponse = eval('(' + data + ')'); 

	        if(reponse.erreur=="oui"){

			   Cacher_opaciter('opacite2');

		       document.getElementById(indicateur).innerHTML=reponse.message;

			   $("#"+indicateur+"").css("display","inline");

	        }else{

			   destination=base64_decode(destination); 

			   document.getElementById("opacite2").innerHTML=reponse.message;

			   if(destination!="" && destination!="index.php"){

				   if(stripos(destination, "validation")===false)setTimeout("self.location='"+(destination)+"'",3000);

				   else{ Commande_enregistrer_commande();}

			   }else{

				   self.location=self.location;

			   }

			}	

       },



       error : function(resultat, statut, erreur){

             alert(erreur);

       }

    });

  }

}







function afficher_contenu_onglet(onglet,div_conteneur){

	 var current = null;

	 var lien = "#"+div_conteneur+"";

	 if(lien == onglet){

	   return false; 

	 }else{

	   $('#'+onglet+'').siblings('li').removeClass('onglet_actif');

	   $('#'+onglet+'').addClass('onglet_actif');

	   $(".tab-content").siblings().hide();

	   $("#"+div_conteneur+"").show();

	   

	   current = "#"+onglet+"";

	   return false;

	 }

	 return false;

}







function Afficher_fenetre_impression(URLStr){

   var width=screen.width;

   var height=screen.height;

   var left=0; var top=0;

   popUpWindow(URLStr, left, top, width, height);	

}



function Afficher_libelle_page_impression(){

	

	$("#div_libelle").html($("#titre_impression").val().replace(/\n/g,"<br>"));

	Cacher_opaciter("opacite");

	

}





function Afficher_formulaire_libelle_impression(){

	

	var libelle=$("#div_libelle").html(); 

	Affichage_box('lightbox_libelle_impression.php?libelle='+libelle,'opacite','div_traitement', '1');

	

}