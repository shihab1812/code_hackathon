$(document).ready(function(){
    //calculating device height
    var calcDeviceHeight= window.screen.height;
    console.log(calcDeviceHeight);
    $('#mail-siderbar-index').css("height",calcDeviceHeight);
    var extactedEmailObj = [];
    //ajax call
    $.ajax({
       url: 'js/json/main.json',
       dataType: 'json',
       success: function(data) {

          var items = [];
          //console.log(data.emails);
          for (var i = 0, l = data.emails.length; i < l; i++) {
          extactedEmailObj.push('<tr><td><img class="img-responsive red-border img-circle" src="'+ data.emails[i].img + '"</td><td class="text-bold">'+ data.emails[i].sender_name +'</td><td class="text-capitalize">'+ data.emails[i].subject +'</td><td>'+ data.emails[i].time +'<td></tr>');
          
}  

  $('<tbody>', {
            'class': 'email-item',
            html: extactedEmailObj.join('')
          }).appendTo('#email-table');
//console.log(extactedEmailObj[0].img);

          $.each(data.emails, function(key, val) {

            items.push('<li id="' + key + '">' + val + '</li>');   
             

          });

       },
      statusCode: {
         404: function() {
           alert('There was a problem with the server.  Try again soon!');
         }
       }
    });

    //onkeyUp Search Event
    $("#search_rows").keyup( function() {
   // Declare variables 
            var input, filter, table, tr, td, i;
            input = document.getElementById("search_rows");
            filter = input.value.toUpperCase();
            table = document.getElementById("email-table");
            tr = table.getElementsByTagName("tr");

            // Loop through all table rows, and hide those who don't match the search query
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
                } 
            }
});
})