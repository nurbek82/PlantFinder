// $(document).ready (function () {
//  $('li a').click(function (e) {
//      e.preventDefault()
//      var target = $(e.target );
//      var value = ($(this).text());
//      console.log($(this).parent().parent().find('a').data( value));
//   });
// })
var userInputArr = [];

$(document).ready (function () {
 $('#form').submit(function(event) {
   event.preventDefault()
  var apple= $('#genus').val()
  userInputArr.push(apple)
  var galaApple= $('#species').val()
  userInputArr.push(galaApple)
  console.log(userInputArr);
  })
});
