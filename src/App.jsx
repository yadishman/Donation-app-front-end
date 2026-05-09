import { Route, Routes } from 'react-router'
import './App.css'
// import RegisterPage from './pages/RegisterPage'
// import LoginPage from './pages/LoginPage'
import HomePage from './features/post/pages/HomePage'

// import ThankYOuPage from './pages/thankYouPage'
import CreatePostPage from './features/post/pages/CreatePostPage'
import MakeDonationPage from './features/donation/pages/MakeDonationPage'
import DonationDetailPage from './features/post/pages/DonationDetailPage'
import LoginPage from './features/auth/pages/LogInPage'
import RegisterPage from './features/auth/pages/RegisterPage'
import PublicRoute from './route/PublicRoute'
import PrivateRoute from './route/PrivateRoute'

function App() {


  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>

      <Route path='/' element={<HomePage />} />
      <Route path='/posts/:id' element={<DonationDetailPage />} />
      <Route element={<PrivateRoute />}>
        <Route path='/create-donation' element={<CreatePostPage />} />
        <Route path='/make-donation/:id' element={<MakeDonationPage />} />
      </Route>
      {/* <Route path='/thankyou' element={<ThankYOuPage />} /> */}
    </Routes>
  )
}

export default App
