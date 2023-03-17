let result = 0;
let resultAll = 0;

if (prompt ('Сколько будет 2+2?', "") == '4') {
  result += 10;
} else {
  resultAll = "Not correct";
  alert (resultAll);
}
  if (confirm ('Солнце встает на востоке?')) {
    result += 10;
  } else {
    resultAll = "Not correct";
    alert (resultAll);
  }
  if (prompt ('Сколько будет 5 / 0?', "0") == false) {
    result += 10;
  } else {
    resultAll = "Not correct"
    alert (resultAll);
  } 
  if (prompt ('Какого цвета небо?', '') == 'Синее') {
    result += 10;
  } else {
    resultAll = "You are not right";
    alert (resultAll);
  } 
  if (prompt('Какой правильный ответ на главный вопрос жизни, вселенной и всего такого', "") == "42") {
    result += 10;
  } else {
    resultAll = "Not correct";
    alert (resultAll);

  }
  alert ('Ваша оценка: ' + `${result}`);
  console.log(result);
  console.log(resultAll);



// let answer1 = "4";
// let answer2 = "Да";
// let answer3 = "false";
// let answer4 = "Синее";
// let answer5 = "42";

// let ans1 = prompt('Сколько будет 2+2?', "");
// let ans2 = prompt('Солнце встает на востоке?', "");
// // let ans3 = prompt('Сколько будет 5 / 0?', "");
// // let ans4 = prompt('Какого цвета небо?', "");
// // let ans5 = prompt('Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.', "");

// let points = 0;

// if (ans1) {
//   console.log(ans1);
//   if (ans1 == answer1) {
//     alert('4');
//   } else {
//     alert("Not correct");
//   }
// }
//   if(ans2) {
//     console.log(ans2);
//     if (ans2 == answer2) {
//       alert("Да");
//     } else {
//       alert ("Not correct");
//     }
//   }



// let = +prompt('Сколько будет 2+2?', ""),
//     +prompt('Солнце встает на востоке?', ""),
//     +prompt('Сколько будет 5 / 0?' , "" ),
//     +prompt('Какого цвета небо?', ""),
//     +prompt('Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.', "");
// let points = 0;


// let q = 0;
// while (q < questions.length) {
// if () {
// points += 10;
// q++;
// } else {
//   alert('Ответ неверный! Попробуйте еще раз!');
//   }
// }
 
 
// alert(`Ваш результат ${points} баллов!`);