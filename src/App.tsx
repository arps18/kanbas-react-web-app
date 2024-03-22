import React from "react";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Kanbas/Store";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <Routes>
            {/* <Route path="/"         element={<Navigate to="/Labs"/>}/> */}
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
            <Route path="/hello" element={<HelloWorld />} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
