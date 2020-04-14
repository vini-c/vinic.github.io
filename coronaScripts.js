var homeVNCoronaPage = document.getElementById("coronaHome");

window.onload = function(){
 var hash =  window.location.hash;
 if ( hash == "#coronaAtendimentoPage") {
   changeCoronaPage('coronaAtendimentoPage','coronaAtendimentoOrigin','coronaClonedAtendimentoContent');
 }
 else if ( hash == "#coronaBrasileirosPage") {
   changeCoronaPage('coronaBrasileirosPage','coronaBrasileirosOrigin','coronaClonedBrasileirosContent');
 }
 else if ( hash == "#coronaRulesPage") {
   changeCoronaPage('coronaRulesPage','coronaRegrasOrigin','coronaClonedRegrasContent');
   coronaTopRules();
 }
 else if ( hash == "#coronaReembolsoPage") {
   changeCoronaPage('coronaReembolsoPage','coronaReembolsoOrigin','coronaClonedReembolsoContent');
 }
 else {
   window.location.hash = "#coronaHome"
 }
};

function openCoronaTabs(evtCorona, coronaContentType) {
  var i;
  var x = document.getElementsByClassName("coronaTabsContents");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  coronaTabsLinks = document.getElementsByClassName("coronaTabsCTA");
  for (i = 0; i < x.length; i++) {
    coronaTabsLinks[i].className = coronaTabsLinks[i].className.replace(" coronaActiveTab", "");
  }
  document.getElementById(coronaContentType).style.display = "block";
  evtCorona.currentTarget.className += " coronaActiveTab";
}
function changeCoronaPage(coronaPageName, coronaContentOrigin, coronaClonedContent) {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  homeVNCoronaPage.style.display = "none";
  document.getElementById(coronaPageName).style.display = "block";
  var coronaDaddyClone = document.getElementById(coronaContentOrigin);
  var coronaClone = coronaDaddyClone.cloneNode(true);
  document.getElementById(coronaClonedContent).appendChild(coronaClone);
  window.location.hash = coronaPageName;
  console.log(coronaPageName);
}
function coronaBackHome(coronaPageName, coronaClonedContent) {
  homeVNCoronaPage.style.display = "block";
  document.getElementById(coronaPageName).style.display = "none";
  document.getElementById(coronaClonedContent).innerHTML = "";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  window.location.hash = "#coronaHome";
}
function coronaModalVN(coronaPageModal) {
  var coronaModal = document.getElementById(coronaPageModal);
  document.getElementById(coronaPageModal).style.display = "block";
  document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
      isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
      isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
      document.getElementById(coronaPageModal).style.display = "none";
    }
  };
}
function coronaCloseModal(coronaPageModal) {
  var coronaModal = document.getElementById(coronaPageModal);
  document.getElementById(coronaPageModal).style.display = "none";
}
function coronaTopRules(){
coronaScrolLCTA = document.getElementById("coronaScrolltoTop");
window.onscroll = function() {scrollFunctionCorona()};
}
function scrollFunctionCorona() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
    coronaScrolLCTA.style.display = "block";
  } else {
    coronaScrolLCTA.style.display = "none";
  }
}
function changeCoronaPageModal(coronaPageName, coronaContentOrigin, coronaClonedContent, coronaPageModal) {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  homeVNCoronaPage.style.display = "none";
  document.getElementById('coronaAtendimentoPage').style.display = "none";
  document.getElementById(coronaPageName).style.display = "block";
  var coronaDaddyClone = document.getElementById(coronaContentOrigin);
  var coronaClone = coronaDaddyClone.cloneNode(true);
  document.getElementById(coronaClonedContent).appendChild(coronaClone);
  var coronaModal = document.getElementById(coronaPageModal);
  document.getElementById(coronaPageModal).style.display = "none";
}
function openCoronaTabsModal(evtCorona, coronaContentType, coronaPageModal) {
  var i;
  var x = document.getElementsByClassName("coronaTabsContents");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  coronaTabsLinks = document.getElementsByClassName("coronaTabsCTA");
  for (i = 0; i < x.length; i++) {
    coronaTabsLinks[i].className = coronaTabsLinks[i].className.replace(" coronaActiveTab", "");
  }
  document.getElementById(coronaContentType).style.display = "block";
  evtCorona.currentTarget.className += " coronaActiveTab";

  var coronaModal = document.getElementById(coronaPageModal);
  document.getElementById(coronaPageModal).style.display = "none";
}
function topCoronaFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.onhashchange = function() {
  if (window.location.hash == "#coronaHome") {
      location.reload()
  }
}
