<template>
  <div class="px-4 py-2">
    <b-form-group
      v-for="field in fields"
      :key="`${toKebabCase(field.label)}`"
      :label="field.label"
      label-class="text-uppercase text-muted font-weight-bold"
    >
      <b-form-input
        :value="fieldData[toKebabCase(field.label)]"
        :type="field.type"
        :placeholder="field.placeholder"
      />
    </b-form-group>
    <div class="d-flex justify-content-end">
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
          'current-website': null,
          'domain-to-build-on': null,
          'domain-registrar': null
        }
      }
    }
  },
  data () {
    return {
      fields: [
        {
          type: 'url',
          label: 'Current Website',
          placeholder: 'Ex. www.domain123.com'
        },
        {
          type: 'url',
          label: 'Domain to Build On',
          placeholder: 'Ex. www.domain.com'
        },
        {
          type: 'text',
          label: 'Domain Registrar',
          placeholder: 'Example: GoDaddy'
        }
      ]
    }
  },
  methods: {
    toKebabCase (string) {
      return string
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase()
    }
  }
}
</script>

<style>

</style>
