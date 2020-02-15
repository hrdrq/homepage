<template>
  <div id="main">
    <div>
      <h2>{{ $t("message.title") }}</h2>
      <h2>{{ $t("message.subtitle") }}</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
#main {
  background: grey;
  @include sm {
    color: yellow;
  };
  @include md {
    color: green;
  };
  @include lg {
    color: red;
  };
}
</style>
