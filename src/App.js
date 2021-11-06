import { Toolbar } from "./components/Toolbar";
import { SiteName } from "./components/SiteName";
import { DrawerItem } from "./components/DrawerItem";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Toolbar className="navbar">
        <SiteName className="stretch">
          <DrawerItem label="SiteName"></DrawerItem>
        </SiteName>
        <DrawerItem label="About us"></DrawerItem>
        <DrawerItem label="prices"></DrawerItem>
        <DrawerItem label="Stat Page"></DrawerItem>
        <DrawerItem label="Offer"></DrawerItem>
        <DrawerItem label="Contact"></DrawerItem>
      </Toolbar>
    </div>
  );
}

export default App;
