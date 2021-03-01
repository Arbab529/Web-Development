function submitAnswers(){
    var total=5;
    var score=0;

    //Get USer Input
    var q1=document.forms["quizForm"]["q1"].value;
    var q2=document.forms["quizForm"]["q2"].value;
    var q3=document.forms["quizForm"]["q3"].value;
    var q4=document.forms["quizForm"]["q4"].value;
    var q5=document.forms["quizForm"]["q5"].value;
    
    
    // alert(q1);

    // Validation
    

    for(i=1;i<=total;i++){

        if(eval("q"+i)==null ||eval("q"+i)=='')
        {
            alert("You Missed Question "+i);
            return false;
        }
    }

    // Set Correct Answers
    var answers = ["b","c","a","b","b"]

    //check answers
    for(i=1;i<=5;i++){

        if(eval("q"+i)==answers[i-1])
        {
            score++;
        }
    }
    
    //Display Results
    var results=document.getElementById('results');
    results.innerHTML="<h3>You Scored <span>"+score+"</span> out of <span>"+total+"</span></h3>"
    alert("You Scored "+score+" out of "+total);
    results.style.padding="5px 10px";
    return false;
}