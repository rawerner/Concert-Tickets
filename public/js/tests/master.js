'use strict';

module('Integration Testing', {setup: setupTest, teardown: teardownTest});

function setupTest(){
  initialize(null, true);
}

function teardownTest(){
}

test('section Creation', function(){
  expect(4);

  $('#select').val('ga');
  $('#numOfSeats').val('13');
  $('#priceofSeats').val('100');
  $('#createSection').trigger('click');

  deepEqual($('#gasection > table').length, 1, 'Should have created a table');
  deepEqual($('#gasection > table > tr').length, 2, 'Should have created a table row');
  deepEqual($('#gasection > table > tr:nth-child(1) > td').length, 7, 'Should have created 7 columns in row 1');
  deepEqual($('#gasection > table > tr:nth-child(2) > td').length, 6, 'Should have created 6 columns in row 2');
});
