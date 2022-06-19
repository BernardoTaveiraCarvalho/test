import {li} from "./li.js"
import {img } from "./img.js"
import { ce } from "../helper/dom.js"

function createList(image,price,title,rate){
    const ul = ce('ul')
    createImg(image,ul)
    li("Title",title,ul)
    li("Price",price,ul)
    li("Rate",rate,ul)
    document.body.appendChild(ul)
}
export {createList}