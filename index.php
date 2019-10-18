<!DOCTYPE html>
<html>
<head>
    <script src="api/jquery-1.10.2.min.js"></script> 
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script>
    </script>
<link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.css">
<link rel="stylesheet" href="main.css">
    <title>Spencer Ogden | Software Development Test Project</title>
        <link href="main.css" rel="stylesheet" type="text/css">
        <link rel="sylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="text/javascript" href="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js">
        <link rel="text/javascript" href="https://openexchangerates.github.io/money.js/">
        <link rel="shortcut icon" href="spencer.png" type="image/png"> 
        <link href="https://fonts.googleapis.com/css?family=Vibur" rel="stylesheet">
 
</head>
    
<body>
    <br>
      <div class="container" style="padding:10px 10px;">
          <img src="spencer.png" class="logo"><br><br>
	  <div  class="ng-scope">
      <div style="padding-bootom:10px" class="ng-scope"></div>
</div>
      <div class="well clearfix">
        <fieldset class="scheduler-border">
          <legend class="scheduler-border">Currency Convertor</legend>
          <form class="form-inline ng-valid ng-valid-min ng-dirty ng-valid-number ng-valid-parse ng-submitted" id="form" method="POST">
            
            <div class="form-group col-sm-3">
              <div class="input-group col-sm-12"> 
                <span class="input-group-addon ng-binding"></span>
                <input type="number" name="amount" id="amount" value="1"  class="form-control currency ng-valid ng-not-empty ng-valid-min ng-dirty ng-valid-number ng-touched" id="c2" ng-model="amount" required>
              </div>
            </div>
              			
			&nbsp;
              
            <div class="form-group" >
            <label for="exampleInput2">From Currency</label>
            <select class="form-control ng-valid ng-not-empty ng-dirty ng-valid-parse ng-touched" style="width:200px;" name="from" id="from"><option label="US dollars" selected="selected">US dollars</option><option label="euros" >euros</option><option label="Japanese yen" >Japanese yen</option><option label="Singapore dollars" >Singapore dollars</option></select>
            </div>
              			
			&nbsp;
              
            <div class="form-group">
            <label for="exampleInput3">To Currency</label>
            <select class="form-control ng-valid ng-not-empty ng-dirty ng-valid-parse ng-touched" style="width:200px;" placeholder="select currency" ng-model="to_currency" name="to" id="to"><option label="euros" >euros</option><option label="Japanese yen" selected="selected">Japanese yen</option><option label="US dollars" >US dollars</option><option label="Singapore dollars" >Singapore dollars</option></select>
            </div>
              			
			&nbsp;&nbsp;
              
            <button type="submit" name="convert" class="btn btn-primary"  onclick="concurrency_converter();" value="Convert">Convert</button>
              
          </form>
        </fieldset>
      </div>
          
      
        <div class="well ng-scope" ng-if="loaded" name="loaded">
        <div>
        
        <h3 class="converted" name="convert" id="converted">Converted</h3>
        <div class="alert alert-success converted" name="alert" id="alert" style="display: block;"></div>
            
          
        </div>
        </div>
        
    </div>
	
    
 <script>

     function concurrency_converter() {
         
        var data = $("#form").serialize();
            $.ajax({
            type : "POST",
            url : "",
            dataType:'json',
            data : data,
        beforeSend: function(){
            $("#alert").html('<span class="glyphicon glyphicon-transfer"></span>   converting ...');
            $("#alert").html();
            
        },
        success : function(response){
        if(response.error == 1){
        		$('#converted').hide();
				$('#alert').fadeIn('slow');
				$("#converted").hide().fadeIn('slow').html(response); 
                } 
          }
    });
            return false;
}
     
 /////////////////////////////////////////////////////////////////////////////////////    
