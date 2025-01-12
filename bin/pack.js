const packager = require('electron-packager')
const path = require('path')
const pkg = require('../package')
const flat = require('electron-osx-sign').flat

const resourcesPath = path.join(__dirname, '..', 'resources')
const commonOptions = {
  category: "Development",
  dir: path.join(__dirname, '..'),
  appCopyright: '© 2019, Zihua Li',
  asar: true,
  overwrite: true,
  electronVersion: pkg.electronVersion,
  icon: path.join(resourcesPath, 'icns', 'icon'),
  out: path.join(__dirname, '..', 'dist', 'out'),
}
const masOptions = {
  platform: 'mas',
  appBundleId: `li.zihua.${pkg.name}`,
  appCategoryType: 'public.app-category.developer-tools',
  osxSign: {
    type: process.env.NODE_ENV === 'production' ? 'distribution' : 'development',
    entitlements: path.join(resourcesPath, 'parent.plist'),
    'entitlements-inherit': path.join(resourcesPath, 'child.plist')
  }
}
const linuxOptions={
  platform: 'linux'
}
const windowsOptions={
  platform: 'win32'
}
packager(Object.assign(commonOptions,linuxOptions)).then((res) => {
  console.log(res);
  // const app = path.join(res[0], `${pkg.productName}.app`)
  // console.log('flating...', app)
  // flat({ app }, function done (err) {
  //   if (err) {
  //     throw err
  //   }
  //   process.exit(0);
  // })
})
