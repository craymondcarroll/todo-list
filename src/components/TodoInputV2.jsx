import  React from 'react';

class TodoInPutV2 extends React.Component {

   handleSubmit(event) {
       event.preventDefault(); // Stop page to reloading
       console.log("handleSubmit is being called with value of " + this.refs.input.value);
        this.props.onAddItem(this.refs.input.value);
        this.refs.input.value = "";

   }

    render() {
        return (

            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" ref="input" />
                <button>Add</button>
            </form>

        ); // end of return

    }
}

export default TodoInPutV2;