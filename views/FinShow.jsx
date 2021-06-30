const React = require('react');
const DefaultLayout = require('./layouts/Default');

class FinShow extends React.Component {
  render() {
    const buyButton = () => {
            if (this.props.fin.qty > 0) {
                return(
                    <>
                        <p>{this.props.fin.qty} left in stock</p>
                        <form action={`/fins/${this.props.fin._id}/buy`}>
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
      title={this.props.fin.title}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/show.css'}]}>
      <div className="showDiv">
        <nav>
          <a className="editTag" href={`/fins/${this.props.fin._id}/edit`}>Edit</a>
        </nav>
        <p className="nameP">{this.props.fin.name} </p>
        <p>{this.props.fin.description}</p>
        <img id="imgTag" src={this.props.fin.img} alt="Fin Image"/>
        <p>${this.props.fin.price}</p>
        {buyButton()}<br/>
        <a id="backLink" href="/fins">Back to Fins</a>
      </div>
      </DefaultLayout>
    )
  }
}

module.exports = FinShow;
