function passCheck() {
    var x = document.getElementById("passWord");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  

    const password = document.getElementById('password') 
    const registration = document.getElementById('registration')
    const form = document.getElementById('form')
const errorElement = document.getElementById('error')

    form.addEventListener ('submit' , (e) => {
      let messages=[]
      if( registration.value === ' ' || registration.value == null){
        messages.push('Registration Number is Required ')
      }

if(password.value === ' ' || password.value == null || password.length < 8 ||password.length>8){
  messages.push('Enter University Provided 8-digit unique Password  ')
}
 




      if(messages.length > 0 ){
        e.preventDefault()
errorElement.innerText = messages.join(' , ')
      }   

      
      
      
      



    })