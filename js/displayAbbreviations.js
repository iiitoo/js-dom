function displayAbbreviations() {
    if (!document.getElementsByTagName) return false;
    var abbreviations = document.getElementsByTagName('abbr');
    if (abbreviations.length < 1) return false;
    var defs = new Array();
    for (var i = 0; i < abbreviations.length; i++) {
        var definition = abbreviations[i].getAttribute("title");
        
        
    }
}