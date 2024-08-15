import { getSportsmen } from '../services/getData';
import { useState, useEffect, useContext } from 'react';
import { userContext } from '../context/userContext';

const Sportsmen = ({user}) => {
  const [list,setList] = useState({});
  const { dispatchUser } = useContext(userContext);

  useEffect(() => {

    (async function fillSportsmanList() {

        const data = await getSportsmen(dispatchUser);
        
        setList(data);

    })()

  },[])

  return (
    <div className="container">
        <h1 className="text-indigo-600 font-light text-3xl">Our Olympic Sportsmen</h1>
        <h2 className="text-indigo-600 font-light text-2xl">{user.name}, you're one of them, right?</h2>
        <h3>They're just great people, but some of them also got Olympic medals ...</h3>

        <ul>
            {
                list.length > 0 ? list.map((sportsman,i) => <li key={i}>{sportsman.name}</li>)
                                : <p className="text-indigo-600 font-light text-2xl">Loading ...</p>
            }
        </ul>
    </div>
  )
}

export default Sportsmen