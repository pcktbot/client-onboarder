<template>
  <b-input-group class="search">
    <b-form-input
      v-model="search"
      :placeholder="placeholder"
      class="search__input"
      @input="$emit('search', $event)"
    />
    <b-icon-search class="search__icon" variant="light" scale="1.25em" />
  </b-input-group>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Search Locations'
    }
  },
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style lang="scss">
$bg-slate: #64778e;
.search {
  position: relative;
  &__input {
    padding: 1.5em 1.25em;
    border-radius: 25px / 50% !important;
    border: none;
    background: $bg-slate;
    opacity: 0.8;
    &::placeholder {
      color: white;
    }
    &:active,
    &:focus {
      opacity: 1;
    }
  }
  &__icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-100%, -50%);
  }
}
</style>
