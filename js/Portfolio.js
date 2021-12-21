$(document).ready(function () {
  
  var subtitles = $(".text-slider-items").text();
  var typed = new Typed(".text-slider", {
    strings: subtitles.split(","),
    typeSpeed: 100,
    backDelay: 900,
    backSpeed: 30,
    loop: true,
  });
  //************************************************** */
  
  (function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = $(".needs-validation");
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
         const message= $("#validationTextarea").val();
          const email =$("#validationCustom02").val();
          const subject=$("#validationCustom03").val();
          const name = $("#validationCustom01").val();
          
          console.log(message+" "+email+" "+subject+" "+name)
  
          if (name == '' || email == '' || message == '') {
            form.classList.add("was-validated");
            } else {
              Email.send({
                SecureToken : "b2ee4f8-2d65-41ce-bc75-8a1aa1e356eb",
                To : 'menaemadorai@gmail.com',
                From : String(email),
                Subject : String(subject),
                Body : String(message)
                
            }).then(
              mess => {alert(mess)
                console.log(message+" "+email+" "+subject+" "+name)}
              
            );
          }
        },
      
      );
    });
  })();

 /*$("#sendemail").on("click",function(){
	var message= $("#validationTextarea").val()
	var email =$("#validationCustom02").val()
	var subject=$("#validationCustom03").val()
	var name = $("#validationCustom01").val()
  if (name == '' || email == '' || message == '') {
    alert("Please Fill Required Fields");
    } else {
     Email.send({
    Host: "smtp.gmail.com",
    Username: email,
    Password: "",
    To: 'menaemadorai@gmail.com',
    From: email,
    Subject: subject,
    Body: name +"   "+message,
    
  })

    .then(function () {
      alert("mail sent successfully")
    });
  }
 }) */
 var filename = "Mina_Emad.pdf"
 $("#CV").on("click",function(){
 
    //Set the File URL.
   
    var url = filename;

    $.ajax({
        url: url,
        cache: false,
        xhr: function () {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 2) {
                    if (xhr.status == 200) {
                        xhr.responseType = "blob";
                        console.log("succc")
                    } else {
                        xhr.responseType = "text";
                    }
                }
            };
            return xhr;
        },
        success: function (data) {
            //Convert the Byte Data to BLOB object.
            var blob = new Blob([data], { type: "application/octetstream" });
            console.log("succc1")
            //Check the Browser type and download the File.
            var isIE = false || !!document.documentMode;
            if (isIE) {
                window.navigator.msSaveBlob(blob, filename);
            } else {
                var url = window.URL || window.webkitURL;
                link = url.createObjectURL(blob);
                var a = $("<a />");
                a.attr("download", filename);
                a.attr("href", link);
                $("body").append(a);
                a[0].click();
                $("body").remove(a);
            }
        }
    });
  
 })

});
