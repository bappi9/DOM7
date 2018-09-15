

class contactFunction{
    constructor(){
        this.contactList=[]
    }

      createContact(obj){
        this.contactList.push(obj)
     }
       getContact(obj=null){
         return this.contactList
     }
       deleteContact(contact){
        let index=this.getIndex(contact)             
      // let index = this.contactList.findIndex(x => x.id==contact.id);
        this.contactList.splice(index,1)

     }
     
      getIndex(contact=null){
       let index=this.contactList.findIndex((c)=>{
        return c.id===contact.id
       })
     // let index = this.contactList.findIndex(x => x.id==contact.id);
       return this.index
     }
      updateContact(oldContact,change){
      let index=this.getIndex(oldContact)
      for(var i in change){
          contactList[index][i]=change[i]
      }
     }
}
 
let c=new contactFunction()
c.createContact({
    name:'dd',
    phone:'017631548787',
    addres:454,
    email:'Said.dti',
    id:100
} )
c.createContact({
    name:'dd',
    phone:'017631548787',
    addres:454,
    email:'Said.dti',
    id:200
} )

 c.deleteContact({
    name:'dd',
    phone:'017631548787',
    addres:454,
    email:'Said.dti',
    id:200
 })
 
 let ar=c.getContact()
  console.log(ar);
export default contactFunction