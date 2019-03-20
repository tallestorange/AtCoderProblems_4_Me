import Vue from 'vue'
import VueIdb from 'vue-idb'

Vue.use(VueIdb)

export default new VueIdb({
  database: 'test',
  schemas: [
    { tests: 'id, label, created_at, updated_at' }
  ],
  options: {
    tests: { type: 'list', primary: 'id', label: 'title', updated_at: 'updated_at' }
  },
  apis: {
    bigs: {
      all: () => axios.get('/dev/data/data.json')
    }
  }
})