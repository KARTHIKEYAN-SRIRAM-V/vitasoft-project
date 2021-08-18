$(document).ready(function(){

    function find() {
        
        const firstname = $('#firstname').val();
        const middlename = $('#middlename').val();
    
        $('#dispfirstname').html(firstname);
        $('#dispDiv1').show();

        $('#dispmiddlename').html(middlename);
        $('#dispDiv2').show();
    }

    $("#submit").click(function(){
    find()

    });

    $("slect2").select2({
        placeholder: "Select a state",
        allowClear: true
    });

    function populate()  {


        var s1 = $('#slect1');
        var s2 = $('#slect2');

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

  
