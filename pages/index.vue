<template>
  <div class="content">
    <primary-nav>
      <user-dropdown />
    </primary-nav>
    <article class="content__grid">
      <aside class="py-3">
        <location-list v-bind="{ locations }" />
      </aside>
      <section class="main-content py-2">
        <project-details />
        <transition mode="out-in" name="fade">
          <bulk-edit-wrapper v-if="bulkIsEnabled">
            <accordion-wrapper v-bind="{ categories: bulk, prefix: 'bulk' }" />
          </bulk-edit-wrapper>
          <b-card v-else no-body header-class="border-0" class="border-0">
            <b-tabs v-model="currentTab" card>
              <b-tab title="1. Welcome" title-link-class="p-4 text-uppercase text-muted font-weight-bold">
                <welcome-start />
              </b-tab>
              <b-tab title="2. Start" title-link-class="p-4 text-uppercase text-muted font-weight-bold">
                <location-start />
              </b-tab>
              <b-tab title="3. General" title-link-class="p-4 text-uppercase text-muted font-weight-bold">
                <accordion-wrapper v-bind="{ categories, prefix: 'general' }" />
              </b-tab>
              <b-tab title="5. Tab (Disabled)" lazy disabled title-link-class="p-4 text-uppercase text-muted font-italic" />
            </b-tabs>
          </b-card>
        </transition>
      </section>
    </article>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      currentTab: 0,
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
            [
              {
                type: 'text',
                label: 'Domain Manager Name',
                group: 'domain-manager',
                id: 'domain-manager-name',
                placeholder: ''
              },
              {
                type: 'email',
                label: 'Domain Manager Email',
                group: 'domain-manager',
                id: 'domain-manager-email',
                placeholder: 'Example: user@domain.com'
              }
            ]
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
        },
        {
          label: 'Property Type',
          id: 'property-type',
          description: '',
          time: '45 mins',
          isComplete: false,
          isBulk: true,
          isCorp: false,
          fields: [
            [{
              label: 'Geographic Type',
              id: 'geographic',
              type: 'select',
              options: ['Suburban', 'Urban']
            }],
            [{
              label: 'Class',
              id: 'class',
              type: 'select',
              options: ['Class A', 'Class B', 'Class C']
            }],
            [{
              label: 'Target Lifestyle',
              id: 'targetLifestyle',
              type: 'select',
              options: ['On the Go', 'Happy at Home']
            }],
            [{
              label: 'Feature',
              id: 'feature',
              type: 'select',
              options: ['Luxury', 'Affordable', 'Modern', 'Gated', 'Furnished']
            }],
            [{
              label: 'Status',
              id: 'status',
              type: 'select',
              options: ['High Occupancy', 'Mid Occupancy', 'Low Occupancy', 'Lease Up', 'Development']
            }],
            [{
              label: 'Is Your Location specifical design for Senior or Student demographics?',
              id: 'demographicTarget',
              type: 'select',
              options: ['Senior', '55+', 'Student', 'N/A']
            }]
          ],
          fieldData: {
            geographic: null,
            class: null,
            targetLifestyle: null,
            feature: null,
            status: null,
            demographicTarget: 'N/A'
          }
        },
        {
          label: 'Floor Plans',
          id: 'floor-plans',
          description: '',
          time: '15 mins',
          isComplete: false,
          isBulk: true,
          isCorp: false,
          fields: [
            [{
              label: 'Primary Property & Unit Type',
              id: 'primaryType',
              type: 'select',
              options: ['Apartments', 'Townhomes', 'Condos', 'Apartments & Townhomes']
            }],
            [{
              label: 'Floor Plans',
              id: 'floor-plans',
              type: 'select',
              multiselect: true,
              hasMergeConflict: true,
              options: []
            }]
          ],
          fieldData: {
            primaryType: null,
            floorplans: [],
            floorplansOther: null,
            needNewResidents: null,
            needNewResidentsOther: null,
            petFriendly: null,
            petPolicy: null
          }
        }
      ],
      selected: [],
      bulk: [],
      locations: [
        {
          name: 'The Junction',
          status: 'Incomplete',
          useCollected: true,
          data: {
            primaryType: 'value',
            floorplans: [],
            floorplansOther: null,
            needNewResidents: null,
            needNewResidentsOther: null,
            petFriendly: null,
            petPolicy: null
          }
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
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-4', status: 'Incomplete', data: [] }
      ]
    }
  },
  computed: mapState({
    bulkIsEnabled: state => state.bulk.isEnabled
  }),
  created () {
    this.bulk = this.categories.filter(cat => cat.isBulk)
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
