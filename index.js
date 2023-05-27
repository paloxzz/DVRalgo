//First packet to be received after 5 sec of loading of page
setTimeout(function () {
  //Creating new item in Log
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li')
  //Generating a random number which will tell from where is the packet coming
  var randomNumber = Math.random();
  randomNumber *= 3;
  randomNumber = Math.floor(randomNumber);
  randomNumber++;
  //Generating random distances to be filled in packet
  var r1 = Math.random(); r1 *= 20; r1 = Math.floor(r1); r1++;
  var r2 = Math.random(); r2 *= 20; r2 = Math.floor(r2); r2++;
  var r3 = Math.random(); r3 *= 20; r3 = Math.floor(r3); r3++;

  //Receiving a packet from R1
  if (randomNumber == 1) {
    $("#dR1-R2")[0].innerHTML = r1;
    $("#dR1-R3")[0].innerHTML = r2;
    $("#dR1-R4")[0].innerHTML = r3;
    // $("#vR1-R2")[0].innerHTML="";
    // $("#vR1-R3")[0].innerHTML="";
    // $("#vR1-R4")[0].innerHTML="";
    //Making packet visible in status area
    $('.packetR1').css('visibility', 'visible');
    ul.appendChild(li).innerText = 'Received a new packet from R1';
  }
  //Receiving a packet from R2
  else if (randomNumber == 2) {
    $("#dR2-R1")[0].innerHTML = r1;
    $("#dR2-R3")[0].innerHTML = r2;
    $("#dR2-R4")[0].innerHTML = r3;
    // $("#vR2-R1")[0].innerHTML="";
    // $("#vR2-R3")[0].innerHTML="";
    // $("#vR2-R4")[0].innerHTML="";
    //Making packet visible in status area
    $('.packetR2').css('visibility', 'visible');
    ul.appendChild(li).innerText = 'Received a new packet from R2';
  }
  //Receiving a packet from R4
  else {
    $("#dR4-R1")[0].innerHTML = r1;
    $("#dR4-R2")[0].innerHTML = r2;
    $("#dR4-R3")[0].innerHTML = r3;
    // $("#vR4-R1")[0].innerHTML="";
    // $("#vR4-R2")[0].innerHTML="";
    // $("#vR4-R3")[0].innerHTML="";
    //Making packet visible in status area
    $('.packetR4').css('visibility', 'visible');
    ul.appendChild(li).innerText = 'Received a new packet from R4';
  }
}, 5000);


//Control button animation on click
$(".control").click(function () {
  var userChosenControl = this.id;
  $("#" + userChosenControl).addClass("pressed");
  setTimeout(function () {
    $("#" + userChosenControl).removeClass("pressed");
  }, 100);
});

//Opening the area where R3 will compute distance from other nodes
$('#compute').click(function () {
  $('#broke').css('visibility', 'hidden');
  $('#updatenodes').css('visibility', 'hidden');
  $('#computeR3').css('visibility', 'visible');
});

$('#submitcompute').click(function () {
  $('#dR1')[0].innerHTML = $('#idR1')[0].value;
  $('#vR1')[0].innerHTML = $('#ivR1')[0].value;
  $('#dR2')[0].innerHTML = $('#idR2')[0].value;
  $("#vR2")[0].innerHTML = $('#ivR2')[0].value;
  $("#dR4")[0].innerHTML = $('#idR4')[0].value;
  $("#vR4")[0].innerHTML = $('#ivR4')[0].value;
  $('#computeR3').css('visibility', 'hidden');
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li')
  ul.appendChild(li).innerText = 'Distance of other nodes from node R3 is calculated';
});

//Opening the area where R3 will update its neighbours about the distances it calculated
$('#update').click(function () {
  $('#broke').css('visibility', 'hidden');
  $('#computeR3').css('visibility', 'hidden');
  $('#updatenodes').css('visibility', 'visible');
});

