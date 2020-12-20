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

    </div>
  );
}

export default App;
