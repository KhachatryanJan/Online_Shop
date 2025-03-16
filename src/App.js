import { Route,Routes } from "react-router-dom";
import HeaderContent from "./componets/header/HeaderConteent";

function App() {
  return (
   <>

      <Routes>
        <Route path="/" element={<HeaderContent />} />
      </Routes>
    
   </>
  );
}

export default App;
