const btn = document.getElementById('btn');
        btn.addEventListener('click', function () {
            var elmWitchChange = document.getElementsByClassName('light')
            for (var i = 0; i < elmWitchChange.length; i++) {
                elmWitchChange[i].classList.toggle('dark')
            }
        })

