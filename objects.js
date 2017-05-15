var plants = [];
// constructor function
function plantObj (location,color,planttype,family) {
  this.location = location;
  this.color = color;
  this.planttype = planttype;
  this.family = family;
  plants.push(this);
}

// Instantiating new objects
var rose = new plantObj ('seattle', 'red', 'flower','Apiaceae');
var lailak = new plantObj ('centralia','purple', 'bush', 'Apocynaceae');
var oak = new plantObj ('oregon','green', 'tree', 'AncientTree');
//// Once we convert this to data.json we don't really need this doc & can be deleted.
