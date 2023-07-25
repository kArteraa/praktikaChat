<?php 

    $response = dp($_POST['text']);

    
    echo json_encode($response);

    function dp($question) {
        $data = [
            "x" => [$question]
        ];

        $url = "http://127.0.0.1:5005/model";

        $ch = curl_init($url);

        $options = [
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json'
            ],
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => json_encode($data),
            CURLOPT_RETURNTRANSFER => true
        ];

        curl_setopt_array($ch,$options);
        return json_decode(curl_exec($ch),true);

    }




?>