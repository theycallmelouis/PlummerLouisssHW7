const questions = [
    {
      statement: "2+2?",
      answer: "2+2 = 4"
    },
    {
      statement: "In which year did Christopher Columbus discover America?",
      answer: "1492"
    },
    {
      statement:
        "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
      answer: "The E letter"
    }
  ];
  
  const contentDiv = document.getElementById("content");

  questions.forEach((question, index) => {
    
    const statementElem = document.createElement("p");
    statementElem.innerHTML = `${index + 1}. ${question.statement}`;

    const answerElem = document.createElement("p");
    answerElem.innerHTML = `${index + 1}. ${question.answer}`;
    answerElem.style.display = "none"; 

    const buttonElem = document.createElement("button");
    buttonElem.innerHTML = "Show the answer";
    buttonElem.addEventListener("click", () => {
      answerElem.style.display = "block";
      buttonElem.style.display = "none";
    });

    contentDiv.appendChild(statementElem);
    contentDiv.appendChild(buttonElem);
    contentDiv.appendChild(answerElem);
  });


