console.log("Benvenuto User");

const {createApp} = Vue
createApp({
    data(){
        return{
            inputError: false,
            newTask: "",
            taskList:[
                {
                    text:"Programmare Usando Vue.js",
                    done: true,
                },{
                    text:"Programmare Usando php",
                    done: false,
                },{
                    text:"Creare un index.html e uno style.css",
                    done: false,
                }
            ]
        }
    },
    methods:{
        // lineThrough(index){
        //     return (this.taskList[index].done) ? 'textTrue' : '';
        // },
        addTask(){
            if(this.newTask.length >= 2){
                this.inputError = false;

                let newTask = {
                    text: this.newTask,
                    done: false
                };
                this.taskList.unshift(newTask);
                this.newTask = "";
            } else {
                this.inputError = true;
            }
            },
        removeToDo(index){
                this.taskList.splice(index,1);
            },
        getDoneLine(index){
            this.taskList[index].done = !this.taskList[index].done;
            },
        changetask(index){
            console.log(index)
        }
        }
}).mount('#app')