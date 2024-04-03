Vue.component("example-component", {
  data: function () {
    return {
      message: "I am a Vue app! There are many like it, but this one is mine!!",
      count: 0,
      color: "red"
    }
  },
  template: `
    <div>
      <p :style="{color}">{{message}}</p>
      <button v-on:click="count++">Increment</button>
      <p>Count: {{count}}</p>
    </div>`
});

new Vue({ el: "#app" });
