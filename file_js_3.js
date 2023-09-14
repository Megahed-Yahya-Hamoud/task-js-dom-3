let myButton=document.querySelector(".click")

myButton.onclick=function(){

    let name=document.createElement("input")
    let attr=document.createAttribute("type")
    attr.value="text"
    let user=document.createAttribute("class")
    user.value="person"
    
    name.setAttributeNode(attr )
    name.setAttributeNode(user)

    document.body.appendChild(name)

}