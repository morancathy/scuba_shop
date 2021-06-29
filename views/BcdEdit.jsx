const React = require('react');
const DefaultLayout = require('./layouts/Default.jsx');

class BcdEdit extends React.Component {
  render(){
    return (
      <DefaultLayout
      title={"Edit BCD"}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/edit.css'}]}>
        <form action={`/bcds/${this.props.bcd._id}?_method=PUT`} method="POST">
          <h4>Name:</h4>
            <input type="text" name="name" defaultValue={this.props.bcd.name}/><br/>
          <h4>Description:</h4>
            <textarea rows="4" cols="50" name="description" defaultValue={this.props.bcd.description}/><br/>
          <h4>Image:</h4>
            <input type="text" name="image" defaultValue={this.props.bcd.img}/><br/>
          <h4>Price:</h4>
            <input type="number" placeholder="0.00" step="0.01" min="0" name="price" defaultValue={this.props.bcd.price}/><br/>
          <h4>Quantity:</h4>
            <input type="number" name="qty" min="0" defaultValue={this.props.bcd.qty}/><br/><br/><br/>
          <input id="submit" type="submit" name="" value="Submit edits" /><br/><br/>
        </form>
        <form id="deleteBut" method="POST" action={`/bcds/${this.props.bcd._id}?_method=DELETE`}>
          <input type="submit" value="Delete BCD"/>
        </form>
      </DefaultLayout>
    )
  }
}
module.exports = BcdEdit;
