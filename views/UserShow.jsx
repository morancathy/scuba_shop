const React = require('react');
const DefaultLayout = require('./layouts/Default');

class UserShow extends React.Component {
  render() {
    return(
      <DefaultLayout
      // title={this.props.user.title}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/show.css'}]}>
      <div className="showDiv">
        <p>Item: {this.props.user.name} </p>
        <p>Price: ${this.props.user.price} </p>
        <div className="mainDiv">
          {
            this.props.user.map((user)=>{
              return (
                <div className="productDiv" key={user._id}>
                  <a href={`/cart/${user._id}`}>{user.name}</a>
                    <p>Price: ${user.price}</p>
                </div>
              )
            })
          }
        </div>
        <a id="backtoshop" href="/underthesea">Back to dive shop</a>
      </div>
      </DefaultLayout>
    )
  }
}

module.exports = UserShow;
