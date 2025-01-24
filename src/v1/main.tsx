import { ButtonComponent } from './components'
import { Login } from './features/admin'
import AuthLayout from './layouts/auth'
import { AuthPage } from './pages'
import { Provider } from 'react-redux'
import store from './store'

const Main = () => {
  return (
    <Provider store={store}>
      <Login />
      <AuthPage />
      <AuthLayout />
      <ButtonComponent />
    </Provider>
  )
}

export default Main
