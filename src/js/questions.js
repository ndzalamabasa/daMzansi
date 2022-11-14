export const questions = {
  0: {
    question: 'Where is the largest hospital in the world located?',
    options: [
      {
        a: 'Kimberly',
        value: false,
      },
      {
        b: 'Soweto',
        value: true,
      },
      {
        c: 'Cape Town',
        value: false,
      },
      {
        d: 'Sandton',
        value: false,
      },
    ],
  },

  1: {
    question: `True or False, Table mountain's high is deeper than Kimberly Hole's Deep`,
    options: [
      {
        a: 'True',
        value: false,
      },
      {
        b: 'False',
        value: true,
      },
    ],
  },

  2: {
    question: 'What are traffic lights called is South Africa',
    options: [
      {
        a: 'Lights',
        value: false,
      },
      {
        b: 'Machines',
        value: false,
      },
      {
        c: 'Stops',
        value: false,
      },
      {
        d: 'none',
        value: true,
      },
    ],
  },
  3: {
    question: 'What was mandels cell number in prision?',
    options: [
      {
        a: 466,
        value: true,
      },
      { b: 67, value: false },
      { c: 27, value: false },
      { d: 'none of the above', value: false },
    ],
  },
  4: {
    question: `South Africa is often referred to as 'what sort of nation' which describes the country's multicultural diversity?`,
    options: [
      {
        a: 'Democracy',
        value: false,
      },
      { b: 'Free Nation', value: false },
      { c: 'Rainbow Nation', value: true },
      { d: 'none of the above', value: false },
    ],
  },
  5: {
    question: `South Africa accounts for 80% of the world's production of which precious metal?
`,
    options: [
      {
        a: 'Gold',
        value: false,
      },
      { b: 'Silver', value: false },
      { c: 'Diamond', value: false },
      { d: 'Platinum', value: true },
    ],
  },
  6: {
    question: `Durban, the busiest port in South Africa, is on which ocean?`,
    options: [
      {
        a: 'Atlantic Ocean',
        value: false,
      },
      { b: 'Indian Ocean', value: true },
      { c: 'Frank Ocean', value: false },
      { d: 'none of the above', value: false },
    ],
  },
  7: {
    question: `When did Zulu people form a powerful state under the Shaka monarch`,
    options: [
      {
        a: '1818',
        value: true,
      },
      { b: '1942', value: false },
      { c: '1961', value: false },
      { d: 'none of the above', value: false },
    ],
  },
  8: {
    question: `Which writer was the first to be awarded the Booker Prize twice?`,
    options: [
      {
        a: 'J.V Riebeck',
        value: false,
      },
      { b: 'N.R Mandela', value: false },
      { c: 'S.Biko', value: false },
      { d: 'J.M Coetzee', value: false },
    ],
  },
  9: {
    question: `When did Zulu people form a powerful state under the Shaka monarch`,
    options: [
      {
        a: '1818',
        value: true,
      },
      { b: '1942', value: false },
      { c: '1961', value: false },
      { d: 'none of the above', value: false },
    ],
  },
  10: {
    question: `The First Boer War was fought from 1880 to 1881 between Britain and the South African Republic; which country was victorious?`,
    options: [
      {
        a: 'British',
        value: false,
      },
      { b: 'The South African', value: true },
    ],
  },
  11: {
    question: `Which rocky headland in Western Cape is the geographic southern tip of Africa?
`,
    options: [
      {
        a: 'Cape Town',
        value: false,
      },
      { b: 'Madagascar', value: false },
      { c: 'Khayelisha', value: false },
      { d: 'Cape Agulhas', value: true },
    ],
  },
  12: {
    question: `The Kruger National Park contains the 'Big 5' of wild animals; which five animals make up this 'Big 5'?`,
    options: [
      {
        a: 'Springboks, leopards, rhinos, elephants and buffalos',
        value: false,
      },
      { b: 'Lions, leopards, rhinos, Springboks and buffalos', value: false },
      { c: 'Tigers, leopards, rhinos, elephants and buffalos', value: false },
      { d: 'Lions, cheetars, rhinos, elephants and buffalos', value: true },
    ],
  },
  13: {
    question: `True or False , South Africa is the only country in the world to have hosted the Football, Rugby and Cricket World Cups?`,
    options: [
      {
        a: 'True',
        value: true,
      },
      { b: 'False', value: false },
    ],
  },
  14: {
    question: `Which South African won the Nobel Peace Prize in 1984?`,
    options: [
      {
        a: 'Whoopie Goldberg',
        value: false,
      },
      { b: 'Desmond Tutu', value: true },
      { c: 'Nelson Mandela', value: false },
      { d: 'Steve Biko', value: false },
    ],
  },
  15: {
    question: `Who was the leader of South Africa from 1978 to 1989?`,
    options: [
      {
        a: 'W F deKlerk',
        value: false,
      },
      { b: 'Jan Van Portgier', value: false },
      { c: 'P W Borter', value: true },
      { d: 'P J Powers', value: false },
    ],
  },
  16: {
    question: `South African black population is divided into four major ethnic groups; Name Them`,
    options: [
      {
        a: 'Nguni,Sotho,Shangaan-Tsonga,Venda',
        value: true,
      },
      { b: 'Nguni, Tswana,Xhosa,Shangaan-Pedi', value: false },
      { c: 'Nguni,Sotho, Shangaan-Venda, Tsonga', value: false },
      { d: 'none of the above', value: false },
    ],
  },
}

export function questionReceiver(questionForUser) {
  let correctAnswer = ''
  const optionsArray = []
  questionForUser.options.forEach((option) => {
    let optionIndex = Object.keys(option)[0]
    optionsArray.push(option[optionIndex[0]])
    if (option.value === true) {
      correctAnswer = option
    }
  })
  const steps = Math.floor(1 + Math.random() * 9)
  const result = {
    question: questionForUser.question,
    options: optionsArray,
    correctAnswer: correctAnswer[Object.keys(correctAnswer)[0]],
    steps: steps,
  }
  return result
}
console.log(questionReceiver(questions[0]))
