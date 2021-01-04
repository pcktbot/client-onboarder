import { mapState, mapActions } from 'vuex'
import FormUtil from '~/mixins/form-util'
export default {
  mixins: [FormUtil],
  data () {
    return {}
  },
  computed: {
    ...mapState({
      categories: (state) => {
        return state.bulk.isEnabled
          ? state.fields.categories.filter(cat => cat.isBulk)
          : state.fields.categories
      }
    })
  },
  methods: {
    onSave (id, fields) {
      const arr = []
      fields.reduce((acc = [], curr) => {
        return arr.push(curr[0].dataKey)
      })
      this.$emit('on-save', { id, arr })
    },
    onRevert (id) {
      this.$emit('on-revert', id)
    },
    toKebab (str) {
      return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase()
    },
    ...mapActions({
      setCategories: 'fields/setCategories'
    })
  }
}
