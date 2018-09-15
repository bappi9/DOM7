
var arr=[]
export function cr(doc){
 return document.createElement(doc)
}

export  function $(node){
return document.getElementById(node)
}
export function crLi(node,value){
    
    
      
     
    let li=document.createElement('li')
    li.setAttribute('id',value)
    let span=cr('span')
    let i0=cr('i')
    let i1=cr('i')
    let i2=cr('i')
    let i3=cr('i')
    li.className= 'list-group-item d-flex' 
  
    span.className= "ml-auto"
    span.style.color= 'red'
    span.style.cursor= 'pointer'
     
   
    i0.innerHTML=value
    i1.className="fa fa-heart"   
    i2.className="fa fa-edit"
    i3.className="fa fa-trash"
    span.appendChild(i0)
    span.appendChild(i1)
    span.appendChild(i2)
    span.appendChild(i3)
    li.appendChild(span)

    i3.addEventListener('click',function(){
       
        $('ul1').removeChild(li)
    })
    i2.addEventListener('click', function(){
        
        i0.contentEditable=true
        i0.focus() 
    })

    i1.addEventListener('click', function(event) {
      let ul2 = $('ul2')
      
          let fli = cr('li')
          if(document.getElementById(event.target.offsetParent.innerHTML))
          {

          }
          else
          {
            fli.setAttribute('id',event.target.offsetParent.innerHTML)
            fli.className='list-group-item d-flex'
            fli.innerHTML=event.target.offsetParent.innerText
            let span2=cr('span')
            let i4=cr('i')
            i4.className='fa fa-trash'
            span2.appendChild(i4)
            fli.appendChild(span2)
            ul2.appendChild(fli) 
          }
         
   

    })

    return li
}