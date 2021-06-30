const React = require('react');
const DefaultLayout = require('./layouts/Default');

class UserShow extends React.Component {
  render() {
    return(
      <DefaultLayout
      title={this.props.user.title}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/show.css'}]}>
      <div className="showDiv">
        <p>User: {this.props.user.username} </p>
        <p>Cart: {this.props.user.shopping_cart} </p>
        
        <a id="backtoshop" href="/underthesea">Back to dive shop</a>
      </div>
      </DefaultLayout>
    )
  }
}

module.exports = UserShow;
