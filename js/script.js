

window.onload = function() {

    printResult();
    loadVacancies();

}

function loadVacancies() {

    
    let xhr;

    if (window.XMLHttpRequest) {
        xhr = new this.XMLHttpRequest();
    } else {
        xhr = new this.ActiveXObject('Microsoft.XMLHTTP');
    }

    let result;
    let vacancies = document.getElementById('api-download');
    
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            
            result = JSON.parse(this.responseText);
                 
            for (let i = 0; i < result.data.length; i++) {
                vacancies.innerHTML += '<div class="vacancie-post">'+ 
                                            '<h3>' + result.data[i].title + 
                                            '<span>'+ result.data[i].location + '-' + result.data[i].type +'</span>' + 
                                            '</h3>' + 
                                        '</div>';
                
            }

        }
    }

    xhr.open('POST', 'server/server.php', true);
    xhr.send();

}

function printResult() {

    let result = document.getElementById('infoJs');

    


    for (let i = 0; i <= 300; i++ ) {
        number = i;
        if (number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0) {
            result.innerHTML += number + '<br/>';
        } else {
            
            if ((number % 3) === 0) {
                result.innerHTML += 'FOO';
            }
        
            if (number % 5 === 0) {
                result.innerHTML += 'BAR';
            }
        
            if (number % 7 === 0) {
                result.innerHTML += 'BAZ';
            }

            result.innerHTML += '<br/>'

        }
    }
    
    

    


}
