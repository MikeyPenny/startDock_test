<?php

    $data = array(
            "username" => "sitenu",
            "password" => "weareawesome"
    );

    $json = json_encode($data);

    $opts = array('http' =>
        array(
            'method' => 'POST',
            'header' => 'Content-Type: application/json',
            'content' => $json
        )
    );

    $context = stream_context_create($opts);

    $result = file_get_contents('https://site.nu/interview-endpoint.php', false, $context);

    echo $result;

?>