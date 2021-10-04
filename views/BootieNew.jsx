const React = require('react');
const DefaultLayout = require('./layouts/Default');

class BootieNew extends React.Component{
  render() {
    return(
      <DefaultLayout
      title={"New Product"}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/new.css'}]}>
      <a id="new-backLink" href={`/booties`}>Back</a>
        <div className="div1">
        </div>
        <div className="div2">
          <form action="/booties" method="POST">
          <h4>Product:</h4>
            <input type="text" name="product" defaultValue="bootie" readOnly="readOnly" /><br/>
          <h4>Name:</h4>
            <input type="text" name="name" defaultValue="Booties" /><br/>
          <h4>Description:</h4>
            <textarea rows="4" cols="50" name="description" /><br/>
          <h4>Image:</h4>
            <input type="text" name="img" /><br/>
          <h4>Price:</h4>
            <input type="number" placeholder="0.00" step="0.01" min="0" name="price" /><br/>
          <h4>Quantity:</h4>
            <input type="number" min="0" name="qty" /><br/>
          <input id="submit" type="submit" name="" value="Submit" /><br/>
          </form>
        </div>
        <div className="div3">
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = BootieNew;
