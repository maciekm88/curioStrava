import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./components/pages/Home";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Calories from "./components/pages/Calories";
import Distance from "./components/pages/Distance";
import Elevation from "./components/pages/Elevation";
import Speed from "./components/pages/Speed";
import Summary from "./components/pages/Summary";
import  "./components/sass/App.scss"

function App() {
  return (
      <BrowserRouter>
          <Header />
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/Calories" element={<Calories />}/>
              <Route exact path="/Distance" element={<Distance />}/>
              <Route exact path="/Elevation" element={<Elevation />}/>
              <Route exact path="/Speed" element={<Speed />}/>
              <Route exact path="/Summary" element={<Summary />}/>
            </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
