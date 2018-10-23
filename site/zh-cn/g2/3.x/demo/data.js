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
        demos: []
    };
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
            recommend: recommend,
            tag: tags,
            tags: tags ? tags.split(',') : null
        };
        demoByHref[href] = demo;
        demosByCategory[category].demos.push(demo);
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
    { root: '轴', children: ['隐藏轴线', '母子刻度', '复数值','轴排序'] },
    { root: '图例', children: ['图例跟随','图上图例','图例排序','激活部分图例'] },
    { root: '图形', children: [ '默认选中', '链接跳转', '联动', '下钻', '高亮' ] },
    { root: '提示信息', children: ['明细汇总', '鼠标可进入', '工具栏'] },
    { root: '辅助标注', children: [ '数据标注', '均值线', '预测线' ] },
    { root: '标签', children: [ '峰谷值', '最新值'] },
    { root: '仅看推荐' }
  ],
};
