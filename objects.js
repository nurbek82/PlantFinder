var ALLplants = [];
// constructor function
function PlantObj (obj) {
  this.name = obj.name;
  this.location = obj.locaton;
  this.color = obj.color;
  this.planttype = obj.planttype;
  this.family = obj.family;
  this.description = obj.description;
  // plants.push(this);
}

// Instantiating new objects
// var rose = new plantObj ('rose','seattle', 'red', 'flower','Apiaceae','little bush');
// var lailak = new plantObj ('centralia','purple', 'bush', 'Apocynaceae','big bush');
// var oak = new plantObj ('oregon','green', 'tree', 'AncientTree', 'big tree that can grow 1000 years');


PlantObj.prototype.toHtml = function () {
  var $source = $('#handleBarMenu').html();
  // console.log($source);
  var template = Handlebars.compile($source);
  // console.log(template);
  return template(this);
};


$(function(){
  $.ajax({
    url:'/scripts/plants.json',
    dataType:'json',
  }).done(function(data){
    data.forEach((function (plants){
      console.log('request done: ' + Date.now());
      ALLplants.push(new PlantObj(plants));
      console.log (ALLplants, ' is ALLplants');
    }));
    ALLplants.forEach(function(p) {
      $('#handleBarMenu').append(p.toHtml());
    });
  })
  console.log ('requst started:' + Date.now())
});
