<template>
  <div>
    <div class="row align-items-center mb-3">
      <div class="col-3">
        <form @submit="addTag($event)">
          <input class="form-control" v-model="newTag" placeholder="type here..."/>
        </form>
      </div>
      <div class="col">

      </div>
    </div>
    <div class="py-2 text-muted" v-if="tags.length === 0">
      <div class="alert alert-light">
        No elements
      </div>
    </div>
    <div class="row mb-3" v-if="tags.length !== 0">
      <div class="col-auto pr-0" v-for="tag in tags" :key="tag">
        <div class="border border-info rounded px-3 py-2 bg-info text-white">
          <strong>{{ tag }}</strong>
          <font-awesome-icon icon="times" class="ml-4" style="cursor: pointer;" @click="removeTag(tag)"></font-awesome-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tags: [],
        newTag: ''
      };
    },
    methods: {
      addTag(e) {
        e.preventDefault();

        if (this.newTag.length === 0)
          return;

        if (!this.newTag.startsWith('+'))
          this.newTag = '+' + this.newTag;

        this.tags.push(this.newTag);
        this.newTag = '';
      },
      removeTag(tag) {
        this.tags = this.tags.filter(x => x !== tag);
      }
    }
  };
</script>
