
<?php
$name = (isset($_POST['name'])) ? $_POST['name'] : "";
$email = (isset($_POST['email'])) ? $_POST['email'] : "";
$mobile = (isset($_POST['mobile'])) ? $_POST['mobile'] : "";
$reason = (isset($_POST['reason'])) ? $_POST['reason'] : "";

echo $name . " : " . $email . " : " . $mobile . " : " . $reason;
echo "<br />";
if ( $name  != 0 &&
    $email  != 0 &&
    $mobile != 0 &&
    $reason != 0) {
    echo "success";
} else {
    echo "error";
}

?>