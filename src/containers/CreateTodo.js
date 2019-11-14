import React, { Component } from 'react'
import { connect } from "react-redux";
import { addTodo } from "../actions/actionsCreator";
import { bindActionCreators } from "redux";

const style = {
    cancel: {
        marginTop: "25px", 
        marginRight: "15px"
    },
    addTodo: {
        marginTop: "25px"
    }
}

class CreateTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            todotext : ''
        }

        this.onChangeTodoText = this.onChangeTodoText.bind(this)
    }

    handleKeyDown = (e) => {
        console.log("handleKeyDown", e)
        if (e.key === 'Enter') {
            this.props.addTodo(this.state.todotext);
            this.setState({ todotext : '' })
        }
      }

    onChangeTodoText(e){
        this.setState({
            todotext: e.target.value
        })
    }

    render() {
        return (
            <div className="form-group row">
                <div className="col-sm-10">
                    <input onChange={this.onChangeTodoText} 
                            value={this.state.todotext}
                            type="text"
                            className="form-control"
                            id="todotext"
                            placeholder="add todo here" 
                            onKeyDown={this.handleKeyDown} />

                    <button type="button" 
                            onClick={() => this.setState({ todotext: '' })}
                            style={style.cancel}
                            className="btn btn-danger" >Cancel</button>
                    <button type="button" 
                            onClick={() => {
                                this.props.addTodo(this.state.todotext);
                                this.setState({ todotext : '' })
                            } }
                            style={style.addTodo}
                            className="btn btn-success" >Add Todo</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    } , dispatch)
}

export default connect(null, mapDispatchToProps)(CreateTodo)
