document.getElementById("prev").disabled = true;
document.getElementById("next").disabled = true;
var playerchoicebin = [" "," "," "," "," "," "," "," "," "," "];
const qanswerbin = ["c","d","b","d","a","d","a","a","b","d"];
const questbank = ["What is the Name of This quiz?", "What is the Name of This Course","What is the abbervation for Golem, Witch, Wizard Stratgey from COC?","Which character can beat Satrou Gojo from JJK?",
                 "Which of these are not Death Painting Wombs?", "Which of these Shikigami are not from the Ten Shadows Technique?", "Would You Lose?","Which of these are not Complete Domain Expansion?",
                 "Which of these are not a Cursed Womb?", "Which of these are not a inherited technique?"];

var answerbin = [false,false,false,false,false,false,false,false,false,false];
var namebin   = [" "," "," "," "," "," "," "," "," "," "];
var anser1bin = ["Math Quiz","CMPT 272","GWW","Jogo","Jogo","Eight-Handled Sword Divergent Sila Divine General Mahoraga ", "Nah, I'd Win","Chimera Shadow Garden","Dagon","Projection Sorcery"];
var anser2bin = ["Quiz","CMPT 296","GoWiWi","Suguru Geto","Choso","Piercing Ox","No way","Coffin of the Iron Mountain","Kechizu","Blood Manipulation"];
var anser3bin = ["Interactive Quiz","CMPT 275","Golem, Witch, Wizard","Yuta Okkotsu","Eso","Toad","Probably","Horizon of the Captivating Skandha","Naoya Zennin","Limitless"];
var anser4bin = ["Don't know","CMPT 276","There isn't one","Ryomen Sukuna","Kechizu","Ultimate Chimera","Yes","Idle Death Gamble","Finger Bearer","Star Rage"];
var correctbin = [true,true,true,true,true,true,true,true,true,true];
var a = 0;
var answered = false;
var choice1 = document.getElementById("a").innerHTML;
var score = 0;
var cur = 0;
var done = true;


question1 = {
    question: "What is the Name of This quiz?",
    correct: "c",
    answer1: "Math Quiz",
    answer2: "Quiz",
    answer3: "Interactive Quiz",
    answer4: "Don't know",
    answered: false
};

question2 = {
    question: "What is the Name of This Course",
    correct: "d",
    answer1: "CMPT 272",
    answer2: "CMPT 296",
    answer3: "CMPT 275",
    answer4: "CMPT 276",
    answered: false
};

question3 = {
    question: "What is the abbervation for Golem, Witch, Wizard Stratgey from COC?",
    correct: "b",
    answer1: "GWW",
    answer2: "GoWiWi",
    answer3: "Golem, Witch, Wizard",
    answer4: "There isn't one",
    answered: false
};

question4 = {
    question: "Which character can beat Satrou Gojo from JJK?",
    correct: "d",
    answer1: "Jogo",
    answer2: "Suguru Geto",
    answer3: "Yuta Okkotsu",
    answer4: "Ryomen Sukuna",
    answered: false
};

question5 = {
    question: "Which of these are not Death Painting Wombs?",
    correct: "a",
    answer1: "Jogo",
    answer2: "Choso",
    answer3: "Eso",
    answer4: "Kechizu",
    answered: false
};

question6 = {
    question: "Which of these Shikigami are not from the Ten Shadows Technique?",
    correct: "d",
    answer1: "Eight-Handled Sword Divergent Sila Divine General Mahoraga ",
    answer2: "Piercing Ox",
    answer3: "Toad",
    answer4: "Ultimate Chimera",
    answered: false
};

question7 = {
    question: "Would You Lose?",
    correct: "a",
    answer1: "Nah, I'd Win",
    answer2: "No way",
    answer3: "Probably",
    answer4: "Yes",
    answered: false
};

question8 = {
    question: "Which of these are not Complete Domain Expansion?",
    correct: "a",
    answer1: "Chimera Shadow Garden",
    answer2: "Coffin of the Iron Mountain",
    answer3: "Horizon of the Captivating Skandha",
    answer4: "Idle Death Gamble",
    answered: false
};

question9 = {
    question: "Which of these are not a Cursed Womb?",
    correct: "b",
    answer1: "Dagon",
    answer2: "Kechizu",
    answer3: "Naoya Zennin",
    answer4: "Finger Bearer",
    answered: false
};

question10 = {
    question: "Which of these are not a inherited technique?",
    correct: "d",
    answer1: "Projection Sorcery",
    answer2: "Blood Manipulation",
    answer3: "Limitless",
    answer4: "Star Rage",
    answered: false
};

