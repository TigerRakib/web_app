<template>
  <div>
    <LoginForm v-if="!token" @login="setToken" />
    <Dashboard v-else :token="token" />
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue';
import Dashboard from './Dashboard.vue';

export default {
  components: { LoginForm, Dashboard },
  data() {
    return { token: null };
  },
  methods: {
    setToken(token) {
      this.token = token;
    }
  }
}
</script>
