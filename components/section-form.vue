<template>
  <div class="px-4 py-2">
    <div
      v-for="(field, i) in fields"
      :key="`field-row-${i}`"
      class="d-flex justify-content-between w-100"
    >
      <b-form-group
        v-for="f in field"
        :key="f.id"
        :label="f.label"
        label-class="text-uppercase text-muted font-weight-bold"
        class="flex-grow-1 mr-2"
      >
        <b-form-select
          v-if="f.type === 'select'"
          :value="fieldData[f.id]"
          :options="f.options"
        />
        <b-form-input
          v-else
          :type="f.type"
          :value="fieldData[f.id]"
          :placeholder="f.placeholder"
        />
      </b-form-group>
    </div>
    <div class="d-flex justify-content-end mb-3">
      <b-btn
        variant="outline-secondary"
        class="text-uppercase font-weight-bold mr-2 px-4"
        style="border-width: 0px; border-radius: 8px;"
      >
        Abandon Changes
      </b-btn>
      <b-btn
        variant="secondary"
        class="text-uppercase font-weight-bold mr-2 px-4"
        style="border-radius: 8px;"
      >
        Save Changes
      </b-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fieldData: {
      type: Object,
      default () {
        return {
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
    },
    fields: {
      type: Array,
      default () {
        return [
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
        ]
      }
    }
  }
}
</script>

<style>

</style>
