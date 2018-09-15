 
 
import uuid from 'uuid/v1'
 class contacts{
      constructor({name=null,phone=null,address=null,email=null}){
        this.name= name
        this.phone= phone
        this.address=address
        this.email=email
        this.id= uuid()
      }
    print() {
        return 'test'
    }

     

 }

 export  default contacts
 