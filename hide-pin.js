var hidePin = function(){
  var input = document.getElementById('pin_number').value;
  var code = [];
  var codebook = [{key:1,value:"pop"},{key:10,value:"double rip"},{key:100,value:"hide your mints"},{key:1000,value:"fall"},{key:10000,value:"reverse"}];
  var input_copy = input, binary_code = 0;
  for (var i = 0; input_copy > 0; i++) {
    var digit = parseInt(input/Math.pow(2,i)%2);
    binary_code += digit * Math.pow(10,i);
    if (digit) {
      code.push( codebook.find( obj => obj.key ===(digit * Math.pow(10,i))).value );
      }
    input_copy = parseInt(input_copy/2);
  }

  if(code[code.length - 1] === "reverse"){
    code.pop();
    code = code.reverse();
  }
  var result = document.getElementById('code');
  result.innerText = code.toArray();
}
