import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "jquery/dist/jquery.min.js";
import $ from 'jquery';
import "@popperjs/core";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/style.css";

$(function(){
    $("#ps").click(function(){
        if($("#video").get(0).paused){
            $("#video").trigger('play');
        }
        else{
            $("#video").trigger('pause');
        };
    });
    // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  $("#fullyear").html(new Date().getFullYear()) ;
});