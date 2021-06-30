const React = require('react');
const DefaultLayout = require('./layouts/Default');

class BootieShow extends React.Component {
  render() {
    const buyButton = () => {
            if (this.props.bootie.qty > 0) {
                return(
                    <>
                        <p>{this.props.bootie.qty} left in stock</p>
                        <form action={`/booties/${this.props.bootie._id}/buy`}>
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
      title={this.props.bootie.title}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/show.css'}]}>
      <div className="showDiv">
        <nav>
          <a className="editTag" href={`/booties/${this.props.bootie._id}/edit`}>Edit</a>
        </nav>
        <p>Product: {this.props.bootie.name} </p>
        <p>{this.props.bootie.description}</p>
        <img id="imgTag" src={this.props.bootie.img} alt="bootie Image"/>
        <p>Price: ${this.props.bootie.price}</p>
        {buyButton()}<br/>
        <a id="backLink" href="/booties">Back to booties</a>
      </div>
      </DefaultLayout>
    )
  }
}

module.exports = BootieShow;
