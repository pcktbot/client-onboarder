/**
 * Function will traverse through nested object
 * until it finds label param. If label param is array, it will
 * push all items into the acc param
 * @param {Object} obj
 * @param {String} label - property to accumulate values from
 * @param {Array} acc - array used to accumulate field objects
 * @returns {Array}
 */
export function flattenFields (obj, label, acc = []) {
  if (typeof obj === 'object') {
    for (const key in obj) {
      if (key === label && Array.isArray(obj[label])) {
        obj[label].forEach(field => acc.push(field))
      } else {
        // eslint-disable-next-line no-unused-vars
        flattenFields(obj[key], label, acc)
      }
    }
  } else {
    return
  }
  return acc
}

/**
 * Wraps each field object in an array and clusters items in the map together
 * @param {Array} fields - array of field object
 * @param {Object} map = object with key equal to `section{section.id}` or `subsection{section.id}`
 * @returns {Array} - mutated fields
 */
function fieldMapper (fields, map) {
  const newFields = []
  const groupMap = {}
  fields.forEach((field) => {
    const { dataKey } = field
    const arr = map ? map.find(subArr => subArr.includes(dataKey)) : null
    const len = newFields.length
    if (arr) {
      if (!groupMap.hasOwnProperty(arr[0])) {
        arr.forEach((item) => {
          groupMap[item] = len
        })
        newFields.push([])
      }
      newFields[groupMap[dataKey]].push(field)
    } else {
      newFields.push([field])
    }
  })
  return newFields
}

/**
 * Creates rows of array fields from map
 * @param {Object} obj - section from the field server payload
 * @param {Object} fieldMap - field mapping
 * @param {Boolean} isSubsection - boolean
 * @returns
 */
function fieldFormatter (obj, fieldMap, isSubsection = false) {
  const title = isSubsection ? 'subsection' : 'section'
  if (typeof obj === 'object') {
    const mapKey = `${title}${obj.id}`
    if (obj.hasOwnProperty('fields')) {
      obj.fields = fieldMapper(obj.fields, fieldMap[mapKey])
    }
    if (obj.hasOwnProperty('subsections')) {
      for (let i = 0; i < obj.subsections.length; i++) {
        obj.subsections[i] = fieldFormatter(obj.subsections[i], fieldMap, true)
      }
    }
  }
  return obj
}
/**
 * Mutates server response with fieldMap
 * @param {Object} obj - server payload
 * @param {Object} sectionMap - field mapping
 * @param {Boolean} isSubsection - boolean
 * @returns
 */
export function mapFields(payload, sectionMap) {
  return payload.sections.map(section => fieldFormatter(section, sectionMap, false))
}

export default {
  methods: {
    mapFields,
    flattenFields
  }
}
