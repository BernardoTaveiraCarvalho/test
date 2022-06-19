import { ce,addE } from "../helper/dom.js"
function li(name,text,ul){
    const li = ce('li',name+":"+text)
    ul.appendChild(li)
    
}

export {li}