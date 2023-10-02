import { Provider } from "react-redux";
import store from "./redux/Store";
import { ToastContainer } from "react-toastify";
import ProductView from "./view/ProductView";

function App() {
  return (
    <Provider store={store}>
      <>
        <ProductView />
        <ToastContainer></ToastContainer>
      </>
    </Provider>
  );
}

export default App;
