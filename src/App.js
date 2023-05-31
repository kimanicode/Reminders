import Reminder from "./pages/Reminder";
import Header from "./components/Header";
import {BrowserRouter as  Router, Routes ,Route ,Link } from 'react-router-dom';

function App() {
  return (
   < Router>
        <div className="bg-slate-200 w-full h-screen content-center pt-20 flex flex-col items-center">


          <Header />          
          <Reminder />

          
        </div>
   </Router>
  );
}

export default App;
