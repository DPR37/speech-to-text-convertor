var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.interimResults = true;
        recognition.maxAlternatives = 1;

    recognition.onresult = function(event) {
        var recognizedText = event.results[0][0].transcript;
        document.getElementById('recognized-text').value = recognizedText;
    };

    recognition.onspeechend = function() {
        recognition.stop();
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error detected: ' + event.error);
    };
    function startRecognition(){
        recognition.start();
    }