import { Outlet, Route, Routes } from "react-router-dom";
import HeaderContent from "./componets/header/HeaderConteent";
import MainContent from "./componets/main/MainContent";
import FooterContent from "./componets/footer/FooterContent";
import { Provider } from "react-redux";
import store from "./store";
import OurStori from "./pages/OurStori";
import LanguageProvider from "./context/LanguageContext";
import OpinnionsPage from "./pages/OpinnionsPage";
import Quantity from "./componets/main/Quantity";
import GoodCommit from "./componets/main/GoodComment";
import BadCommit from "./componets/main/BadComment";
import ProductReviews from "./pages/ProductReviews";
import FinishedProduct from "./componets/main/FinishedProduct";
import CommitUser from "./pages/CommitUser";
function App() {
  return (
    <><LanguageProvider>
      <Provider store={store}>
        <HeaderContent />
        <Routes>
          <Route path="/" element={<MainContent />} >
          <Route path="product" element={<Quantity/>}/>
          <Route path="FinProduct" element={<FinishedProduct/>}/>
          </Route>
          <Route path="/product-rev/:id" element={<ProductReviews/>}/>
          <Route path="/OurStori" element={<OurStori/>} />
          <Route path="/Opinnions" element={<OpinnionsPage/>}>
          <Route path="good" element={<GoodCommit/>}></Route>
          <Route path="bad" element={<BadCommit/>}></Route>
          </Route>
        </Routes>
        <FooterContent />
      </Provider>
      </LanguageProvider>
    </>
  );
}

export default App;
