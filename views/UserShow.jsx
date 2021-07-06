
const React = require('react');
const DefaultLayout = require('./layouts/Default');

class UserShow extends React.Component {
  render() {
    console.log(`/${this.props.user.product}`)
    return(
      <DefaultLayout
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/index.css'}]}>
        <div className="cartDiv">
          <a className="backtoshop" href="/underthesea">Continue Shopping</a>
          <h1>Cart</h1>
            {
              this.props.user.map((user)=>{
                return (
                  <div className="cartItem" key={user._id}>
                    <a href={`${user.link}`}>
                     <img className="cartImg" src={user.img} alt={user.product} Image/>
                    </a>
                    <p className="nameTag">{user.name}</p>
                    <p className="priceTag">${user.price}</p>
                    <form className="removeBut" method="POST" action={`cart/${user._id}?_method=DELETE`} >
                      <input type="submit" value="Remove from Cart"/>
                      </form>
                  </div>
                )
              })
            }
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = UserShow;
