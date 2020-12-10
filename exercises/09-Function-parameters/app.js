// Your code goes here:

var renderPerson = function(name, date, color, age, gender){
    var newString = (name + 'is a' + age + 'years old' +gender+ 'born on' +date+'with' +color+ 'eyes');
    return newString;
}
     
    


  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));