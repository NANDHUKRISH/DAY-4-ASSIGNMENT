var obj1 = { name: "Person 1", age:5 ,place: "kerala"};
var obj2 = { age:5, name: "Person 1" ,place:"kerala"};
var compare=(x,y)=>
{ 
var a=Object.keys(obj1);   //keys of obj1  [ 'name', 'age', 'place' ]
var b=Object.keys(obj2);   //keys of obj2  [ 'age', 'name', 'place' ]
if(a.length==b.length)
{
{for(i in x)
{if(x[i]==y[i])
var  temp=true;
else
temp=false;
}}
return temp;}
else 
return "Not possible to compare these objects";
}
console.log(compare(obj1,obj2));