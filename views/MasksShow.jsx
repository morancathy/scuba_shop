const React = require('react');
const DefaultLayout = require('./layouts/Default');

class MaskShow extends React.Component {
  render() {
    return(
      <DefaultLayout
      title={this.props.mask.title}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/show.css'}]}>
        <p>mask: {this.props.mask.name} </p>
        <p>{this.props.mask.description}</p>
        <img id="imgTag" src={this.props.mask.img} alt="Mask Image"/>
        <p>Price: ${this.props.mask.price}</p>
        <p>{this.props.mask.qty} left in stock</p>

        <form action={`/masks/${this.props.mask._id}?_method=PUT`} method="POST">
            <input className="buyButton" name="buyButton" type="submit" value="Buy"/>
        </form>

        <a href={`/masks/${this.props.mask._id}/edit`}>Edit this mask</a>
        <a id="backLink" href="/masks">Back to masks</a>
      </DefaultLayout>
    )
  }
}

module.exports = MaskShow;
