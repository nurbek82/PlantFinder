var plants = [];
// constructor function
function plantObj (name,location,color,planttype,family, description) {
  this.name = name;
  this.location = location;
  this.color = color;
  this.planttype = planttype;
  this.family = family;
  this.description = description;
  plants.push(this);
}

// Instantiating new objects
var rose = new plantObj ('rose','seattle', 'red', 'flower','Apiaceae','little bush');
var lailak = new plantObj ('centralia','purple', 'bush', 'Apocynaceae','big bush');
var oak = new plantObj ('oregon','green', 'tree', 'AncientTree', 'big tree that can grow 1000 years');


Project.prototype.toHtml = function () {
  var $source = $('#portfolioHandlebar').html();
  // console.log($source);
  var template = Handlebars.compile($source);
  // console.log(template);
  return template(this);
};

$(function(){
  $.ajax({
    url:'/scripts/data.json',
    dataType:'json',
  }).done(function(data){
    data.map((function (project){
      console.log('request done: ' + Date.now());
      allProjects.push(new Project(project));
    }));
    allProjects.map(function(p) {
      $('#handlebarSection').append(p.toHtml());
    });
    projectView.initIndexPage();
  })
  console.log ('requst started:' + Date.now())
});
