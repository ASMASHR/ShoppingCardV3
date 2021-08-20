
      
    //   document.getElementById('el').innerHTML to change the content of th tag

    const plus=document.querySelector(".plus-button")
    const minus=document.querySelector(".minus-button")
    const price=Number(document.querySelector(".price").innerHTML)
    var qty=document.querySelector(".qty").value
    const total=document.querySelector(".total")
    const remove=document.querySelector(".remove")
    console.log(plus,minus,price,qty,total)
    plus.addEventListener('click',function (){
      
       qty++
       document.querySelector(".qty").value=qty
       document.querySelector(".total").innerHTML=price*qty
    })
    minus.addEventListener('click',function (){
      if(document.querySelector(".qty").value>1){
        qty--
        document.querySelector(".qty").value=qty
        document.querySelector(".total").innerHTML=price*qty
      }
      
    })
    console.log(remove)
    remove.addEventListener('click',function(){
      document.getElementById("2nd").remove()
    })
document.getElementById("heart1").addEventListener('click',function(){
  document.getElementById("heart1").setAttribute("class","f2 fa-heart")
})
    
