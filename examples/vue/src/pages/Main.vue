<template>
  <div>
    <table>
      <tr>
        <th>name</th>
        <th>age</th>
      </tr>
      <tr v-for="item in list" :key="item.age">
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
      </tr>
    </table>
    <page v-model="page" :sideCount="2"
      prevText="上一页"
      nextText="下一页"
      @change="pageChange" :total="total" />
  </div>
</template>
<script>
import Page from '../components/Pagination.vue';

let list = [];
for(let i = 0; i< Math.random() * 999; i++) {
  list.push({
    name: `张${i}疯`,
    age: i
  });
}

export default {
  components:{
    Page
  },
  data() {
    return {
      page: 1,
      total: Math.ceil(list.length / 10)
    }
  },
  computed: {
    list() {
      return list.slice((this.page - 1) * 10).slice(0, 10);
    }
  },
  methods:{
    pageChange(p) {
      console.log('new page:',p);
    }
  }
}
</script>
