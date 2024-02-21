import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Labs from './Labs'
import HelloWorld from './Labs/a3/HelloWorld';
import Kanbas from './Kanbas';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(){
  return (
    <HashRouter >
      <Routes>
      <Route path="/"         element={<Navigate to="/Labs"/>}/>
      <Route path="/Labs/*"   element={<Labs/>}/>
      <Route path="/kanbas/*" element={<Kanbas/>}/>
      <Route path="/hello"    element={<HelloWorld/>}/>
        </Routes>

      </HashRouter>
  );
}

export default App;
