const React = require('react');
const DefaultLayout = require('./layouts/Default.jsx');

class RegulatorEdit extends React.Component {
  render(){
    return (
      <DefaultLayout
      title={"Edit Regulator"}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/edit.css'}]}>
        <div className="edit-div">
          <div className="div1">
          </div>
          <div className="div2">
            <form action={`/regulators/${this.props.regulator._id}?_method=PUT`} method="POST">
              <h4>Name:</h4>
                <input type="text" name="name" defaultValue={this.props.regulator.name}/><br/>
              <h4>Description:</h4>
                <textarea rows="4" cols="20" name="description" defaultValue={this.props.regulator.description}/><br/>
              <h4>Image:</h4>
                <input type="text" name="img" defaultValue={this.props.regulator.img}/><br/>
              <h4>Price:</h4>
                <input type="number" placeholder="0.00" step="0.01" min="0" name="price" defaultValue={this.props.regulator.price}/><br/>
              <h4>Quantity:</h4>
                <input type="number" name="qty" min="0" defaultValue={this.props.regulator.qty}/><br/><br/><br/>
              <input id="submit" type="submit" name="" value="Submit edits" /><br/><br/>
            </form>
            <form id="deleteBut" method="POST" action={`/regulators/${this.props.regulator._id}?_method=DELETE`}>
              <input type="submit" value="Delete Regulator"/>
            </form>
          </div>
          <div className="div3">
          </div>
        </div>
      </DefaultLayout>
    )
  }
}
module.exports = RegulatorEdit;
