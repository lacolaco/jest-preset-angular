(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(110)),i={id:"options",title:"Options"},s={unversionedId:"getting-started/options",id:"version-8.x/getting-started/options",isDocsHomePage:!1,title:"Options",description:"jest-preset-angular uses ts-jest options under the hood, which are located under the globals of Jest config object",source:"@site/versioned_docs/version-8.x/getting-started/options.md",slug:"/getting-started/options",permalink:"/jest-preset-angular/docs/getting-started/options",editUrl:"https://github.com/thymikee/jest-preset-angular/edit/master/website/versioned_docs/version-8.x/getting-started/options.md",version:"8.x",sidebar:"version-8.x-docs",previous:{title:"Presets",permalink:"/jest-preset-angular/docs/getting-started/presets"},next:{title:"Test environment",permalink:"/jest-preset-angular/docs/getting-started/test-environment"}},l=[{value:"Exposed configuration",id:"exposed-configuration",children:[]},{value:"Brief explanation of config",id:"brief-explanation-of-config",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"jest-preset-angular")," uses ",Object(o.b)("inlineCode",{parentName:"p"},"ts-jest")," options under the hood, which are located under the ",Object(o.b)("inlineCode",{parentName:"p"},"globals")," of Jest config object\nin the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file of your project, or through a ",Object(o.b)("inlineCode",{parentName:"p"},"jest.config.js"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"jest.config.ts")," file."),Object(o.b)("p",null,"More information about ",Object(o.b)("inlineCode",{parentName:"p"},"ts-jest")," options, see ",Object(o.b)("a",{parentName:"p",href:"https://kulshekhar.github.io/ts-jest/docs/next/getting-started/options"},"https://kulshekhar.github.io/ts-jest/docs/next/getting-started/options")),Object(o.b)("h3",{id:"exposed-configuration"},"Exposed configuration"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  globals: {\n    'ts-jest': {\n      tsconfig: '<rootDir>/tsconfig.spec.json',\n      stringifyContentPathRegex: '\\\\.html$',\n      astTransformers: {\n        before: [\n          'jest-preset-angular/build/InlineFilesTransformer',\n          'jest-preset-angular/build/StripStylesTransformer',\n        ],\n      },\n    },\n  },\n  transform: {\n    '^.+\\\\.(ts|js|html)$': 'ts-jest',\n  },\n  moduleFileExtensions: ['ts', 'html', 'js', 'json'],\n  moduleNameMapper: {\n    '^src/(.*)$': '<rootDir>/src/$1',\n    '^app/(.*)$': '<rootDir>/src/app/$1',\n    '^assets/(.*)$': '<rootDir>/src/assets/$1',\n    '^environments/(.*)$': '<rootDir>/src/environments/$1',\n  },\n  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],\n  snapshotSerializers: [\n    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',\n    'jest-preset-angular/build/AngularSnapshotSerializer.js',\n    'jest-preset-angular/build/HTMLCommentSerializer.js',\n  ],\n};\n")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Jest doesn't run in browser nor through dev server. It uses ",Object(o.b)("inlineCode",{parentName:"p"},"JSDOM")," to abstract browser environment. So we have to cheat\na little and inline our templates and get rid of styles (",Object(o.b)("strong",{parentName:"p"},"we're not testing CSS"),") because otherwise Angular will try\nto make ",Object(o.b)("inlineCode",{parentName:"p"},"XHR")," call for our templates and fail miserably."))),Object(o.b)("h3",{id:"brief-explanation-of-config"},"Brief explanation of config"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"we're using some ",Object(o.b)("inlineCode",{parentName:"li"},'"globals"')," to pass information about where our tsconfig.json file is that we'd like to be able to transform HTML files through ",Object(o.b)("inlineCode",{parentName:"li"},"ts-jest"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"transform"')," \u2013 run every TS, JS, or HTML file through so called ",Object(o.b)("em",{parentName:"li"},"Jest transformer"),"; this lets Jest understand non-JS syntax."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"moduleFileExtensions"')," \u2013 our modules are TypeScript and JavaScript files."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"moduleNameMapper"')," \u2013 if you're using absolute imports here's how to tell Jest where to look for them; uses regex."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"transformIgnorePatterns"')," \u2013 unfortunately some modules (like @ngrx) are released as TypeScript files, not pure JavaScript;\nin such cases we cannot ignore them (all node_modules are ignored by default), so they can be transformed through TS compiler\nlike any other module in our project."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"snapshotSerializers"')," - array of serializers which will be applied to snapshot the code. Note: by default angular adds\nsome angular-specific attributes to the code (like ",Object(o.b)("inlineCode",{parentName:"li"},"ng-reflect-*"),", ",Object(o.b)("inlineCode",{parentName:"li"},'ng-version="*"'),", ",Object(o.b)("inlineCode",{parentName:"li"},"_ngcontent-c*")," etc).\nThis package provides serializer to remove such attributes. This makes snapshots cleaner and more human-readable.\nTo remove such specific attributes use ",Object(o.b)("inlineCode",{parentName:"li"},"AngularNoNgAttributesSnapshotSerializer")," serializer. You need to\nadd ",Object(o.b)("inlineCode",{parentName:"li"},"AngularNoNgAttributesSnapshotSerializer")," serializer manually (see ",Object(o.b)("a",{parentName:"li",href:"https://github.com/thymikee/jest-preset-angular/blob/master/e2e/test-app-v9/package.json#L47-L51"},Object(o.b)("inlineCode",{parentName:"a"},"test")," app configuration"),").")))}p.isMDXComponent=!0}}]);