var ha = new Date()
var h = ha.getHours()
if (h < 12) {
    console.log('Bom dia.')
} else if (h < 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa Noite')
}