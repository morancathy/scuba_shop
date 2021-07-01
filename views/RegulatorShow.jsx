const React = require('react');
const DefaultLayout = require('./layouts/Default');

class RegulatorShow extends React.Component {
  render() {
    const buyButton = () => {
            if (this.props.regulator.qty > 0) {
                return(
                    <>
                        <p>{this.props.regulator.qty} in stock</p>
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
          <a id="backLink" href="/regulators">Back</a>
        </nav>
        <p className="nameP">{this.props.regulator.name} </p>
        <p>{this.props.regulator.description}</p>
        <img id="imgTag" src={this.props.regulator.img} alt="regulator Image"/>
        <p>${this.props.regulator.price}</p>
        {buyButton()}<br/><br/>
        <a className="editTag" href={`/regulators/${this.props.regulator._id}/edit`}>Edit Product</a>

      </div>
      </DefaultLayout>
    )
  }
}

module.exports = RegulatorShow;
