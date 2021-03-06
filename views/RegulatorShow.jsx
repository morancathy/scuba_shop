const React = require('react');
const DefaultLayout = require('./layouts/Default');

class RegulatorShow extends React.Component {
  render() {
    const buyButton = () => {
            if (this.props.regulator.qty > 0) {
                return(
                    <div className="buyDiv">
                      <p>{this.props.regulator.qty} in stock</p>
                      <form action={`/regulators/${this.props.regulator._id}/buy`}>
                        <input id="buy" type="submit" value="BUY"/>
                      </form>
                    </div>
                )
            }else {
                return (
                    <p>OUT OF STOCK!</p>
                )
            }
        }
    return(
      <DefaultLayout
      title={this.props.regulator.title}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/show.css'}]}>
      <div className="showDiv">
        <nav>
          <a id="backLink" href={`/${this.props.regulator.product}s`}>Back to Products</a>
          <a className="cartLink" href="/cart">Cart</a>
        </nav>
        <p className="nameP">{this.props.regulator.name} </p>
        <p className="stretch">{this.props.regulator.description}</p>
        <img id="imgTag" src={this.props.regulator.img} alt="regulator Image"/>
        <p>${this.props.regulator.price}</p>
        {buyButton()}<br/><br/>
        <p><a className="editTag" href={`/regulators/${this.props.regulator._id}/edit`}>Edit Product</a></p>
      </div>
      </DefaultLayout>
    )
  }
}

module.exports = RegulatorShow;
