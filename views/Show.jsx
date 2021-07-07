const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component {
  render() {
    return(
      <DefaultLayout
      title={this.props.product.title}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/show.css'}]}>
      <div className="showDiv">
        <nav>
          <a className="editTag" href={`/underthesea/${this.props.product._id}/edit`}>Edit product</a>
        </nav>
        <p>Product: {this.props.product.name} </p>
        <p>{this.props.product.description}</p>
        <img id="imgTag" src={this.props.product.img} alt="Product Image"/>
        <p>Price: ${this.props.product.price}</p>
        <p>{this.props.product.qty} left in stock</p>
        <form action={`/underthesea/${this.props.product._id}?_method=PUT`} method="POST">
            <input className="buyButton" name="buyButton" type="submit" value="Buy"/>
        </form>
        <a id="backLink" href="/underthesea">Back to products</a>
      </div>
      </DefaultLayout>
    )
  }
}

module.exports = Show;
