import React from 'react';
import Header from './Header.jsx';
import Usercomponent, { Setting, userkey } from './Usercomponent.jsx';
import { Profile } from './Usercomponent.jsx';
import Fun from './Fun.jsx'
import Counter from './Counter.jsx';
import User from './User.jsx';
function App(){
return (
  <>
 <div>
{/* <Fun/> */}
<Counter/>
<User/>
{/* <Usercomponent/>
<Profile/>
<Setting/> */}

  {/* <Header/> */}
  <h1>App jsx component</h1>

  {/* <h4>{userkey}</h4> */}
 </div>
</>
)

}
export default App;