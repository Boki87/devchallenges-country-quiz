import './App.css';
import QuizContainer from './components/QuizContainer'
import Result from './components/Result'

import {useAppContext} from './state'

function App() {

  const {showResult} = useAppContext()

  return (
    <div className='app'>
      
      {!showResult ? 
      
        <QuizContainer /> :

        <Result />
      }

      <footer>
        Bojan Peric&nbsp;<a href="https://devchallenges.io/">@DevChalenges.io</a>
      </footer>
    </div>
  );
}

export default App;
