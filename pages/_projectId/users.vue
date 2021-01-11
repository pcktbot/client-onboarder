<template>
  <div>
    <primary-nav :show-branding="true">
      <b-btn :to="`/${$nuxt._route.params.projectId}/users`" class="align-self-center mr-2" variant="outline-secondary">
        Users
      </b-btn>
      <b-btn to="/projects" class="align-self-center mr-2" variant="outline-secondary">
        Projects
      </b-btn>
      <b-btn :to="`/${$nuxt._route.params.projectId}`" class="align-self-center mr-2" variant="outline-secondary">
        Project
      </b-btn>
      <user-dropdown />
    </primary-nav>
    <div class="mt-5">
      <b-container class="bg-white p-3">
      load existing users for client.
      allow associate with onboarder
      assign/update location permissions
        <b-row>
          <b-col>
            Welcome message
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <user-management />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
