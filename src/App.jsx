import { Route, Routes } from 'react-router'
import './App.css'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import DonationDetailPage from './pages/DonationDetailPage'
import MakeDonationPage from './pages/MakeDonationPage'
import CreateDonationPage from './pages/CreateDonationPage'

function App() {
 

  return (
    <Routes>
     <Route path='/login' element={<LoginPage />} />
     <Route path='/register' element={<RegisterPage />}/>
     <Route path='/' element={<HomePage />} />
     <Route path='/create-donation' element={<CreateDonationPage />} />
     <Route path='/make-donation' element={<MakeDonationPage/>} />
     <Route path='/donation-detail' element={<DonationDetailPage />} />
    </Routes>
  )
}

export default App
