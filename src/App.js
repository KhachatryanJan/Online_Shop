import { Route, Routes } from "react-router-dom";
import HeaderContent from "./componets/header/HeaderConteent";
import MainContent from "./componets/main/MainContent";
import FooterContent from "./componets/footer/FooterContent";
import { Provider } from "react-redux";
import store from "./store";
import OurStori from "./pages/OurStori";
import LanguageProvider from "./context/LanguageContext";
import OpinnionsPage from "./pages/OpinnionsPage";
function App() {
  return (
    <><LanguageProvider>
      <Provider store={store}>
        <HeaderContent />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/OurStori" element={<OurStori/>} />
          <Route path="/Opinnions" element={<OpinnionsPage/>}/>
        </Routes>
        <FooterContent />
      </Provider>
      </LanguageProvider>
    </>
  );
}

export default App;
