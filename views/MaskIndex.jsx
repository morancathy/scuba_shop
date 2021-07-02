const React = require('react');
const DefaultLayout = require('./layouts/Default');

class MaskIndex extends React.Component {
  render(){
    return (
      <DefaultLayout
      // title={"Masks"}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/index.css'}]}>
        <div className="introDiv">
          <nav className="nav">
            <a className="backLink" href="/underthesea">Back to Main Shop</a>
            <a className="createLink" href="/masks/new">Create New Product</a>
            <a className="cartLink" href="/cart">Cart</a>
          </nav>
          <h1 className="h1">Under the Sea</h1>
          <h2 className="h2">Dive Shop</h2>
          <h2>Masks</h2>
        </div>
        <div className="mainDiv">
          {
            this.props.masks.map((mask)=>{
              return (
                <div className="productDiv" key={mask._id}>
                  <a href={`/masks/${mask._id}`}>{mask.name}</a>
                  <p>{mask.description}</p>
                  <img className="imgTag" src={mask.img} alt="Mask Image"/>
                  <p>${mask.price}</p>
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
module.exports = MaskIndex;
