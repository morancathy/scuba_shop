const React = require('react');
const DefaultLayout = require('./layouts/Default');

class RegulatorShow extends React.Component {
  render() {
    const buyButton = () => {
            if (this.props.regulator.qty > 0) {
                return(
                    <>
                        <p>{this.props.regulator.qty} left in stock</p>
                        <form action={`/regulators/${this.props.regulator._id}/buy`}>
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
      title={this.props.regulator.title}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/show.css'}]}>
      <div className="showDiv">
        <nav>
          <a className="editTag" href={`/regulators/${this.props.regulator._id}/edit`}>Edit</a>
        </nav>
        <p>Product: {this.props.regulator.name} </p>
        <p>{this.props.regulator.description}</p>
        <img id="imgTag" src={this.props.regulator.img} alt="regulator Image"/>
        <p>Price: ${this.props.regulator.price}</p>
        {buyButton()}<br/>
        <a id="backLink" href="/regulators">Back to Regulators</a>
      </div>
      </DefaultLayout>
    )
  }
}

module.exports = RegulatorShow;
