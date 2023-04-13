import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// page components
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import Navbar from './components/Navbar';
import Practice from "./components/Practice"
import Avatar from './components/Avatar';
import About from './pages/About/About';
import Login from './pages/login/Login';
import PR from './components/PR';
import ItemDetail from "./pages/ItemDetail/ItemDetail"
import ItemDetail2 from './pages/ItemDetail/ItemDetail2';
function App() {
  const profile = {
    name: "Arshia",
    edu: "CS"
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<PR Component={Home} />} />
          <Route exact path="/about" element={<PR Component={About} />} />
          <Route exact path="/itemDetail/:id" element={<PR Component={ItemDetail} />} />
          <Route path="/itemDetail2/:id" element={<ItemDetail2 />} />
          <Route path="/login" element={<Login />} />


        </Routes>
      </BrowserRouter>
      {/* <Avatar data={profile.name} /> */}
      {/* <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/search" element={<Search />} />

        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
