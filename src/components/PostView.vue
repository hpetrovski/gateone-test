<template>
    <div v-if="loaded">
        <h1>{{ post.title }}</h1>
        <h3>{{ post.body }}</h3>
        <br>
        <h4>Comments</h4>
        <Comment v-for="comment in comments" :commentObj="comment" :key="comment.id" />
    </div>
    <h1 v-else>...</h1>
</template>

<script>
import Comment from "@/components/Comment.vue"

export default {
  created() {
    this.id = this.$route.params.id
    this.getPost(this.id)
  },
  data() {
    return {
      id: null,
      comments: [],
      post: null,
      loaded: false
    }
  },
  methods: {
    getPost(id) {
      const url = `http://jsonplaceholder.typicode.com/posts/${id}`
      let req = new Request(url)

      fetch(req, {
        method: "GET"
      }).then(res => {
        res.json().then(data => {
          this.post = data
          this.getComments(this.id)
        })
      })
    },
    getComments(id) {
      const url = `http://jsonplaceholder.typicode.com/posts/${id}/comments`
      let req = new Request(url)

      fetch(req, {
        method: "GET"
      }).then(res => {
        res.json().then(data => {
          this.comments = data
          this.loaded = true
        })
      })
    }
  },
  components: {
    Comment
  }
}
</script>