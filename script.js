function goToGithub() {
  window.location.href("https://github.com/FilipAltDelete?tab=repositories");
}

function clearContentText() {
  var content = "";
  document.getElementById("contentText").innerHTML = content;
}

function showCV() {
  var cvContent = "";
  cvContent += "Nuvarande sysselsättning: Studerar Systemutvecklare .NET på Borås yrkeshögskola.";
  cvContent += "<br>";
  cvContent += "<br>";
  cvContent += "Tidigare erfarenheter: Har jobbat som snickare, ställningsbyggare och säljare.";
  cvContent += "<br>";
  cvContent += "<br>";
  cvContent += "Gymnasial utbildning: Medieprogrammet 3 år.";
  document.getElementById("contentText").innerHTML = cvContent;
}

function showBrev() {
  var brevContent = "";

  brevContent += "Mitt namn är Filip Larsson och jag är 28 år och bor i en byhåla strax utanför Borås.";
  brevContent += "<br>";
  brevContent += "Tidigare i mitt liv har jag jobbat med lite allt möjligt, allt från att ";
  brevContent += "<br>";
  brevContent += "bygga byggnadsställning till försäljning.";
  brevContent += "<br>";
  brevContent += "Vad som fick mig att ta steget till att börja programmera var";
  brevContent += "<br>";
  brevContent += "att jag alltid har varit intresserad av datorer, webben och hur saker och ting fungerar i den digitala världen";

  /*
  brevContent += "<br>";
  brevContent += "<br>";
  brevContent += "Det jag gillar att göra på min fritid är att sitta vid datorn och programmera roliga appar och hemsidor,";
  brevContent += "<br>";
  brevContent += "spela musik med mitt band och umgås med vänner och familj.";
  */

  document.getElementById("contentText").innerHTML = brevContent
}
