var words = [];



function getStem(word) {
    var length = word.length;

    return word.replace(/ed$/, "").replace(/ing$/, "").replace(/es$/, "").replace(/ly$/, "")
    .replace(/ally$/, "").replace(/e$/, "").replace(/ss$/, "sss").replace(/s$/, "");
}

function topTwentyFive(string) {
    var filtered_string = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]\n/g, "").toLowerCase();
    var words = filtered_string.split(" ").filter(Boolean);
    var dict = {};
    var ordered = [];

    for(i = 0; i < words.length; i++) {
        if (words[i].length < 4) words[i] = words[i];
        else if (words[i].match("thee|this|sing|ring|bring|come|have|really")) words[i] = words[i];
        else words[i] = getStem(words[i]);
    }

    for(i = 0; i < words.length; i++) {
        var curr_word = words[i];
        var word_exists;
        var word_index;
        
        if (dict[curr_word] == null) {
            word_exists = false;
        } else word_exists = true;
        
        if (word_exists) dict[curr_word]++;
        else dict[curr_word] = 1;
    }

    var ordered = Object.keys(dict).map(function(key) {
        return [key, dict[key]];
    });

    ordered.sort(function(first, second) {
        return second[1] - first[1];
    });

    ordered = ordered.slice(0, 25);

    return ordered;
}

function readFile(evt) {
    var f = evt.target.files[0];   
    
    if (f) {
        var fr = new FileReader();
        fr.readAsText(f);

        fr.onload = function(e) { 
            var filecontents = fr.result;
            words = topTwentyFive(filecontents);            
        }
    } else {
        alert("File failed to load.");
    }

    alert("File uploaded: " + document.getElementById("fileupload").value);
}

document.getElementById("fileupload").addEventListener("change", readFile, false);

function fillTable(arr) {
    var c0, c1, c2, c3, c4;
    c0 = c1 = c2 = c3 = c4 = "";
    var columns = [c0, c1, c2, c3, c4];
    
    for (var i = 0; i < 5; i++) {
        c0 += arr[i] + "<br>" + "<br>";
    }
    for (var i = 5; i < 10; i++) {
        c1 += arr[i] + "<br>" + "<br>";
    }
    for (var i = 10; i < 15; i++) {
        c2 += arr[i] + "<br>" + "<br>";
    }
    for (var i = 15; i < 20; i++) {
        c3 += arr[i] + "<br>" + "<br>";
    }
    for (var i = 20; i < 25; i++) {
        c4 += arr[i] + "<br>" + "<br>";
    }

    document.getElementById("demo2").innerHTML = "Your 25 Most Popular Words<br>and their Usages";

    document.getElementById("c0").innerHTML = c0;
    document.getElementById("c1").innerHTML = c1;
    document.getElementById("c2").innerHTML = c2;
    document.getElementById("c3").innerHTML = c3;
    document.getElementById("c4").innerHTML = c4;
}











