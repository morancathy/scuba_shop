const React = require('react');
const DefaultLayout = require('./layouts/Default');

class MaskShow extends React.Component {
  render() {
    const buyButton = () => {
            if (this.props.mask.qty > 0) {
                return(
                    <>
                        <p>{this.props.mask.qty} in stock</p>
                        <form action={`/masks/${this.props.mask._id}/buy`}>
                        <input id="buy" type="submit" value="BUY"/>
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
      title={this.props.mask.title}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/show.css'}]}>
        <div className="showDiv">
        <nav>
          <a id="backLink" href={`/${this.props.mask.product}s`}>Back to Products</a>
          <a className="cartLink" href="/cart">Cart</a>
        </nav>
          <p className="nameP">{this.props.mask.name} </p>
          <p>{this.props.mask.description}</p>
          <img id="imgTag" src={this.props.mask.img} alt="Mask Image"/>
          <p>${this.props.mask.price}</p>
        {buyButton()}<br/><br/>
          <a className="editTag" href={`/masks/${this.props.mask._id}/edit`}>Edit Product</a>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = MaskShow;
