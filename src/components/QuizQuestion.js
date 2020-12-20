import {useEffect, useState} from 'react'
import {useAppContext} from '../state'
import {getRandomNum} from '../utility'

import './QuizQuestion.css'

const QuizQuestion = () => {

    const {correctAnswer} = useAppContext()

    const [questionType, setQuestionType] = useState('capital')

    useEffect(() => {

        const options = [
            'capital',
            'flag'
        ]

        var randomNum = getRandomNum(2)

        setQuestionType(options[randomNum])
        console.log(options[randomNum]);

    },[correctAnswer])


    return (
        <>
        {questionType == 'capital' ? 
            <div className='quiz_container__question'>
            {correctAnswer && correctAnswer.capital} is the capital of
            </div> :
            <div className='quiz_container__question'>
                <img className='flag' src={correctAnswer.flag} alt=""/>
                <span>Which country does this flag belong to?</span>
            </div>
        }
        </>
    )
}

export default QuizQuestion
