<template>
  <div class="home">
    {{ users }}
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      users: user => user.users.users
    })
  },
  mounted () {
    this.getUsers()
    console.log(this.users)
  },
  methods: {
    ...mapActions({
      getUsers: 'users/getUsers'
    })
  }

}
</script>
