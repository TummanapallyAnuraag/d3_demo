<?php
$data = array(
    'EE1' => array(
        'studentcount'  => rand(150, 200),
        'maxmarks'      => rand(80, 100),
        'minmarks'      => rand(0, 20),
        'avgmarks'      => rand(60, 70)
    ),
    'EE2' => array(
        'studentcount'  => rand(150, 200),
        'maxmarks'      => rand(80, 100),
        'minmarks'      => rand(0, 20),
        'avgmarks'      => rand(60, 70)
    ),
    'EE3' => array(
        'studentcount'  => rand(150, 200),
        'maxmarks'      => rand(80, 100),
        'minmarks'      => rand(0, 20),
        'avgmarks'      => rand(60, 70)
    ),
    'EE4' => array(
        'studentcount'  => rand(150, 200),
        'maxmarks'      => rand(80, 100),
        'minmarks'      => rand(0, 20),
        'avgmarks'      => rand(60, 70)
    ),
    'EE5' => array(
        'studentcount'  => rand(150, 200),
        'maxmarks'      => rand(80, 100),
        'minmarks'      => rand(0, 20),
        'avgmarks'      => rand(60, 70)
    ),
    'EE6' => array(
        'studentcount'  => rand(150, 200),
        'maxmarks'      => rand(80, 100),
        'minmarks'      => rand(0, 20),
        'avgmarks'      => rand(60, 70)
    ),
);
header('Content-Type: application/json');
echo json_encode($data);
?>
