var iName = 0
var iPassword = 0
var close = true
var arrayName = []
var arrayPassword = []

NameAndPassword()

function NameAndPassword(){
    var name = prompt("Digite seu nome:")
    var password = prompt("Digite sua senha:")
    
    arrayName[iName] = name
    arrayPassword[iPassword] = password
    arrayName++
    arrayPassword++
}

function ChooseOption(){
    var option = prompt("Escolha a opção que deseja... 1 = Cadastrar, 2 = Login, 3 = Excluir cadastro, 4 = Encerrar programa")
    if(option == 1)
    NameAndPassword()
    else if(option == 2)
    Login()
    else if(option == 3)
    Excluir()
    else{
        close = false
    }
}

function Login(name, password){
    for(var i = 0 ; i < arrayName; i++){
        var loginValidation = true
        if(login == arrayName[i] && password == arrayPassword[i]){
            loginValidation = true
        }
        else {
            loginValidation = false
        }
}
return loginValidation
}