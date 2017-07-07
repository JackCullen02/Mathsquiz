import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mathsquiz';
  symbols=["+","-"]
  timeleft=120;
  started=false
  scoreboard = [];
  name = "";
  timer;
  questionsList = [];
  questionnumber = 0;
  score=0;
  submitted = false;
 //Restart= reset;
  ngOnInit(){
    console.log("hello world");
    this.generatequestions();
    console.log(this.questionsList);
  }

  generatequestions(){
      this.questionsList = [];

    for(var i=0;i<20;i++){

      var var1 = Math.floor(Math.random()*20) +1
      var sym = this.symbols[Math.floor(Math.random()*this.symbols.length)]
      var var2 = Math.floor(Math.random()*15) +1


      var question = var1 + sym + var2;
      var correctanswer = eval(question)
      this.questionsList.push({question:question,correctanswer:correctanswer,ans:undefined})

    }
    console.log(this.questionsList);


  }

starttimer(){
  var a2 = this;
  clearInterval(this.timer)
  this.started=true;

 this.timer = setInterval(function(){
  console.log(a2)
  a2.timeleft--;
  if(a2.timeleft==0){
    clearInterval(a2.timer)
     alert(`Times up`)

  }
  console.log(a2.timeleft)
},1000)

  }

  calculateScore(){
    this.score = 0;
    for(var i=0;i<this.questionsList.length;i++){
      console.log(this.questionsList[i])
      if(this.questionsList[i].ans === this.questionsList[i].correctanswer.toString()){
        this.score++;
      }
    }
  }


nextQuestion(){
 // console.log(this.ans)
// if(this.ans==this.correctanswer){
  // this.score=this.score+1;
  if(this.questionnumber < 19){
    this.questionnumber++;
  }else{
    clearInterval(this.timer);
    this.calculateScore();
  }
  console.log(this.questionnumber);
// }
console.log(this.score)

}

restart(){
  clearInterval(this.timer);
  this.generatequestions();
this.timeleft=120;
this.score = 0;
this.questionnumber=0;
this.name = "";
this.submitted = false;
}

savescore(){
  this.scoreboard.push({name:this.name,score:this.score})
  this.submitted = true;

}

}
