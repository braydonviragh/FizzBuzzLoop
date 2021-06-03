window.onload = runScript;

function runScript() { 
    var output = document.getElementById('output');
    var x;
    var list ="";
    
    for(x = 0; x <= 100; x++) { 
        list += "<ul>";
        if(x % 4 && x % 3) { 
            list += "<li>" + "FizzBuzz" + "</li>"
        }else if(x % 3) { 
            list += "<li>" + "Buzz" + "</li>"
        } else if (x % 4) { 
            list += "<li>" + "Fizz" + "</li>"
        } else { 
            list += "<li>" +x+"</li>" ;
        }
       
        list += "</ul";
        output.innerHTML = list;

    }


}