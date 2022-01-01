<?php
  if($_POST['user_email'] != '' && isset($_POST['user_email'])){
    if(filter_var($_POST['user_email'], FILTER_VALIDATE_EMAIL)){

      $userName = $_POST['user_name'];
      $userEmail = $_POST['user_email'];
      $userSubject = $_POST['user_subject'];
      $userMessage = $_POST['user_message'];
    
      $emailTo = "example@example.example";//change for valid email
      $body = "Email from G4Exp.com\r\n";
      
      $body .= "From: ".$userName. "\r\n";
      $body .= "Email: ".$userEmail. "\r\n";
      $body .= "Subject: ".$userSubject. "\r\n";
      $body .= "Message: ".$userMessage. "\r\n";
    
      //Send Message
      mail($emailTo,$userSubject,$body);

      header('Location:../../index.html?success#contact');
    }
  }else{
    header('Location:../../index.html?fail#contact');
  }
?>