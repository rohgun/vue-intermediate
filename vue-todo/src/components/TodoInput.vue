<template>
    <div class="inputBox shadow">
     <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
     <span class="addContainer" v-on:click="addTodo"> 
       <i class="fas fa-plus addBtn"></i>
     </span>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                newTodoItem: ""
            }
        },
        methods:{
            addTodo: function(){       
              if (this.newTodoItem !== '') {
                var obj = {completed: false, item: this.newTodoItem};         
                localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
                this.clearinput();
              }
            },
            clearinput: function(){
                this.newTodoItem = '';
            }
        }
    }
</script>

<style scoped>
.inputBox {
  background: white;
  height: 50px;
  display: flex; /* 추가 */
  align-items: center; /* 세로 가운데 정렬 */
  border-radius: 5px;
  padding: 0 0.5rem; /* 양쪽 여백 */
}

.inputBox input {
  flex: 1;
  border: none;
  font-size: 0.9rem;
  outline: none;
}

.addContainer {
  width: 3rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #6478F8, #8763FB);
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

.addContainer i {
  color: white;
  font-size: 1.2rem;
}
</style>
