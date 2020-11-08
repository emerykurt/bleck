import './App.css';
import Header from './Component/HeaderContainer/Header'
import Sidebar from './Component/SidebarContainer/Sidebar'

function App() {
  return (
    // BEM naming convention
    <div className="App">
      {/* <h1>Hello B.L.E.C.K.</h1> */}
      <Header />
      <div className="app_body">
        <Sidebar/>
        {/* React-Router -> Chat screen */}
      </div>
    </div>
  );
}

export default App;
