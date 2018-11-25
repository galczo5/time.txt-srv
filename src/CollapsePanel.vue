<template>
  <div>
    <div class="mb-3" v-if="title">
      <a @click="collapse = !collapse" href="#" :class="{ 'text-muted': !collapse, 'text-primary': collapse }">
        <font-awesome-icon icon="filter"></font-awesome-icon>
        {{ title }}
      </a>
    </div>
    <div v-if="collapse">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title'],
    data() {
      return {
        collapse: false
      };
    },
    methods: {
      toggle() {
        this.collapse = !this.collapse;
      }
    }
  };
</script>
