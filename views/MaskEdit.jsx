const React = require('react');
const DefaultLayout = require('./layouts/Default.jsx');

class MaskEdit extends React.Component {
  render(){
    return (
      <DefaultLayout
      title={"Edit Mask"}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/edit.css'}]}>
        <div className="edit-div">
          <div className="div1">
          </div>
          <div className="div2">
            <form action={`/masks/${this.props.mask._id}?_method=PUT`} method="POST">
              <h4>Name:</h4>
                <input type="text" name="name" defaultValue={this.props.mask.name}/><br/>
              <h4>Description:</h4>
                <textarea rows="4" cols="20" name="description" defaultValue={this.props.mask.description}/><br/>
              <h4>Image:</h4>
                <input type="text" name="img" defaultValue={this.props.mask.img}/><br/>
              <h4>Price:</h4>
                <input type="number" placeholder="0.00" step="0.01" min="0" name="price" defaultValue={this.props.mask.price}/><br/>
              <h4>Quantity:</h4>
                <input type="number" name="qty" min="0" defaultValue={this.props.mask.qty}/><br/><br/><br/>
              <input id="submit" type="submit" name="" value="Submit edits" /><br/><br/>
            </form>
            <form id="deleteBut" method="POST" action={`/masks/${this.props.mask._id}?_method=DELETE`}>
              <input type="submit" value="Delete Mask"/>
            </form>
          </div>
          <div className="div3">
          </div>
        </div>
      </DefaultLayout>
    )
  }
}
module.exports = MaskEdit;
