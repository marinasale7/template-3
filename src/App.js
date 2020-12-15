 import React, { Component } from 'react';
import Form from './component/form';

import List from './component/list';


 class App extends Component {
   state = {
     items : [
       {id: 1 , name: "Html"},
       {id: 2 , name: "CSS"},
       {id: 3 , name: "JavaScript"},
       {id: 4 , name: "Php"}
     ],
     current : ''
        
    
     }


   Updatecourse =(e)=>
   {
      this.setState({
        current: e.target.value
      })        
   }


   addcourse=(e)=>
   { 
      e.preventDefault()
      let current =this.state.current
      let items =this.state.items
      items.push({name:current});
      this.setState({items ,
        current:""
      })
     
   }

  

   remove=(id)=>
   {
       let items =this.state.items
          items.splice(id ,1)
          this.setState({items})
   }



  editlist =(index, value)=>
  {
       let items =this.state.items
       let item= items[index]
       item ["name"]=value
       this.setState ({items})
  }

    
   
   render() {
    const {items}=this.state
    const courseslist =items.map((item,index) => {
                return <List details ={item} key={index} index={index} 
                remove={this.remove} editlist={this.editlist}/>
                
    })
     return ( 
       <div className="App">
        <h2>Add course</h2> 
         <Form current={this.state.current} Updatecourse={this.Updatecourse} addcourse={this.addcourse}  />
           
          <ul> {courseslist}</ul>
        
       </div>
      );
   }
 }
  
 export default App;