// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

// export default App;
import React from 'react';
import TopBar from './components/TopBar'; // Adjust the path based on your folder structure
import '@fortawesome/fontawesome-free/css/all.min.css';
import MyNavbar from './components/Navbar';
import MainSection from './components/MainSection';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import AutoScrollSection from './components/Scroll';
import CardSection from './components/CardSection';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <TopBar />
      <MyNavbar/>
      <MainSection/>
      <AutoScrollSection/>
      <CardSection/>
  <Footer/>
     
    </div>
  );
};

export default App;
