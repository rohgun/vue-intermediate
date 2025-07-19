<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn " v-on:click="clearTodo">Clear All</span>
    </div>
</template>

<script>
    export default {
        methods:{
            clearTodo: function() {
                localStorage.clear();
            }
        }
        
    }
</script>

<style scoped>
.clearAllContainer {
    display: inline-block;
  padding: 0.4rem 1rem;
  background-color: white; /* ✅ 버튼 박스만 흰색 */
  border-radius: 5px;
  margin: 1rem auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* ✅ 구분감 */
  text-align: center;

}
.clearAllBtn{
    color: #e20303;
    display: block;
}
</style>