$('.button').click(function(){
  var buttonId = $(this).attr('id');
  $('#mod-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

$('#mod-container').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});
