<?php

$country = urlencode($_GET['country']);      
$lastname = urlencode($_GET['last']);      
$firstname = urlencode($_GET['first']);      
$zipcode = urlencode($_GET['zip']);      
$dob = urlencode($_GET['dob']);  
$gender = urlencode($_GET['gender']);    
$address = urlencode($_GET['address']); 
$phone = urlencode($_GET['phone']); 

$result = array();
$result['ageVerificationFlag'] = 1;
$result['message'] = "";
print_r(json_encode($result));
exit();


$data = "sid=SIDE18IH56181033201564336442857001616154&zip=$zipcode&first=$firstname&last=$lastname&address=$address&dob=$dob&country=$country&gender=$gender&phone=$phone";     
$url = "https://www.INTEGRITY-DIRECT.com/online/authentication_url.asp";         
$params = array (             
   'http' => array (                     
		   'method' => 'POST',                     
		   'content' => $data,                     
		   'header' => "Content-type: application/x-www-form-urlencoded\r\n" . "Content-Length: " . strlen ( $data ) . "\r\n"              
		   )       
   ); 
   
$ctx = stream_context_create($params);        
$file = fopen($url, "r", false, $ctx);


	$responce = fgets($file, 1024);
	$rs = explode("&", $responce); 
	//print_r($rs);
	for($i = 0; $i < count($rs); $i += 1)         {            
			$srs = explode("=", $rs[$i]);
			//print_r($srs);
			switch($srs[0]){
				case"mc":
				$mc = $srs[1];
				break;
				case"err_code":
				$err_code = $srs[1];
				break;
				case"err_desc":
				$err_desc = $srs[1];
				break;
			}
			///$sname = $srs[0];            
			//$$sname = $srs[1];         
	}
	//echo $err_code . " ".$mc;
	if($err_code == 0){            
			if($mc != 0){               
					$result['ageVerificationFlag'] = 1;         
			}else{ 
					$result['ageVerificationFlag'] = 0;              
					$result['message'] = 'We were not able to verify the identity attributes you submitted. Please verify that the identity attributes you provided are correct. If your legal first name is William, make sure to submit William instead of Bill. If you have moved recently, please try with your previous address or if you have recently married, please try with your maiden name.';         
			}         
	}else{  
					$result['ageVerificationFlag'] = 0; 
					$result['message'] = $err_desc;                
		}    
 
fclose($file);

print_r(json_encode($result));
exit();