import { Route, Routes } from 'react-router'
import './App.css'
// import RegisterPage from './pages/RegisterPage'
// import LoginPage from './pages/LoginPage'
import HomePage from './features/post/pages/HomePage'

// import ThankYOuPage from './pages/thankYouPage'
import CreatePostPage from './features/post/pages/CreatePostPage'
import MakeDonationPage from './features/donation/pages/MakeDonationPage'
import DonationDetailPage from './features/post/pages/DonationDetailPage'

function App() {
 

  return (
    <Routes>
     {/* <Route path='/login' element={<LoginPage />} />
     <Route path='/register' element={<RegisterPage />}/> */}
     <Route path='/' element={<HomePage />} />
     <Route path='/create-donation' element={<CreatePostPage />} />
     <Route path='/make-donation/:id' element={<MakeDonationPage/>} />
     <Route path='/posts/:id' element={<DonationDetailPage />} />
     {/* <Route path='/thankyou' element={<ThankYOuPage />} /> */}
    </Routes>
  )
}

export default App
