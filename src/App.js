import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Content from "./components/Content/Content";

function App() {
  return (
    <div style={{ display: "flex", flex: 1, height:'100vh', flexDirection: "column",alignItems:'stretch'}}>
      <TopBar/>
      <div style={{ display: "flex", flex: 10, flexDirection: "row", alignSelf:'stretch',  }}>
        <div style={{ display: "flex", backgroundColor: "green",  flex:1 }}>
          <SideBar/>
        </div>
        <div style={{ display: "flex", backgroundColor: "yellow", flex:6 }}>
          <Content/>
        </div>
      </div>
    </div>
  );
}

export default App;
