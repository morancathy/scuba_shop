const React = require('react');
const DefaultLayout = require('./layouts/Default');

class BootieShow extends React.Component {
  render() {
    const buyButton = () => {
            if (this.props.bootie.qty > 0) {
                return(
                    <>
                        <p>{this.props.bootie.qty} in stock</p>
                        <form action={`/booties/${this.props.bootie._id}/buy`}>
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
      title={this.props.bootie.title}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/show.css'}]}>
      <div className="showDiv">
      <nav>
        <a id="backLink" href={`/${this.props.bootie.product}s`}>Back to Products</a>
        <a className="cartLink" href="/cart">Cart</a>
      </nav>
        <p className="nameP">{this.props.bootie.name} </p>
        <p>{this.props.bootie.description}</p>
        <img id="imgTag" src={this.props.bootie.img} alt="bootie Image"/>
        <p>${this.props.bootie.price}</p>
        {buyButton()}<br/><br/>
        <a className="editTag" href={`/booties/${this.props.bootie._id}/edit`}>Edit Product</a>
      </div>
      </DefaultLayout>
    )
  }
}

module.exports = BootieShow;
