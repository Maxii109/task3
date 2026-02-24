let task = document.querySelector('#tasks')
let addBtn = document.getElementById('add-btn')
let alltasks = document.getElementsByClassName('.task')
let input = document.getElementById('input')

window.onload = ()=>{
    input.focus()
}
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
if(JSON.parse(localStorage.getItem('element')) != null){
    tasks = JSON.parse(localStorage.getItem('element'))

}else{

    tasks = []
    
            
}


// read
function readData() {
    task.innerHTML = ''
    let index = 0
    tasks.forEach(element => {
        task.innerHTML += `
        
            <div class="task ${element.isDone? "done" : ""}">
                <div class="info">
                    <h2>${element.title}</h2>
                    <div class="date">
                        <span style="color: red;display: flex;justify-content: center;align-items: center;font-size: 15px;"><img src="calendar.png" height="25px" width: '25px' alt=""></span> 
                        <span>${element.date}</span>

                    </div>
                </div>
                <div class="action">
                            
                    <button onclick = 'deleteTask(${index})' class="btn" style="color: red;display: flex;justify-content: center;align-items: center"><img src="trash-can_115312.svg" height="25px" width: '25px' alt=""></button>
                    <button onclick = 'finishedTask(${index})' class="btn" style="color: red;display: flex;justify-content: center;align-items: center"><img src="${element.isDone? 'cross.svg' : 'check.png'}" height="25px" width: '25px' alt=""></button>
                    <button onclick = 'editTask(${index})' class="btn" style="color: red;display: flex;justify-content: center;align-items: center"><img src="edit.svg" height="25px" width: '25px' alt=""></button>
                </div>
            </div>
        `
        index++
        
        
                

    });
    document.querySelector('.title span').innerHTML =  tasks.length
    if(tasks.length == 0){
            document.getElementById('noData').innerHTML = 'no data to show !!'

        }else{
            document.getElementById('noData').innerHTML = ''

        } 
}
readData()
        

// add tasks

    addBtn.addEventListener('click',() => {
        
        let now = new Date()
        let date = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear()
        let newTask = {
            'title': input.value,
            'date': date,
            'isDone': false
        }
        if(input.value.trim() != ''){
            tasks.push(newTask)
            localStorage.setItem('element', JSON.stringify(tasks))
            readData()
            input.value = ''
            

        }
        

        
        
    })


// delete task
function deleteTask(index) {
    let confirmMessage = confirm('هل انت متاكد من حزف مهمة: ' + tasks[index].title)
    if(confirmMessage == true){
        tasks.splice(index,1)
        localStorage.setItem('element', JSON.stringify(tasks))
        readData()
        // document.querySelector('.title span').innerHTML =  tasks.length 

    }
    

}

// edit task

function editTask(index) {
    let newTaskName = prompt('ادخل عنوان المهمة الجديد', tasks[index].title)
    if (newTaskName != null && newTaskName.trim() != ''){
        tasks[index].title = newTaskName
        localStorage.setItem('element', JSON.stringify(tasks))
        readData()
    }
    

}


// completed task

function finishedTask(index) {
    if(tasks[index].isDone == false){

        tasks[index].isDone = true
        
    }else{
        tasks[index].isDone = false
        

    }

    localStorage.setItem('element', JSON.stringify(tasks))
    readData()

    
}




