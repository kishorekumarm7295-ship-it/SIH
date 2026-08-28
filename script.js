let screen = document.getElementById("screen");


function append(value){

    if(screen.value==="0")
    {
        screen.value=value;
    }

    else{

        screen.value += value;

    }

}



function clearScreen(){

    screen.value="0";

}



function deleteLast(){

    screen.value =
    screen.value.slice(0,-1);


    if(screen.value==="")
    {
        screen.value="0";
    }

}



function calculate(){

    try{

        screen.value =
        eval(screen.value);

    }

    catch{

        screen.value="Error";

    }

}



// Keyboard Support

document.addEventListener("keydown",function(e){


    let key=e.key;


    if(
        "0123456789+-*/.%".includes(key)
    )
    {
        append(key);
    }


    else if(key==="Enter")
    {
        calculate();
    }


    else if(key==="Backspace")
    {
        deleteLast();
    }


    else if(key==="Escape")
    {
        clearScreen();
    }


});
