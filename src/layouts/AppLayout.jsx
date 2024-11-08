import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';

const AppLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default AppLayout