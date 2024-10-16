var tk = localStorage.getItem('tk')
if (!tk){
    var redirec = document.createElement('a')
    redirec.href = 'index.html'
    redirec.click()
}
var tasks = []
newSession()
async function newSession(){
    tasks = []
    const user = await fetch(`https://api-to-do-a5kr.onrender.com/${tk}`,{
        method: 'GET'
        
    })
    if(user){
        var data = await user.json()
        var container = document.getElementById('container-tasks')
        var string = ''
        data.forEach((element,idx) => {
            
            tasks.push(element)
            if (element.status){
                string =  string+`
                <div class="task" style="background-color: green;color:white;">
                <h2 style="grid-column: 1/2;grid-row: 1/2;">${element.titulo}</h2>
                <h4 style="grid-column: 1/2;margin-bottom: 10px;">${element.subtitulo}</h4>
                <button  style="grid-column: 2/2;grid-row: 1/4;" class="complete">Completado</button>
                <h5 style="grid-column: 1/2;color: white;">15/09/2022</h5>
                </div>`
            }
            else{
                string =  string+`
                <div class="task">
                <h2 style="grid-column: 1/2;grid-row: 1/2;">${element.titulo}</h2>
                <h4 style="grid-column: 1/2;margin-bottom: 10px;">${element.subtitulo}</h4>
                <button onclick="complete(${idx})" style="grid-column: 2/2;grid-row: 1/4;" class="todo">incompleto</button>
                <h5 style="grid-column: 1/2;color: gray;">${element.data_criacao
                }</h5>
                </div>`
            }

            
        });
        container.innerHTML= string
    }
}
async function addtask(){
    var titu = document.getElementById('namet')
    var sub = document.getElementById('subtask')
    var date = new Date()
    var day = date.getDate()
    var month = date.getMonth()+1
    var years = date.getFullYear()
    var strdate = day+"-"+month+"-"+years
    if (titu && sub){
        var req = await fetch('https://api-to-do-a5kr.onrender.com/create-task',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({titulo:titu.value,subtitulo:sub.value,token:tk,data_criacao:strdate,status:false})
        })
        if(req.ok){
            newSession()
        }
    }
    else{
        window.alert("Não é permitido valores vazios")
    }
   titu.value = ''
   sub.value = ''
}
async function complete(idx){
    let req = await fetch('https://api-to-do-a5kr.onrender.com/tasks/mudar-status',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({status:true,token:tk,titulo:tasks[idx].titulo,id:tasks[idx].id})

    })
    newSession()
}