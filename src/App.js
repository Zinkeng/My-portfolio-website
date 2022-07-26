 import Home from './Home';
import Header from './header/header';



function App() {
  return (
    <div className="App">
      <div className='Container'>
        <div className='row'>
          <Header/>
        </div>
        <div className='row'>
            <Home/>
        </div>
      
      </div>
    </div>
  );
} 

export default App;
