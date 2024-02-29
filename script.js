window.onload=function(){
    render()
}
document.getElementById("Verifycontainer").style.display='none';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD89pifoevj1YqtAKEocbIkwMEoZWCNlTs",
    authDomain: "otp-verifier-3e9c3.firebaseapp.com",
    projectId: "otp-verifier-3e9c3",
    storageBucket: "otp-verifier-3e9c3.appspot.com",
    messagingSenderId: "591405050292",
    appId: "1:591405050292:web:3d52286e5a1a7a07f46ae1",
    measurementId: "G-67VL253FZV"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();

// render();
function render() {
    window.recaptchaverifier = new firebase.auth.RecaptchaVerifier('recaptcha_Container');
    recaptchaverifier.render();
}

function Send_otp(){
    var phonenumber=document.getElementById("phonenumber").value;
    var number="+91"+phonenumber;
    console.log(number);
    if(phonenumber.length<10 || phonenumber.length>10){
        alert('Enter a valid Phone number');
    }else{
        firebase.auth().signInWithPhoneNumber(number, window.recaptchaverifier).then(function (confirmResult) {
            window.confirmResult = confirmResult;
            coderesult = confirmResult;
            document.getElementById("Verifycontainer").style.visibility='visible';
            document.getElementById("OTPcontainer").style.display='none';
            console.log(coderesult);
            console.log('OTP Sent');
        }).catch(function (error) {
            // error in sending OTP
            console.log(error);
            alert(error.message);
        }); 
    }
}

function Veirfy(){
    var otp=document.getElementById("verifyotp").value;
    coderesult.confirm(otp).then(function () {
        alert('OTP Verified');
        console.log('OTP Verified');
    }).catch(function () {
        alert('OTP Not correct');
        console.log('OTP Not correct');
    })
    

}