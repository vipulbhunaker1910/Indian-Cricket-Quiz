import readlineSync from 'readline-sync';
import chalk from 'chalk';
var uname=readlineSync.question(chalk.blue("Hi!, What's your name? "));
console.log(chalk.green('\nHi ')+chalk.blue(uname)+chalk.green(" let's see well you know about Indian Cricket\n"));
var score=0;
console.log(chalk.bgMagentaBright("Rules\n"));
console.log(chalk.red(' Quiz contains only Choose the Correct Option type questions.\n For the first 4 questions if you answer Correctly you will be rewarded with 1 Point \n For the next two questions you will score 3 points. \n For the remaining questios you will score 5 points 😎.\n -1 for wrong answer 😬.\n'));
var uname=readlineSync.question(chalk.blueBright("Lets start!! Press Enter to continue 🏏"));
console.log("\n");
function vipgame(question,answer,no){
  var user_answer=readlineSync.question(question);
  if(user_answer===answer){
    console.log(chalk.blueBright("\nYayyy! it's right\n"));
    if(no==0 || no==1 || no==2 || no==3)
    {
    score=score+1;
    }
    else if( no==4 || no==5){
      score=score+3;
    }
    else{
    score=score+5;
    }
  }
  else{
    console.log(chalk.red("\nOh no!, it's wrong\n"));
    score=score-1;
  }
}

var questions=[
 {
    question_new: chalk.greenBright('1. How many times does Sachin Tendulkar Participated in World Cup \n a. 5 \n b. 3 \n c. 6 \n d. 2 \n'),
    answer: 'c',
  },
{
  question_new:chalk.yellowBright("2. Who is the First Indian Cricketer to take Test Hattrick \n a. Harbhajan Singh \n b. Irrfan Phatan \n c. Jasprith Bumrah \n d. Kapil Dev \n "),
    answer:"a",
},
  {
    question_new: chalk.greenBright("3. Who is the bowler when Yuvi scored six 6ers in an over \n a. Jimmy Andreson \n b. Stuart Broad \n c. Andrew Flintoff \n d. Pat Cummins \n"),
      answer:"b",
  },
{
  question_new:chalk.yellowBright( "4. Who was the opponent when Sachin Tendulkar Deubted? \n a. Pakistan \n b. Australia \n c. West Indies \n d. England \n "),
  answer:"a",
},
  {
    question_new: chalk.greenBright("5. Who was the first Test Cricketer to have played for both England and India? \n a. Mansur Ali Khan Pataudi \n b. Saif Ali Khan Pataudi \n c. Taimur Ali Khan Pataudi \n d. Iftikhar Ali Khan Pataudi \n "),
    answer:"d",
  },
   {
    question_new: chalk.yellowBright("6. Who was the first captain of Indian Test team? \n a. C K Nayudu \n b. Iftikhar Ali Khan Pataudi \n c. M.S Dhoni \n d. MSK Prasad \n "),
    answer:"a",
  },
  {
    question_new: chalk.greenBright("7. Who is the batsman to play in all batting positions ? \n a. C K Nayudu \n b. Ravi Shastri \n c. Ravi Ashwin \n d. Kapil Dev \n "),
    answer:"b",
  },
   {
    question_new: chalk.yellowBright("8. What is the name of the trophy awarded in India-Australia test series? \n a. Gandhi - Mandela Trophy \n b. Ashes Trophy \n c. Border - Gavaskar Trophy \n d. Nidhas Trophy \n "),
    answer:"c",
  },
  {
    question_new: chalk.greenBright("9. Who was the first indian cricketer to blast six sixes in an Over \n a. Yuvraj Singh \n b. Ravi Shastry \n c. Shivam Dube \n d. M.S Dhoni \n "),
    answer:"b",
  },
  {
    question_new: chalk.yellowBright("10. How many Centuries does Virat Kohli scored? \n a. 20 \n b.70 \n c. 75 \n d. 99 \n "),
    answer:"b",
  },
  
  
]
var high_scores=[
  {
    name:"Vipul",
    score:30,
  },
  {
     name:"Akanksha",
    score:14,
  }
]
for(var i=0;i<questions.length;i++){
  vipgame(questions[i].question_new,questions[i].answer,i);
}
if(score>=15){
console.log(chalk.magentaBright("Yayyy! your score is : ")+chalk.greenBright(score)+chalk.magentaBright(" :)"));
}
else{
  console.log(chalk.magentaBright("your score is : ")+chalk.red(score)+chalk.magentaBright(" :("))
}
console.log("Kindly DM me your score so that i can add you in the high score list \n")
console.log("Check out the high scores");

  high_scores.map(score => console.log(score.name, " : ", score.score))