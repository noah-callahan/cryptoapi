var xmlhttp = new XMLHttpRequest();
var url = "https://api.cryptonator.com/api/ticker/btc-usd";

function response(url){
    xmlhttp.open('GET', url);
    xmlhttp.responseType = 'json';
    xmlhttp.send();
}

response(url)


xmlhttp.onload = function getCoin(){
    var coin = xmlhttp.response;
    if (coin.success == false){
        console.log('COIN ERROR')
        e = document.getElementById('coin-error')
        e.innerHTML = "Error finding coin."
        setTimeout(function(){e.innerHTML = ""}, 3000);
    }
    var valueArray = Object.values(coin['ticker'])
    var keyArray = Object.keys(coin['ticker'])

    function makeUL(array1,array2) {
 
        document.getElementById('coin-list').innerHTML = null
        var list = document.createElement('ul');
        
        for(var i = 0; i < array1.length; i++) {

            var item = document.createElement('li');

            item.appendChild(document.createTextNode(array2[i].charAt(0).toUpperCase() + array2[i].slice(1) + ": "));
            item.appendChild(document.createTextNode(array1[i]));
            
    
           
            list.appendChild(item);
        }
    
        document.getElementById('coin-list').appendChild(list);
        
    }
    makeUL(valueArray,keyArray)
}


function coinFunc(){
    var e = document.getElementById('coin-selection');
    var i = document.getElementById('market-selection');
    var url = "https://api.cryptonator.com/api/ticker/" + e.value + "-" + i.value
    response(url)
    xmlhttp.onload
    console.log('test')
    
}

function tickerSearch(){
    var e = document.getElementById('ticker-search')
    var i = document.getElementById('market-selection');
    var url = "https://api.cryptonator.com/api/ticker/" + e.value.toLowerCase() + "-" + i.value
    response(url)
    xmlhttp.onload

}

