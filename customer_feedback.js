$(function(){

  function checkRadioGroup(value,radioList) {
    radioList.each(function(index,elem){
      if ($(elem).val()==value) {
        $(elem).prop('checked',true)
      }
    });
  }
  $('.customer-feedback-close').on('window.open',function(e) { e.preventDefault(); window.close(); })
  checkRadioGroup($('#customer-feedback-checked-rating').val(),$("input[name='customer_feedback[rating]']"));
});
