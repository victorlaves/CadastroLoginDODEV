var iName = 0
var iPassword = 0
var login,password
var close = true
var arrayName = []
var arrayPassword = []


while(close)
{
    ChooseOption()
}

function NameAndPassword(){
    var name = prompt("Digite seu nome:")
    var password = prompt("Digite sua senha:")
    
    arrayName[iName] = name
    arrayPassword[iPassword] = password
    arrayName++
    arrayPassword++
    console.log("Novo Usuario cadastrado")
}

function ChooseOption(){
    var option = prompt("Escolha a opção que deseja... 1 = Cadastrar, 2 = Login, 3 = Excluir cadastro, 4 = Encerrar programa")
    if(option == 1)
    NameAndPassword()
    else if(option == 2){
    login = prompt("Login/Nome:")
    password = prompt("Senha:")
    Login()
    }
    else if(option == 3){
    login = prompt("Digite o nome de usuario que deseja excluir")
    DeleteRecord(login)
    }
    else{
        close = false
    }
}

function Login(name, password){
    for(var i = 0 ; i < arrayName; i++){
        var loginValidation = true
        if(login == arrayName[i] && password == arrayPassword[i]){
            loginValidation = true
            i = arrayName.length
        }
        else {
            loginValidation = false
        }
}
if(loginValidation){
    console.log("Login efetuado com sucesso")
}
else {
    console.log("Nome ou senha incorreto")
}
}

function DeleteRecord(Login){
var arraySupName = []
var arraySupPassword = []
var counterNamePassword = 0

for(var i = 0; i < arrayName.length; i++){
if(login == arrayName[i]){
arraySupName[counterNamePassword] = arrayName[i + 1]
arraySupPassword[counterNamePassword] = arrayPassword[i + 1]
counterNamePassword++
i++
}
else 
{
arraySupName[counterNamePassword] = arrayName[i + 1]
arraySupPassword[counterNamePassword] = arrayPassword[i + 1]
counterNamePassword++
}
}
arrayName = arraySupName
arrayPassword = arraySupPassword
console.log("Cadastro deletado com sucesso!!!")

return arrayName, arrayPassword
}
