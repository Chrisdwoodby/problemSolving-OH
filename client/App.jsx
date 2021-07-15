import React from "react";
import GroceryItem from "./GroceryItem.jsx";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gList: [],
      GroceryItem: "",
    };
  }

  componentDidMount() {/*your code here*/ }

  addItem(event) {/*your code here */
    console.log(this.state.GroceryItem)

    axios.post('http://localhost:3306/api', { // make s apost request when the submit button is clicked
      item: this.state.GroceryItem  
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err)
    })
  }
  updateItem(event) {
    var currWord = this.state.GroceryItem
    var newWord = currWord + event.target.value;
    console.log(newWord);
    this.setState({
      GroceryItem: newWord
    })
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Add Item" value={this.state.GroceryItem} onChange={this.updateItem.bind(this)}/>
        <button onClick={this.addItem.bind(this)}>Submit</button>
        <ul>
          <GroceryItem stuff={this.state.gList}/>
        </ul>
      </div>
    );
  }
}
