export const state = () => ({
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
          id: 'currentWebsite',
          placeholder: 'Ex. www.domain123.com'
        }],
        [{
          type: 'url',
          label: 'Domain for G5 to Build On',
          id: 'domainToBuildOn',
          placeholder: 'Ex. www.domain.com'
        }],
        [{
          type: 'text',
          label: 'Domain Registrar',
          id: 'domainRegistar',
          placeholder: 'ex. GoDaddy'
        }],
        [
          {
            type: 'text',
            label: 'Domain Manager Name',
            group: 'domain-manager',
            id: 'domainManagerName',
            placeholder: ''
          },
          {
            type: 'email',
            label: 'Domain Manager Email',
            group: 'domain-manager',
            id: 'domainManagerEmail',
            placeholder: 'ex. user@domain.com'
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
          id: 'floorPlans',
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
    },
    {
      label: 'Lead Management',
      id: 'lead-management',
      description: '',
      time: '10 mins',
      isComplete: false,
      isBulk: true,
      isCorp: false,
      fields: [
        [{
          label: 'Lead Management System (LMS) ',
          id: 'lms',
          type: 'text',
          placeholder: 'ex. RealPage Lead2Lease, Yardi PopCard, LeaseHawk.',
          description: 'Do you use a Lead Management System (LMS) to receive corporate leads? If so, please provide the Vendor & Product name.'
        }],
        [{
          label: 'Does your lead tracking email provide an auto-response customer email?',
          id: 'leadAutoResponse',
          type: 'select',
          options: ['Yes', 'No']
        }],
        [{
          label: 'Would you like G5 to suppress the G5 auto-response customer email?',
          id: 'suppressAutoResponse',
          type: 'select',
          options: ['Yes', 'No'],
          dependentOn: 'lead-auto-response',
          description: 'We recommend a customer receive just one auto-response email'
        }]
      ],
      fieldData: {
        lms: null,
        'lead-auto-response': null,
        'suppress-auto-response': null
      }
    },
    {
      label: 'Neighborhood',
      id: 'neighborhood',
      description: '',
      time: '15 mins',
      isComplete: false,
      isBulk: false,
      isCorp: false,
      fields: [
        [
          {
            label: 'Neighborhood',
            id: 'neighborhood',
            type: 'text',
            placeholder: 'ex. Downtown, Southwest, Old Mill District',
            description: 'Common geographical term OR neighborhood name used for the area / nearby area.'
          },
          {
            label: 'Nearby Neighborhoods to Not Target',
            id: 'negativeKeywords',
            type: 'text',
            placeholder: 'ex. Downtown, Southwest, Old Mill District',
            description: 'Areas with dissimilar demographics'
          }
        ],
        [
          {
            label: 'Landmarks',
            id: 'landmarks',
            type: 'text',
            placeholder: 'ex. Autzen Stadium, Drake Park, Mall of America',
            description: 'Provide at least TWO major landmarks: Parks, Shopping Centers, Districts, etc.'
          },
          {
            label: 'Nearby Employers',
            id: 'employers',
            type: 'text',
            placeholder: 'ex. Starbucks, Google, Ford Motor Company',
            description: 'Provide 3-5 Nearby Employers that are relevant to your target audience'
          }
        ],
        [
          {
            label: 'Nearby Schools',
            id: 'schools',
            type: 'text',
            placeholder: 'ex. OSU, Summit High, Cascade Middle School',
            description: 'Provide 3-5 Nearby Schools - Elementary, Middle, High School, Community College, University'
          },
          {
            label: 'Nearby Restaurants',
            id: 'restuarants',
            type: 'text',
            placeholder: 'ex. Baldy\'s BBQ, Croutons, Wild Rose',
            description: 'Provide 3-5 nearby restaurants that appeal to your target audience'
          }
        ],
        [
          {
            label: 'Nearby Shopping Centers & Grocery Stores',
            id: 'shopping',
            type: 'text',
            placeholder: 'ex. The Old Mill District, Downtown Bend, Costco',
            description: 'Provide 2-4 nearby shopping and grocery stores'
          },
          {
            label: 'Nearby Recreation & Entertainment',
            id: 'recreationEntertainment',
            type: 'text',
            placeholder: 'ex. Regal X, Plymouth Ice Arena, Plymouth Historical Museum',
            description: 'Provide 2-4 recreation places & entertainment options'
          }
        ]
      ],
      fieldData: {
        neighborhood: null,
        'negative-keywords': null,
        landmarks: null,
        employers: null,
        schools: null,
        restuarants: null,
        shopping: null,
        'recreation-entertainment': null
      }
    },
    {
      label: '3rd Party Vendors & Links',
      id: 'vendors',
      description: '',
      time: '10 mins',
      isComplete: false,
      isBulk: true,
      isCorp: true,
      fields: [
        [
          {
            label: 'Employment Portal',
            id: 'employmentPortal',
            type: 'text',
            placeholder: 'Enter Employment Portal URL'
          },
          {
            label: 'Investor Portal',
            id: 'investorPortal',
            type: 'text',
            placeholder: 'Enter Investor Portal URL'
          }
        ],
        [
          {
            label: 'Careers Portal',
            id: 'careersPortal',
            type: 'text',
            placeholder: 'Enter Careers Portal URL'
          },
          {
            label: 'Blog Link',
            id: 'blogLink',
            type: 'text',
            placeholder: 'Enter Blog Link URL'
          }
        ],
        [{
          label: 'Other Links',
          id: 'otherLinks',
          type: 'text',
          placeholder: 'Enter Other Links URL'
        }]
      ],
      fieldData: {
        'employment-portal': null,
        'investor-portal': null,
        'careers-portal': null,
        'blog-link': null,
        'other-links': null
      }
    },
    {
      label: 'Social Links',
      id: 'social',
      description: '',
      time: '10 mins',
      isComplete: false,
      isBulk: true,
      isCorp: true,
      fields: [
        [
          {
            label: 'Facebook',
            id: 'facebook',
            type: 'text',
            placeholder: 'Enter Facebook Profile URL'
          },
          {
            label: 'Yelp',
            id: 'yelp',
            type: 'text',
            placeholder: 'Enter Yelp Profile URL'
          }
        ],
        [
          {
            label: 'Twitter',
            id: 'twitter',
            type: 'text',
            placeholder: 'Enter Twitter Profile URL'
          },
          {
            label: 'Pinterest',
            id: 'pinterest',
            type: 'text',
            placeholder: 'Enter Pinterest Profile URL'
          }
        ],
        [
          {
            label: 'Instagram',
            id: 'instagram',
            type: 'text',
            placeholder: 'Enter Instagram Profile URL'
          },
          {
            label: 'YouTube',
            id: 'youtube',
            type: 'text',
            placeholder: 'Enter YouTube Profile URL'
          }
        ],
        [{
          label: 'LinkedIn',
          id: 'linkedIn',
          type: 'text',
          placeholder: 'Enter LinkedIn Profile URL'
        }]
      ],
      fieldData: {
        'employment-portal': null,
        'investor-portal': null,
        'careers-portal': null,
        'blog-link': null,
        'other-links': null
      }
    }
  ]
})

export const actions = {

}

export const mutations = {

}
