'use strict';

// Firebase Schema


// Local Schema (defined in keys.js)

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
  var priceOfSeats = $('#priceOfSeats').val();
  var option = section.slice(1);
  var optionClass = '.' + option;
  var $option = $(optionClass);

  htmlCreateTable(numOfSeats);
  htmlRemoveOption($option);
  if ($('select > option').length === 0){
    htmlRemoveSectionCreation();
    // htmlAddReportSection;
    $('.hidden').removeClass('hidden');
  }
}


function clickAddName(){
  var $this = $(this);
  //if (this td doesnt already has a span inside it){
  var name = $('#name').val();
  var $span = $('<p>');
  $span.text(name);

  $this.addClass('reserved');
  $this.append($span);
  //}

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
  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  htmlCreateFullRows(alphabet, numberOfFullRows, $table);
  if (seatsInLastRow){
    htmlCreateLastRow(alphabet, seatsInLastRow, $table, numberOfFullRows);
  }
}

function htmlCreateFullRows(alphabet, numberOfFullRows, $table){
  var alphabetCounter = 0;
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
}

function htmlCreateLastRow(alphabet, seatsInLastRow, $table, numberOfFullRows){
  var $tr = $('<tr>');

  for(var i = 0; i < seatsInLastRow; i++){
    var $td = $('<td>');
    $td.addClass('seat');
    $td.text(alphabet[numberOfFullRows] + (i+1));
    $tr.append($td);
  }
  $table.append($tr);
}


function htmlRemoveOption($option){
  $option.remove();

}

function htmlRemoveSectionCreation(){
  $('select').parent().parent().remove();

}

// function htmlAddReportSection(){
//   var $div = $('<div>');
//   $div.addClass('row');
//   $('.firstrow').after($div);
// }
//-------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function getValue(selector, fn){
  var value = $(selector).val();
  value = value.trim();
  $(selector).val('');

  if(fn){
    value = fn(value);
  }

  return value;
}

function parseUpperCase(string){
  return string.toUpperCase();
}

function parseLowerCase(string){
  return string.toLowerCase();
}

function formatCurrency(number){
  return '$' + number.toFixed(2);
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










