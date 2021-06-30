const React = require('react');
const DefaultLayout = require('./layouts/Default');

class MaskShow extends React.Component {
  render() {
    const buyButton = () => {
            if (this.props.mask.qty > 0) {
                return(
                    <>
                        <p>{this.props.mask.qty} left in stock</p>
                        <form action={`/masks/${this.props.mask._id}/buy`}>
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
      title={this.props.mask.title}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/show.css'}]}>
        <div className="showDiv">
          <nav>
            <a className="editTag" href={`/masks/${this.props.mask._id}/edit`}>Edit this mask</a>
          </nav>
          <p>Product: {this.props.mask.name} </p>
          <p>{this.props.mask.description}</p>
          <img id="imgTag" src={this.props.mask.img} alt="Mask Image"/>
          <p>Price: ${this.props.mask.price}</p>
        {buyButton()}<br/>
          <a id="backLink" href="/masks">Back to masks</a>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = MaskShow;
