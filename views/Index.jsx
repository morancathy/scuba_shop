const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Index extends React.Component {
  render(){
    return (
      <DefaultLayout
      // title={"Products"}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/index.css'}]}>
        <div className="introDiv">
          <nav className="nav">
            <a className="createLink" href="/underthesea/new">Create New Product</a><a className="cartLink" href="/cart">Cart</a>
          </nav>
          <img className="diveImg" src="https://www.divelogz.com/wp-content/uploads/2019/05/Diver-flag-with-black-diver.png"/>
          <h1 className="h1">Under the Sea</h1>
          <h2 className="h2">Dive Shop</h2>
          <p className="introP">Your neighboorhood Chicago-land dive shop. We've been in buisness over 3 days! We offer
          nothing but the best quality, prices and customer service.</p>
        </div>
        <div className="mainDiv">
          {
            this.props.products.map((product)=>{
              return (
                <div className="mainProductDiv" key={product._id}>
                <a className="productLink" href={`/${(product.name.toLowerCase())}`}>{product.name}</a>
                  <img className="mainImgTag" src={product.img} alt="Product Image"/>

                </div>
              )
            })
          }
        </div>
        <div className="div2Tag">
          <h1>Another section to add things?</h1>
        </div>
        <div className="div3Tag">
          <h1>Another section to add things?</h1>
        </div>
        <footer><div className="footDiv">~ never stop exploring ~</div><div>© diesel 2021 </div></footer>
      </DefaultLayout>
    )
  }
}
module.exports = Index;
