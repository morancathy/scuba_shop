const React = require('react');
const DefaultLayout = require('./layouts/Default');

class FinShow extends React.Component {
  render() {
    return(
      <DefaultLayout
      title={this.props.fin.title}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/show.css'}]}>
      {console.log(this.props.fin.name)}
        <p>Product: {this.props.fin.name} </p>
        <p>{this.props.fin.description}</p>
        <img id="imgTag" src={this.props.fin.img} alt="Fin Image"/>
        <p>Price: ${this.props.fin.price}</p>
        <p>{this.props.fin.qty} left in stock</p>

        <form action={`/fins/${this.props.fin._id}?_method=PUT`} method="POST">
            <input className="buyButton" name="buyButton" type="submit" value="Buy"/>
        </form>

        <a href={`/fins/${this.props.fin._id}/edit`}>Edit</a>
        <a id="backLink" href="/fins">Back to Fins</a>
      </DefaultLayout>
    )
  }
}

module.exports = FinShow;
