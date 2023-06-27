<template>
  <div>Hello {{ value }}</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "World! This is my first web deployed on Azure. \n \
          "
    };
  }
};
</script>
