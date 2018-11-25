<template>
  <div>
    <h1>time.txt - report server</h1>
    <hr/>

    <collapse-panel title="Filter by directories">
      <directory-filter />
    </collapse-panel>
    <collapse-panel title="Filter by tags">
      <tags-filter />
    </collapse-panel>
    <collapse-panel title="Filter by dates">
      <dates-filter />
    </collapse-panel>
    <hr/>
  </div>
</template>

<script>
  import DirectoryFilter from './DirectoryFilter.vue';
  import TagsFilter from './TagsFilter.vue';
  import CollapsePanel from './CollapsePanel.vue';
  import DatesFilter from './DatesFilter.vue';
  import axios from 'axios';

  export default {
    components: { DirectoryFilter, TagsFilter, CollapsePanel, DatesFilter },
    data() {
      return {
        dirs: []
      };
    },
    async mounted() {
      let response = await axios.get('http://localhost:3000');
      this.dirs = response.data.map(x => {
        return { include: true, name: x }
      });
    }
  }
</script>
