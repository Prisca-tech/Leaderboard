/* eslint-disable */
export let scores = [];
/* eslint-enable */

const notice = document.querySelector('.notification');

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

export const postGame = async (value) => {
  await fetch(`${baseUrl}/games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(value),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      throw error;
    });
};

export const postScore = async (value) => {
  await fetch(`${baseUrl}/games/w10xKEqRwCtrOcgLYzZu/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(value),
  })
    .then((response) => response.json())
    .then((data) => {
      const sorted = data?.result === 'Leaderboard score created correctly.' && notice.classList.remove('hide');
      setTimeout(() => {
        notice.classList.add('hide');
      }, 3000);

      return sorted;
    })
    .catch((error) => {
      throw error;
    });
};

export const getScore = async () => {
  await fetch(`${baseUrl}/games/w10xKEqRwCtrOcgLYzZu/scores/`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.result.sort((a, b) => b.score - a.score).length; i += 1) {
        scores = data.result;
      }
    })
    .catch((error) => {
      throw error;
    });
};
