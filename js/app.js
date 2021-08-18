$(document).ready(function(){

    function find() {

       
        
        const firstname = $('#fname').val();
        const middlename = $('#mname').val();
        const lastname = $('#lname').val();
        const address = $('#address').val();
        const country = $('#slect1').val();
        const state = $('slect2').val();
        const zipcode = $('#zipcode').val();
        const email = $('#email').val();
        const phno = $('#phno').val();
        const height = $('#height').val();
        const weight = $('#weight').val();

        function isEmail($email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test($email);
          }


        if(firstname != "" && middlename != "" && lastname != "" && address !="" && country!="" && state != "" && zipcode != "" && email != "" && phno != ""){
    
          $('#dispfirstname').html(firstname);
          $('#dispmiddlename').html(middlename);
          $('#displastname').html(lastname);
          $('#dispaddress').html(address+', '+ country+', '+ state+', '+ zipcode);
          $('#dispemail').html(email);
          $('#dispphno').html(phno);
          $('#disph').html(height);
          $('#dispw').html(weight);
          
  
  
          $('#dispDiv1').show();
          $('#dispDiv2').show();
          $('#dispDiv3').show();
          $('#dispDiv4').show();
          $('#dispDiv5').show();
          $('#dispDiv6').show();
          $('#dispDiv7').show();
          $('#dispDiv8').show();
        
    }else if(!isEmail(email) ){
     
      alert("Enter a Valid Email Id");
        
    }else{

      alert("Fill All Details");

    }
        

    }

    $("#submit").click(function(){
    find()

    });

    $("slect2").select2({
        placeholder: "Select a state",
        allowClear: true
    });

    function populate(s1,s2)  {


        var s1 = $('#slect1');
        var s2 = $('#slect2');

        if (s1.val == 'United States of America') {
            var optionArray = [
              "|",
              "camaro|Camaro",
              "corvette|Corvette",
              "impala|Impala",
            ];
          }

          for (var option in optionArray) {
            var pair = optionArray[option].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            s2.options.add(newOption);
          }
        }

  });

  
