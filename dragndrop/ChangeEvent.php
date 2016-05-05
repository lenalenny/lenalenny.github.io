<?php 

	print_r($_REQUEST);
	
	$date = $_REQUEST['date'];
	$eventid = $_REQUEST['eventid'];
	$start = $_REQUEST['tale'];
	

	$events = simplexml_load_file('events.xml');

	foreach ($events as $simple_node)
	{
		if ($simple_node->id == $eventid) {
			
			if ($start == 0) {
				$curDate = $simple_node->startdate;
				$dateArray = explode("-", $curDate);
				$newdate = $dateArray[0]."-".$dateArray[1]."-".$date;
				$simple_node->startdate = $newdate;
			} else {
				print_r("ENDDDDDD");
				$curDate = $simple_node->enddate;
				$dateArray = explode("-", $curDate);
				$newdate = $dateArray[0]."-".$dateArray[1]."-".$date;
				$simple_node->enddate = $newdate;
			}
		}
	}
	
	
	
	$events->saveXML('events.xml');
?>