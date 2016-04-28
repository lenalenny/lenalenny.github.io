<?php 

	print_r($_REQUEST);
	
	$date = $_REQUEST['date'];
	$eventid = $_REQUEST['eventid'];
	

	$events = simplexml_load_file('events.xml');

	foreach ($events as $simple_node)
	{
		if ($simple_node->id == $eventid) {
			
			$curDate = $simple_node->startdate;
			$dateArray = explode("-", $curDate);
			$newdate = $dateArray[0]."-".$dateArray[1]."-".$date;
			$simple_node->startdate = $newdate;
		}
	}
	
	
	
	$events->saveXML('events.xml');
?>