import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import BusinessManApp from "./Components/BusinessManApp/BusinessManApp";
import Panel from "./Components/Panel";
import ComingSoon from "./Components/ComingSoon";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Layout /> } />
          <Route path="/admin" element={ <BusinessManApp /> }>
            <Route path="control-panel" element={ <Panel /> } />
            <Route path="living-complex" element={ <ComingSoon /> } />
            <Route path="commercion" element={ <ComingSoon /> } />
            <Route path="distribution" element={ <ComingSoon /> } />
            <Route path="analytics" element={ <ComingSoon /> } />
            <Route path="statistics" element={ <ComingSoon /> } />
            <Route path="messages" element={ <ComingSoon /> } />
            <Route path="account" element={ <ComingSoon /> } />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
