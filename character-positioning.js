var input = process.argv[2];
console.log(input);


function showPosition(input)
{
var myObject = {};
  for(var i=0; i < input.length; i++)
  {
    if(input[i] === " ")
      {//epmty for purpose
      }
      else
      {
        if(!(input[i] in myObject))
        {
          myObject[input[i]] = [];
        }
          myObject[input[i]].push(i);
      }
  }
return myObject;
}
console.log(showPosition(input));