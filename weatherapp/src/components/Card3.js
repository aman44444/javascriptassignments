import React from 'react'
import { Link ,Outlet} from 'react-router-dom';

const Card3 = () => {
  return (
    
    <>
        <div>Helooo!! there . i am card3</div>

       <nav>
       <Link to='nestedcard1'>NESTEDTED CARD1</Link>
       <Link to='nestedcard2'>NESTEDTED CARD2</Link>
       </nav>
       <Outlet/>
    </>
    
  )
}

export default Card3