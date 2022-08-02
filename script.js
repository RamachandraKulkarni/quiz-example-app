let start = document.querySelector("#startBtn");
let inst = document.querySelector("#inst");
let que = document.querySelector("#question-view");
let outerbtn = document.querySelector("#outerbtn");
let submit = document.querySelector("#submit");
let radios = document.getElementsByName('quez');
var rquiz;


//select options
var opt1 ;
var opt2 ;
var opt3 ;
var opt4 ;


start.addEventListener("click", ()=>{
    inst.style.display = "none";
    que.style.display = "block";
    outerbtn.style.display = "none";
    var fetchRes = fetch("./db.json");
    fetchRes.then(res => res.json())
    .then(res => {
        rquiz = res.data[1];
        console.log(rquiz);

        document.querySelector("#que").innerHTML = rquiz.question;

        rquiz.options.forEach((e,i) => {
            document.querySelector(`#options`).innerHTML += 
            `<label for="opt${i+1}">
                <input type="radio" name="quez" value="${e}" id="opt${i+1}">
                ${e}
            </label>`;
        });

        opt1 = document.querySelector("#opt1");
        opt2 = document.querySelector("#opt2");
        opt3 = document.querySelector("#opt3");
        opt4 = document.querySelector("#opt4");
        
    })

});

submit.addEventListener('click', ()=>{
    var userans;
    var righti = rquiz.answer;
    console.log("shub");
    for (var i = 0; i <  radios.length; i++) {
        if (radios[i].checked) {
          userans = radios[i].value;
          break;
        }
    }
    
    if(rquiz.options.indexOf(userans) == rquiz.answer){

        if(opt1.checked){
            document.querySelector('label[for="opt1"]').style.backgroundColor = "green";
            opt2.disabled = true;
            opt3.disabled = true;
            opt4.disabled = true;
        }

       else if(opt2.checked){
            document.querySelector('label[for="opt2"]').style.backgroundColor = "green";
            opt1.disabled = true;
            opt3.disabled = true;
            opt4.disabled = true;
        }

        else if(opt3.checked){
            document.querySelector('label[for="opt3"]').style.backgroundColor = "green";
            opt1.disabled = true;
            opt2.disabled = true;
            opt4.disabled = true;
        }

        else if(opt4.checked){
            document.querySelector('label[for="opt4"]').style.backgroundColor = "green";
            opt1.disabled = true;
            opt2.disabled = true;
            opt3.disabled = true;
        }
    }

    if(rquiz.options.indexOf(userans) != rquiz.answer){

        if(opt1.checked){
            document.querySelector('label[for="opt1"]').style.backgroundColor = "red";
            document.querySelector(`label[for="opt${righti+1}"]`).style.backgroundColor = "green";
            opt2.disabled = true;
            opt3.disabled = true;
            opt4.disabled = true;
        }

        if(opt2.checked){
            document.querySelector('label[for="opt2"]').style.backgroundColor = "red";
            document.querySelector(`label[for="opt${righti+1}"]`).style.backgroundColor = "green";
            opt1.disabled = true;
            opt3.disabled = true;
            opt4.disabled = true;
        }

        if(opt3.checked){
            document.querySelector('label[for="opt3"]').style.backgroundColor = "red";
            document.querySelector(`label[for="opt${righti+1}"]`).style.backgroundColor = "green";
            opt1.disabled = true;
            opt2.disabled = true;
            opt4.disabled = true;
        }

        if(opt4.checked){
            document.querySelector('label[for="opt4"]').style.backgroundColor = "red";
            document.querySelector(`label[for="opt${righti+1}"]`).style.backgroundColor = "green";
            opt1.disabled = true;
            opt2.disabled = true;
            opt3.disabled = true;
        }
    }
});


