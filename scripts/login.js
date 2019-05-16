var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.

const url = "https://parent.sduhsd.net/ParentPortal/LoginParent.aspx";

const data = {
    name: "Jonathan",
    password: "passwo2rd123",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
}


//console.log("asdf");
//$.post(URL, data, function (data, status) {
//    console.log(`${data} and status is ${status}`);
//})
var xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.withCredentials = true;

if (xhr.readyState === 2) { }
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(json);


function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Formget" && password == "formget#123") {
        alert("Login successfully");
        window.location = "success.html"; // Redirecting to other page.
        return false;
    }
    else {
        attempt--;// Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
