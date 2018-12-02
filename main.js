// Initialize Firebase
var config = {
    apiKey: "AIzaSyDBMjOM3jK6lBaLZmLsErUU9rF99yeC7g4",
    authDomain: "myfyp-dd9c2.firebaseapp.com",
    databaseURL: "https://myfyp-dd9c2.firebaseio.com",
    projectId: "myfyp-dd9c2",
    storageBucket: "myfyp-dd9c2.appspot.com",
    messagingSenderId: "512486974514"
  };
  firebase.initializeApp(config);

  //Reference messages collection

  var messageRef = firebase.database().ref('message');
   
//listen for form submit
document.getElementById('contactform').addEventListener('submit', submitform);


function submitform(e){
  e.preventDefault();

  //Get values
  var Name = getInputVal('Name');
  var DriverAge = getInputVal('DriverAge');
  var Email = getInputVal('Email');
  var Phone = getInputVal('Phone');
  var Vehicle = getInputVal('Vehicle');
  var DriverId = getInputVal('DriverId');
  var Message = getInputVal('Message');
  
  
  //save message
  saveMessage(Name, DriverAge, Email, Phone, Vehicle, DriverId, Message);

  //show alert
//   document.querySelector('.alert').style.display='block';

  //hide alert after 3 second
//   setTimeout(function(){
//     document.querySelector('.alert').style.display='none';
//   },3000);

  //clear form
  document.getElementById('contactform').reset();
}

//function to get from values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(Name, DriverAge, Email, Phone,Vehicle, DriverId, Message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        Name: Name,
        DriverAge:DriverAge,
        Email:Email,
        Phone:Phone,
        Vehicle: Vehicle,
        DriverId: DriverId,
        Message:Message
    })
}



var messageRefs = firebase.database().ref('transportation');
   
//listen for form submit
document.getElementById('trans').addEventListener('submit', saveform);


function saveform(e){
  e.preventDefault();

  //Get values
  var Fuel = getInputVal('fuel');
  var Price = getInputVal('price');
  var DSalary = getInputVal('salary');
  var Total = getInputVal('total');
  
  
  //save message
  saveMessages(Fuel, Price, DSalary, Total);

  //show alert
//   document.querySelector('.alert').style.display='block';

  //hide alert after 3 second
//   setTimeout(function(){
//     document.querySelector('.alert').style.display='none';
//   },3000);

  //clear form
  document.getElementById('trans').reset();
}

//function to get from values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessages(Fuel, Price, DSalary, Total){
    var newMessageRef = messageRefs.push();
    newMessageRef.set({
        Fuel:Fuel,
        Price:Price,
        DSalary:DSalary,
        Total:Total
    })
}


// $(document).ready(function(){


// var rootRef = firebase.database().ref().child("transportation")

// rootRef.on("child added" ,snap =>{
//     var FUEL = snap.child("fuel").val();
//     var PRICE = snap.child("price").val();
//     var SALRY = snap.child("salary").val();
//     var TOTAL = snap.child("total").val();

//     $("#table_body").append("<tr><td>"+FUEL+"</td><td>"+PRICE+"</td><td>"+SALRY+"</td><td>"+TOTAL+"</td></tr>");
    
// })
// })
//validation form of driver registration profile
function driverRegistration(){
    var correct_way = /^[A-Za-z]+$/;
    var names = document.getElementById('Name').value;
    if(names ===  ""){
        alert("Please enter driver name");
        names.focus();
        return false;
    }
    if(names.length<3){
        document.getElementById("Name");
        alert("User Name must contain 3 char");
        return false;
    }
    if(names.length > 20){
        document.getElementById("Name");
        alert("UserName must be less than 20 char");
        return false;
    }
    if(names.match(correct_way))
        true;
        else{
         document.getElementById("Name");
         alert("Only character is allowed");
        return false;
        }
        // alert("UserName must contain 3 char");
        // names.focus();
        // return false;
    
     var  DAges = document.getElementById('DriverAge');
        if(DAges.value.length === 0){
            alert("Please enter driver Age");
            DAges.focus();
            return false;
    }

    var addressIsLegal = true;
    var Demail = document.getElementById('Email').value;
    if(Demail.indexOf(" ") !== -1 ){
        addressIsLegal = false;
    }
     if(Demail.indexOf("@") < 1 || Demail.indexOf("@") > Demail.length - 5){
        addressIsLegal = false;
    }
     if(Demail.indexOf(".") - Demail.indexOf("@") < 2 || Demail.indexOf(".") > Demail.length - 3){
        addressIsLegal = false;
    }
    if (addressIsLegal === false){
        alert("Please correct email address");
        return false;
    }
    var phones = document.getElementById('Phone');
    if(phones.value.length === 0){
        alert("Please enter phone number");
        phones.focus();
        return false;
    }

    var vehicles = document.getElementById('Vehicle');
    if(vehicles.value.length === 0){
        alert("Please enter vehicle number");
        vehicles.focus();
        return false;
    }

    var DIdd = document.getElementById('DriverId');
    if(DIdd.value.length === 0){
        alert("Please enter driver Id");
        DIdd.focus();
        return false;
    }

    var Ddetails = document.getElementById('Message');
    if(Ddetails.value.length === 0){
        alert("Please enter driver Detials");
        Ddetails.focus();
        return false;
    }

}

//form textField validation Steps transportation details
function checkAllfields(){
    var fuel1 = document.getElementById('fuel');
    if(fuel1.value.length === 0){
        alert("Please enter fuel detail");
        fuel1.focus();
        return false;
    }

    var price1 = document.getElementById('price');
    if(price1.value.length === 0){
        alert("Please enter fuel price");
        price1.focus();
        return false;
    }

    var salary1 = document.getElementById('salary');
    if(salary1.value.length === 0){
        alert("Please enter salary");
        salary1.focus();
        return false;
    }
    var total1 = document.getElementById('total');
    if(total1.value.length === 0){
        alert("Please enter total details");
        total1.focus();
        return false;
    }
}

