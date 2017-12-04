var script_url = "https://script.google.com/macros/s/AKfycbw2UDcYLn_XpUS73WELsQ_wlh7LSv5e5AGVzW33fURDFyK_G5AI/exec";

// Make an AJAX call to Google Script
function insert_value() {
  
  $("#re").css("visibility","hidden");
   document.getElementById("loader").style.visibility = "visible";
  $('#mySpinner').addClass('spinner');

var id1=	$("#id").val();
var direccion= $("#direccion").val();
var latitud=	$("#latitud").val();
var longitud= $("#longitud").val();
var parte = $("#parte").val();
var Nombre = $("#Nombre").val();
var hora_llegada = $("#hora_llegada").val();
var hora_acont = $("#hora_acont").val();
var fecha = $("#fecha").val();
var cargo = $("#cargo").val();
var turno = $("#turno").val();
var dia = $("#dia").val();
var mes = $("#mes").val();
var especifico = $("#especifico").val();
var modalidad = $("#modalidad").val();
var sector = $("#sector").val();
var sub_sector = $("#sub_sector").val();
var comentario = $("#comentario").val();
  
var url = script_url+"?callback=ctrlq&comentario="+comentario+"&sub_sector="+sub_sector+"&sector="+sector+"&modalidad="+modalidad+"&especifico="+especifico+"&mes="+mes+"&dia="+dia+"&turno="+turno+"&cargo="+cargo+"&fecha="+fecha+"&hora_acont="+hora_acont+"&hora_llegada="+hora_llegada+"&Nombre="+Nombre+"&parte="+parte+"&longitud="+longitud+"&latitud="+latitud+"&direccion="+direccion+"&id="+id1+"&action=insert";


  var request = jQuery.ajax({
    crossDomain: true,
    url: url ,
    method: "GET",
    dataType: "jsonp"
  });

}







function update_value(){
  $("#re").css("visibility","hidden");
   document.getElementById("loader").style.visibility = "visible";
  
  
   var id1=	$("#id").val();
   var direccion= $("#direccion").val();
   var latitud=	$("#latitud").val();
   var longitud= $("#longitud").val();
   var parte = $("#parte").val();
   var Nombre = $("#Nombre").val();
   var hora_llegada = $("#hora_llegada").val();
   var hora_acont = $("#hora_acont").val();
   var fecha = $("#fecha").val();
   var cargo = $("#cargo").val();
   var turno = $("#turno").val();
   var dia = $("#dia").val();
   var mes = $("#mes").val();
   var especifico = $("#especifico").val();
   var modalidad = $("#modalidad").val();
   var sector = $("#sector").val();
   var sub_sector = $("#sub_sector").val();
   var comentario = $("#comentario").val();
  
  
  
  var url = script_url+"?callback=ctrlq&comentario="+comentario+"&sub_sector="+sub_sector+"&sector="+sector+"&modalidad="+modalidad+"&especifico="+especifico+"&mes="+mes+"&dia="+dia+"&turno="+turno+"&cargo="+cargo+"&fecha="+fecha+"&hora_acont="+hora_acont+"&hora_llegada="+hora_llegada+"&Nombre="+Nombre+"&parte="+parte+"&longitud="+longitud+"&latitud="+latitud+"&direccion="+direccion+"&id="+id1+"&action=update";


  var request = jQuery.ajax({
    crossDomain: true,
    url: url ,
    method: "GET",
    dataType: "jsonp"
  });

  
}





function delete_value(){
  $("#re").css("visibility","hidden");
   document.getElementById("loader").style.visibility = "visible";
  $('#mySpinner').addClass('spinner');
  var id1=	$("#id").val();
  var direccion= $("#direccion").val();
  
  
  
  var url = script_url+"?callback=ctrlq&comentario="+comentario+"&sub_sector="+sub_sector+"&sector="+sector+"&modalidad="+modalidad+"&especifico="+especifico+"&mes="+mes+"&dia="+dia+"&turno="+turno+"&cargo="+cargo+"&fecha="+fecha+"&hora_acont="+hora_acont+"&hora_llegada="+hora_llegada+"&Nombre="+Nombre+"&parte="+parte+"&longitud="+longitud+"&latitud="+latitud+"&direccion="+direccion+"&id="+id1+"&action=delete";


  var request = jQuery.ajax({
    crossDomain: true,
    url: url ,
    method: "GET",
    dataType: "jsonp"
  });

}




