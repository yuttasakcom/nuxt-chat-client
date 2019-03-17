<template>
  <div>
    <header-component/>
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header/Header";
export default {
  components: {
    HeaderComponent
  }
};
</script>