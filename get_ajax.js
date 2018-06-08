// html
<button type="button" onclick="loadDoc3()">Change Content</button>

//javascript
var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, false );            
        anHttpRequest.send( null );
    }
}


function loadDoc3(){

    var client = new HttpClient();
    client.get("https://painelfinep.cgee.org.br/pentaho/plugin/cda/api/doQuery?path=/public/FINEP_inicial/home.cda&dataAccessId=query_cnpj&paramcnpj=00190373000172", function(response) {
        var a = JSON.parse(response);
        console.log(a);
    });

}
