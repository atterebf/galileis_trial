function custom_ceteicean(path) {
var CETEIcean = new CETEI();

CETEIcean.addBehaviors({
"tei": {
"teiHeader" : null
} });

CETEIcean.getHTML5(path, function(data) {
document.getElementById("TEI").appendChild(data) })
}
