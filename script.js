var btn=document.getElementById('btn');
if(typeof btn !='undefined' && btn != null ){
btn.addEventListener("click", validate);
}
          
         
//  VALIDATION FUNCTION(callback)
function validate(callback) {
    
    // var err1=document.getElementById("err1");
    var err2=document.getElementById('err2');
    var nam=document.getElementById('nam');
    var pass=document.getElementById('pass');
   
    if (nam.value=="admin"){
      if(pass.value==12345){
        callb();
          
      }   
      else{
           return false;
         }
    }
    else{
      return false;
      }
  }
         // CALLING BACK
         function callb(){
          window.location.href="todo.html"
         };

         

            //  FORM VALIDATION
  //  name validation
   nam.addEventListener('blur',function callback1(n){
    if(n.target.value=="admin"){
      nam.style.borderColor="green";     
      //  err1.innerHTML="yes";      
    }
     else{
          err2.innerText="Sorry Invalid Data. Please Check you user name";
         nam.style.color="red";
       }
 })
//  passwordvalidation
 pass.addEventListener('blur',function callback2(p){
  if(p.target.value=="12345"){
      pass.style.borderColor="green";
        }
   else{
    err2.style.color="red";
     err2.innerText=" Sorry Invalid Datas!! Please Check you user name or password.";
     
        }
  }) 
 