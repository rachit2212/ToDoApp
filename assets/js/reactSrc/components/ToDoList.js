
import React, { Component } from 'react';

export default class ToDoList extends Component{
  renderList(list){
    list = list.map(toDoItem => {
      return(
        <li key={ toDoItem.id }>
        { toDoItem.value }
      </li>
      );
    });

    return(
      <ul>
        { list }
      </ul>
    );
  }

  render(){
    return(
      <div id="todo-list" className="row">
        <div className="col-sm-4 col-sm-offset-4">
          {
            (!this.props.list || this.props.list.length === 0) ?
                ( <span>
                    No Item present in to do list
                </span> ) :
              ( this.renderList(this.props.list) )
          }
        </div>
      </div>
    );
  }
}
