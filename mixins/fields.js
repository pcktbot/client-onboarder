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
    ...mapActions({
      setCategories: 'fields/setCategories'
    })
  }
}
