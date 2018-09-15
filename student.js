 
import Person from './person'
class Student extends Person{

    constructor(name,email,id){
        super(name,email)
        this.id=id
    }
    result(){
     super.print()
    }
     
}

export default Student;