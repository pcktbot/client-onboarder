<template>
  <div class="border border-error">
    User Management UI should only be available to those who have the ability to Edit Users.
    User Management UI will allow for the update of names, emails, and location assignments.
    <b-row
      v-for="(user, i) in users"
      :key="`user-row-${i}`"
    >
      <b-col>
        <b-form-group
          label="User's Name"
        >
          <b-form-input />
        </b-form-group>
        <b-form-group
          label="User's Email"
        >
          <b-form-input />
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
          label="User has access to these locations"
        >
          <b-form-select />
        </b-form-group>
      </b-col>
      <b-col>
        <b-btn-group vertical size="sm">
          <b-btn>
            Save Changes
          </b-btn>
          <b-btn>
            Send Password Reset Link
          </b-btn>
          <b-btn>
            Remove This User
          </b-btn>
        </b-btn-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default () {
        return [{ name: '', email: '', locations: [] }]
      }
    }
  }
}
</script>

<style>

</style>
