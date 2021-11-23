// nodemailer    

//brug toastr


function sendContactMessage(params) {

    fetch("/api/contact"),{
        method: "POST",
        Headers: {"Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            name: document.getElementById("name").value,
            name: document.getElementById("name").value

        }).then(response =>{
            if(response.status === 200){
                console.log("everything went well");
            }else{
                console.log("error", response.status);
            }
        })
    }

    
}

document.getElementById("contact-button").addEventListener('click',sendContactMessage);