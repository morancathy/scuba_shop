const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component {
  render() {
    return(
      <DefaultLayout
      title={this.props.product.title}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/show.css'}]}>
        <p>Entry: {this.props.product.entry} </p>
        <p>{this.props.product.description}</p>
        <img id="imgTag" src={this.props.product.img} alt="Product Image"/>
        <p>Price: {this.props.product.price}</p>
        <p>Quanity: {this.props.product.qty}</p>
        <form method="POST" action={`/underthesea/${this.props.product._id}?_method=DELETE`}>
          <input type="submit" value="DELETE"/>
        </form>
        <a href={`/underthesea/${this.props.product._id}/edit`}>Edit this product</a>
        <a id="backLink" href="/underthesea">Back to products</a>
      </DefaultLayout>
    )
  }
}

module.exports = Show;
