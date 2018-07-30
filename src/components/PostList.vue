<template>
    <div>
        <div style="text-align: left">
          <el-button id="button" type="success" @click="updateFavorites">Update Favorites</el-button>
        </div>
        <el-table :data="list"
              style="width: 100%"
              @selection-change="handleSelectionChange"
              ref="postTable">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
                    prop="title"
                    label="Title"
                    sortable>
            </el-table-column>
            <el-table-column
                    prop="body"
                    label="Content"
                    sortable>
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
import Vue from 'vue'

export default {
  data() {
    return {
      list: [],
      favoriteList: [],
      initialFavoriteList: []
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
            Vue.nextTick(() => {
              this.loadFavorites()
            })
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
     openDetails(data) {
        const id = data.row.id
        this.$router.push(`/list/${id}`)
    },
    handleSelectionChange(val) {
      this.favoriteList = val.map(item => {
        return item.id
      })
    },
    updateFavorites() {
      const hasChanged = JSON.stringify(this.initialFavoriteList) !== JSON.stringify(this.favoriteList)
      if (hasChanged) {
        localStorage.setItem('favorites', JSON.stringify(this.favoriteList))
        this.initialFavoriteList = this.favoriteList
        alert('Succesfully updated favorites.')
      }
    },
    loadFavorites() {
      const favorites = JSON.parse(localStorage.getItem('favorites'))
      this.favoriteList = favorites
      this.initialFavoriteList = favorites
      this.getFavorites.forEach(item => {
        this.$refs.postTable.toggleRowSelection(item, true) // ne raboti :(
      })
    }
  },
  mounted() {
    this.load()
  },
  computed: {
    getFavorites() {
      return this.list.filter(item => {
        return this.favoriteList.includes(item.id)
      })
    }
  }
}
</script>

<style>
#button{
  margin-left: 2%;
}
</style>