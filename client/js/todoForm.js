window.TodoForm = (function($) {
  var forEach = function(items, cb) {return Array.prototype.forEach.call(items, cb);},
    $form;

  function init() {
    forEach(document.querySelectorAll('input[name$=-date]'), function(input){input.value = new Date().toDateInputValue();})

    $form = $('.ui .form');

    $form.submit(function(e){
      e.preventDefault();
      var todo = JSON.stringify($form.form('get values'));
      var url = 'http://localhost:3005/api/todos';
      console.log(todo, 'values line 14 todoForm.js');
      //---------------- add check on values ---------------
      // $.post(url, values)
      // .then()
      // .catch();
      // $.ajax({
      //   url: url,
      //   type: "POST",
      //   data: todo,
      //   contentType: "application/json"
      //   // ,
      //   // complete: callback
      // })
      // .then().catch();

    })
  }
  return {
    init
  }
})(jQuery)
