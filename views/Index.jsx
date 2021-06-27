const React = require('react');

class Index extends React.Component {
  render(){
    return (
      <div>
        <nav className="newProductLink">
          <a href="/fruits/new">Create New Product</a>
        </nav>
        <ul>
          {
            this.props.products.map((product)=>{
              return (
                <li key={product._id}>
                  The <a href={`/underthesea/${product._id}`}>{product.name}</a>
                  <form method="POST" action={`/underthesea/${product._id}?_method=DELETE`}>
                    <input type="submit" value="DELETE"/>
                  </form>
                  <a href={`/underthesea/${product._id}/edit`}>Edit this product</a>
                </li>

              )
            })
          }
        </ul>
      </div>
    )
  }
}
module.exports = Index;
