import './App.css';
import Docs from './Docs/Docs';
import Main from './Main/Main';
import TopNav from './TopNav/TopNav';
import Formm from './Form/Form';
import { useState } from 'react';

function App() {

  const [toggle, setToggle] = useState(false);

  const showModal = ()=>{
    setToggle(true);
  };

  const hideModal = ()=> setToggle(false);

  const modalToggler = ()=>{
    setToggle(toggle=> !toggle)
  };

  const stop_propagate = e=> e.stopPropagation();

  return (
    <div className="App">
      <TopNav />

      <section style={{
        display:'flex'
      }}>
        <Main />

        <article className='aaabbb'>
          <Docs showModal={showModal} modalToggler={modalToggler}/>
        </article>
      </section>
      
      { toggle ? <Formm stop_propagate={stop_propagate} hideModal={hideModal} /> : null }

    </div>
  );
};

export default App;