const fs = require('fs');
const path = require('path');
const fsx = require('fs-extra');

module.exports = function buildPageTemplate(injected, buildOption) {
  const pageDir = path.parse(buildOption.currentPagePath);
  const dir = pageDir.dir.slice(pageDir.dir.indexOf(buildOption.srcPath) + buildOption.srcPath.length).replace(`/${pageDir.name}`, '');
  try{
    fsx.ensureDirSync(path.join(buildOption.builtTemplatePath, dir));
    fs.writeFileSync(path.join(buildOption.builtTemplatePath, dir, pageDir.base), injected);
  } catch (e) {
    throw `[webpack-component-loader]: something wrong with building page template`;
  }
}