$('#submitupdate').click(function () {
  $("#dR1-R2")[0].innerHTML = $("#idR1-R2")[0].value;
  $("#dR2-R1")[0].innerHTML = $("#idR1-R2")[0].value;
  $("#dR1-R3")[0].innerHTML = $("#idR1-R3")[0].value;
  $("#dR1-R4")[0].innerHTML = $("#idR1-R4")[0].value;
  $("#dR4-R1")[0].innerHTML = $("#idR1-R4")[0].value;
  $("#dR2-R3")[0].innerHTML = $("#idR2-R3")[0].value;
  $("#dR2-R4")[0].innerHTML = $("#idR2-R4")[0].value;
  $("#dR4-R2")[0].innerHTML = $("#idR2-R4")[0].value;
  $("#dR4-R3")[0].innerHTML = $("#idR4-R3")[0].value;
  $('#updatenodes').css('visibility', 'hidden');
  $('.packet').css('visibility', 'hidden');
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li')
  ul.appendChild(li).innerText = "Distances of between R3 and other nodes are updated to R3's neighbours";

  //Receiving a new packet or a broken link signal after 3 seconds
  setTimeout(function () {
    //Creating new item in Log
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li')
    //Generating a random number which will tell if packet has to be received or link has to be broken
    var p_lb = Math.random(); p_lb *= 10; p_lb = Math.floor(p_lb); p_lb++;
    //Receive a random packet
    if (p_lb <= 6) {
      //Generating a random number which will tell from where is the packet coming
      var randomNumber = Math.random();
      randomNumber *= 3;
      randomNumber = Math.floor(randomNumber);
      randomNumber++;
      //Generating random distances to be filled in packet
      var r1 = Math.random(); r1 *= 20; r1 = Math.floor(r1); r1++;
      var r2 = Math.random(); r2 *= 20; r2 = Math.floor(r2); r2++;
      var r3 = Math.random(); r3 *= 20; r3 = Math.floor(r3); r3++;

      //Receiving a packet from R1
      if (randomNumber == 1) {
        $("#dR1-R2")[0].innerHTML = r1;
        $("#dR1-R3")[0].innerHTML = r2;
        $("#dR1-R4")[0].innerHTML = r3;
        // $("#vR1-R2")[0].innerHTML="";
        // $("#vR1-R3")[0].innerHTML="";
        // $("#vR1-R4")[0].innerHTML="";
        //Making packet visible in status area
        $('.packetR1').css('visibility', 'visible');
        ul.appendChild(li).innerText = 'Received a new packet from R1';
      }
      //Receiving a packet from R2
      else if (randomNumber == 2) {
        $("#dR2-R1")[0].innerHTML = r1;
        $("#dR2-R3")[0].innerHTML = r2;
        $("#dR2-R4")[0].innerHTML = r3;
        // $("#vR2-R1")[0].innerHTML="";
        // $("#vR2-R3")[0].innerHTML="";
        // $("#vR2-R4")[0].innerHTML="";
        //Making packet visible in status area
        $('.packetR2').css('visibility', 'visible');
        ul.appendChild(li).innerText = 'Received a new packet from R2';
      }
      //Receiving a packet from R4
      else {
        $("#dR4-R1")[0].innerHTML = r1;
        $("#dR4-R2")[0].innerHTML = r2;
        $("#dR4-R3")[0].innerHTML = r3;
        // $("#vR4-R1")[0].innerHTML="";
        // $("#vR4-R2")[0].innerHTML="";
        // $("#vR4-R3")[0].innerHTML="";
        //Making packet visible in status area
        $('.packetR4').css('visibility', 'visible');
        ul.appendChild(li).innerText = 'Received a new packet from R4';
      }
    }
    //Remove a random edge connected to R3
    else {
      //Generating a random number to select which node to be removed
      var randomNumber = Math.random();
      randomNumber *= 3;
      randomNumber = Math.floor(randomNumber);
      randomNumber++;
      //Removing node between R1 and R3
      if (randomNumber == 1) {
        $('#weight2')[0].innerHTML = 'inf';
        $('#dR1')[0].innerHTML = "inf";
        $('#vR1')[0].innerHTML = "";
      }
      //Removing node between R2 and R3
      else if (randomNumber == 2) {
        $('#weight3')[0].innerHTML = 'inf';
        $('#dR2')[0].innerHTML = "inf";
        $('#vR2')[0].innerHTML = "";
      }
      //Removing node between R4 and R3
      else {
        $('#weight4')[0].innerHTML = 'inf';
        $('#dR4')[0].innerHTML = "inf";
        $('#vR4')[0].innerHTML = "";
      }
      ul.appendChild(li).innerText = 'A random edge is removed'
    }
  }, 3000);
});

