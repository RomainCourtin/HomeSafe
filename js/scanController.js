function scan() {

  var settings = {
    
    "crossDomain": true,
    "url": "http://localhost:3000/scan",
    "method": "GET",
    "contentType": "application/json; charset=utf-8",
    "async": false
  }

  $.ajax(settings).done(function (response) {
    formatResult(response);
  });
}

function formatResult(data){
  var formattedResults = "";
  
  $.each( data, function( index, node ){
    var htmlNode = '<div id="node'+index+'" class="node"><img src="img/smartphone-call.svg" alt="phone" class="smallImage"/>';
    if(node.hostname) {htmlNode += '<p>'+node.hostname+'</p>';}
    if(node.ip) {htmlNode += '<p>'+node.ip+'</p>';}
    if(node.mac) {htmlNode += '<p>'+node.mac+'</p>';}
    htmlNode += '<p><a href="#" class="btn btn-sm btn-secondary">action1</a>&nbsp;';
    htmlNode += '<a href="#" class="btn btn-sm btn-secondary">action2</a></p></div>';
    formattedResults = formattedResults + htmlNode;
  });

  $("#mainContent").html( formattedResults);
}
