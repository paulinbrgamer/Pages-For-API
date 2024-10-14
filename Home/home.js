var tk = localStorage.getItem('tk')
newSession()
async function newSession(){
    const user = await fetch(`https://api-to-do-a5kr.onrender.com/${tk}`,{
        method: 'GET'
        
    })
    if(user){
        var data = await user.json()
        console.log(data)
    }
}