//Checking if any edge is removed and if yes finding which
$('#reverse').click(function () {
  $('#computeR3').css('visibility', 'hidden');
  $('#updatenodes').css('visibility', 'hidden');
  var x = $('#dR1')[0].innerHTML;
  var y = $('#dR2')[0].innerHTML;
  var z = $('#dR4')[0].innerHTML;
  //If no edge is broken
  if (x != 'inf' && y != 'inf' && z != 'inf') {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li')
    ul.appendChild(li).innerText = 'No edge is broken through R3';
  }
  // If edge between R3-R1 or R3-R2 is broken
  else if (x == 'inf' || y == 'inf') {
    $('#broke').css('visibility', 'visible');
  }
  //If edge between R3-R4 is broken
  else {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li')
    ul.appendChild(li).innerText = 'Edge between R3 and R4 was broken hence the distances are recalculated taking that into consideration';
    document.querySelector("#dR1-R4").innerHTML = 'inf';
    document.querySelector("#dR4-R1").innerHTML = 'inf';
    document.querySelector("#dR2-R4").innerHTML = 'inf';
    document.querySelector("#dR4-R2").innerHTML = 'inf';
    document.querySelector("#dR4-R3").innerHTML = 'inf';

    //Receiving a new packet or a broken link signal after 3 seconds
    setTimeout(function () {
      //Creating new item in Log
      let ul = document.getElementsByTagName('ul')[0];
      let li = document.createElement('li')
      //Generating a random number which will tell if packet has to be received or link has to be broken
      var p_lb = Math.random(); p_lb *= 10; p_lb = Math.floor(p_lb); p_lb++;
      //Receive a random packet
      if (p_lb <= 6) {
        //Generating a random number which will tell from where is the packet coming
        var randomNumber = Math.random();
        randomNumber *= 3;
        randomNumber = Math.floor(randomNumber);
        randomNumber++;
        //Generating random distances to be filled in packet
        var r1 = Math.random(); r1 *= 20; r1 = Math.floor(r1); r1++;
        var r2 = Math.random(); r2 *= 20; r2 = Math.floor(r2); r2++;
        var r3 = Math.random(); r3 *= 20; r3 = Math.floor(r3); r3++;

        //Receiving a packet from R1
        if (randomNumber == 1) {
          $("#dR1-R2")[0].innerHTML = r1;
          $("#dR1-R3")[0].innerHTML = r2;
          $("#dR1-R4")[0].innerHTML = r3;
          // $("#vR1-R2")[0].innerHTML="";
          // $("#vR1-R3")[0].innerHTML="";
          // $("#vR1-R4")[0].innerHTML="";
          //Making packet visible in status area
          $('.packetR1').css('visibility', 'visible');
          ul.appendChild(li).innerText = 'Received a new packet from R1';
        }
        //Receiving a packet from R2
        else if (randomNumber == 2) {
          $("#dR2-R1")[0].innerHTML = r1;
          $("#dR2-R3")[0].innerHTML = r2;
          $("#dR2-R4")[0].innerHTML = r3;
          // $("#vR2-R1")[0].innerHTML="";
          // $("#vR2-R3")[0].innerHTML="";
          // $("#vR2-R4")[0].innerHTML="";
          //Making packet visible in status area
          $('.packetR2').css('visibility', 'visible');
          ul.appendChild(li).innerText = 'Received a new packet from R2';
        }
        //Receiving a packet from R4
        else {
          $("#dR4-R1")[0].innerHTML = r1;
          $("#dR4-R2")[0].innerHTML = r2;
          $("#dR4-R3")[0].innerHTML = r3;
          // $("#vR4-R1")[0].innerHTML="";
          // $("#vR4-R2")[0].innerHTML="";
          // $("#vR4-R3")[0].innerHTML="";
          //Making packet visible in status area
          $('.packetR4').css('visibility', 'visible');
          ul.appendChild(li).innerText = 'Received a new packet from R4';
        }
      }
      //Remove a random edge connected to R3
      else {
        //Generating a random number to select which node to be removed
        var randomNumber = Math.random();
        randomNumber *= 3;
        randomNumber = Math.floor(randomNumber);
        randomNumber++;
        //Removing node between R1 and R3
        if (randomNumber == 1) {
          $('#weight2')[0].innerHTML = 'inf';
          $('#dR1')[0].innerHTML = "inf";
          $('#vR1')[0].innerHTML = "";
        }
        //Removing node between R2 and R3
        else if (randomNumber == 2) {
          $('#weight3')[0].innerHTML = 'inf';
          $('#dR2')[0].innerHTML = "inf";
          $('#vR2')[0].innerHTML = "";
        }
        //Removing node between R4 and R3
        else {
          $('#weight4')[0].innerHTML = 'inf';
          $('#dR4')[0].innerHTML = "inf";
          $('#vR4')[0].innerHTML = "";
        }
        ul.appendChild(li).innerText = 'A random edge is removed'
      }
    }, 3000);
  }
});


