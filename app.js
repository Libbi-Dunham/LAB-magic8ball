import { answers } from './answers.js';
const getRandomNumber = (max)=>{
    return Math.floor(Math.random() * max);
};

const button = document.getElementById('button');
button.addEventListener('click', () => {
    console.log('clicking the button');
    
    const randomAnswer = getRandomNumber(answers.length);
    console.log(answers[randomAnswer]);
    
    const answer = document.getElementById('answer');
    answer.textContent = answers[randomAnswer];

});
