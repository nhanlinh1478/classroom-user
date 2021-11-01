import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateClass from "./pages/CreateClass";
import ListClass from "./pages/ListClass";
import Layout from "./components/Layout";
import { createMuiTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <ListClass />
            </Route>
            <Route exact path="/createClass">
              <CreateClass />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
