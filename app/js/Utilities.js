// Hides E address
function HideEAddress(loc1, loc2, dom1, dom2, description) {
    if (loc1 && loc2 && dom1 && dom2) {
        if (!description)
            var description = "E-Mail";

        
        return ('<a href=\"mailto:' + loc1 + '.' + loc2 + '@' + dom1 + '.' + dom2 + '\">' + description + '</a>');
        // return (loc1 + '.' + loc2 + '@' + dom1 + '.' + dom2);
    } else {
        return ('');
    }
}