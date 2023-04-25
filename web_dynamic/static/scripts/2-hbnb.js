#!/usr/bin/node

$(document).ready(function () {
  let amenities = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      amenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenities[$(this).data('id')];
    }
    lista = Object.values(amenities);
    if (lista.length > 0) {
      $('.amenities > h4').text(lista.join(', '));
    } else {
      $('.amenities > h4').html('&nbsp;')
    }
  });
});

$.get('http://localhost:5001/api/v1/status/', function (data, textStatus) {
  if (textStatus === 'success' && data.status === 'OK') {
    $("#api_status").addClass('available');
  } else {
    $("#api_status").removeClass('available');
  }
});
