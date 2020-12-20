import {useEffect, useState} from 'react'
import {useAppContext} from '../state'

import './QuizAnswer.css'

const QuizAnswer = ({name, index, isCorrect}) => {

    const {drawNewQuestions,gameEnded,setGameEnded} = useAppContext()
    const [isClicked, setIsClicked] = useState(false)


    const letters = ['A', 'B', 'C', 'D']

    const clickHandler = () => {        
        setIsClicked(true)
        if(isCorrect) {            
            drawNewQuestions()
        }else{
            setGameEnded(true)            
        }
    }

    


    return (
        <button onClick={clickHandler} className={`quiz_container__answer ${gameEnded && isClicked && 'quiz_container__answer_wrong'} ${gameEnded && isCorrect && 'quiz_container__answer_correct'}`} disabled={gameEnded}>
            <div className='quiz_container__answer_label'>
             {letters[index]}
            </div>
            <div className='quiz_container__answer_description'>
                {name}
            </div>

            <div className='quiz_container__answer_icon'>
                    {gameEnded && isClicked &&
                        <span className="material-icons">                    
                            highlight_off
                        </span>
                    }
                    
                    {gameEnded && isCorrect &&
                        <span className="material-icons">                    
                            check_circle_outline
                        </span>
                    }
                
            </div>
        </button>
    )
}

export default QuizAnswer
