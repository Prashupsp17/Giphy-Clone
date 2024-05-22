
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Search from './pages/Search';
import GifPage from './pages/GifPage';
import Favorites from './pages/Favorites';
import AppLayout from './layout/AppLayout';
import GifProvider from './context/GifContext';

const router = createBrowserRouter([
  {
element:<AppLayout />,
children:[
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/:category",
    element:<Categories />
  },
  {
    path:"/search/:query",
    element:<Search />
  },
  {
    path:"/:type/:slug",
    element:<GifPage />
  },
  {
    path:"/favorites",
    element:<Favorites />
  }
]
  }
]) 
function App() {
  
  return(
    <GifProvider>
<RouterProvider router={router}/>
</GifProvider>
  ) 
}

export default App;
