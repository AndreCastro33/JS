        function clicar() {
            var txtano = document.getElementById('id')
            var ano = Number(txtano.value)
            var idade = (new Date().getFullYear() - ano)
            var dv = document.getElementById('div')
            var smasc = document.getElementById('sm')
            var sfem = document.getElementById('sf')
            var i = document.getElementById('img')
            if (smasc.checked) {
                var sfinal = 'Masculino'
            } else if (sfem.checked){
                var sfinal = 'Feminino'
            }
            if (idade == new Date().getFullYear() || idade > 120 || idade < 1 || txtano.value == "") {
                dv.innerHTML = ('<p>Escolha um ano válido.</p>')
                i.src = ''
            }else if (smasc.checked === false && sfem.checked === false) {
                dv.innerHTML = ('<p>Escolha uma opção válida.</p>')
            } else {
                dv.innerHTML = (`<p>Pessoa de sexo ${sfinal} e ${idade} anos</p>`)
            }
            if (idade < 10 && idade > 1 && smasc.checked) {
                i.src = 'imagens/m5anos.png'
            } else if (idade < 10 && idade > 1 && sfem.checked) {
                i.src = 'imagens/f5anos.png'
            } else if (idade > 10 && idade < 30 && smasc.checked) {
                i.src = 'imagens/m18anos.png'
            } else if (idade > 10 && idade < 30 && sfem.checked) {
                i.src = 'imagens/f18anos.png'
            } else if (idade > 30 && idade < 60 && smasc.checked) {
                i.src = 'imagens/m30anos.png'
            } else if (idade > 30 && idade < 60 && sfem.checked) {
                i.src = 'imagens/f30anos.png'
            } else if (idade >= 60 && idade < 120 && smasc.checked) {
                i.src = 'imagens/m60+.png'
            } else if (idade >= 60 && idade < 120 && sfem.checked){
                i.src = 'imagens/f60+.png'
            }
        }
 