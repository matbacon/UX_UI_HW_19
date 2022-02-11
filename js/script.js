console.log("Your script is ready!")
//var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

//var span = document.getElementsByClassName("close")[0];


//function openModal() {
    //
 // }
  
//span.onclick = function() {
   // modal.styles.display = "none";
 // }
  
//window.onclick = function(event) {
   // if (event.target == modal) {
  //   modal.styles.display = "none";
  //  }
 // }

//$("#myBtn").on("click", function(){
  //  $("#myModal").fadeToggle("slow"); 
   //// console.log("button was clicked")
//});
//$( "#myModal" ).dialog({ 
     autoOpen: false 
 //});
 $( ".modal" ).dialog({
    modal: true });
    var modal = $( ".modal" ).dialog( "option", "modal" );
    $( ".model" ).dialog( "option", "modal", true );
   

$( "#myBtn" ).click(function() {
 $( "#myModal" ).dialog( "open" );
 $( "#myModal" ).dialog({
   dialogClass: "no-close",
    buttons: [
      {
        text: "Download",
        click: function() {
          $( this ).dialog( "close" );
        }
     }
    ]
  });
});