// print the returned data
function ctrlq(e) {

  
  $("#re").html(e.result);
  $("#re").css("visibility","visible");
  read_value();
  
}




function read_value() {

$("#re").css("visibility","hidden");
 
 document.getElementById("loader").style.visibility = "visible";
var url = script_url+"?action=read";

$.getJSON(url, function (json) {

  // Set the variables from the results array
 
 


      // CREATE DYNAMIC TABLE.
      var table = document.createElement("table");

      

      var header = table.createTHead();
      var row = header.insertRow(0);     
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      var cell9 = row.insertCell(8);
      var cell10 = row.insertCell(9);
      var cell11 = row.insertCell(10);
      var cell12 = row.insertCell(11);
      var cell13 = row.insertCell(12);
      var cell14 = row.insertCell(13);
      var cell15 = row.insertCell(14);
      var cell16 = row.insertCell(15);
      var cell17 = row.insertCell(16);
      var cell18 = row.insertCell(17);
      
      cell1.innerHTML = "<b>ID</b>";
      cell2.innerHTML = "<b>DIRECCION</b>";
      cell3.innerHTML = "<b>LATITUD</b>";
      cell4.innerHTML = "<b>LONGITUD</b>";	
      cell5.innerHTML = "<b>PARTE</b>";
      cell6.innerHTML = "<b>NOMBRE</b>";
      cell7.innerHTML = "<b>HORA LLEGADA</b>";
      cell8.innerHTML = "<b>HORA ACONTECIMIENTO</b>";	
      cell9.innerHTML = "<b>FECHA</b>";
      cell10.innerHTML = "<b>CARGO</b>";
      cell11.innerHTML = "<b>TURNO</b>";
      cell12.innerHTML = "<b>DIA</b>";	
      cell13.innerHTML = "<b>MES</b>";
      cell14.innerHTML = "<b>ESPECIFICO</b>";
      cell15.innerHTML = "<b>MODALIDAD</b>";
      cell16.innerHTML = "<b>SECTOR</b>";	
      cell17.innerHTML = "<b>SUB SECTOR</b>";
      cell18.innerHTML = "<b>COMENTARIO</b>";
     
      
      // ADD JSON DATA TO THE TABLE AS ROWS.
      for (var i = 0; i < json.records.length; i++) {

          tr = table.insertRow(-1);
              var tabCell = tr.insertCell(-1);
              tabCell.innerHTML = json.records[i].ID;
              tabCell = tr.insertCell(-1);
              tabCell.innerHTML = json.records[i].DIRECCION;
              tabCell = tr.insertCell(-1);
              tabCell.innerHTML = json.records[i].LATITUD;
              tabCell = tr.insertCell(-1);
              tabCell.innerHTML = json.records[i].LONGITUD;
              tabCell = tr.insertCell(-1);    
              tabCell.innerHTML = json.records[i].PARTE;
              tabCell = tr.insertCell(-1);
              tabCell.innerHTML = json.records[i].NOMBRE;
              tabCell = tr.insertCell(-1);
              tabCell.innerHTML = json.records[i].HORA_DE_LLEGADA;
              tabCell = tr.insertCell(-1);
              tabCell.innerHTML = json.records[i].HORA_DE_ACONTECIMIENTO;
              tabCell = tr.insertCell(-1);
              tabCell.innerHTML = json.records[i].FECHA;
              tabCell = tr.insertCell(-1);
              tabCell.innerHTML = json.records[i].CARGO;
              tabCell = tr.insertCell(-1);
              tabCell.innerHTML = json.records[i].TURNO;
              tabCell = tr.insertCell(-1);
              tabCell.innerHTML = json.records[i].DIA;
              tabCell = tr.insertCell(-1);
              tabCell.innerHTML = json.records[i].MES;
              tabCell = tr.insertCell(-1);
              tabCell.innerHTML = json.records[i].ESPECIFICO;
              tabCell = tr.insertCell(-1);
              tabCell.innerHTML = json.records[i].MODALIDAD;
              tabCell = tr.insertCell(-1);
              tabCell.innerHTML = json.records[i].SECTOR;
              tabCell = tr.insertCell(-1);
              tabCell.innerHTML = json.records[i].SUB_SECTOR;
              tabCell = tr.insertCell(-1);
              tabCell.innerHTML = json.records[i].COMENTARIO;
          }
    

      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
      var divContainer = document.getElementById("showData");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
      document.getElementById("loader").style.visibility = "hidden";
      $("#re").css("visibility","visible");
  });
  }















