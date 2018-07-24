<template>
    <div>
        <el-table :data="list"
                  style="width: 100%">
            <el-table-column
                    prop="title"
                    label="Title">
            </el-table-column>
            <el-table-column
                    prop="body"
                    label="Content">
            </el-table-column>
            <el-table-column>
                <div slot-scope="scope">
                    <el-button @click="openDetails(scope)">Details</el-button>
                </div>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    load() {
      const url = "https://jsonplaceholder.typicode.com/posts"

      let req = new Request(url)
      fetch(req, {
        method: "GET"
      })
        .then(response => {
          response.json().then(data => {
            this.list = data
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
     openDetails(data) {
        const id = data.row.id
        this.$router.push(`/list/${id}`)
    }
  },
  mounted() {
    this.load()
  }
 
}
</script>

<style>
</style>