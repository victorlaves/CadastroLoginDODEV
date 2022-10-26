var iName = 0
var iPassword = 0
var arrayName = []
var arrayPassword = []

NameAndPassword()

function NameAndPassword(){
    var name = prompt("Digite seu nome:")
    var password = prompt("Digite sua senha:")
    
    arrayName[iName] = name
    arrayPassword[iPassword] = password
}
