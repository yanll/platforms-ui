<template>
  <div>this is websocket test!!</div>
</template>

<script>
  import VueWebsocket from "vue-websocket";

  Vue.use(VueWebsocket, "http://localhost:8080", {
    reconnection: false
  });

  export default {
    methods: {},
    socket: {
      events: {
        changed(msg) {
          console.log("Something changed: " + msg);
        }
      }
    }
  };
</script>