// Adding new row in my-table
//Initializing i as 1 assuming user will provide atleast one input
var n=1;
//Add row button functioning for reverse
$(".add-row-btn").click(function(){
  n++;
  const tableBody = document.querySelector('#my-table tbody');
  const newRow = document.createElement('tr');
  const sourceInput = document.createElement('td');
  const destinationInput = document.createElement('td');
  const distanceInput = document.createElement('td');
  const viaInput = document.createElement('td');

  sourceInput.innerHTML = '<input class="break_s" type="text" name="fname" value="" style="width: 4.375rem;">';
  destinationInput.innerHTML = '<input class="break_de" type="text" name="fname" value="" style="width: 4.375rem;">';
  distanceInput.innerHTML = '<input class="break_di" type="text" name="fname" value="" style="width: 4.375rem;">';
  viaInput.innerHTML = '<input class="break_v" type="text" name="fname" value="" style="width: 4.375rem;">';

  newRow.appendChild(sourceInput);
  newRow.appendChild(destinationInput);
  newRow.appendChild(distanceInput);
  newRow.appendChild(viaInput);
  tableBody.appendChild(newRow);
});

//Asking for new distances between nodes after removal of link
$('#submitreverse').click(function () {
  for(let i=0;i<n;i++){
    const source=$(".break_s")[i].value;
    const dest=$(".break_de")[i].value;
    const dist=$(".break_di")[i].value;
    const via=$(".break_v")[i].value;
    if(source=='R3'){
      if(dest=='R1'){
        $('#dR1')[0].innerHTML = dist;
        $('#vR1')[0].innerHTML = via;
      }
      if(dest=='R2'){
        $('#dR2')[0].innerHTML = dist;
        $('#vR2')[0].innerHTML = via;
      }
      if(dest=='R4'){
        $('#dR4')[0].innerHTML = dist;
        $('#vR4')[0].innerHTML = via;
      }
    }
    if(dest=='R3'){
      if(source=='R1'){
        $('#dR1')[0].innerHTML = dist;
        $('#vR1')[0].innerHTML = via;
      }
      if(source=='R2'){
        $('#dR2')[0].innerHTML = dist;
        $('#vR2')[0].innerHTML = via;
      }
      if(source=='R4'){
        $('#dR4')[0].innerHTML = dist;
        $('#vR4')[0].innerHTML = via;
      }
    }
  }

  $('#broke').css('visibility', 'hidden');
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li')
  if ($('#dR1')[0].innerHTML == 'inf') {
    ul.appendChild(li).innerText = 'Edge between R3 and R1 was broken hence the distances are recalculated taking that into consideration';
  }
  else {
    ul.appendChild(li).innerText = 'Edge between R3 and R2 was broken hence the distances are recalculated taking that into consideration';
  }
  //Receiving a new packet or a broken link signal after 5 seconds
  setTimeout(function () {
    //Creating new item in Log
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li')
    //Generating a random number which will tell if packet has to be received or link has to be broken
    var p_lb = Math.random(); p_lb *= 10; p_lb = Math.floor(p_lb); p_lb++;
    //Receive a random packet
    if (p_lb <= 6) {
      //Generating a random number which will tell from where is the packet coming
      var randomNumber = Math.random();
      randomNumber *= 3;
      randomNumber = Math.floor(randomNumber);
      randomNumber++;
      //Generating random distances to be filled in packet
      var r1 = Math.random(); r1 *= 20; r1 = Math.floor(r1); r1++;
      var r2 = Math.random(); r2 *= 20; r2 = Math.floor(r2); r2++;
      var r3 = Math.random(); r3 *= 20; r3 = Math.floor(r3); r3++;

      //Receiving a packet from R1
      if (randomNumber == 1) {
        $("#dR1-R2")[0].innerHTML = r1;
        $("#dR1-R3")[0].innerHTML = r2;
        $("#dR1-R4")[0].innerHTML = r3;
        // $("#vR1-R2")[0].innerHTML="";
        // $("#vR1-R3")[0].innerHTML="";
        // $("#vR1-R4")[0].innerHTML="";
        //Making packet visible in status area
        $('.packetR1').css('visibility', 'visible');
        ul.appendChild(li).innerText = 'Received a new packet from R1';
      }
      //Receiving a packet from R2
      else if (randomNumber == 2) {
        $("#dR2-R1")[0].innerHTML = r1;
        $("#dR2-R3")[0].innerHTML = r2;
        $("#dR2-R4")[0].innerHTML = r3;
        // $("#vR2-R1")[0].innerHTML="";
        // $("#vR2-R3")[0].innerHTML="";
        // $("#vR2-R4")[0].innerHTML="";
        //Making packet visible in status area
        $('.packetR2').css('visibility', 'visible');
        ul.appendChild(li).innerText = 'Received a new packet from R2';
      }
      //Receiving a packet from R4
      else {
        $("#dR4-R1")[0].innerHTML = r1;
        $("#dR4-R2")[0].innerHTML = r2;
        $("#dR4-R3")[0].innerHTML = r3;
        // $("#vR4-R1")[0].innerHTML="";
        // $("#vR4-R2")[0].innerHTML="";
        // $("#vR4-R3")[0].innerHTML="";
        //Making packet visible in status area
        $('.packetR4').css('visibility', 'visible');
        ul.appendChild(li).innerText = 'Received a new packet from R4';
      }
    }
    //Remove a random edge connected to R3
    else {
      //Generating a random number to select which node to be removed
      var randomNumber = Math.random();
      randomNumber *= 3;
      randomNumber = Math.floor(randomNumber);
      randomNumber++;
      //Removing node between R1 and R3
      if (randomNumber == 1) {
        $('#weight2')[0].innerHTML = 'inf';
        $('#dR1')[0].innerHTML = "inf";
        $('#vR1')[0].innerHTML = "";
      }
      //Removing node between R2 and R3
      else if (randomNumber == 2) {
        $('#weight3')[0].innerHTML = 'inf';
        $('#dR2')[0].innerHTML = "inf";
        $('#vR2')[0].innerHTML = "";
      }
      //Removing node between R4 and R3
      else {
        $('#weight4')[0].innerHTML = 'inf';
        $('#dR4')[0].innerHTML = "inf";
        $('#vR4')[0].innerHTML = "";
      }
      ul.appendChild(li).innerText = 'A random edge is removed'
    }
  }, 3000);
});
