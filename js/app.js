$(document).ready(function(){

    function find() {
        
        const firstname = $('#firstname').val();
        $('#dispFirstname').html(firstname);
        $('#dispDiv').show();
    }

    $("#submit").click(function(){
    find()

    });
  });

  
