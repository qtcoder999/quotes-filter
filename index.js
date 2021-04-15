(function() {
    console.clear();

    var data1 = ["A casual stroll through the lunatic asylum shows that faith does not prove anything."]
    console.log("data1.length", data1.length);

    var data2 = ["The best author will be the one who is ashamed to become a writer.", "One often contradicts an opinion when what is uncongenial is really the tone in which it was conveyed."]   
    
    console.log("data2.length", data2.length);

    console.log("data1 + data2", data1.length + data2.length);

    let mergedData = [...data1, ...data2];
    let filteredData = [];

    for (var i = 0; i < mergedData.length; i++) {

        mergedData[i] = mergedData[i].replace(/(<([^>]+)>)/gi, " ");
        mergedData[i] = mergedData[i].replace(/  +/g, ' ')
       
        
        var testArray = ["ş","د","é", "ã","Ä","õ","م","س","ت","ع","ñ"," der "," pues "];
        var testFlag = true;

        for (var j = 0; j < testArray.length; j++) {
            if (mergedData[i].indexOf(testArray[j]) > -1) {
                testFlag = false;
                break;
            }
        }

        if (mergedData[i] && mergedData[i].trim() != "" && testFlag) {
            filteredData.push(mergedData[i]);
        }
        else{
            debugger;
        }

    }

    filteredData = [...new Set(filteredData)];

    console.log("filteredData length", filteredData.length);

    copy(filteredData);

}
)();
