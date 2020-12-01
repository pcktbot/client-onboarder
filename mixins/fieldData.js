const categories = [
  {
    label: 'Domain Information',
    id: 'domain-information',
    description: '',
    time: '20 mins',
    isComplete: false,
    isBulk: false,
    vertical: ['mf', 'ss', 'sl'],
    locationShow: true,
    corpShow: true,
    fields: [
      [{
        type: 'url',
        label: 'Current Website',
        id: 'currentWebsite',
        placeholder: 'Ex. www.domain123.com',
        vertical: ['mf', 'ss', 'sl'],
        locationShow: true,
        corpShow: true
      }],
      [{
        type: 'url',
        label: 'Domain for G5 to Build On',
        id: 'domainToBuildOn',
        placeholder: 'Ex. www.domain.com',
        vertical: ['mf', 'ss', 'sl'],
        locationShow: true,
        corpShow: true
      }],
      [{
        type: 'text',
        label: 'Domain Registrar',
        id: 'domainRegistar',
        placeholder: 'ex. GoDaddy',
        vertical: ['mf', 'ss', 'sl'],
        locationShow: true,
        corpShow: true
      }],
      [
        {
          type: 'text',
          label: 'Domain Manager Name',
          group: 'domain-manager',
          id: 'domainManagerName',
          placeholder: '',
          vertical: ['mf', 'ss', 'sl'],
          locationShow: true,
          corpShow: true
        },
        {
          type: 'email',
          label: 'Domain Manager Email',
          group: 'domain-manager',
          id: 'domainManagerEmail',
          placeholder: 'ex. user@domain.com',
          vertical: ['mf', 'ss', 'sl'],
          locationShow: true,
          corpShow: true
        }
      ]
    ]
  },
  {
    label: 'Location Information',
    id: 'location-information',
    description: '',
    time: '45 mins',
    isComplete: false,
    isBulk: false,
    vertical: ['mf', 'ss', 'sl'],
    locationShow: true,
    corpShow: true,
    fields: [
      [
        {
          label: 'Branded Name',
          id: 'name',
          type: 'text',
          placeholder: '',
          vertical: ['mf', 'ss', 'sl'],
          locationShow: true,
          corpShow: true
        }
      ],
      [
        {
          label: 'Street Address',
          id: 'streetAddress1',
          type: 'text',
          placeholder: '',
          vertical: ['mf', 'ss', 'sl'],
          locationShow: true,
          corpShow: true
        },
        {
          label: 'Street Address 2',
          id: 'streetAddress2',
          type: 'text',
          placeholder: '',
          vertical: ['mf', 'ss', 'sl'],
          locationShow: true,
          corpShow: true
        }
      ],
      [
        {
          label: 'City',
          id: 'city',
          type: 'text',
          placeholder: '',
          vertical: ['mf', 'ss', 'sl'],
          locationShow: true,
          corpShow: true
        },
        {
          label: 'State/Province',
          id: 'state',
          type: 'select',
          options: ['OK', 'SK', 'OR'], // use standard options
          placeholder: '',
          vertical: ['mf', 'ss', 'sl'],
          locationShow: true,
          corpShow: true
        },
        {
          label: 'Country',
          id: 'country',
          type: 'select',
          options: ['US', 'CA'], // use standard options
          placeholder: '',
          vertical: ['mf', 'ss', 'sl'],
          locationShow: true,
          corpShow: true
        },
        {
          label: 'Zip/Postal Code',
          id: 'postalCode',
          type: 'text',
          placeholder: '',
          vertical: ['mf', 'ss', 'sl'],
          locationShow: true,
          corpShow: true
        }
      ],
      [
        {
          label: 'Corporate Office Phone Number',
          id: 'displayPhoneNumber',
          type: 'text',
          placeholder: 'Direct Phone Line for the Corporate Office',
          vertical: ['mf', 'ss', 'sl'],
          locationShow: false,
          corpShow: true
        },
        {
          label: 'Corporate Email Address',
          id: 'email',
          type: 'text',
          placeholder: 'General email address to receive lead inquiries',
          vertical: ['mf', 'ss', 'sl'],
          locationShow: false,
          corpShow: true
        }
      ],
      [
        {
          label: 'Property Phone Number ',
          id: 'localPhoneNumber',
          type: 'text',
          placeholder: 'Direct Phone Line for the Location',
          vertical: ['mf', 'ss', 'sl'],
          locationShow: true,
          corpShow: false
        },
        {
          label: 'Forward To/Lead Tracking Phone Number',
          id: 'displayPhoneNumber',
          type: 'text',
          placeholder: 'General email address to receive lead inquiries',
          vertical: ['mf', 'ss', 'sl'],
          locationShow: true,
          corpShow: false
        },
        {
          label: 'Property Email Address',
          id: 'propertyEmail',
          type: 'text',
          placeholder: 'General email address to receive lead inquiries',
          vertical: ['mf', 'ss', 'sl'],
          locationShow: true,
          corpShow: false
        },
        {
          label: 'Website Leads Email Address',
          id: 'email',
          type: 'text',
          placeholder: 'General email address to receive lead inquiries',
          vertical: ['mf', 'ss', 'sl'],
          locationShow: true,
          corpShow: false
        },
        {
          label: 'Office Hours',
          id: 'officeHours',
          type: 'text',
          placeholder: 'General email address to receive lead inquiries',
          vertical: ['mf', 'ss', 'sl'],
          locationShow: true,
          corpShow: false
        }
      ]
    ]
  },
  {
    label: 'Neighborhood',
    id: 'neighborhood',
    description: '',
    time: '15 mins',
    isComplete: false,
    isBulk: false,
    vertical: ['mf', 'sl', 'ss'],
    locationShow: true,
    corpShow: false,
    fields: [
      [{
        label: 'Neighborhood',
        id: 'neighborhood',
        type: 'text',
        placeholder: 'ex. Downtown, Southwest, Old Mill District',
        description: 'Common geographical term OR neighborhood name used for the area / nearby area.',
        vertical: ['mf', 'sl', 'ss'],
        locationShow: true,
        corpShow: false
      }],
      [{
        label: 'Nearby Neighborhoods to Not Target',
        id: 'negativeKeywords',
        type: 'text',
        placeholder: 'ex. Downtown, Southwest, Old Mill District',
        description: 'Areas with dissimilar demographics',
        vertical: ['mf', 'sl', 'ss'],
        locationShow: true,
        corpShow: false
      }],
      [{
        label: 'Landmarks',
        id: 'landmarks',
        type: 'text',
        placeholder: 'ex. Autzen Stadium, Drake Park, Mall of America',
        description: 'Provide at least TWO major landmarks: Parks, Shopping Centers, Districts, etc.',
        vertical: ['mf', 'sl', 'ss'],
        locationShow: true,
        corpShow: false
      }],
      [{
        label: 'Nearby Employers',
        id: 'nearbyEmployers',
        type: 'text',
        placeholder: 'ex. Starbucks, Google, Ford Motor Company',
        description: 'Provide 3-5 Nearby Employers that are relevant to your target audience',
        vertical: ['mf'],
        locationShow: true,
        corpShow: false
      }],
      [{
        label: 'Nearby Schools',
        id: 'nearbySchools',
        type: 'text',
        placeholder: 'ex. OSU, Summit High, Cascade Middle School',
        description: 'Provide 3-5 Nearby Schools - Elementary, Middle, High School, Community College, University',
        vertical: ['mf'],
        locationShow: true,
        corpShow: false
      }],
      [{
        label: 'Nearby Restaurants',
        id: 'nearbyRestaurants',
        type: 'text',
        placeholder: 'ex. Baldy\'s BBQ, Croutons, Wild Rose',
        description: 'Provide 3-5 nearby restaurants that appeal to your target audience',
        vertical: ['mf', 'sl'],
        locationShow: true,
        corpShow: false
      }],
      [{
        label: 'Nearby Shopping Centers & Grocery Stores',
        id: 'nearbyShopping',
        type: 'text',
        placeholder: 'ex. The Old Mill District, Downtown Bend, Costco',
        description: 'Provide 2-4 nearby shopping and grocery stores',
        vertical: ['mf', 'sl'],
        locationShow: true,
        corpShow: false
      }],
      [{
        label: 'Nearby Recreation & Entertainment',
        id: 'entertainment',
        type: 'text',
        placeholder: 'ex. Regal X, Plymouth Ice Arena, Plymouth Historical Museum',
        description: 'Provide 2-4 recreation places & entertainment options',
        vertical: ['mf', 'sl'],
        locationShow: true,
        corpShow: false
      }],
      [{
        label: 'Nearby Healthcare Facilities',
        id: 'nearbyHealthcare1',
        type: 'text',
        placeholder: 'ex. St. Charles Hospital',
        description: 'provide 3-5 nearby healthcare facilities that are relevant to your target audience',
        vertical: ['sl'],
        locationShow: true,
        corpShow: false
      }],
      [{
        label: 'Nearby Streets',
        id: 'nearbyRoadway1',
        type: 'text',
        placeholder: 'ex. Bond Street, Franklin Ave',
        vertical: ['ss'],
        locationShow: true,
        corpShow: false
      }],
      [{
        label: 'Nearby Gas Station',
        id: 'nearbyGasStation',
        type: 'text',
        placeholder: 'ex. Chevron on Galveston',
        vertical: ['ss'],
        locationShow: true,
        corpShow: false
      }]
    ]
  },
  {
    label: 'Floor Plans',
    id: 'floor-plans',
    description: '',
    time: '15 mins',
    isComplete: false,
    isBulk: true,
    vertical: ['mf'],
    locationShow: true,
    corpShow: false,
    fields: [
      [{
        label: 'Primary Property & Unit Type',
        id: 'primaryType',
        type: 'select',
        options: ['Apartments', 'Townhomes', 'Condos', 'Apartments & Townhomes'],
        vertical: ['mf'],
        locationShow: true,
        corpShow: false
      }],
      [{
        label: 'Floor Plans',
        id: 'floorPlans',
        type: 'select',
        multiselect: true,
        hasMergeConflict: true,
        options: [],
        vertical: ['mf'],
        locationShow: true,
        corpShow: false
      }],
      [{
        label: 'Floor Plans Most in Need of New Residents',
        id: 'floorPlansMostInNeed',
        type: 'select',
        multiselect: true,
        hasMergeConflict: true,
        options: [],
        vertical: ['mf'],
        locationShow: true,
        corpShow: false
      }],
      [{
        label: 'Pet-Friendly',
        id: 'primaryType',
        type: 'select',
        options: ['Yes', 'No'],
        vertical: ['mf'],
        locationShow: true,
        corpShow: false
      }],
      [{
        label: 'Pet Policy',
        id: 'petPolicy',
        type: 'text',
        placeholder: '',
        vertical: ['mf'],
        locationShow: true,
        corpShow: false
      }]
    ]
  },
  {
    label: 'Property Type',
    id: 'property-type',
    description: '',
    time: '45 mins',
    isComplete: false,
    isBulk: true,
    vertical: ['mf'],
    locationShow: true,
    corpShow: false,
    fields: [
      [{
        label: 'Geographic Type',
        id: 'geographic',
        type: 'select',
        options: ['Suburban', 'Urban'],
        vertical: ['mf'],
        locationShow: true,
        corpShow: false
      }],
      [{
        label: 'Class',
        id: 'class',
        type: 'select',
        options: ['Class A', 'Class B', 'Class C'],
        vertical: ['mf'],
        locationShow: true,
        corpShow: false
      }],
      [{
        label: 'Target Lifestyle',
        id: 'targetLifestyle',
        type: 'select',
        options: ['On the Go', 'Happy at Home'],
        vertical: ['mf'],
        locationShow: true,
        corpShow: false
      }],
      [{
        label: 'Feature',
        id: 'feature',
        type: 'select',
        options: ['Luxury', 'Affordable', 'Modern', 'Gated', 'Furnished'],
        vertical: ['mf'],
        locationShow: true,
        corpShow: false
      }],
      [{
        label: 'Status',
        id: 'status',
        type: 'select',
        options: ['High Occupancy', 'Mid Occupancy', 'Low Occupancy', 'Lease Up', 'Development'],
        vertical: ['mf'],
        locationShow: true,
        corpShow: false
      }],
      [{
        label: 'Is Your Location specifical design for Senior or Student demographics?',
        id: 'demographicTarget',
        type: 'select',
        options: ['Senior', '55+', 'Student', 'N/A'],
        vertical: ['mf'],
        locationShow: true,
        corpShow: false
      }]
    ]
  },
  {
    label: 'Lead Management',
    id: 'lead-management',
    description: '',
    time: '10 mins',
    isComplete: false,
    isBulk: true,
    vertical: ['mf', 'ss', 'sl'],
    locationShow: true,
    corpShow: true,
    fields: [
      [{
        label: 'Lead Management System (LMS) ',
        id: 'lms',
        type: 'text',
        placeholder: 'ex. RealPage Lead2Lease, Yardi PopCard, LeaseHawk.',
        description: 'Do you use a Lead Management System (LMS) to receive corporate leads? If so, please provide the Vendor & Product name.',
        vertical: ['mf', 'ss', 'sl'],
        locationShow: true,
        corpShow: true
      }],
      [{
        label: 'Does your lead tracking email provide an auto-response customer email?',
        id: 'leadAutoResponse',
        type: 'select',
        options: ['Yes', 'No'],
        vertical: ['mf', 'ss', 'sl'],
        locationShow: true,
        corpShow: true
      }],
      [{
        label: 'Would you like G5 to suppress the G5 auto-response customer email?',
        id: 'suppressAutoResponse',
        type: 'select',
        options: ['Yes', 'No'],
        dependentOn: 'lead-auto-response',
        description: 'We recommend a customer receive just one auto-response email',
        vertical: ['mf', 'ss', 'sl'],
        locationShow: true,
        corpShow: true
      }]
    ]
  },
  {
    label: '3rd Party Vendors & Links',
    id: 'vendors',
    description: '',
    time: '10 mins',
    isComplete: false,
    isBulk: true,
    isCorp: true,
    vertical: ['mf', 'sl', 'ss'],
    locationShow: false,
    corpShow: true,
    fields: [
      [{
        label: 'Employment Portal',
        id: 'employmentPortal',
        type: 'text',
        placeholder: 'Enter Employment Portal URL',
        vertical: ['mf', 'sl', 'ss'],
        locationShow: false,
        corpShow: true
      }],
      [{
        label: 'Investor Portal',
        id: 'investorPortal',
        type: 'text',
        placeholder: 'Enter Investor Portal URL',
        vertical: ['mf', 'sl', 'ss'],
        locationShow: false,
        corpShow: true
      }],
      [{
        label: 'Careers Portal',
        id: 'careersPortal',
        type: 'text',
        placeholder: 'Enter Careers Portal URL',
        vertical: ['mf', 'sl', 'ss'],
        locationShow: false,
        corpShow: true
      }],
      [{
        label: 'Blog Link',
        id: 'blogLink',
        type: 'text',
        placeholder: 'Enter Blog Link URL',
        vertical: ['mf', 'sl', 'ss'],
        locationShow: false,
        corpShow: true
      }],
      [{
        label: 'Other Links',
        id: 'otherLinks',
        type: 'text',
        placeholder: 'Enter Other Links URL',
        vertical: ['mf', 'sl', 'ss'],
        locationShow: false,
        corpShow: true
      }]
    ]
  },
  {
    label: 'Social Links',
    id: 'social',
    description: '',
    time: '10 mins',
    isComplete: false,
    isBulk: true,
    vertical: ['mf', 'sl', 'ss'],
    locationShow: true,
    corpShow: true,
    fields: [
      [{
        label: 'Facebook',
        id: 'facebook',
        type: 'text',
        placeholder: 'Enter Facebook Profile URL',
        vertical: ['mf', 'sl', 'ss'],
        locationShow: true,
        corpShow: true
      }],
      [{
        label: 'Yelp',
        id: 'yelp',
        type: 'text',
        placeholder: 'Enter Yelp Profile URL',
        vertical: ['mf', 'sl', 'ss'],
        locationShow: true,
        corpShow: true
      }],
      [{
        label: 'Twitter',
        id: 'twitter',
        type: 'text',
        placeholder: 'Enter Twitter Profile URL',
        vertical: ['mf', 'sl', 'ss'],
        locationShow: true,
        corpShow: true
      }],
      [{
        label: 'Pinterest',
        id: 'pinterest',
        type: 'text',
        placeholder: 'Enter Pinterest Profile URL',
        vertical: ['mf', 'sl', 'ss'],
        locationShow: true,
        corpShow: true
      }],
      [{
        label: 'Instagram',
        id: 'instagram',
        type: 'text',
        placeholder: 'Enter Instagram Profile URL',
        vertical: ['mf', 'sl', 'ss'],
        locationShow: true,
        corpShow: true
      }],
      [{
        label: 'YouTube',
        id: 'youtube',
        type: 'text',
        placeholder: 'Enter YouTube Profile URL',
        vertical: ['mf', 'sl', 'ss'],
        locationShow: true,
        corpShow: true
      }],
      [{
        label: 'LinkedIn',
        id: 'linkedIn',
        type: 'text',
        placeholder: 'Enter LinkedIn Profile URL',
        vertical: ['mf', 'sl', 'ss'],
        locationShow: true,
        corpShow: true
      }]
    ]
  }
]

function filterData (data, vertical, corp) {
  return data.filter((d) => {
    return (d.vertical.includes(vertical) &&
        ((d.locationShow && !corp) || (d.corpShow && corp)))
  })
}

function getCategories (vertical, corp) {
  const filteredCategores = filterData(categories, vertical, corp)
    .map((category) => {
      const { label, id, description, time, isComplete, isBulk, fields } = category
      const filteredFields = []
      fields.forEach((field) => {
        const d = filterData(field, vertical, corp)
        if (d.length > 0) { filteredFields.push(d) }
      })
      return {
        label, id, description, time, isComplete, isBulk, fields: filteredFields
      }
    })
  return filteredCategores
}

export { getCategories }
