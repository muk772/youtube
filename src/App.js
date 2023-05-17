import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./Utils/Store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;

/*
-Head
-body
  -sidebar
    -menu items
  -main Container
    -button list comp
    -video component  
      -video card component
*/
