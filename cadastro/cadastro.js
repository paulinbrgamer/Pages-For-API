async function cadastrar(){
    var name = document.getElementById('idnome').value
    var date = document.getElementById('iddate').value
    var mail = document.getElementById('idemail').value
    var password = document.getElementById('ipword').value
    
    var requisicao = await fetch('https://api-to-do-a5kr.onrender.com/register',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json', // Define o tipo do conteúdo
        },
        body: JSON.stringify({nome:name,email:mail,data_nascimento:date,senha:password})
    })
    if(requisicao){
        var link = document.createElement('a')
        link.href = 'index.html'
        link.click()
    }
}