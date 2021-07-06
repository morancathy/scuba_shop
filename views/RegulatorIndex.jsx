const React = require('react');
const DefaultLayout = require('./layouts/Default');

class RegulatorIndex extends React.Component {
  render(){
    return (
      <DefaultLayout
      // title={"regulators"}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/index.css'}]}>
        <div className="introDiv">
        <nav className="nav">
          <div className="leftLinks">
            <a className="backLink" href="/underthesea">Back to Main Shop</a>
            <a className="createLink" href="/regulators/new">Create New Product</a>
          </div>
          <a className="cartLink" href="/cart">Cart</a>
        </nav>
          <h1 className="h1">Under the Sea</h1>
          <h2 className="h2">Dive Shop</h2>
          <h2>Regulators</h2>
        </div>
        <div className="mainDiv">
          {
            this.props.regulators.map((regulator)=>{
              return (
                <div className="productDiv" key={regulator._id}>
                  <a href={`/regulators/${regulator._id}`}>{regulator.name}</a>
                  <p>{regulator.description}</p>
                  <img className="imgTag" src={regulator.img} alt="regulator Image"/>
                  <p>${regulator.price}</p>
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
module.exports = RegulatorIndex;
