const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Index extends React.Component {
  render(){
    return (
      <DefaultLayout
      title={"Products"}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/index.css'}]}>
        <nav className="newProductLink">
          <a href="/underthesea/new">Create New Product</a>
        </nav>
        <ul>
          {
            this.props.products.map((product)=>{
              return (
                <li key={product._id}>
                  The <a href={`/underthesea/${product._id}`}>{product.name}</a>
                  <p>{product.description}</p>
                  <img className="imgTag" src={product.img} alt="Product Image"/>
                  <p>Price: {product.price}</p>
                  <p>Quanity: {product.qty}</p>
                </li>
              )
            })
          }
        </ul>
      </DefaultLayout>
    )
  }
}
module.exports = Index;
