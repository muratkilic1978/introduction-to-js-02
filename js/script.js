
    const outputAnswerOne = document.querySelector("#answer-one");
    const outputAnswerTwo = document.querySelector("#answer-two");
    const outputAnswerThree = document.querySelector("#answer-three");

    /* string datatype in JS*/
    let myFirstname = 'Morten';
    /* this camel notation-form eg. secondFirstName (first word is small second words first letter i Capitol letter and third words first letter is also capitol letter) */
    
    let myLastname = 'Kjeldsen';
    
    let myMothersFirstname="Malou";
    let myMothersLastname = 'Kjeldsen';
    
    let myFathersFirstname='David';
    let myFathersLastname = 'Kjeldsen';

    outputAnswerOne.textContent = "My name is " + myFirstname + " " + myLastname;
    outputAnswerTwo.textContent = "My mothers name is " + myMothersFirstname + " " + myMothersLastname;
    outputAnswerThree.textContent = "My fathers name is " + myFathersFirstname + " " + myFathersLastname;
    
    /* JS is case-sentative meaning that capitol and small letters matters */
    

    
