import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Landingpage from "./Pages/Home/Landingpage/Landingpage";
import Login from "./Pages/Login/Login";
import Manageorder from "./Pages/ManageOrder/Manageorder";
import Pagenotfound from "./Pages/Pagenotfound/Pagenotfound";
import Footer from "./Pages/Shared/Footer/Footer";
import Nevigation from "./Pages/Shared/Nevigation/Nevigation";
import Addnew from "./Pages/Addnew/Addnew";
import Myorder from "./Pages/Myorder/Myorder";
import Detailpage from "./Pages/Detailpage/Detailpage";
import Authprovider from "./Pages/Context/Authprovider";
import Privateroute from "./Pages/Privateroute/Privateroute";

function App() {
  return (
    <div className="App">
      <Authprovider>
        <Router>
          <Nevigation />
          <Switch>
            <Route exact path="/">
              <Landingpage />
            </Route>
            <Route path="/home">
              <Landingpage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Privateroute path="/manageorder">
              <Manageorder />
            </Privateroute>
            <Privateroute path="/addnew">
              <Addnew />
            </Privateroute>
            <Privateroute path="/myorder">
              <Myorder />
            </Privateroute>
            <Privateroute path="/detailpage/:id">
              <Detailpage />
            </Privateroute>
            <Route exact path="*">
              <Pagenotfound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Authprovider>
    </div>
  );
}

export default App;
