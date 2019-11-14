import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../actions/actionsTypes'
import {
    deleteTodo,
    toggleTodo,
    setVisibilityFilter
} from "../actions/actionsCreator";

const styles = {
    nav: { marginTop: "60px" },
    table: { marginTop: "60px" },
    deleteTodo: {
        color: "white",
        fontSize: "20pt",
        marginRight: "20px"
    },
    toggleTodo: { color: "white", fontSize: "20pt" },
    noItems: { marginTop: "50px" }
}

function ShowItemsList({ todosList, deleteTodo, toggleTodo }) {
    return (<table className="table table-hover table-dark">
        <thead>
            <tr>
                <th scope="col">Todos</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            {todosList.map(todo => (
                <tr key={todo.id}>
                    <td style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                        {todo.completed === true ? "✅ " : "📌 "}{todo.text} 
                    </td>
                    <td>
                        <span className="fas fa-minus-circle"
                            onClick={() => deleteTodo(todo.id)}
                            style={styles.deleteTodo}
                        />
                        <span className="fas fa-check-circle"
                            onClick={() => toggleTodo(todo.id)}
                            style={styles.toggleTodo} />
                    </td>
                </tr>
            ))}
        </tbody>

    </table>)
}

function ShowNoItemsMessage() {
    return <div
        style={styles.noItems}
        className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1"
    >
        <div className="alert alert-danger" role="alert">
            Todo List is empty or Filter results show no results
            </div>
    </div>
}

class Table extends Component {
    render() {
        return (
            <div className="col-lg-10 offset-lg-1 col-md-10 col-sm-12 col-xs-12">
                <nav style={{ marginTop: "60px" }}>
                    <ol className="breadcrumb">
                        <li
                            className={"breadcrumb-item " + (this.props.visibilityFilter === SHOW_ALL ? 'active' : '')}
                            onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}
                        >
                            All
            </li>
                        <li
                            className={"breadcrumb-item " + (this.props.visibilityFilter === SHOW_COMPLETED ? 'active' : '')}
                            onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}
                        >
                            Completed
            </li>
                        <li
                            className={"breadcrumb-item " + (this.props.visibilityFilter === SHOW_ACTIVE ? 'active' : '')}
                            onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}
                        >
                            Active
            </li>
                    </ol>
                </nav>
                {this.props.todos.length !== 0 ?
                    <ShowItemsList todosList={this.props.todos}
                        deleteTodo={this.props.deleteTodo} toggleTodo={this.props.toggleTodo} ></ShowItemsList>
                    : <ShowNoItemsMessage ></ShowNoItemsMessage>}
            </div>
        )
    }
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case SHOW_ALL:
            return todos;
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error("Unknow filter: " + filter);
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            deleteTodo,
            toggleTodo,
            setVisibilityFilter
        },
        dispatch
    )
}
/*The mapStateToProps is responsible for getting the state from the Redux Store 
and inject as Props to the React app. 

The mapDispatchToProps is responsible to dispatch the actions creators.
*/
export default connect(mapStateToProps, mapDispatchToProps)(Table)