import {FC} from 'react';
import {NavBar} from '@components/app/NavBar';


const Home:FC = () => {
  return (
    <>
      <NavBar currentPage='home'/>
      <p>Please navigate to the Search page</p>
    </>
  )
}

export default Home


