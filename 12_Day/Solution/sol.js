let text="He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
arr=text.match(/\d+/g)
arr.reduce((a,b)=>parseInt(a)+parseInt(b))

points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
distance=sortedPoints[sortedPoints.length]-sortedPoints[0];

function is_valid_variable(variable){
    try{ Function (variable+name);
    return true;}
    catch{
        return false;
    }
}

function tenMostFrequentWords(word){
    let variable=word.replace(/[^\w+ ]/g,"");
    let words=variable.split(" ");
    words.sort();
    dict=[];
    for (let w of words){
        var last=dict[dict.length-1];
        if (last && last.word==w){
            last.count++;
        }
        else{
            dict.push({word:w,count:1});
        }
    }
    let dict1=dict.sort(function(a,b){ if (a.count>b.count)return -1; if (a.count>b.count)return 1; return 0;});
    return dict1[0],dict1[1],dict1[2];

}

tenMostFrequentWords(paragraph);
tenMostFrequentWords(sentence);

