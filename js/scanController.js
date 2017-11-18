function scan() {

  $.ajax({
    type: "GET",
    dataType: "jsonp",
    url: "http://localhost:3000/scan",
    success: function(data){
     formatResult(data);
    }
  });
}

function formatResult(data){
  var formattedResults = "";
  
  var jsonObject = jQuery.parseJSON(data);
  $.each( jsonObject, function( index, node ){
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
