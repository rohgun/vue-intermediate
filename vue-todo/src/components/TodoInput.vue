<template>
    <div class="inputBox shadow">
     <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
     <span class="addContainer" v-on:click="addTodo"> 
       <i class="fas fa-plus addBtn"></i>
     </span>
     <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">custom header</h3>
     </Modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue';
    export default {
        data: function() {
            return {
                newTodoItem: "",
                showModal: false
            }
        },
        methods:{
            addTodo: function(){       
              if (this.newTodoItem !== '') {
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearinput();
              }
            },
            clearinput: function(){
                this.newTodoItem = '';
            }
        },
        components:{
          Modal: Modal
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
