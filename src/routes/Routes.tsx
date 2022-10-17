import { Routes, Route } from 'react-router-dom'
import { LayoutContainer } from '../components/header/LayoutContainer';

import { Post } from '../pages/Post/Post';
import { Home } from '../pages/Home/Home';


export function Router(){
  return (
    <Routes>
      <Route path='/' element={<LayoutContainer />}>
          <Route path='/' element={<Home />}/>
          <Route path='/post/:id' element={<Post />}/>
      </Route>
    </Routes>
  );
}