var questbin = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10];
document.getElementById("99").innerHTML = question1.question;
document.getElementById("a").innerHTML = questbin[0].answer1;
document.getElementById("b").innerHTML = questbin[0].answer2;
document.getElementById("c").innerHTML = questbin[0].answer3;
document.getElementById("d").innerHTML = questbin[0].answer4;
var choice;
var button;

function answering(choice, answered){
    if(answered == true){
        return;
    }
    if(qanswerbin[a] == choice){
        document.getElementById(qanswerbin[a]).style.backgroundColor = "#90EE90";
        score++;
        correctbin[a] = true;
    }
    else{
        document.getElementById(choice).style.backgroundColor = "#FFCCCB";
        document.getElementById(qanswerbin[a]).style.backgroundColor = "#90EE90";
        correctbin[a] = false;
    }
    answerbin[a] = true;
    document.getElementById("next").disabled = false;
    playerchoicebin[a] = choice;
    if(choice == "a"){
        namebin[a] = anser1bin[a];
    }
    else if(choice == "b"){
        namebin[a] = anser2bin[a];
    }
    else if(choice == "c"){
        namebin[a] = anser3bin[a];
    }
    else if(choice == "d"){
        namebin[a] = anser4bin[a];
    }
}

function clickbutton(button){
    if(done == true){
        document.getElementById("next").disabled = false;
    }
    if(button == "next"){
        a++;
    }
    else{
        a--;
    }

    if(a >= 10){
        document.getElementById("a").style.display = "none";
        document.getElementById("b").style.display = "none";
        document.getElementById("c").style.display = "none";
        document.getElementById("d").style.display = "none";
        document.getElementById("next").disabled = true;
        document.getElementById("99").innerHTML = "Your Score is "+score+"/10!";
        document.getElementById("ans1").innerHTML = namebin[0];
        document.getElementById("ans2").innerHTML = namebin[1];
        document.getElementById("ans3").innerHTML = namebin[2];
        document.getElementById("ans4").innerHTML = namebin[3];
        document.getElementById("ans5").innerHTML = namebin[4];
        document.getElementById("ans6").innerHTML = namebin[5];
        document.getElementById("ans7").innerHTML = namebin[6];
        document.getElementById("ans8").innerHTML = namebin[7];
        document.getElementById("ans9").innerHTML = namebin[8];
        document.getElementById("ans10").innerHTML = namebin[9];
        document.getElementById("res").style.display = "table";
        done = true;
        return 10;
        
    
    }

    if(a <= 0){
        document.getElementById("prev").disabled = true;
        document.getElementById("next").disabled = false;
    }
    else{
        document.getElementById("prev").disabled = false;
    }
    document.getElementById("a").style.display = "block";
    document.getElementById("b").style.display = "block";
    document.getElementById("c").style.display = "block";
    document.getElementById("d").style.display = "block";
    document.getElementById("res").style.display = "none";
    document.getElementById("99").innerHTML = questbank[a];
    document.getElementById("a").innerHTML = questbin[a].answer1;
    document.getElementById("b").innerHTML = questbin[a].answer2;
    document.getElementById("c").innerHTML = questbin[a].answer3;
    document.getElementById("d").innerHTML = questbin[a].answer4;
    document.getElementById("a").style.backgroundColor = "#d3d3d3";
    document.getElementById("b").style.backgroundColor = "#d3d3d3";
    document.getElementById("c").style.backgroundColor = "#d3d3d3";
    document.getElementById("d").style.backgroundColor = "#d3d3d3";
    console.log(a);
}

function answera(){
    answering("a",answered);
    answered = true;
}

function answerb(){
    answering("b",answered);
    answered = true;
}

function answerc(){
    answering("c",answered);
    answered = true;
}

function answerd(){
    answering("d",answered);
    answered = true;
}

function next(){
    clickbutton("next");
    if(a >= 10 ){
        return;
    }
    if(playerchoicebin[a] != " "){
        answered = true;
        if(correctbin[a] == true){
            document.getElementById(qanswerbin[a]).style.backgroundColor = "#90EE90";
        }
        else{
            document.getElementById(qanswerbin[a]).style.backgroundColor = "#90EE90";
            document.getElementById(playerchoicebin[a]).style.backgroundColor = "#FFCCCB";
        }
    }
    else{
        document.getElementById("next").disabled = true;
        answered = false;
    }
}

function prev(){
        clickbutton("prev");
        if(playerchoicebin[a] != " "){
            document.getElementById(qanswerbin[a]).style.backgroundColor = "#90EE90";
            if(correctbin[a] != true){
                document.getElementById(playerchoicebin[a]).style.backgroundColor = "#FFCCCB";
        }
    }
    
}

document.getElementById("next").addEventListener("click",next);
document.getElementById("prev").addEventListener("click",prev);