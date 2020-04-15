var homeVNCoronaPage = document.getElementById("Informacoes-importantes");
var coronaMediaScreen = window.matchMedia("(max-width: 800px)")
var hash = window.location.hash;

function coronaWidthCheck(pagehash, originContent, clonedContent, realContent, tabNumber) {
  if (coronaMediaScreen.matches) {
    changeCoronaPageonLoad(pagehash, originContent, clonedContent);
  } else {
    openCoronaTabsonLoad(realContent, tabNumber);
  }
}

window.onload = screenCheckerCorona();
window.onhashchange = function(){
  screenCheckerCorona();
};

function screenCheckerCorona() {
  var hash = window.location.hash;
  if (hash == "#Atendimento") {
    coronaCloseModalBack('Prioridade-2');
    coronaCloseModalBack('Prioridade-3');
    coronaWidthCheck('Atendimento', 'coronaAtendimentoOrigin', 'coronaClonedAtendimentoContent', 'coronaAtendimentoContent', 'Tabs1');
  } else if (hash == "#Brasileiros-no-exterior") {
    coronaWidthCheck('Brasileiros-no-exterior', 'coronaBrasileirosOrigin', 'coronaClonedBrasileirosContent', 'coronaBrasileirosContent', 'Tabs2');
  } else if (hash == "#Regras-de-cias") {
    coronaTopRules();
    coronaBackHomeonLoad('Reembolso','coronaClonedReembolsoContent');
    coronaCloseModalBack('AirFrance');
    coronaCloseModalBack('Ethiopian');
    coronaCloseModalBack('KLM');
    coronaCloseModalBack('Norwegian');
    coronaCloseModalBack('Paranair');
    coronaCloseModalBack('Qantas');
    coronaCloseModalBack('Qatar');
    coronaCloseModalBack('RoyalAirMaroc');
    coronaWidthCheck('Regras-de-cias', 'coronaRegrasOrigin', 'coronaClonedRegrasContent', 'coronaRegrasContent', 'Tabs3');
  } else if (hash == "#Reembolso") {
    coronaBackHomeonLoad('Regras-de-cias','coronaClonedRegrasContent');
    coronaWidthCheck('Reembolso', 'coronaReembolsoOrigin', 'coronaClonedReembolsoContent', 'coronaReembolsoContent', 'Tabs4');
  } else if (hash == "#Prioridade-2") {
    coronaWidthCheck('Atendimento', 'coronaAtendimentoOrigin', 'coronaClonedAtendimentoContent', 'coronaAtendimentoContent', 'Tabs1');
    coronaModalVNInitial('Prioridade-2');
  } else if (hash == "#Prioridade-3") {
    coronaWidthCheck('Atendimento', 'coronaAtendimentoOrigin', 'coronaClonedAtendimentoContent', 'coronaAtendimentoContent', 'Tabs1');
    coronaModalVNInitial('Prioridade-3');
  } else if (hash == "#AirFrance") {
    coronaWidthCheck('Regras-de-cias', 'coronaRegrasOrigin', 'coronaClonedRegrasContent', 'coronaRegrasContent', 'Tabs3');
    coronaModalVNInitial('AirFrance');
  } else if (hash == "#Ethiopian") {
    coronaWidthCheck('Regras-de-cias', 'coronaRegrasOrigin', 'coronaClonedRegrasContent', 'coronaRegrasContent', 'Tabs3');
    coronaModalVNInitial('Ethiopian');
  } else if (hash == "#KLM") {
    coronaWidthCheck('Regras-de-cias', 'coronaRegrasOrigin', 'coronaClonedRegrasContent', 'coronaRegrasContent', 'Tabs3');
    coronaModalVNInitial('KLM');
  } else if (hash == "#Norwegian") {
    coronaWidthCheck('Regras-de-cias', 'coronaRegrasOrigin', 'coronaClonedRegrasContent', 'coronaRegrasContent', 'Tabs3');
    coronaModalVNInitial('Norwegian');
  } else if (hash == "#Paranair") {
    coronaWidthCheck('Regras-de-cias', 'coronaRegrasOrigin', 'coronaClonedRegrasContent', 'coronaRegrasContent', 'Tabs3');
    coronaModalVNInitial('Paranair');
  } else if (hash == "#Qantas") {
    coronaWidthCheck('Regras-de-cias', 'coronaRegrasOrigin', 'coronaClonedRegrasContent', 'coronaRegrasContent', 'Tabs3');
    coronaModalVNInitial('Qantas');
  } else if (hash == "#Qatar") {
    coronaWidthCheck('Regras-de-cias', 'coronaRegrasOrigin', 'coronaClonedRegrasContent', 'coronaRegrasContent', 'Tabs3');
    coronaModalVNInitial('Qatar');
  } else if (hash == "#RoyalAirMaroc") {
    coronaWidthCheck('Regras-de-cias', 'coronaRegrasOrigin', 'coronaClonedRegrasContent', 'coronaRegrasContent', 'Tabs3');
    coronaModalVNInitial('RoyalAirMaroc');
  }
  else {
    window.location.hash = "#Informacoes-importantes"
    coronaBackHomeonLoad('Atendimento','coronaClonedAtendimentoContent');
    coronaBackHomeonLoad('Brasileiros-no-exterior','coronaClonedBrasileirosContent');
    coronaBackHomeonLoad('Regras-de-cias','coronaClonedRegrasContent');
    coronaBackHomeonLoad('Reembolso','coronaClonedReembolsoContent');
    document.getElementById("Informacoes-importantes").style.display = "block";
    openCoronaTabsonLoad("coronaAtendimentoContent", "Tabs1");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
};


function openCoronaTabsonLoad(coronaContentType, tabNumber) {
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
  document.getElementById(tabNumber).classList.add("coronaActiveTab")
}

function openCoronaTabs(evtCorona, coronaContentType, coronaPageName) {
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
  window.location.hash = coronaPageName;
}

function changeCoronaPage(coronaPageName, coronaContentOrigin, coronaClonedContent) {
  document.getElementById(coronaClonedContent).innerHTML = "";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  homeVNCoronaPage.style.display = "none";
  document.getElementById(coronaPageName).style.display = "block";
  var coronaDaddyClone = document.getElementById(coronaContentOrigin);
  var coronaClone = coronaDaddyClone.cloneNode(true);
  document.getElementById(coronaClonedContent).appendChild(coronaClone);
  window.location.hash = coronaPageName;
}

function changeCoronaPageonLoad(coronaPageName, coronaContentOrigin, coronaClonedContent) {
  document.getElementById(coronaClonedContent).innerHTML = "";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  homeVNCoronaPage.style.display = "none";
  document.getElementById(coronaPageName).style.display = "block";
  var coronaDaddyClone = document.getElementById(coronaContentOrigin);
  var coronaClone = coronaDaddyClone.cloneNode(true);
  document.getElementById(coronaClonedContent).appendChild(coronaClone);
}

function coronaBackHome(coronaPageName, coronaClonedContent) {
  homeVNCoronaPage.style.display = "block";
  document.getElementById(coronaPageName).style.display = "none";
  document.getElementById(coronaClonedContent).innerHTML = "";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  window.location.hash = "#Informacoes-importantes";
}
function coronaBackHomeonLoad(coronaPageName, coronaClonedContent) {
  document.getElementById(coronaPageName).style.display = "none";
  document.getElementById(coronaClonedContent).innerHTML = "";

}
function coronaModalVN(coronaPageModal) {
  var coronaModal = document.getElementById(coronaPageModal);
  document.getElementById(coronaPageModal).style.display = "block";
  window.location.hash = coronaPageModal;
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

function coronaModalVNInitial(coronaPageModal) {
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

function coronaCloseModal(coronaPageModal, coronaPageName) {
  var coronaModal = document.getElementById(coronaPageModal);
  document.getElementById(coronaPageModal).style.display = "none";
  window.location.hash = coronaPageName;
}
function coronaCloseModalBack(coronaPageModal){
  document.getElementById(coronaPageModal).style.display = "none";
}
function coronaTopRules() {
  coronaScrolLCTA = document.getElementById("coronaScrolltoTop");
  window.onscroll = function() {
    scrollFunctionCorona()
  };
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

function coronaFocus(idName){
  document.getElementById(idName).focus()
  document.getElementById(idName).classList.add("coronaFocusContent")
}
