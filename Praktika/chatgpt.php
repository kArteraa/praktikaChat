<?php
    include 'vendor/autoload.php'; 

    $response = chatgpt($_POST['text'])['choices'][0]['text'];
    $dat = [trim($response),'right',date("H:i Y-m-d"),'ChatGPT'];
    echo json_encode($dat);
    

    function chatgpt($prompt) {
        $client = OpenAI::client("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");
        $result = $client->completions()->create([
            'model' => 'text-davinci-003', 
            'prompt' => $prompt,
            'max_tokens' => 2000,
            'temperature' => 0
        ]);

        return $result;
    }
?>
