var Stay = function()
{
    var node=
    document.createElement ("h2");
    node.innerText="You try to escape from the window, but the window was locked, you even try to break the window, but the window does not break. You hear someone coming towards your room, you hide in the closet. Click text to see what happens next.";
    
    node.setAttribute("onclick","goAway()");
    var body=
        document.querySelector("body");
    body.appendChild(node);
    document.querySelector("#button1")
    .setAttribute("onclick",null)
}

var base = function()
{
    var node=
    document.createElement ("h2");
    node.innerText="You try to open the door, but the door was locked, you even try to pick the lock, but you are not smart enough. You hear someone coming towards your room, you hide in the closet. Click text to see what happens next.";
    
    node.setAttribute("onclick","goAway()");
    var body=
        document.querySelector("body");
    body.appendChild(node);
    document.querySelector("#button2")
    .setAttribute("onclick",null)
}

var block = function()
{
    var node=
    document.createElement ("h2");
    node.innerText="You stay put inside the room, contemplating about your Computer Science homework. You hear someone coming towards your room, you hide in the closet. Click text to see what happens next.";
    
    node.setAttribute("onclick","goAway()");
    var body=
        document.querySelector("body");
    body.appendChild(node);
    document.querySelector("#button3")
    .setAttribute("onclick",null)
}

var goAway = function()
{
    var node =
    document.createElement("h2");
    node.innerText = "The person comes insdie the room with a gun, looking around shouting your name, he thinks you escaped so he is about to leave the room, but you accidently fart, click text to see what happens next";
      node.setAttribute("onclick","bruh()");
    var body =
        
        document.querySelector("body");
    body.appendChild(node);
    
}
var bruh = function()
{
    var node =
    document.createElement("h2");
    node.innerText = "He knows you are in the closet, he shoots through the closet, the bullet hits your head and you die. You lose";
    var body =
        document.querySelector("body");
    body.appendChild(node);
}
