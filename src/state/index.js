import {createContext, useContext, useState, useEffect} from 'react'
import {getRandomNum, getRandomNumbers, shuffleArray} from '../utility'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const StateProvider = ({children}) => {

    const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0)
    const [fullData, setFullData] = useState([])
    const [correctAnswers, setCorrectAnswers] = useState([])
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const [gameEnded, setGameEnded] = useState(false)
    const [showResult, setShowResult] = useState(false)


    const [questions, setQuestions] = useState([])

    


    function drawNewQuestions() {            

            if(correctAnswers.length > 0) {
                setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1)
            }

            const maxNum = fullData.length - 1
            let correctAnswerIndex = getRandomNum(maxNum)
            
            const corrAnswer = fullData[correctAnswerIndex]
            corrAnswer.isCorrect = true

            setCorrectAnswer(corrAnswer)

            if(!correctAnswers.includes(correctAnswerIndex)) {
                const correctAnswersCopy = [...correctAnswers]
                correctAnswersCopy.push(correctAnswerIndex)
                setCorrectAnswers(correctAnswersCopy)                
            }


            const wrongAnswers = getRandomNumbers(3,correctAnswers,  maxNum).map(i => {
                fullData[i].isCorrect = false
                return fullData[i]
            })

            let questionsArray = shuffleArray([corrAnswer, ...wrongAnswers])

            setQuestions(questionsArray)
    }


    const resetGame = () => {
        setCorrectAnswers([])
        drawNewQuestions()
        
        
        setNumberOfCorrectAnswers(0)
        
        setShowResult(false)
        setGameEnded(false)
        
    }

    useEffect(() => {

        async function getData() {
            try {
                const req = await fetch(`https://restcountries.eu/rest/v2/all?fields=name;capital;flag`)
                const res = await req.json()                
                setFullData(res)
            }catch(err) {
                console.log(err);
            }   
        }
        getData()
    }, [])

    useEffect(() => {        
        if(fullData.length > 0) {            
            drawNewQuestions()
        }
    }, [fullData])


    return (
        <AppContext.Provider
        value={{
            numberOfCorrectAnswers,                        
            questions,
            correctAnswer,
            drawNewQuestions,
            gameEnded,
            setGameEnded,
            showResult,
            setShowResult,
            resetGame
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default StateProvider
