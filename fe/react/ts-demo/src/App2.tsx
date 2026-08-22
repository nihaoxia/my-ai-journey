import * as React from 'react';
import Hello from './components/Hello';
import NameEditComponent from './components/NameEditComponent';
const App: React.FC = () => {
  const [username, setUserName] = React.useState("initialName");
  // const setUsernameState = (event:React.ChangeEvent<HTMLInputElement>) => {
  //   setUserName(event.target.value)
  // }
  return (
    <div>
      <Hello userName={username} />
      {/* <NameEditComponent 
         username={username}
         onChange={setUsernameState}
      /> */}
      <NameEditComponent
        userName={username}
        onUserNameUpdated={setUserName}
      />
    </div>
  )
}

export default App