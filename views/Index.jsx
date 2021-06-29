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
            <a className="createLink" href="/underthesea/new">Create New Product</a><a className="cartLink" href="/underthesea">Cart</a>
          </nav>
          <h1 className="h1">Under the Sea</h1>
          <h2 className="h2">Dive Shop</h2>
          <p className="introP">Your neighboorhood Chicago-land dive shop. We've been in buisness for over 3 days! We offer
          nothing but the best quality, prices and customer service.</p>
        </div>
        <div className="mainDiv">
          {
            this.props.products.map((product)=>{
              return (
                <div className="productDiv" key={product._id}>
                  <a href={`/${(product.name.charAt(0).toLowerCase() + product.name.slice(1))}`}>{product.name}</a>
                  <p>{product.description}</p>
                  <img className="imgTag" src={product.img} alt="Product Image"/>
                  <p>Price: ${product.price}</p>
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
