$(document).ready(function(){

    function find() {
        
        const firstname = $('#firstname').val();
        $('#dispFirstname').html(firstname);
        $('#dispDiv').show();
    }

    $("#submit").click(function(){
    find()

    });

    function populate()  {


        var s1 = $('#select1');
        var s2 = $('#select2');

        if (s1.val == "['United States','US']") {
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

  
