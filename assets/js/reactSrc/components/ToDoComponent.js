
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoList from './ToDoList';
import AddNewToDo from './../actions/AddNewToDo';
import { bindActionCreators } from 'redux';

class ToDoComponent extends Component{
  constructor(props){
    console.log(props,'props---------------')
    super(props);
  }
  addNewPost(e){
    var toDoTxt = document.getElementById('toDoText');
    var addItem = {
      value: toDoTxt.value
    };

    toDoTxt.value = '';
    this.props.addNewToDo(addItem);
  }

  render(){
    console.log(this.props, 'props in render')
    var style = {
      'textAlign': 'center'
    };

    return(
      <div>
        <div className="jumbotron">
          <h1 style={style}>Todo Application</h1>
          <br />
            <div id="todo-form" className="row">
              <div className="col-sm-8 col-sm-offset-2 text-center">
                <form>
                  <div className="form-group">
                    <input type="text" id="toDoText" className="form-control input-lg text-center" placeholder="Add Todo!" />
                      <br />
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                          onClick = { e => this.addNewPost.bind(this, e)() }
                        > Submit </button>
                  </div>
                </form>
              </div>
            </div>
            <ToDoList list={this.props.toDoList} />
        </div>

       </div>
    );
  }
}

function mapStateToProps({toDoList}) {
  return {toDoList};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNewToDo: AddNewToDo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoComponent);
