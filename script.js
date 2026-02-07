
var tasks = [ 
    {
        'title': 'قراءة كتاب',
        'date': '12/12/2030',
        'isDone': false
    },
    {
        'title': 'انهاء المشروع النهالىي',
        'date': '12/12/2030',
        'isDone': false
    },
    {
        'title': 'تعلم لغة برمجة',
        'date': '12/12/2030',
        'isDone': false
    },
    {
        'title': 'قراءة جزء من القران الكريم',
        'date': '12/12/2030',
        'isDone': false
    },
]

let  retrivedTasks = JSON.parse(localStorage.getItem('tasks'))
if(retrivedTasks == null){

    tasks = []
}else{
    tasks = retrivedTasks
}



// READ
function fillTaskOnPage() {
    
    document.getElementById('tasks').innerHTML = ''
    let index = 0
    tasks.forEach(task =>{
        
        document.getElementById('tasks').innerHTML += 
        `
                <div class="task ${task.isDone? 'done' : ''}">
                    <div class="info">
                        <h2>${task.title} </h2>
                        <div class="date">
                            <span style="color: red;display: flex;justify-content: center;align-items: center;font-size: 15px;"><img src="calendar.png" height="25px" width: '25px' alt=""></span> 
                            <span>${task.date}</span>

                        </div>
                    </div>
                    <div class="action">
                        
                        <button onclick = 'deleteTask(${index})' id='delete' class="btn" style="color: red;display: flex;justify-content: center;align-items: center;font-size: 15px;"><img src="trash-can_115312.svg" height="25px" width: '25px' alt=""></button>
                        ${task.isDone? `<button onclick = 'changeColor(${index})' class="btn" style="color: red;display: flex;justify-content: center;align-items: center;font-size: 15px;"><img src="cross.svg" height="25px" width: '25px' alt=""></button>` : `<button onclick = 'changeColor(${index})' class="btn" style="display: flex;justify-content: center;align-items: center;font-size: 15px"><img src="check.png" height="25px" width: '25px' alt=""></button>`}
                        
                        <button onclick = 'updateTask(${index})' class="btn" style="color: red;display: flex;justify-content: center;align-items: center;font-size: 15px;"><img src="edit.svg" height="25px" width: '25px' alt=""></button>
                    </div>
                </div>
        `
        index++
    })
}
fillTaskOnPage()


// CREATE
let add = document.getElementById('add-btn')
add.addEventListener('click' ,()=>{

    let taskName = prompt('الرجاء ادخال عنوان المهمة')
    let now = new Date()
    let date = now.getFullYear() + '/' + now.getMonth() + '/' + now.getDay()
    
    let taskObj =  
        {
            'title': taskName,
            'date': date,
            'isDone': false
        }
        
    if(taskName != '' && taskName != null) {
        tasks.push(taskObj)
        localStorage.setItem('tasks',JSON.stringify(tasks))
        fillTaskOnPage()
    }
    

    
})

// DELETE

function deleteTask(index){
    let x = confirm('هل انت متاكد من حزف مهمة : ' + tasks[index].title + '؟؟')
    
    if(x == true){
        tasks.splice(index,1)
        localStorage.setItem('tasks',JSON.stringify(tasks))
        fillTaskOnPage()
    }
    
    

}

// UPDATE => edit
function updateTask(index) {
    let newTask = prompt('الرجاء ادخال عنوان المهمة الجديد',tasks[index].title)
    if(newTask !== null){
        tasks[index].title = newTask
    }
    
    
    localStorage.setItem('tasks',JSON.stringify(tasks))

    fillTaskOnPage()

}

// ISDONE

function changeColor(index) {
    if(tasks[index].isDone == true){
        tasks[index].isDone = false
        localStorage.setItem('tasks',JSON.stringify(tasks))

    }else{
        tasks[index].isDone = true
        localStorage.setItem('tasks',JSON.stringify(tasks))

    }
    
    fillTaskOnPage()

}

