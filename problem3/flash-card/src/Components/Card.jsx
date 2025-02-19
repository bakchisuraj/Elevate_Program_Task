import React from 'react'

const Card = () => {
    let count=1
    const flashcards = [
        {
          id: 1,
          question: "What is the capital of France?",
          answer: "Paris",
        },
        {
          id: 2,
          question: "What is 5 + 7?",
          answer: "12",
        },
        {
          id: 3,
          question: "Who wrote 'To Kill a Mockingbird'?",
          answer: "Harper Lee",
        },
        {
          id: 4,
          question: "What is the chemical symbol for water?",
          answer: "H2O",
        },
        {
          id: 5,
          question: "What is the speed of light in a vacuum?",
          answer: "299,792,458 meters per second",
        }
      ];

      function handleclick(){

      }
      
      
  return (
    <>
    <div style={{margin:"auto"}}>
    <div >
        {
            flashcards.map((ele,i)=>(
                <h1 key={ele.i}>
                    <h1>{ele.question}</h1>
                    <input type="text" placeholder='guess your answer' value="guessanswer"/>
                    
                    <button onClick={handleclick}>answer</button>
                </h1>
            ))
            // if(guessanswer=={ele.answer}){
            //     alert("correct answer")
            // }
            // else{
            //     alert("try again")
            // }
        }
    </div>

    </div>
    
    
    </>
  )
}

export default Card