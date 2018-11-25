<template>
  <div>
    <div class="row align-items-center mb-4">
      <div class="col-3">
        <input v-model="filter" class="form-control" placeholder="search..."/>
      </div>
    </div>
    <div class="row">
      <directory v-for="dir in filteredDirs" :key="dir.name" :name="dir.name" v-model="dir.include" />
    </div>
  </div>
</template>

<script>
  import Directory from './Directory.vue';
  import axios from 'axios';

  export default {
    components: { Directory },
    computed: {
      filteredDirs: function() {
        return this.dirs.filter(x => x.name.includes(this.filter));
      }
    },
    data() {
      return {
        filter: '',
        dirs: []
      };
    },
    async mounted() {
      let response = await axios.get('http://localhost:3000');
      this.dirs = response.data.map(x => {
        return { include: true, name: x }
      });
    }
  };
</script>
