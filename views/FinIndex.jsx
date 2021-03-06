const React = require('react');
const DefaultLayout = require('./layouts/Default');

class FinIndex extends React.Component {
  render(){
    return (
      <DefaultLayout
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/index.css'}]}>
        <div className="introDiv">
        <nav className="nav">
          <div className="leftLinks">
            <a className="backLink" href="/underthesea">Back to Main Shop</a>
            <a className="createLink" href="/fins/new">Create New Product</a>
          </div>
          <a className="cartLink" href="/cart">Cart</a>
        </nav>
          <h1 className="h1">Under the Sea</h1>
          <h2 className="h2">Dive Shop</h2>
          <h2>Fins</h2>
        </div>
        <div className="mainDiv">
          {
            this.props.fins.map((fin)=>{
              return (
                <div className="productDiv" key={fin._id}>
                  <a href={`/fins/${fin._id}`}>{fin.name}</a>
                  <p>{fin.description}</p>
                  <img className="imgTag" src={fin.img} alt="Fin Image"/>
                  <p>${fin.price}</p>
                </div>
              )
            })
          }
        </div>
        <footer><div className="footDiv">~ never stop exploring ~</div><div>~ 2021 ~</div></footer>
      </DefaultLayout>
    )
  }
}
module.exports = FinIndex;
