require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const app = express()
app.use(bodyParser.json({ limit: '1000kb' }))
const config = require('../nuxt.config.js')
const bullQueues = require('./controllers/queue')
const models = require('./models')
config.dev = process.env.NODE_ENV !== 'production'
bullQueues.createQueues()

const g5Auth = require('@getg5/g5-auth')

const {
  G5_AUTH_ENDPOINT: authorizationURL,
  G5_TOKEN_ENDPOINT: tokenURL,
  G5_AUTH_CLIENT_ID: clientID,
  G5_AUTH_CLIENT_SECRET: clientSecret,
  G5_AUTH_REDIRECT_URI: callbackURL,
  G5_AUTH_ME_ENDPOINT: authMeEndpoint,
  SESSION_SECRET: secret
} = process.env

const authConfig = {
  passport: {
    authorizationURL,
    tokenURL,
    clientID,
    clientSecret,
    callbackURL
  },
  authMeEndpoint,
  session: {
    secret
  },
  sucessRedirectPath: '/'
}

g5Auth.init(app, authConfig)
app.use(g5Auth.isAuthenticated)

app.use(async function (req, res, next) {
  const { id } = req.user
  const user = await models.user.findOne({
    where: { id },
    include: [{ model: models.role }]
  })
  const userJson = user.toJSON()
  req.userRoles = userJson.roles.map((role) => {
    const { name, type, urn } = role
    return { name, type, urn }
  })
  next()
})

require('./controllers/queue')
require('./routes')(app)

async function start () {
  const nuxt = new Nuxt(config)
  const { host, port } = nuxt.options.server

  await nuxt.ready()
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(nuxt.render)
  models.sequelize
    .sync()
    .then(() => console.log('Database Synced'))
  app.listen(port, host)
  console.log(`Server listening on http://${host}:${port}`)
}
start()
