import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { logout } from '../../services/auth';
import { userContext } from '../../context/userContext';
import { Separator } from '../ui/separator';
import { TbOlympics } from "react-icons/tb"

const SideBar = () => {

    const { user, dispatchUser } = useContext(userContext);

  return (
    <ul className="bg-indigo-600 text-white sticky sm:h-screen top-0 p-7">
        <li>Welcome, {user.role === 'guest'?'Guest':user.name}!</li>
        <Separator />
        <Link to="/" className="font-bold text-lg"><li>
            <h3>Olympics <TbOlympics className="inline text-3xl" /></h3>
            
        </li></Link>
        <Link to="/sport"><li>Sport</li></Link>
        <Link to="/sportsmen"><li>Sportsmen</li></Link>
        <Link to="/trainings/train-me"><li>Train Me</li></Link>
        <Separator />
        <li><button onClick={()=>logout(dispatchUser)}>Logout</button></li>
    </ul>
  )
}

export default SideBar