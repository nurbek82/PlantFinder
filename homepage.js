$(document).ready (function () {
 $('li a').click(function (e) {
     e.preventDefault()
     var target = $(e.target );
     var value = ($(this).text());
     console.log($(this).parent().parent().find('a').data( value));
  });
})

// $newProject.data('category', this.category);
// $newProject.find('a.atag').attr('href',this.gitHubUrl);
//
// projectView.handleLanguageFilter = function () {
//   $('#language-filter').on('change', function () {
//     if($(this).val())  {
//        $('article').hide();
//       var value = $(this).val();
//       alert('value is' + value);
//       $('article[data-language="' + value + '"]').fadeIn();
//     }
//     else {
//       $('article:not(.article-class)').show();
//     }
//     $('#category-filter').val('');
//   })
// };
