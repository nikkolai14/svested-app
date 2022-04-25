import React from "react";
import config from "./config";
import { RouterGuard } from 'react-router-guard';

function App() {
    return (
      <>
        <RouterGuard config={config} />
      </>
    );
}

export default App;
