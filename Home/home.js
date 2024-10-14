var tk = localStorage.getItem('tk')
var tasks = []
newSession()
async function newSession(){
    const user = await fetch(`https://api-to-do-a5kr.onrender.com/${tk}`,{
        method: 'GET'
        
    })
    if(user){
        var data = await user.json()
        var container = document.getElementById('container-tasks')
        var string = ''
        data.forEach(element => {
            
            tasks.push(element)
            if (element.status){
                string =  string+`
                <div class="task">
                <h2 style="grid-column: 1/2;grid-row: 1/2;">${element.titulo}</h2>
                <h4 style="grid-column: 1/2;margin-bottom: 10px;">${element.subtitulo}</h4>
                <button style="grid-column: 2/2;grid-row: 1/4;" class="complete">Completado</button>
                <h5 style="grid-column: 1/2;color: gray;">15/09/2022</h5>
                </div>`
            }
            else{
                string =  string+`
                <div class="task">
                <h2 style="grid-column: 1/2;grid-row: 1/2;">${element.titulo}</h2>
                <h4 style="grid-column: 1/2;margin-bottom: 10px;">${element.subtitulo}</h4>
                <button style="grid-column: 2/2;grid-row: 1/4;" class="todo">incompleto</button>
                <h5 style="grid-column: 1/2;color: gray;">${element.data_criacao
                }</h5>
                </div>`
            }

            
        });
        container.innerHTML= string
    }
}