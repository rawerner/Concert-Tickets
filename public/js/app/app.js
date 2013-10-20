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
  }
}


function clickAddName(){
  var $this = $(this);
  //if (this td doesnt already has a span inside it){
  var name = $('#name').val();
  var $span = $('<span>');
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

  htmlCreateFullRows(numberOfFullRows, $table);
  if (seatsInLastRow){
    htmlCreateLastRow(seatsInLastRow, $table);
  }
}

function htmlCreateFullRows(numberOfFullRows, $table){

  for(var i = 0; i < numberOfFullRows; i++){
    var $tr = $('<tr>');
    var $td1 = $('<td>');
    var $td2 = $('<td>');
    var $td3 = $('<td>');
    var $td4 = $('<td>');
    var $td5 = $('<td>');
    var $td6 = $('<td>');
    var $td7 = $('<td>');
    var $td8 = $('<td>');
    var $td9 = $('<td>');
    var $td10 = $('<td>');
    var $td11 = $('<td>');
    var $td12 = $('<td>');
    var $td13 = $('<td>');
    var $td14 = $('<td>');
    $tr.append($td1, $td2, $td3, $td4, $td5, $td6, $td7, $td8, $td9, $td10, $td11, $td12, $td13, $td14 );
    $tr.children('td').addClass('seat');
    $table.append($tr);
  }

}

function htmlCreateLastRow(seatsInLastRow, $table){
  var $tr = $('<tr>');

  for(var i = 0; i < seatsInLastRow; i++){
    var $td = $('<td>');
    $td.addClass('seat');
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
