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
            <a className="createLink" href="/masks/new">Create New Product</a><a className="cartLink" href="/masks">Cart</a>
          </nav>
          <h1 className="h1">Under the Sea</h1>
          <h2 className="h2">Dive Shop</h2>
          <p className="introP">Your neighboorhood Chicago-land dive shop. We've been in buisness for over 3 days! We offer
          nothing but the best quality, prices and customer service.</p>
        </div>
        <div className="mainDiv">
          {
            this.props.masks.map((mask)=>{
              return (
                <div className="productDiv" key={mask._id}>
                  <a href={`/masks/${mask._id}`}>{mask.name}</a>
                  <p>{mask.description}</p>
                  <a href="/masks">Masks Index Page</a>
                  <img className="imgTag" src={mask.img} alt="Mask Image"/>
                  <p>Price: ${mask.price}</p>
                </div>
              )
            })
          }
        </div>
        <div className="div2Tag">
          <h1>what does this do</h1>
        </div>
        <div className="div3Tag">
          <h1>Join Us!  Next excusion....El Nido, Philippines!</h1>
        </div>
        <footer><div>never stop exploring</div><div>© diesel 2021 </div></footer>
      </DefaultLayout>
    )
  }
}
module.exports = MaskIndex;
