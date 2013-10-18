'use strict';

// Firebase Schema


// Local Schema (defined in keys.js)

$(document).ready(initialize);

function initialize(fn, flag){
  if(!canRun(flag)) {return;}

  $(document).foundation();
  $('#createSection').click(clickCreateSection);

}


// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
function clickCreateSection(){
  var section = $('select').val();
  var numOfSeats = $('#numOfSeats').val();
  var priceOfSeats = $('#priceOfSeats').val();

  htmlCreateTable(numOfSeats);

}


// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function htmlCreateTable(numOfSeats){
  var $table = $('<table>');
  $('#gasection').append($table);
  var numberOfFullRows = numOfSeats / 7;
  numberOfFullRows = Math.floor(numberOfFullRows);
  var seatsInLastRow = numOfSeats % 7;

  htmlCreateFullRows(numberOfFullRows);
  htmlCreateLastRow(seatsInLastRow);
}

function htmlCreateFullRows(numberOfFullRows){
  var $tr = $('<tr>');
  $('#')

}

function htmlCreateLastRow(seatsInLastRow){
  var $tr = $('<tr>');
  $('#')

}



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
