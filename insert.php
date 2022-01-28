<?php
$servername = "localhost";
$username = "root";
$password = "";
$database="registration";

// Create connection
$conn = mysqli_connect($servername, $username, $password,$database);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
$BOD="";
if((isset($_POST['First_Name'])) && (isset($_POST['Email_Id']))){
$firstname=$_POST['First_Name'];
$lastname=$_POST['Last_Name'];
$BOD.=$_POST['Birthday_day']."/".$_POST['Birthday_Month']."/".$_POST['Birthday_Year'];
//echo $BOD;
$email=$_POST['Email_Id'];
$mobile=$_POST['Mobile_Number'];
$gender=$_POST['Gender'];
$address=$_POST['Address'];
$city=$_POST['City'];
$pincode=$_POST['Pin_Code'];
$state=$_POST['State'];
$country=$_POST['Country'];
//echo $country;
$hobby=$_POST['Hobby'];

$sql="insert into registration_table set first_name='$firstname',	last_name='$lastname',dob='$BOD',email_id='$email',mob_number='$mobile',gender='$gender',address='$address',city='$city',pincode='$pincode',state='$state',country='$country',hobbies='$hobby'";

$result=mysqli_query($conn,$sql);

if($result){
  echo "successfully executed";
}
else{
  echo "error". mysqli_error($conn);
}

header("location:index.html");




}
?>