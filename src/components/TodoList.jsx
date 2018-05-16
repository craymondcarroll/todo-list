import  React from 'react';
import  TodoItem from './TodoItem'
import  TodoInputV2 from './TodoInputV2'


class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
             items: []
        };

    }


    handleAddItem(name) {

        // console.log("TodoList handleAddItem "+ name);
     const newItems = this.state.items.concat({name: name, done: false});
        // console.log("newItems Array looks like " + newItems);
     this.setState({items: newItems});

    }


    handleToggleDone(item) {

        const newItems = this.state.items;
        console.log(newItems);

        newItems[newItems.indexOf(item)].done = !item.done;
        this.setState({items: newItems});
    }


    render() {


        return(
           <div>
            <ul>
                 {
                  // --- The Map Function works well but we can use ES6 syntax to make it easier to read
                  //items.map(function(item) {return <TodoItem  name={item}/>} )
                  this.state.items.map(item => <TodoItem name={item.name} done={item.done} onToggleDone={this.handleToggleDone.bind(this,item)} />)
                 }

            </ul>
            <TodoInputV2 onAddItem={this.handleAddItem.bind(this)} />
          </div>

        );
    }
}

export default TodoList;