const app = "I don't do much."


 
 function kittens(){
   var kittens =   ['Milo', 'Otis', 'Garfield']
   return kittens
 }
 
 kittens()
 
 function destructivelyAppendKitten(name){
  
   kittens.push(name)
  
 }
 
 function destructivelyPrependKitten(name){
   kittens.unshift(name) 
 }
 
 function destructivelyRemoveLastKitten() {
   kittens.pop()
 }
 
 function destructivelyRemoveFirstKitten() {
   kittens.shift()
 }
 
 function appendKitten(name){
   
 }