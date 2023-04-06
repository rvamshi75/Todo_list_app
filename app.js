


let taskName = document.getElementById('taskname')
let description = document.getElementById('desc')
let dateTime = document.getElementById('datetime')
let content = document.querySelector('.default')
let listElement = document.getElementById('listElement')
let topcontent = document.getElementById('topcontent')


document.getElementById("datetime").addEventListener('focus', () => {
    datetime.click()
  })

function addTask(){
if(taskName.value ==''){
    alert("Task name is required")
}
else{
    
 let newDate = new Date(datetime.value)
    const taskDateString = newDate.toLocaleString()
    let newTask = document.createElement("div")
    newTask.innerHTML = `
    <div class="content">
    <input type="checkbox" id="checkbox">
            <div class="taskContent listdata">
                <h3 class="newTaskName mb-2">${taskName.value}</h3>
                <p class="newTaskDescription">${description.value}</p>
                <p class="newTaskDate">${taskDateString}</p>
            </div>
        </div>
    </div>
    `
    topcontent.appendChild(newTask)
    taskName.value =''
    description.value = ''
    dateTime.value = ''

    if(newTask != ''){
        content.style.display = 'none'
    }

}}
   

