<template>
    <div>
        <div style="text-align: left">
          <el-button id="button" type="danger" @click="removeFavorites">Remove Favorites</el-button>
        </div>
        <el-table :data="getFavorites"
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
export default {
  data() {
    return {
      list: [],
      favoriteList: [],
      removalList: []
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
            this.loadFavorites()
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
      this.removalList = val.map(item => {
        return item.id
      })
    },
    removeFavorites() {
      if (this.removalList.length) {
        const newFavoriteList = this.favoriteList.filter(item => {
            return !this.removalList.includes(item)
        })
        this.favoriteList = newFavoriteList
        localStorage.setItem('favorites', JSON.stringify(this.favoriteList))
        alert('Succesfully removed favorites.')
      }
    },
    loadFavorites() {
      const favorites = JSON.parse(localStorage.getItem('favorites'))
      this.favoriteList = favorites

      this.list.filter(item => {
        return this.favoriteList.includes(item.id)
      }).forEach(item => {
        console.log(item)
        this.$refs.postTable.toggleRowSelection(item, true)
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