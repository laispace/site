'use strict';
var _ = require('lodash');
var forIn = _.forIn;
var fs = require('fs');
var lstatSync = fs.lstatSync;
var readdirSync = fs.readdirSync;
var path = require('path');
var basename = path.basename;
var extname = path.extname;
var join = path.join;
var data = require('../data');
var plotByName = data.plotByName;
var renderMd = require('../../../../../lib/render-md');
var siteConfig = require('../../../../../site-config');
var base = siteConfig.base;
var assets = siteConfig.assets;
var pkg = siteConfig.pkg;

var isDirectory = function isDirectory(source) {
    return lstatSync(source).isDirectory();
};
var isFile = function isFile(source) {
    return lstatSync(source).isFile();
};
var getDirectories = function getDirectories(source) {
    return readdirSync(source).map(function (name) {
        return join(source, name);
    }).filter(isDirectory);
};
var getFiles = function getFiles(source) {
    return readdirSync(source).map(function (name) {
        return join(source, name);
    }).filter(isFile);
};

var demosByCategory = {};
var demoDirs = getDirectories(__dirname);
var demoByHref = {};
demoDirs.forEach(function (dir) {
    var category = basename(dir);
    var files = getFiles(dir).filter(function (file) {
        return extname(file) === '.html';
    });
    var plotInfo = plotByName[category] || {
        index: 0,
        title: category
    };
    demosByCategory[category] = {
        index: plotInfo.index,
        title: plotInfo.name || plotInfo.title,
        category: category,
        plot: plotInfo,
        subCat: {},
        demos: []
    };
    var demosCat = demosByCategory[category];
    files.forEach(function (file) {
        var _renderMd = renderMd(file),
            meta = _renderMd.meta;

        var index = meta.index,
            title = meta.title,
            recommend = meta.recommend,
            tags = meta.tags;
        var name = basename(file, '.html');
        var href = base + 'zh-cn/g2/3.x/demo/' + category + '/' + name + '.html';
        var demo = {
            screenshot: meta.screenshot || join(assets + '/dist/' + pkg.version + '/g2/3.x/', category + '/' + name + '.png'),
            screenshotDark: join(assets + '/dist/' + pkg.version + '/g2/3.x/', category + '/' + name + '-dark.png'),
            href: href,
            index: index,
            name: name,
            category: category,
            title: title,
            subCat: meta.subCat,
            recommend: recommend,
            tags: tags ? tags.split(',') : null
        };
        demoByHref[href] = demo;
        if(meta.subCat) {
          if (!demosCat.subCat[meta.subCat]) {
            demosCat.subCat[meta.subCat] = [];
          }
          demosCat.subCat[meta.subCat].push(demo);
        }
        demosCat.demos.push(demo);
    });
});
var demos = [];
forIn(demosByCategory, function (item) {
    demos.push(item);
    item.demos.sort(function (a, b) {
        return a.index - b.index;
    });
});
demos.sort(function (a, b) {
  return a.index - b.index;
});
module.exports = {
    navName: 'demo',
    demos: demos,
    template: 'g2-demo',
    canSwitchThemes: true,
    demosByCategory: demosByCategory,
    demoByHref: demoByHref,
    showFooter: false,
  // demo页搜索选项
    keywords: [
      { root: '辅助标注', children: [ '辅助标记', '辅助线', '趋势线', '分段颜色' ] },
      { root: '提示信息', children: ['自定义tooltip', 'tooltip加入统计值'] },
      { root: '图例', children: ['legend位置', '自定义legend', 'legend翻页'] },
      { root: '图形', children: ['自定义shape', '图形样式', '渐变填充'] },
      { root: '标签', children: [ 'label位置', 'label样式'] },
      { root: '轴', children: ['轴样式'] },
      { root: '数据', children: ['数据处理'] },
      { root: '伸缩' },
      { root: '仅看推荐' }
  ],
};
