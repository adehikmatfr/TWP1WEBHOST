<?php

$email=$_POST["email"];
$password=$_POST["password"];

if($email != "" && $password != "") {
    echo"
    <script>
    document.location.href='../profile.html?name=Ade Hikmat Pauji Ridwan&email=$email';
    </script>
    ";
}else {
    echo"
    <script>
    document.location.href='../invalid.html';
    </script>
    ";
}
