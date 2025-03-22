import { Route, Routes } from "react-router-dom";
import HeaderContent from "./componets/header/HeaderConteent";
import MainContent from "./componets/main/MainContent";
import FooterContent from "./componets/footer/FooterContent";


function App() {
  return (
    <>
      <HeaderContent />
      <Routes>
        <Route path="/" element={<MainContent />} />
     
      </Routes>
      <FooterContent />
    </>
  );
}

export default App;
