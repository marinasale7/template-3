import React, { Component,Fragment } from 'react';
 


class List extends Component {
    state = { 
     editcourse :false

     }

     rendercourse =()=>
     {
         return(
            <li>
          <span>  {this.props.details.name}</span>  
            <button onClick={()=>this.props.remove(this.props.index)}>Delete</button>
               <button onClick={()=>this.togel()}>Edit</button>
            </li>  
         )
     }
        
     handelupdate =(e)=>
     {
         e.preventDefault()
         this.props.editlist(this.props.index,this.input.value )
         this.togel()
     }

     renderupdateform =()=>
     {
         return(
             <form onSubmit={this.handelupdate}>
                 <input type="text" ref={(v)=>this.input=v} defaultValue={this.props.details.name}/>
                 <button>Update </button>
            </form>
         )
     } 




   togel =()=>
   {  
     let {editcourse}=this.state
     this.setState({editcourse : !editcourse})
    
      
   }

    



    render() { 
        let {editcourse}=this.state
        return ( 
            <Fragment>
                 
                 { editcourse ? this.renderupdateform()  :this.rendercourse()  }
            </Fragment>
         );
    }
}
 
export default List;

