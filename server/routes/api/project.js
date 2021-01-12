const models = require('../../models')
const LocationOnboardingForm = require('../../controllers/location-onboarding-form')
module.exports = (app) => {
  app.get('/api/v1/projects', async (req, res) => {
    const { userRoles } = req
    const projects = await models.project.displayAll(userRoles)
    res.json(projects)
  })
  app.get('/api/v1/projects/:projectId', async (req, res) => {
    const { projectId } = req.params
    const { userRoles } = req
    const project = await models.project.displayOne(projectId, userRoles)
    res.json(project)
  })
  // returns array of locations matching project id each location is object containng object
  app.get('/api/v1/projects/:projectId/locations', async (req, res) => {
    try {
      const { projectId } = req.params
      const { userRoles } = req
      const locations = await models.project.locationsByProjectId(projectId, userRoles)
      const val = locations.map((location) => {
        return {
          locationId: location.locationProjectId,
          crawled: location.crawled,
          scraped: location.scraped,
          g5Approved: location.g5Approved,
          clientApproved: location.clientApproved,
          properties: location.properties,
          pages: location.crawled ? location.linkDiscoverers[location.linkDiscoverers.length - 1].pages : []
        }
      })
      res.json(val)
    } catch (e) {
      res.status(500).send(e.message)
    }
  })

  app.get('/api/v1/projects/:projectId/locations/:locationId', async (req, res) => {
    try {
      const { userRoles } = req
      const { locationId } = req.params
      const location = await models.location.locationById(locationId, userRoles)
      const val = {
        locationId,
        ...location.dataValues.properties
      }
      res.json(val)
    } catch (e) {
      res.status(500).send(e.message)
    }
  })

  app.put('/api/v1/projects/:projectId/locations/:locationId', async (req, res) => {
    const { body, params } = req
    const { userRoles } = req
    const { locationId } = params
    const location = await models.location.findOne({ where: { locationId }, userRoles })
    await location.update(body)
    res.json(200)
  })

  app.put('/api/v1/projects/:projectId/locations', async (req, res) => {
    const { body } = req
    const { userRoles } = req
    if (Array.isArray(body)) {
      for (let i = 0; i < body.length; i++) {
        const { properties: updateProps, locationId } = body[i]
        const location = await models.location.locationById(locationId, userRoles)
        const { properties } = location.toJSON()
        const keys = Object.keys(updateProps)
        keys.forEach((key) => {
          const value = updateProps[key]
          properties[key] = value
        })
        await location.update({ properties })
      }
    }
    res.json(200)
  })

  app.get('/api/v1/projects/:projectId/locations/:locationId/form', async (req, res) => {
    try {
      const { userRoles } = req
      const { locationId: locationProjectId } = req.params
      const location = await models.location.findOne({
        where: { locationProjectId },
        include: [{
          model: models.package,
          attributes: ['salesforceId']
        }],
        userRoles
      })
      const form = new LocationOnboardingForm(location)
      await form.build()
      res.json({ sections: form.display() })
    } catch (error) {
      res.status(500).json(error)
    }
  })
}
