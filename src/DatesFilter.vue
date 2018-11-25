  <template>
    <div class="row align-items-center">
      <div class="col-3">
        <label>Date from:</label>
        <input v-model="dateFrom" class="form-control"/>
      </div>
      <div class="col-3">
        <label>Date to:</label>
        <input v-model="dateTo" class="form-control"/>
      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          dateFrom: null,
          dateTo: null
        };
      }
    };
  </script>
