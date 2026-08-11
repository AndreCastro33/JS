function calcular () {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('tb')
    if (num.value.length == 0) {
        window.alert('Escolha um numero valido')
    } else {
        tab.innerHTML = ''
        var n = Number(num.value)
        var c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = (`${n} x ${c} = ${n * c}`)
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
    }
    }
}
