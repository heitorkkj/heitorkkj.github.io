google.charts.load("current", {
  packages: ["geochart"],
  /*Note: if your chart requires geocoding or uses nonstandard codes, you'll// need to get a mapsApiKey for your project. The one below won't work.// See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings*/ mapsApiKey:
    "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY",
});
google.charts.load("current", { packages: ["geochart"] });
google.charts.setOnLoadCallback(drawRegionsMap);
var naf = calculaPessoas("naf");
var maf = calculaPessoas("maf");
var saf = calculaPessoas("saf");
var waf = calculaPessoas("waf");
var eaf = calculaPessoas("eaf");
var neu = calculaPessoas("neu");
var weu = calculaPessoas("weu");
var eeu = calculaPessoas("eeu");
var seu = calculaPessoas("seu");
var nam = calculaPessoas("nam");
var cab = calculaPessoas("cab");
var cam = calculaPessoas("cam");
var sam = calculaPessoas("sam");
var cas = calculaPessoas("cas");
var eas = calculaPessoas("eas");
var seas = calculaPessoas("seas");
var sas = calculaPessoas("sas");
var was = calculaPessoas("was");
var anz = calculaPessoas("anz");
var mln = calculaPessoas("mln");
var pln = calculaPessoas("pln");
var mcn = calculaPessoas("mcn");


function calculaPessoas(id) {
    let pessoas = {
      'naf': 256525631,
      'maf': 191702822,
      'eaf': 471846267,
      'waf': 425789785,
      'saf': 67503635,

      'neu': 106261249,
      'weu': 197604483,
      'eeu': 292003338,
      'seu': 151747580,

      'nam': 368869647,
      'cab': 43993227,
      'cam': 184510704,
      'sam': 439040799,

      'cas': 76946880,
      'eas': 72960000,
      'sas': 1991790803,
      'seas': 683989726,
      'was': 313428000,
 
      'anz': 31102625,
      'mln': 11595122,
      'mcn': 116255,
      'pln': 311603
    } 
    return Math.round(pessoas[id])
}

let start = () => {
  window.setInterval(drawRegionsMap, 2000);
}

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ["Country", "População Saudavel"],
    ["015", (naf = Math.round(popSaudavel(naf, rate)))],
    ["011", (waf = Math.round(popSaudavel(waf, rate)))],
    ["017", (maf = Math.round(popSaudavel(maf, rate)))],
    ["018", (saf = Math.round(popSaudavel(saf, rate)))],
    ["014", (eaf = Math.round(popSaudavel(eaf, rate)))],

    ["154", (neu = Math.round(popSaudavel(neu, rate)))],
    ["155", (weu = Math.round(popSaudavel(weu, rate)))],
    ["151", (eeu = Math.round(popSaudavel(eeu, rate)))],
    ["039", (seu = Math.round(popSaudavel(seu, rate)))],

    ["021", (nam = Math.round(popSaudavel(nam, rate)))],
    ["029", (cab = Math.round(popSaudavel(cab, rate)))],
    ["013", (cam = Math.round(popSaudavel(cam, rate)))],
    ["005", (sam = Math.round(popSaudavel(sam, rate)))],

    ["143", (cas = Math.round(popSaudavel(cas, rate)))],
    ["030", (eas = Math.round(popSaudavel(eas, rate)))],
    ["034", (sas = Math.round(popSaudavel(sas, rate)))],
    ["035", (seas = Math.round(popSaudavel(seas, rate)))],
    ["145", (was = Math.round(popSaudavel(was, rate)))],

    ["053", (anz = Math.round(popSaudavel(anz, rate)))],
    ["054", (mln = Math.round(popSaudavel(mln, rate)))],
    ["057", (mcn = Math.round(popSaudavel(mcn, rate)))],
    ["061", (pln = Math.round(popSaudavel(pln, rate)))],
  ]);

  var options = {
    displayMode: "region",
    resolution: "subcontinents",
    colorAxis: {
      minValue: 0,
      maxValue: 100000000,
      colors: [
        "red",
        "#00BFFF",
        "#00BFFF",
        "#00BFFF",
        "#00BFFF",
        "#00BFFF",
        "#00BFFF",
        "#00688B",
        "#00688B",
        "#00688B",
        "#00688B",
        "#00688B",
      ],
    },
    backgroundColor: "#272727",
    is3D: true,
    defaultColor: "#FF0000",
  };

  var chart = new google.visualization.GeoChart(
    document.getElementById("regions_div")
  );
  chart.draw(data, options);
}
