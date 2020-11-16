<template>
  <div class="content">
    <primary-nav />
    <article class="content__grid">
      <aside class="py-5">
        <div class="px-3 mb-3">
          <search-input />
        </div>
        <location-list :locations="locations" />
      </aside>
      <section class="main-content py-5">
        <b-btn
          variant="outline-secondary"
          class="px-4 py-2 h3 font-weight-bold text-uppercase"
          style="border-width: 3px; border-radius: 6px;"
        >
          Press this button
        </b-btn>
        <b-card no-body>
          <b-tabs card>
            <b-tab title="Tab">
              <b-card
                bg-variant="primary-10"
                border-variant="primary-10"
                body-class="d-flex justify-content-between"
              >
                <p class="mb-0 text-gray-50 text-uppercase font-weight-bold">
                  Decision Card
                </p>
                <b-form-checkbox switch size="lg" />
              </b-card>
            </b-tab>
            <b-tab title="Tab" lazy />
          </b-tabs>
        </b-card>
      </section>
      <section>
        <accordion-wrapper />
      </section>
    </article>
  </div>
</template>

<script>
export default {
  data () {
    return {
      locations: [
        { name: 'Location-1', status: 'Incomplete' },
        { name: 'Location-1', status: 'Incomplete' },
        { name: 'Location-1', status: 'Incomplete' },
        { name: 'Location-1', status: 'Incomplete' }
      ]
    }
  }
}
</script>

<style lang="scss">
.content {
  position: relative;
  &__grid {
    position: absolute;
    top: 65px;
    height: calc(100vh - 65px);
    width: 100%;
    display: grid;
    grid-template-columns: minmax(min-content, 300px) auto;
    overflow-y: hidden;
  }
}
.main-content {
  background: white;
  min-height: 100%;
  border-radius: 50px 0 0 0;
  overflow-y: scroll;
  box-shadow: -2px 0 20px rgba(12, 35, 64, 0.5);
}
</style>
