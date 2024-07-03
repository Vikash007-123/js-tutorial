/*
There are Two Datatypes in js
1.Primitive(call by value->ref of memory nahi diya jatha haa)
types:->String,Number,boolean, null,undefined,Symbol(we need to use in Advanced js to provide unique),BigInt

2. Non primitive DataType(Reference type)
types:- Object,Array,Functions

JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function object
       Object  =>  object

*/

const score=100
const scoreValue=33.3
const isLogegdin=Boolean
const outsidetemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)
const bigNumber= 234781206223237483n


const heroes=["sakhtiman","naagraj","doga"]
let myOj={
    name:"vikash kumar",
    age:23
}


const myFunction=function(){
    console.log('Hello World')

}
 console.log(typeof bigNumber)
 console.log(typeof myFunction)