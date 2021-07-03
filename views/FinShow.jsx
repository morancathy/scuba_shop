const React = require('react');
const DefaultLayout = require('./layouts/Default');

class FinShow extends React.Component {
  render() {
    const buyButton = () => {
            if (this.props.collection.qty > 0) {
                return(
                    <>
                        <p>{`${this.props.collection.qty}`} in stock</p>
                        <form action={`/${this.props.collection.product}s/${this.props.collection._id}/buy`}>
                        <input type="submit" value="BUY"/>
                        </form>
                    </>
                )
            }else {
                return (
                    <p>OUT OF STOCK!</p>
                )
            }
        }
    return(
      <DefaultLayout
      // title={this.props.collection.product}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/show.css'}]}>
      <div className="showDiv">
        <nav>
          <a id="backLink" href={`/${this.props.collection.product}s`}>Back to Products</a>
          <a className="cartLink" href="/cart">Cart</a>
        </nav>
        <p className="nameP">{this.props.collection.name} </p>
        <p>{this.props.collection.description}</p>
        <img id="imgTag" src={this.props.collection.img} alt={this.props.collection.product} Image/>
        <p>${this.props.collection.price}</p>
        {buyButton()}<br/><br/>
        <a className="editTag" href={`/${this.props.collection.product}s/${this.props.collection._id}/edit`}>Edit Product</a>
      </div>
      </DefaultLayout>
    )
  }
}

module.exports = FinShow;
