import { Route, Routes } from "react-router-dom";
import HeaderContent from "./componets/header/HeaderConteent";
import MainContent from "./componets/main/MainContent";
import FooterContent from "./componets/footer/FooterContent";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <>
      <Provider store={store}>
        <HeaderContent />
        <Routes>
          <Route path="/" element={<MainContent />} />

        </Routes>
        <FooterContent />
      </Provider>
    </>
  );
}

export default App;
