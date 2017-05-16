
//fiks double boost shit
//Tell hvor mange upgrades som er,
//gang cps med antall upgrades hvis dobbel boost

window.onload = function()
{
  var click = document.getElementById("btn");
  var count = document.getElementById("count");
  var reset = document.getElementById("reset");
  var cps = document.getElementById("cps");

  click.addEventListener("click", btnClick);
  reset.addEventListener("click", btnReset);
  initHTML();
}

window.setInterval(update, 1);

function appendHTML(element, string)
{
  var div = document.createElement("div");
  div.innerHTML = string;

  while (div.children.length > 0)
  {
    element.appendChild(div.children[0]);
  }
}

function initHTML()
{
  for (var i = 0; i < tab[0].length - 1; i++)
  {
    var htmlUpgrades = '<li id="a'+i+'" class="addon" onClick="addUpgrade(this.id)">'+
                        '<h3 id="n'+i+'" class="addon-head">'+tab[0][i]+'</h3>'+
                        '<p id="p'+i+'" class="info">Price: '+tab[1][i]+' cookies</p>'+
                        '<p id="i'+i+'" class="info">Gains '+tab[2][i]+' cookies per second</p>'+
                        '</li>';

    appendHTML(document.getElementById("addons"), htmlUpgrades);
  }

  for (var j = 0; j < tab[4].length; j++)
  {
    var htmlBoosts = '<li id="b'+j+'" class="boost" onClick="addBoost(this.id)">'+
                      '<h5 id="h'+j+'" class="boost-head">'+tab[3][j]+'</h5>'+
                      '<p id="j'+j+'" class="binfo">Costs '+tab[4][j]+'</p>'+
                      '</li>';

    appendHTML(document.getElementById("boosts"), htmlBoosts);
  }
}

var tab = new Array();
tab[0] = ["Cursor", "Grandma", "Quarry", "Bakery", "Factory", "Click"];
tab[1] = [15, 100, 1000, 10000, 25000];
tab[2] = [0.1, 1, 10, 50, 75];

tab[3] = ["Double Cursor", "Double Grandma", "Double Quarry",
          "Double Bakery", "Double Factory", "Double Click"];
tab[4] = [1000, 10000, 25000, 40000, 80000, 10000];

var cookies = 0;
var cookiesPs = 0;
var numOfCursors = 0;
var priceIncUpgrade = 1.15;
var priceIncBoost = 2;
var clickInt = 1;

function btnClick()
{
  cookies += clickInt;
  count.innerHTML = cookies.toFixed(0);
}

function btnReset()
{
  cookies = 0;
  cookiesPs = 0;
  count.innerHTML = cookies.toFixed(0);
}

function addUpgrade(id)
{
  var i = id.slice(-1);
  i = parseInt(i);

  var tempUpgrade = document.getElementById("p" + i);

  if (cookies >= tab[1][i])
  {
    cookies -= tab[1][i];
    cookiesPs += tab[2][i];
    tab[1][i] *= priceIncUpgrade;
    tempUpgrade.innerHTML = "Price: " + tab[1][i].toFixed(0) + " cookies";
  }
}

function addBoost(id)
{
  var i = id.slice(-1);
  i = parseInt(i);

  var tempUpgrade = document.getElementById("j" + i);

  if(cookies >= tab[4][i])
  {
    if(i == tab[4].length - 1)
    {
      cookies -= tab[4][i];
      clickInt *= priceIncBoost;
      tab[4][i] *= priceIncBoost;
      tempUpgrade.innerHTML = "Costs " + tab[4][i].toFixed(0);
    }
    else
    {
      cookies -= tab[4][i];
      tab[2][i] *= priceIncBoost;
      tab[4][i] *= priceIncBoost;
      tempUpgrade.innerHTML = "Costs " + tab[4][i].toFixed(0);
    }
  }
}

function update()
{
  cookiesPs = Math.round(cookiesPs * 100) / 100;
  cookies += cookiesPs / 250;
  count.innerHTML = cookies.toFixed(0);
  cps.innerHTML = "Cookies per second: " + cookiesPs.toFixed(1);

  for (var i = 0; i < tab[0].length; i++)
  {
    this.color = document.getElementById("a" + i.toString());

    if (tab[1][i] > cookies)
    {
      this.color.style.backgroundColor = "#535353";
    }
    else if (tab[1][i] <= cookies)
    {
      this.color.style.backgroundColor = "#842aaa";
    }
  }

  for(var j = 0; j < tab[3].length; j++)
  {
    this.visible = document.getElementById("b" + j.toString());

    if(tab[4][j] > cookies)
    {
      this.visible.style.visibility = "hidden";
    }
    else if(tab[4][j] <= cookies)
    {
      this.visible.style.visibility = "visible";
    }
  }
}
