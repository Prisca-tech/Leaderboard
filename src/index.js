import './styles/style.css';

import { postGame, postScore, getScore, scores } from '../modules/utils';

const userInput = document.querySelector('.nameInput')
const scoreInput = document.querySelector('.scoreInput')
const form = document.querySelector('form')
const submitButton = document.querySelector('.submitButton')
const refreshButton = document.querySelector('.refreshButton')
const apiData = document.querySelector('.table')

// postGame({name: 'Call of Duty'})

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    postScore({user: userInput?.value, score: scoreInput?.value })
    form.reset();
})

const populateData = () => {
    for (let i=0; i < scores.length; i++) {
        const item = scores[i]
        apiData.innerHTML += `
        <tr>
        <th>${item?.user}</th>
        <td>${item?.score}</td>
        </tr> 
        `;
    }
}

refreshButton.addEventListener('click', () => {
    getScore()
   scores?.length &&  populateData()
}
)