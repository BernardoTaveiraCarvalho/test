import {createList } from "./components/list.js"
function GetApi(){
 
    fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then(res=>res.json())
        .then(json=>console.log(json))
    
    .then (data =>{
        
       const {image,price,title,rating} = data
       rate= rating.rate
       createList(image,price,title,rate)
    }) 
    
    }
    export {GetApi}


