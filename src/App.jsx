
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { Navigation } from "./Navigation/Navigation";
import { PersistGate } from 'redux-persist/integration/react'
import AuthLayout from "./components/AuthLayout/AuthLayout"
const App = () => {
    return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/react-homework-template">
            <AuthLayout>
              <Navigation />
            </AuthLayout>
          </BrowserRouter>
      </PersistGate>
    </Provider>
        )
}
export default App