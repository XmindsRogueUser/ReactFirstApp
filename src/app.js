import './app.css';
import Products from './components/Products.js'

function App() {
  const msg = "Please help meeeee.....";
  return (
    <div className="row">
      <span className="mainDiv"><h2 >This is an app component</h2></span>
    <p className="mainPara"> {msg} </p>
    <div className="col-lg-8 mx-auto"><Products></Products></div>
    </div>
  );
}

export default App;
