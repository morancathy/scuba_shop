const React = require('react');
const DefaultLayout = require('./layouts/Default');

class New extends React.Component{
  render() {
    return(
      <DefaultLayout
      title={"New Product"}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/new.css'}]}>
        <form action="/underthesea" method="POST">
        <h4>Name:</h4>
          <input type="text" name="name" /><br/>
        <h4>Description:</h4>
          <textarea rows="4" cols="50" name="description" /><br/>
        <h4>Image:</h4>
          <input type="text" name="image" /><br/>
        <h4>Price:</h4>
          <input type="number" name="price" /><br/>
        <h4>Quantity:</h4>
          <input type="number" name="quantity" /><br/>
        <input id="submit" type="submit" name="" value="Submit" /><br/>
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = New;
