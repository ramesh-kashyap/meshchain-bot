import { Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Common/Sidebar';
import Footer from './Components/Common/Footer';
import Header from './Components/Common/Header';
// Import your other components like Home, Earn, etc.
import Home from './Components/Home';  // Update with correct path if needed
import Earn from './Components/Earn';  // Update with correct path if needed
import Referral from './Components/Referral';  // Update with correct path if needed
import Profile from './Components/Profile';  // Update with correct path if needed
function App() {
    return (
        // No need to wrap with Router here if it's already in your root.
        <div id="__next">
            <div className="Toastify"></div>
            <div className="w-full h-screen flex justify-center">
                <div className="w-full max-w-[1920px] flex bg-white ">
                    <Sidebar />
                    <div className="flex-1 flex flex-col text-black bg-[#F1F1F1] h-screen">
                        <Header />

                        <Routes>
                            {/* Define your routes here */}
                            {/* Example */}
                            <Route path="/" element={<Home />} />
                            <Route path="/earn" element={<Earn />} />
                            <Route path="/referral" element={<Referral />} />
                            <Route path="/profile" element={<Profile />} />
                            {/* Add more routes as needed */}
                        </Routes>
                    </div>
                </div>
                
              <Footer/>
            </div>
           
        </div>
    );
}

export default App;