// the commented code works just as well as the other one but the only difference is the $("#alert").html('<span class="glyphicon glyphicon-transfer"></span>converting ...'); beforeSend..this code doesnt work so I decided to use the other one. If in any case the top code doesnt show the right answer please use this as an alternative code. Thank you
     
     
//function concurrency_converter()
//{
//	var amount = $('#amount').val();
//	var from = $('#from').val();
//	var to = $('#to').val();
//	
//	if(amount == "")
//	{
//		$("#result").hide().fadeIn('fast').html('<br clear="all" /><div align="left" class="info">Please enter the amount that you wish to convert in the specified field to proceed. Thanks.</div>');
//		 $('#amount').focus();
//		 return false;
//	}
//	else if(from == "")
//	{
//		$("#result").hide().fadeIn('fast').html('<br clear="all" /><div align="left" class="info">Please select the country that you wish to convert your currency <b>from</b> to proceed. Thanks.</div>');
//		 return false;
//	}
//	else if(to == "")
//	{
//		$("#result").hide().fadeIn('fast').html('<br clear="all" /><div align="left" class="info">Please select the country that you wish to convert your currency <b>to</b>. Thanks.</div>');
//		 return false;
//	}
//	else
//	{
//		var dataString = "amount="+ amount + "&from="+ from + "&to="+ to;
//		$.ajax({
//			type: "POST",
//			data: dataString, 
//			cache: false,
//			beforeSend: function() 
//			{
//                 $("#alert").html('<span class="glyphicon glyphicon-transfer"></span>converting ...');
//				$("#converted").html();
//               
//			},
//			success: function(response) 
//			{
//				if(response.error == 1){
//        		$('#converted').hide();
//				$('#alert').fadeIn('slow');
//				$("#converted").hide().fadeIn('slow').html(response); 
//                } 
//          
//			}
//		});	
//	}
//    
//}   the commented code works just as well as the other one but the only difference is the $("#alert").html('<span class="glyphicon glyphicon-transfer"></span>converting ...'); beforeSend..this code doesnt work so I decided to use the other one. If in any case the top code doesnt show the right answer please use this as an alternative code. Thank you
//////////////////////////////////////////////////////////////////////////////////////     
    </script>

</body>
    


<?php
    
function vpb_remove_comma_from_values($vpb_value)
{
	return str_replace(',', '', $vpb_value);
}  

function concurrency_converter($from_currency, $to_currency, $amount)
{
	$amount = urlencode("amount");
	$from_currency = urlencode("from");
	$to_currency = urlencode("to");
    $string = $from_currency . "_" . $to_currency; 
    if($from_currency == $to_currency) {
    $data = array('error' => '1');
    echo json_encode( $data );
    exit;
    }
	$url = " http://ws-entry-point/data/ECB,EXR,latest/$string.M?mode=available";
	$vpb_init_set = curl_init();
	curl_setopt ($vpb_init_set, CURLOPT_URL, $url);
	curl_setopt ($vpb_init_set, CURLOPT_RETURNTRANSFER, 1);
	$vpb_execution = curl_exec($vpb_init_set);
	curl_close($vpb_init_set);
	
	$convert = explode('bld>', $vpb_execution);
	$convert = explode($to_currency, $convert[0]);
 
        

	return round($convert[0], 2);
}

if(array_key_exists("amount", $_POST) && array_key_exists("from", $_POST) && array_key_exists("to", $_POST) && !empty($_POST["amount"]) && !empty($_POST["from"]) && !empty($_POST["to"])) //Check to see that all required fields are in order
{
	$amount = trim(strip_tags($_POST["amount"]));
	$from_currency = trim(strip_tags($_POST["from"]));
	$to_currency = trim(strip_tags($_POST["to"]));
	
	if($amount == "")
	{
		echo "<br clear='all' /><div class='info'>Please enter the amount that you wish to convert in the specified field to proceed. Thanks.</div>";
	}
	elseif(!is_numeric($amount))
	{
		echo "<br clear='all' /><div class='info'>Please enter only numbers as your <b>Convert Amount</b>. <br>Examples: 100, 200, 300, 400, 500 etc</div>";
	}
	elseif($from_currency == "")
	{
		echo "<br clear='all' /><div class='info'>Please select the country that you wish to convert your currency <b>from</b> to proceed.</div>";
	}
	elseif($to_currency == "")
	{
		echo "<br clear='all' /><div class='info'>Please select the country that you wish to convert your currency <b>to</b>.</div>";
	}
	else
	{
		//$vpb_remove_dot_from_values = vpb_remove_comma_from_values(str_replace('.', '',$amount));
		$vpb_remove_dot_from_values = vpb_remove_comma_from_values($amount);

		echo "<br clear='all' /><div class='alert' style='font-size:22px; text-align:center;'> <b>".number_format($vpb_remove_dot_from_values)." ".$from_currency."</b>  =</b>  <b>".$to_currency." ".number_format(concurrency_converter($from_currency,$to_currency,$vpb_remove_dot_from_values), 2)."</b></div>";
	}
}
    ?>

</html>