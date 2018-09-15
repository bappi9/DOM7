  
 import {$, cr, crLi} from './help';
 //import {createContact , getContact,deleteContact } from './contact';
 import contactFunction from './contact'
 import contacts  from './contactData';
 
  let cfun=new contactFunction()
  let addContact=$('spanAddContact')
  let add=$('btnsave')
  let ul=$('ul2') 
   
  add.addEventListener('click', function(){
    let name=$('iptname').value
    let phone=$('phone').value
    let address=$('address').value
    let email=$('email').value

    cfun.createContact(new contacts({
      name:name,
      phone:phone,
      address: address,
      email:email
    }))    
     
    removeChilds(ul)
    CreateAppendChild()
    
  })
  addContact.addEventListener('click', function(){
      
  })
  // Create Li Element
  function getLi(name=null,phone=null,addres=null,email=null,id=null){
    let br1=cr('br') 
    let br2=cr('br')
    let br3=cr('br')
    let br4=cr('br')
    let li=cr('li')
    li.className='list-group-item'
    let div1=cr('div')
    div1.className='row w-100'
    let div2=cr('div')
    div2.className='col-12 col-sm-6 col-md-9 text-center text-sm-left' 
     

    let span1=cr('span')
    span1.className='fa fa-trash fa-lg text-danger float-right'
     
    let span2=cr('span')
    span2.className='fa fa-edit fa-lg text-success float-right'
   

    let span3=cr('span')
    span3.className='name lead'
    span3.innerHTML=name

    let span4=cr('span')
    span4.className='fa fa-map-marker fa-fw text-muted'
 

    let span5=cr('span')
    span5.className='text-muted'
    span5.innerHTML= addres


    let span6=cr('span')
    span6.className='fa fa-phone fa-fw text-muted'
    

    let span7=cr('span')
    span7.className='text-muted small'
    span7.innerHTML=phone

    let span8=cr('span') 
    span8.className='fa fa-envelope fa-fw text-muted'
     
    let span9=cr('span')
    span9.className='text-muted small text-truncate'
    span9.innerHTML=email

    let span10=cr('span')
    span10.className='text-muted small text-truncate'
    span10.innerHTML=id

    span1.addEventListener('click', function(){
      
      alert(span10.innerHTML)
    
      cfun.deleteContact(new contacts({
        id:span10.innerHTML
      }))
      removeChilds(ul)
      CreateAppendChild()
     })
     div2.appendChild(span1)
     div2.appendChild(span2)
     div2.appendChild(span3)
     div2.appendChild(br1)
     div2.appendChild(span4)
     div2.appendChild(span5)
     div2.appendChild(br2)
     div2.appendChild(span6)
     div2.appendChild(span7)
     div2.appendChild(br3)
     div2.appendChild(span8)
     div2.appendChild(span9)  
     div2.appendChild(br4)
     div2.appendChild(span10)
     div1.appendChild(div2)
     li.appendChild(div1)

     return li

  }
  
  function removeChilds(node){
   while(node.hasChildNodes()){
    node.removeChild(node.firstChild)
   }  
  }
  function CreateAppendChild (){
    let list=cfun.getContact()
    for (let i=0; list.length>i; i++)
    {
      let name=list[i].name
      let phone=list[i].phone
      let addres=list[i].address
      let email=list[i].email
      let id=list[i].id
      
      ul.appendChild(getLi(name,phone,addres,email,id)); 
      
    }
   }


  
    


 
 
 

 




