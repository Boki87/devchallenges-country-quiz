
import ResultImg from '../assets/undraw_winners.svg'

import {useAppContext} from '../state'

import './Result.css'

const Result = () => {

    const {numberOfCorrectAnswers, resetGame} = useAppContext()

    return (
        <div className='quiz_result'>
             <div className='quiz_result__header'>
                <h1>COUNTRY QUIZ</h1>                
            </div>

            <div className='quiz_result__div'>

                    <img src={ResultImg} alt=""/>

            </div>
            <div className='quiz_result__div'>

                    <h1>Results</h1>
                    <p>You got <span className='score'>{numberOfCorrectAnswers}</span> correct answers</p>
            </div>
            <div className='quiz_result__div' style={{height:'100px'}}>

                <button onClick={resetGame} className='quiz_result__btn'>Try again</button>
            </div>

        </div>
    )
}

export default Result
