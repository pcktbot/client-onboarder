<template>
  <b-nav-item-dropdown right class="ml-auto user-bg my-0 px-2 align-items-center">
    <template v-slot:text>
      <b-icon-person-circle />
      <span class="text-white">
        user.name@email.com
      </span>
    </template>
    <b-dropdown-item link-class="py-3 user-dd border-bottom border-gray-10">
      User Settings
      <b-icon-box-arrow-up-right scale="0.75em" />
    </b-dropdown-item>
    <b-dropdown-item link-class="py-3 user-dd">
      Logout
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.user-bg {
  background: linear-gradient(65deg,#4e6f96, #6380a1);
  display: flex;
}
.dropdown-menu {
  width: 100%;
  background: linear-gradient(65deg,#4e6f96, #6380a1);
  border-radius: 0;
  box-shadow: 0 15px 20px rgba(10, 10, 10, 0.2);
  padding: 0;
  & .user-dd {
    color: white;
    transition: 200ms ease;
    &:hover {
      background: #273e5d;
    }
  }
}
</style>
