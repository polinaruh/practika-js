// №30
//1
// let el1 = document.querySelector('#el1');
// el1.addEventListener('keyup', function(event) {
//     if (event.key === 'Enter') {
//         let value1 = el1.value;
//         if (value1 == el1.dataset.right) {
//             el1.classList.add('right');
//         } else {
//             el1.classList.add('wrong');
//         }
//     }
// });

// let el2 = document.querySelector('#el2');
// el2.addEventListener('keyup', function(event) {
//     if (event.key === 'Enter') {
//         let value2 = el2.value;
//         if (value2 == el2.dataset.right) {
//             el2.classList.add('right');
//         } else {
//             el2.classList.add('wrong');
//         }
//     }
// });

// let el3 = document.querySelector('#el3');
// el3.addEventListener('keyup', function(event) {
//     if (event.key === 'Enter') {
//         let value3 = el3.value;
//         if (value3 == el3.dataset.right) {
//             el3.classList.add('right');
//         } else {
//             el3.classList.add('wrong');
//         }
//     }
// });

//2
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function(){
//     let v1 = el1.value;
//     if (v1 == '1'){
//         el1.classList.add('right');
//     } else {
//         el1.classList.add('wrong');
//     }

//     let v2 = el2.value;
//     if (v2 == '2'){
//         el2.classList.add('right');
//     } else {
//         el2.classList.add('wrong');
//     }

//     let v3 = el3.value;
//     if (v3 == '3'){
//         el3.classList.add('right');
//     } else {
//         el3.classList.add('wrong');
//     }
// })


// №31
// let answers = [
//     'ответ 1',
//     'ответ 2',
//     'ответ 3',
// ];

// let button = document.querySelector('#button')
// let inputs = document.querySelectorAll('input')

// button.addEventListener('click', e => {
//     for (let i = 0; i < answers.length; i++) {
//         if (inputs[i].value === answers[i]) {
//             inputs[i].classList.remove('wrong')
//             inputs[i].classList.add('right')
//         } else {
//             inputs[i].classList.remove('right')
//             inputs[i].classList.add('wrong')
//         }
//     }
// });

// №32
// let button = document.querySelector('#button')

// let answers = [
//     'ответ 1',
//     'ответ 2',
//     'ответ 3',
// ];

// let questions = [
// 	'вопрос 1?',
// 	'вопрос 2?',
// 	'вопрос 3?'
// ];

// for (const question of questions) {
//     let div = document.createElement('div')

//     let p = document.createElement('p')
//     p.textContent = question

//     let input = document.createElement('input')

//     div.appendChild(p)
//     div.appendChild(input)
//     document.querySelector('#test').insertBefore(div, button)
// }

// let inputs = document.querySelectorAll('input')
// button.addEventListener('click', e => {
//     for (let i = 0; i < answers.length; i++) {
//         if (inputs[i].value === answers[i]) {
//             inputs[i].classList.remove('wrong')
//             inputs[i].classList.add('right')
//         } else {
//             inputs[i].classList.remove('right')
//             inputs[i].classList.add('wrong')
//         }
//     }
// });

// №33
// let button = document.querySelector('#button')

// let questions = [
// 	{
// 		text:  'вопрос 1?',
// 		right: 'ответ 1',
// 	},
// 	{
// 		text:  'вопрос 2?',
// 		right: 'ответ 2',
// 	},
// 	{
// 		text:  'вопрос 3?',
// 		right: 'ответ 3',
// 	},
// ];

// for (const object of questions) {
//     let div = document.createElement('div')

//     let p = document.createElement('p')
//     p.textContent = object['text']

//     let input = document.createElement('input')

//     div.appendChild(p)
//     div.appendChild(input)
//     document.querySelector('#test').insertBefore(div, button)
// }

// let inputs = document.querySelectorAll('input')
// button.addEventListener('click', e => {
//     let counter = 0
//     for (const object of questions) {
//         if (object['right'] === inputs[counter].value) {
//             inputs[counter].classList.remove('wrong')
//             inputs[counter].classList.add('right')
//         } else {
//             inputs[counter].classList.remove('right')
//             inputs[counter].classList.add('wrong')
//         }

//         counter++
//     }
// });

// №34
// let button = document.querySelector('#button')

// let questions = document.querySelectorAll('#test > div')

// button.addEventListener('click', e => {
//     questions.forEach(question => {
//         let answers = question.querySelectorAll('input')

//         let hasCorrectAnswer = false
//         answers.forEach(answer => {
//             if (answer.dataset.right === '' && answer.checked) {
//                 hasCorrectAnswer = true
//             }
//         })

//         if (hasCorrectAnswer) {
//             question.querySelector('p').classList.add('right')
//             question.querySelector('p').classList.remove('wrong')
//         } else {
//             question.querySelector('p').classList.remove('right')
//             question.querySelector('p').classList.add('wrong')
//         }
//     });
// })

// №35
// let correctAnswers = [0, 1, 2];

// let button = document.querySelector('#button')

// let questions = document.querySelectorAll('#test > div')

// button.addEventListener('click', e => {
//     questions.forEach((question, index) => {
//         let answers = question.querySelectorAll('input')

//         const correct = correctAnswers[index]
//         let hasCorrectAnswer = false

//         answers.forEach((answer, index) => {
//             if (index === correct && answer.checked) {
//                 hasCorrectAnswer = true
//             }
//         });

//         if (hasCorrectAnswer) {
//             question.querySelector('p').classList.add('right')
//             question.querySelector('p').classList.remove('wrong')
//         } else {
//             question.querySelector('p').classList.remove('right')
//             question.querySelector('p').classList.add('wrong')
//         }
//     });
// })

// №36
let questions = [
	{
		text: 'вопрос 1?',
		right: 0,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 2?',
		right: 1,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 3?',
		right: 2,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
];

let test_body = document.querySelector('#test')
let button = document.querySelector('#button')

let counter = 1
for (const question of questions) {
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.textContent = question['text']
    div.appendChild(p)

    for (const variant of question['variants']) {
        let label = document.createElement('label')
        
        let input = document.createElement('input')
        input.type = 'radio'
        input.name = counter

        let span = document.createElement('span')
        span.textContent = variant

        
        label.appendChild(input)
        label.appendChild(span)

        
        div.appendChild(label)

        
    }
    counter++
    
    test_body.appendChild(div)
}


let allQuestions = document.querySelectorAll('#test > div')

button.addEventListener('click', e => {
    allQuestions.forEach((question, index) => {

        let answers = question.querySelectorAll('input')

        const correct = questions[index].right

        let hasCorrectAnswer = false

        answers.forEach((answer, index) => {
            if (index === correct && answer.checked) {
                hasCorrectAnswer = true
            }
        });

        if (hasCorrectAnswer) {
            question.querySelector('p').classList.add('right')
            question.querySelector('p').classList.remove('wrong')
        } else {
            question.querySelector('p').classList.remove('right')
            question.querySelector('p').classList.add('wrong')
        }
    });
})