import { BrowserRouter as, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './containers/navbar/Navbar';
import PageContainer from './containers/PageContainer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from './pages/Detail';
import Cart from './pages/Cart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <PageContainer>
       <Router>
        <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:id" element={<Detail /> }/>
        <Route path="/cart" element={<Cart /> }/>
        <Route path="/products/:search" element={<Cart /> }/>
       </Routes>
       </Router>
       </PageContainer>
    </div>
  );
}

export default App;
