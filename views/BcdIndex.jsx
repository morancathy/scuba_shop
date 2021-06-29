const React = require('react');
const DefaultLayout = require('./layouts/Default');

class BcdIndex extends React.Component {
  render(){
    return (
      <DefaultLayout
      // title={"bcds"}
      styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/index.css'}]}>
        <div className="introDiv">
          <nav className="nav">
            <a className="createLink" href="/bcds/new">Create New Product</a>
            <a className="backLink" href="/underthesea">back to home page</a>
            <a className="cartLink" href="/bcds">Cart</a>
          </nav>
          <h1 className="h1">Under the Sea</h1>
          <h2 className="h2">Dive Shop</h2>
          <h2>BCDs</h2>
        </div>
        <div className="mainDiv">
          {
            this.props.bcds.map((bcd)=>{
              return (
                <div className="productDiv" key={bcd._id}>
                  <a href={`/bcds/${bcd._id}`}>{bcd.name}</a>
                  <p>{bcd.description}</p>
                  <img className="imgTag" src={bcd.img} alt="bcd Image"/>
                  <p>Price: ${bcd.price}</p>
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
module.exports = BcdIndex;
