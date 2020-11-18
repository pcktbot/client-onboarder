<template>
  <b-nav-item-dropdown class="ml-auto user-bg my-0 px-2 align-items-center">
    <template v-slot:text>
      <b-icon-person-circle />
      user.name@email.com
    </template>
  </b-nav-item-dropdown>
</template>

<script>
export default {

}
</script>

<style>
.user-bg {
  background: linear-gradient(65deg,#4e6f96, #6380a1);
  display: flex;
}
</style>
