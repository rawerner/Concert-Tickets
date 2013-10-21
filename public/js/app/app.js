'use strict';

// Firebase Schema


// Local Schema
var venue={};
// Following are not needed, only explicitly put out for visualization purposes
venue.gasection={};
venue.gasection.price=0;
venue.gasection.tickets=0;
venue.gasection.gross=0;
venue.vipsection={};
venue.vipsection.price=0;
venue.vipsection.tickets=0;
venue.vipsection.gross=0;




$(document).ready(initialize);

function initialize(fn, flag){
  if(!canRun(flag)) {return;}

  $(document).foundation();
  $('#createSection').click(clickCreateSection);
  $('#gasection').on('dblclick', '.seat', clickAddName);
  $('#vipsection').on('dblclick', '.seat', clickAddName);
}


// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
function clickCreateSection(){
  var section = $('select').val();
  var numOfSeats = $('#numOfSeats').val();
  var priceOfSeats = parseInt($('#priceOfSeats').val(),10);
  var option = section.slice(1);
  venue[option].price = priceOfSeats;
  var reportPriceClass = '.' + option + 'price';
  $(reportPriceClass).text('$' + priceOfSeats);
  var optionClass = '.' + option;
  var $option = $(optionClass);

  htmlCreateTable(numOfSeats);
  htmlRemoveOption($option);
  $('#numOfSeats').val('');
  $('#numOfSeats').focus();
  $('#priceOfSeats').val('');
  if ($('select > option').length === 0){
    htmlRemoveSectionCreation();
    $('.hidden').removeClass('hidden');
    $('.title').addClass('hidden');
  }
}


function clickAddName(){
  var $this = $(this);
  var seatNumber = $this.text();
  if ($this.hasClass('reserved') === false){
    var name = $('#name').val();
    var $span = $('<p>');
    $span.text(name);
    $this.addClass('reserved');
    if ($this.parent().parent().parent().parent().attr('id') === 'gasection'){
      htmlAddGuest(name, '#galist', seatNumber);
      htmlSectionTotalUpdate('gasection');
    } else {
      htmlAddGuest(name, '#viplist', seatNumber);
      htmlSectionTotalUpdate('vipsection');
    }
    htmlGrandTotalUpdate();
    $this.append($span);
  }
  $('#name').focus();
  $('#name').val('');
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function htmlCreateTable(numOfSeats){
  var $table = $('<table>');
  var section = $('select').val();
  $table.addClass(section);
  $(section).append($table);
  var numberOfFullRows = numOfSeats / 14;
  numberOfFullRows = Math.floor(numberOfFullRows);
  var seatsInLastRow = numOfSeats % 14;
  htmlCreateRows(numberOfFullRows, $table, seatsInLastRow);
}

function htmlCreateRows(numberOfFullRows, $table, seatsInLastRow){
  var alphabetCounter = 0;
  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  for(var i = 0; i < numberOfFullRows; i++){
    var $tr = $('<tr>');
    for (var j = 0; j < 14; j++){
      var $td = $('<td>');
      $td.addClass('seat');
      $td.text(alphabet[alphabetCounter] + (j+1));
      $tr.append($td);
    }
    alphabetCounter++;
    $table.append($tr);
  }

  if (seatsInLastRow) {
    var $tr = $('<tr>');
    for(var k = 0; k < seatsInLastRow; k++){
      var $td = $('<td>');
      $td.addClass('seat');
      $td.text(alphabet[numberOfFullRows] + (k+1));
      $tr.append($td);
    }
    $table.append($tr);
  }
}

function htmlRemoveOption($option){
  $option.remove();
}

function htmlRemoveSectionCreation(){
  $('select').parent().parent().remove();
}

function htmlAddGuest(name, list, seatNumber) {
  var $li = $('<li>');
  $li.text(name + ' - ' + seatNumber);
  $(list).append($li);
}

function htmlSectionTotalUpdate(section){
  venue[section].tickets++;
  var ticketTotal =  venue[section].tickets;
  $('.' + section + 'tickets').text(ticketTotal);
  venue[section].gross = ticketTotal * venue[section].price;
  var sectionGross = venue[section].gross;
  $('.' + section + 'gross').text('$' + sectionGross);
}

function htmlGrandTotalUpdate(){
  var totalTickets = venue.gasection.tickets + venue.vipsection.tickets;
  $('#grandtickets').val(totalTickets);
  var totalGross = parseInt(venue.gasection.gross, 10) + parseInt(venue.vipsection.gross,10);
  $('#grandgross').val('$' + totalGross);
}
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function canRun(flag){
  var isQunit = $('#qunit').length > 0;
  var isFlag = flag !== undefined;
  var value = isQunit && isFlag || !isQunit;
  return value;
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //










