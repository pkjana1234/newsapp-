
import Navbar from './Components/Navbar';
import Newsitem from './Components/Newsitem';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Searchhere from './pages/Searchhere';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<News/>}/>
          <Route path='/item' element={<Newsitem/>}/>
          <Route path='/search' element={<Searchhere/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
