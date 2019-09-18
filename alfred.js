var Stay = function()
{
    var node=document.createElement ("h2");
    node.innerText="Here are some steps";
    
    node.setAttribute("oneclick","goAway()")
   ;
    var body=
        document.querySelector("buttom1");
    body.appendChild(node);
    document.querySelectoe("#button1")
    .setAttribute("oneclick",null)
}
