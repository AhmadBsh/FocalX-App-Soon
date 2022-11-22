<?php 
session_start(); 

$conn = mysqli_connect("localhost", "root", "", "emails");

$email=$_POST['email'];
$subscribe_Submit=$_POST['subscribe_Submit'];

if(isset($subscribe_Submit)){
if(isset($email)){
    $insert=("INSERT INTO emails (id,email) VALUES ('','$email')");
    $result = mysqli_query($conn, $insert);
    $x=1;
    compact('x');
}   
}
