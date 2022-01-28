//console.log("hello world");
// Document is ready
$(document).ready(function () {
    
    // Validate Username
        $('#nameerror').hide();   
        let usernameError = true;
        let emailerror = true;
        let  phoneerror=true;
        let gendererror =true;
        let addresserror =true;
       

        $('#firstname').keyup(function () {
            validateUsername();
        });
         
        function validateUsername() {
          let usernameValue = $('#firstname').val();
          if (usernameValue.length == '') {
           $('#nameerror').show();
           $('#nameerror').html("**insert name");
           $('#nameerror').css('color','red');
              usernameError = false;
              return false;
          }
          else if((usernameValue.length < 3)||
                  (usernameValue.length > 10)) {
                    $('#nameerror').show();
                    $('#nameerror').html("**length of username must be between 3 and 25");
                    $('#nameerror').css('color','red');
              usernameError = false;
              return false;
          }
          else {
            $('#nameerror').hide();
          }
        }
        $('#email').keyup(function () {
            validEmail();
        });

         function validEmail(){
            let email = $('#email').val();
             if(email.length == ''){
                $('#emailerror').show();
                $('#emailerror').html("**mailID is mandatory");
                $('#emailerror').css('color','red');
                emailerror = false;
                return false;

             }
            else if(IsEmail(email)==false){
                    $('#emailerror').show();
                    $('#emailerror').html("**invalid mail format");
                    $('#emailerror').css('color','red');
                    emailerror = false;
                    return false;
             }
             else{
                $('#emailerror').hide();
             }
         }
         //regex for mailid with below function
         function IsEmail(email) {
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(!regex.test(email)) {
              return false;
            }else{
              return true;
            }
          }

          $('#phone').keyup(function () {
            validnumber();
        });
        function validnumber(){
            let phonenumber = $('#phone').val();
            if(phonenumber.length ==''){
                $('#numbererror').show();
                $('#numbererror').html("*mobile number is mandatory ");
                $('#numbererror').css('color','red');
               phoneerror = false;
                return false;
            }
            else if(phvalidate(phonenumber)==false){
                $('#numbererror').show();
                $('#numbererror').html("*10 digit number starting with (6789)");
                $('#numbererror').css('color','red');
               phoneerror = false;
                return false;
            }
            else{
                $('#numbererror').hide();
            }
        }
            function phvalidate(phonenumber)
            {
             var phno = /^[7896][0-9]{9}$/;
          if(!phno.test(phonenumber))
        {
      return false;
                }
      else
        {
         return true;
        }
     }    
    
     function gendervalidate(){
            var gender = document.forms.Gender;
            console.log(gender);
            for(i=0;i<gender.length;i++){
              if(gender[i].checked==true){
                return true;
              }
            }
            $('#gendererror').show();
            $('#gendererror').html("*select mandatory");
            $('#gendererror').css('color','red');
         
            gendererror = false;
            return false;

          }
          $('#address').keyup(function(){
               validaddress();
          });

          function validaddress(){
            $address=$('#address').val();
             if($address.length==''){
              $('#addresserror').show();
              $('#addresserror').html("*address mandatory");
              $('#addresserror').css('color','red');
              addresserror =false;
              return false;
             }
             else{
              $('#addresserror').hide();
             }

          }




       $('#submit').click(function () {
            usernameError = true;
            emailerror = true;
            phoneerror =true;
            gendererror = true;
            addresserror =true;
            validateUsername();
            validEmail();
            validnumber();
            gendervalidate();
            validaddress();
            
            if ((usernameError == true) && (emailerror == true) && (phoneerror == true) && (gendererror == true) && (addresserror == true))
                {

                return true;
            } else {
                return false;
            }
        });
        
    });
     