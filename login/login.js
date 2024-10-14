var token;
async function login(){
    var email = document.getElementById('idemail').value
    var pass = document.getElementById('ipword').value
    var res = await fetch('https://api-to-do-a5kr.onrender.com/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Define o tipo do conteúdo
        },
        body:JSON.stringify({
                email: email,
                senha: pass
        })  
    })
    if(res){
        var body = await res.json()
        if (body.erro){
            window.alert(body.erro)
        }
        else{
            var a = document.createElement('a')
            a.href = '/Home/home.html'
            token = body.token
            localStorage.setItem('tk',token)
            a.click()
        }
    }
    
    
}


