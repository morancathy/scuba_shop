const React = require('react');
const DefaultLayout = require('./layouts/Default');

class UserShow extends React.Component {
  render() {
    return(
      <DefaultLayout
      // title={this.props.user.title}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/show.css'}]}>
      <div className="showDiv">
        <h1>Cart</h1>
          {
            this.props.user.map((user)=>{
              return (
                <div className="productDiv" key={user._id}>
                  <p>Item: {user.name}</p>
                    <p>Price: ${user.price}</p>
                </div>
              )
            })
          }
        <a id="backtoshop" href="/underthesea">Back to dive shop</a>
      </div>
      </DefaultLayout>
    )
  }
}

module.exports = UserShow;
