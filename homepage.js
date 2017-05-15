$(document).ready (function () {
 $('li a').click(function (e) {
     e.preventDefault()
      var target = $(e.target );
      console.log(target);
     var value = ($(this).text());
     console.log(value);
  });
})
