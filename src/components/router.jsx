import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home.jsx";
import Cart from "./screens/Cart/cartPage.jsx";
import Sofas from "./screens/Categories/sofas/sofas.jsx";
import Kitchens from "./screens/Categories/kitchens/kitchens.jsx";
import Chests from "./screens/Categories/chests/chests.jsx";
import Chairs from "./screens/Categories/chairs/chairs.jsx";
import Beds from "./screens/Categories/beds/beds.jsx";
import Wardrobes from "./screens/Categories/wardrobes/wardrobes.jsx";
import SignUp from "./screens/SignUp/signUp.jsx";
import SignIn from "./screens/SignIn/signIn.jsx";
import GoodsPages from "./screens/Categories/goodsPages/goodsPages.jsx";
import AdminPanel from "./screens/Admin/adminPanel/adminPanel.jsx";
import Profile from "./screens/Profile/profile.jsx";
import { Provider } from "react-redux";
import { store } from "../components/screens/Redux/createStore.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route Component={Home} path="/" />
          <Route Component={Cart} path="/cart" />
          <Route Component={Sofas} path="/sofas" />
          <Route Component={GoodsPages} path="/sofas/:id/" />
          <Route Component={Kitchens} path="/kitchens" />
          <Route Component={GoodsPages} path="/kitchens/:id/" />
          <Route Component={Chests} path="/chests" />
          <Route Component={GoodsPages} path="/chests/:id/" />
          <Route Component={Chairs} path="/chairs" />
          <Route Component={GoodsPages} path="/chairs/:id/" />
          <Route Component={Beds} path="/beds" />
          <Route Component={GoodsPages} path="/beds/:id/" />
          <Route Component={Wardrobes} path="/wardrobes" />
          <Route Component={GoodsPages} path="/wardrobes/:id/" />
          <Route Component={Profile} path="/profile" />
          <Route Component={SignUp} path="/register" />
          <Route Component={SignIn} path="/login" />
          <Route Component={AdminPanel} path="/admin" />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default Router;
