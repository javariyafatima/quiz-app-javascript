 let quizquestions = [
    {
   question:"what isdfjf ",
    opt1: "hyper markup lang",
    opt2:"hjk",
   opt3:"pyton",
    opt4:"css",
    corroct:"opt4"
},
{
    question:"what is html ",
     opt1: "hyper markup lang",
     opt2:"hjk",
    opt3:"pyton",
     opt4:"css",
     corroct:"opt4"
 },
 {
    question:"what isdfjf ",
     opt1: "hyper markup lang",
     opt2:"hjk",
    opt3:"pyton",
     opt4:"css",
     corroct:"opt4"
 },
 {
    question:"what isdfjf ",
     opt1: "hyper markup lang",
     opt2:"hjk",
    opt3:"pyton",
     opt4:"css",
     corroct:"opt4"
 },
 {
    question:"what isdfjf ",
     opt1: "hyper markup lang",
     opt2:"hjk",
    opt3:"pyton",
     opt4:"css",
     corroct:"opt4"
 },
 {
    question:"what isdfjf ",
     opt1: "hyper markup lang",
     opt2:"hjk",
    opt3:"pyton",
     opt4:"css",
     corroct:"opt4"
 },
 {
     question:"what is html ",
      opt1: "hyper markup lang",
      opt2:"hjk",
     opt3:"pyton",
      opt4:"css",
      corroct:"opt4"
  },
  {
     question:"what isdfjf ",
      opt1: "hyper markup lang",
      opt2:"hjk",
     opt3:"pyton",
      opt4:"css",
      corroct:"opt4"
  },
  {
     question:"what isdfjf ",
      opt1: "hyper markup lang",
      opt2:"hjk",
     opt3:"pyton",
      opt4:"css",
      corroct:"opt4"
  },
  {
     question:"what isdfjf ",
      opt1: "hyper markup lang",
      opt2:"hjk",
     opt3:"pyton",
      opt4:"css",
      corroct:"opt4"
  },
 
 



]



let questionno=document.getElementById("questionno");
let questiontext = document.getElementById("questiontext");
let option1  =document.getElementById("option1");
let option2  =document.getElementById("option2");
let option3  =document.getElementById("option3");
let option4  =document.getElementById("option4");
let button = document.getElementById("button");

let timein = document.getElementById("timer");
let currentquestionno = 0;
let score =0;



let time;
let totaltime = 20;
let sec = totaltime;
function timer(){
    timein.innerHTML = sec;
    sec--;
    if(sec==0){
sec = totaltime;
clearInterval(time);
currentquestionno++;
showquestion();
    }
}

function showquestion(){

    sec = totaltime;
    clearInterval(time);
    timer();
    time = setInterval(timer,1000);


    if(currentquestionno>=quizquestions.length){
        currentquestionno=0;
        localStorage.setItem("score",score);
        location.href="./result.html"
                }
    document.querySelectorAll('input[name = option]').forEach (option=> option.checked=false)
    questionno.innerHTML =(currentquestionno+1) + ".";
    questiontext.innerHTML = quizquestions[currentquestionno].question;
    option1.innerHTML = quizquestions[currentquestionno].opt1;
    option2.innerHTML = quizquestions[currentquestionno].opt2;
    option3.innerHTML = quizquestions[currentquestionno].opt3;
    option4.innerHTML = quizquestions[currentquestionno].opt4;
}
showquestion();


button.addEventListener('click',()=>{
    let optionselect = document.querySelector('input[name = option]:checked');
    if(optionselect ==null){
        swal("Please select one option!");


    }
    else{
        let currectoption = quizquestions[currentquestionno].corroct
        if(optionselect.id == currectoption){
            score ++;
        }
        currentquestionno ++;

        if(currentquestionno>=quizquestions.length){
currentquestionno=0;
localStorage.setItem("score",score);
location.href="./result.html"
        }
        else{
            showquestion();
        }
    }

});

let quizquestion = [];
let URL = "question.json"
async function getdata(){
    let response = await fetch("URL");
    let  data = await response.json();
    quizquestion= data;
    
    showquestion();
    
}
getdata();

