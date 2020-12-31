import { mapState, mapActions } from 'vuex'
export default {
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
    onSave () {},
    onRevert () {},
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
