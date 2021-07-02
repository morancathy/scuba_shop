const React = require('react');
const DefaultLayout = require('./layouts/Default');

class BootieIndex extends React.Component {
  render(){
    return (
      <DefaultLayout
      // title={"booties"}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/index.css'}]}>
        <div className="introDiv">
          <nav className="nav">
            <a className="backLink" href="/underthesea">Back to Main Shop</a>
            <a className="createLink" href="/booties/new">Create New Product</a>
            <a className="cartLink" href="/cart">Cart</a>
          </nav>
          <h1 className="h1">Under the Sea</h1>
          <h2 className="h2">Dive Shop</h2>
          <h2>Booties</h2>
        </div>
        <div className="mainDiv">
          {
            this.props.booties.map((bootie)=>{
              return (
                <div className="productDiv" key={bootie._id}>
                  <a href={`/booties/${bootie._id}`}>{bootie.name}</a>
                  <p>{bootie.description}</p>
                  <img className="imgTag" src={bootie.img} alt="bootie Image"/>
                  <p>${bootie.price}</p>
                </div>
              )
            })
          }
        </div>
        <footer><div className="footDiv">~ never stop exploring ~</div><div>© diesel 2021 </div></footer>
      </DefaultLayout>
    )
  }
}
module.exports = BootieIndex;
