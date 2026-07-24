<script setup>
//一次性的 -> 流式  前端 -> bff -> llm请求
//简洁
fetch('/api/stream?prompt=hello')
 .then(res => res.json())
 .then(data => {
   console.log(data);
 });
 </script>
<template>
  <div></div>
</template>
