const fs = require(`fs`)
const Promise = require(`bluebird`)

exports.onPostBuild = (args, pluginOptions) =>
  new Promise(resolve => {
    const manifest = { ...pluginOptions }
    delete manifest.plugins
    delete manifest.avoid_meta
    fs.writeFileSync(`./public/manifest.json`, JSON.stringify(manifest))
    resolve()
  })
