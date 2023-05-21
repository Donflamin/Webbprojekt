const btn = document.getElementById('btn');
        btn.addEventListener('click', function () {
            var elmWitchChange = document.getElementsByClassName('light')
            if(
                    "0" ===
                      (document.cookie.match(/^(?:.;)?\sColor\s=\s([^;]+)(?:.)?$/) || [
                        ,
                        null,
                      ])[1] || 
                    "1" ==
                      (document.cookie.match(/^(?:.;)?\sColor\s=\s([^;]+)(?:.)?$/) || [
                        ,
                        null,
                      ])[1]
            ){
                console.log('hej')
            }
            else{
                for (let i = 0; i < elmWitchChange.length; i++) {
                    elmWitchChange[i].classList.toggle('dark')
                }
                document.cookie = 'Mode=0;'
            };
        });

window.onload = function start(){
    var elmWitchChange = document.getElementsByClassName('light')
    if(
            "0" ===
              (document.cookie.match(/^(?:.;)?\sColor\s=\s([^;]+)(?:.)?$/) || [
                ,
                null,
              ])[1] || 
            "1" ==
              (document.cookie.match(/^(?:.;)?\sColor\s=\s([^;]+)(?:.)?$/) || [
                ,
                null,
              ])[1]
    ){
        console.log('hej')
    }
    else{
        for (let i = 0; i < elmWitchChange.length; i++) {
            elmWitchChange[i].classList.toggle('dark')
        }
        document.cookie = 'Mode=0;'
    };
   
};


:root[data-theme='light'] {
    --primarybackground: #fff;
}