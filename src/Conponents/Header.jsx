
import { useContext } from "react";
import reactLogo from "../assets/react.svg"
// import appCoontext from "../Context/AppContrext"
import { appContext } from "../App";
function Header() {

  // const {data} = useContext(appCoontext)

    return (
      <header className='app-header'>
        <img src={reactLogo} alt='React logo' />
        <h1>The React Quiz</h1>
      </header>
    );
  }
  
  export default Header;
  
  