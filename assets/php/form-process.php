<?php

$errorMSG = "";

// FIRST NAME
if (empty($_POST["fname"])) {
    $errorMSG = "First Name is required ";
} else {
    $fname = $_POST["fname"];
}

// LAST NAME
if (empty($_POST["lname"])) {
    $errorMSG = "Last Name is required ";
} else {
    $lname = $_POST["lname"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_POST["email"];
}


// COMPANY
if (empty($_POST["company"])) {
    $errorMSG .= "Company is required ";
} else {
    $company = $_POST["company"];
}

// MSG SUBJECT
if (empty($_POST["phone"])) {
    $errorMSG .= "Subject is required ";
} else {
    $phone = $_POST["phone"];
}


// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Message is required ";
} else {
    $message = $_POST["message"];
}


$EmailTo = "rajsysus@gmail.com";
$Subject = "Enquiry From Kube8r";

// prepare email body text
$Body = "";
$Body .= "First Name: ";
$Body .= $fname;
$Body .= "\n";
$Body .= "Last Name: ";
$Body .= $lname;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Company: ";
$Body .= $company;
$Body .= "\n";
$Body .= "Telephone: ";
$Body .= $phone;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>