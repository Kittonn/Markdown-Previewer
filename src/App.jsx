import React from "react";
import MarkDownPreviewer from "./Components/MarkDownPreviewer";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <MarkDownPreviewer />
      </div>
      <Footer />
    </div>
  );
};

export default App;
