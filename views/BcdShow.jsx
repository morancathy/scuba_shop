const React = require('react');
const DefaultLayout = require('./layouts/Default');

class BcdShow extends React.Component {
  render() {
    const buyButton = () => {
            if (this.props.bcd.qty > 0) {
                return(
                    <>
                        <p>{this.props.bcd.qty} in stock</p>
                        <form action={`/bcds/${this.props.bcd._id}/buy`}>
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
      title={this.props.bcd.title}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/show.css'}]}>
      <div className="showDiv">
      <nav>
        <a id="backLink" href={`/${this.props.bcd.product}s`}>Back to Products</a>
        <a className="cartLink" href="/cart">Cart</a>
      </nav>
        <p className="nameP">{this.props.bcd.name} </p>
        <p>{this.props.bcd.description}</p>
        <img id="imgTag" src={this.props.bcd.img} alt="BCD Image"/>
        <p>${this.props.bcd.price}</p>
        {buyButton()}<br/><br/>
        <a className="editTag" href={`/bcds/${this.props.bcd._id}/edit`}>Edit Product</a>
      </div>
      </DefaultLayout>
    )
  }
}

module.exports = BcdShow;
