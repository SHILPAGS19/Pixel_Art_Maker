$(document).ready(function(){
  
  const  canvas=$("#pixelCanvas");
  //On clicking sumit button,makeGrid() is       called to display grid 
  $("#submit").click(function(e){
  e.preventDefault();
  makeGrid();
});


// builds grid
function makeGrid(){
  canvas.empty();
  let height =$("#inputHeight").val();
  let width  =$("#inputWeight").val();
  //creates grid rows
    for(var i=1; i<=height; i++)
      {
        canvas.append("<tr></tr>");
        //creates grid columns
          for(var j=1; j<=width; j++)
          {
            canvas.children().last().append(" <td></td>");
            
          }
       }
} 
//to change  the background color of cell with the selected color
  
canvas.on("click", "td", function() {
  let pickcolor = $("#colorPicker").val();
  $(this).css("background-color", pickcolor);
});
  
//to clear cell color on double clicking the cell
  
canvas.on("dblclick", "td", function() {
  let pickcolor = $("#colorPicker").val();
  $(this).css("background-color", "");
});
  
 //TODO-clears the grid
  
  $("#grid").click(function(e){
  e.preventDefault();
  canvas.find("tr").remove();
  });



})