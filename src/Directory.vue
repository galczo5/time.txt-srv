<template>
  <div class="col-auto mb-3" style="width: 200px; cursor: pointer;" @click="$emit('input', !value)">
    <div class="pb-3 text-center border" :class="{ 'border-primary': value }">
      <div class="text-right mr-3 mt-2">
        <font-awesome-icon icon="check-circle" class="text-info" :class="{ 'invisible' : !value }"></font-awesome-icon>
      </div>
      <font-awesome-icon icon="folder" class="fa-3x text-primary"></font-awesome-icon>
      <hr/>
      <strong>
        {{ name }}
      </strong>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['name', 'value']
  };
</script>
