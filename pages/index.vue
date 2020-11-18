<template>
  <div class="content">
    <primary-nav>
      <user-dropdown />
    </primary-nav>
    <article class="content__grid">
      <aside class="py-3">
        <div class="px-3 mb-3">
          <b-input-group v-if="userHasMultipleProjects">
            <b-form-select
              :options="['project-1', 'project-2']"
              style="background: transparent; border-width: 1px; border-color: #339698; border-radius: 10px 0 0 10px`;"
            />
            <b-input-group-append>
              <b-btn variant="outline-secondary">
                Switch
              </b-btn>
            </b-input-group-append>
          </b-input-group>
        </div>
        <location-list v-bind="{ locations }" />
      </aside>
      <section class="main-content py-2">
        <project-details />
        <b-card no-body header-class="border-0" class="border-0">
          <b-tabs card>
            <b-tab title="Start" title-link-class="py-4 px-3 text-uppercase text-muted font-weight-bold">
              <location-start />
            </b-tab>
            <b-tab title="General" title-link-class="py-4 px-3 text-uppercase text-muted font-weight-bold">
              <accordion-wrapper v-bind="{ categories }" />
            </b-tab>
            <b-tab title="Tab" lazy title-link-class="py-4 px-3 text-uppercase text-muted font-weight-bold" />
            <b-tab title="Tab (Disabled)" lazy disabled title-link-class="py-4 px-3 text-uppercase text-muted font-italic" />
          </b-tabs>
        </b-card>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userHasMultipleProjects: true,
      categories: [
        {
          label: 'Domain Information',
          id: 'domain-information',
          description: '',
          time: '20 mins',
          isComplete: false,
          isBulk: false,
          isCorp: true,
          fields: [
            [{
              type: 'url',
              label: 'Current Website',
              id: 'current-website',
              placeholder: 'Ex. www.domain123.com'
            }],
            [{
              type: 'url',
              label: 'Domain for G5 to Build On',
              id: 'domain-to-build-on',
              placeholder: 'Ex. www.domain.com'
            }],
            [{
              type: 'text',
              label: 'Domain Registrar',
              id: 'domain-registar',
              placeholder: 'Example: GoDaddy'
            }],
            [{
              type: 'text',
              label: 'Domain Manager Name',
              group: 'domain-manager',
              id: 'domain-manager-name',
              placeholder: ''
            }],
            [{
              type: 'email',
              label: 'Domain Manager Email',
              group: 'domain-manager',
              id: 'domain-manager-email',
              placeholder: 'Example: user@domain.com'
            }]
          ],
          fieldData: {
            'current-website': null,
            'domain-to-build-on': null,
            'domain-registrar': null,
            'domain-manager-name': null,
            'domain-manager-email': null,
            'domain-credentials-username': null,
            'domain-credentials-password': null,
            'other-domains-reference': null
          }
        },
        {
          label: 'Location Information',
          id: 'location-information',
          description: '',
          time: '45 mins',
          isComplete: false,
          isBulk: false,
          isCorp: false,
          fields: [
            [
              {
                label: 'Branded Name',
                id: 'brandedName',
                type: 'text',
                placeholder: ''
              }
            ],
            [
              {
                label: 'Street Address',
                id: 'address',
                type: 'text',
                placeholder: ''
              }
            ],
            [
              {
                label: 'City',
                id: 'city',
                type: 'text',
                placeholder: ''
              },
              {
                label: 'State/Province',
                id: 'stateProvince',
                type: 'select',
                options: ['OK', 'SK', 'OR'], // use standard options
                placeholder: ''
              },
              {
                label: 'Zip/Postal Code',
                id: 'postalCode',
                type: 'text',
                placeholder: ''
              }
            ]
          ],
          fieldData: {
            brandedName: null,
            address: null,
            city: null,
            stateProvince: null,
            postalCode: null,
            country: null,
            propertyPhone: null,
            forwardToPhone: null,
            propertyEmail: null,
            websiteLeadEmail: null,
            officeHours: null
          }
        }
      ],
      selected: [],
      locations: [
        {
          name: 'The Junction',
          status: 'Incomplete',
          useCollected: true,
          data: []
        },
        { name: 'Location-2', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-4', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-6', status: 'Incomplete', data: [] },
        { name: 'Location-7', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-6', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-4', status: 'Incomplete', data: [] }
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
