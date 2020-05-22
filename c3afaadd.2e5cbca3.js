(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{190:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),i=t(10),o=(t(0),t(204)),c={title:"Avoid Excessive Branching"},a={id:"avoid-excessive-branching",title:"Avoid Excessive Branching",description:"Avoid excessive branching in component code; it hurts readability.",source:"@site/docs/avoid-excessive-branching.md",permalink:"/docs/avoid-excessive-branching",sidebar:"docs",previous:{title:"Components Can't Be Delegates Directly",permalink:"/docs/components-cant-be-delegates"},next:{title:"Check for Nil",permalink:"/docs/check-for-nil"}},l=[],s={rightToc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Avoid excessive branching in component code; it hurts readability."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-objectivec-redhighlight"}),"+ (instancetype)newWithArticle:(Article *)article\n{\n  CKComponent *headerComponent;\n  if (article.featured) {\n    headerComponent = [FeaturedArticleHeaderComponent newWithArticle:article];\n  } else {\n    headerComponent = [RegularArticleHeaderComponent newWithArticle:article];\n  }\n\n  UIEdgeInsets insets = {10, 10, 10, 10};\n  CGFloat imageSize = 20;\n  if (iPad) {\n    insets = {20, 20, 20, 20};\n    imageSize = 40;\n  }\n\n  return [super newWithComponent:\n          [CKFlexboxComponent\n           newWithView:{}\n           size:{}\n           style:{}\n           children:{\n             {headerComponent},\n             {[ArticleTextComponent\n               newWithArticle:article\n               insets:insets\n               imageSize:imageSize]},\n           }]]\n}\n")),Object(o.b)("p",null,"If you find yourself branching too much, consider separating your component into smaller components and composing them."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-objectivec"}),"+ (instancetype)newWithArticle:(Article *)article\n{\n  return [super newWithComponent:\n          [CKFlexboxComponent\n           newWithView:{}\n           size:{}\n           style:{}\n           children:{\n             // Encapsulates the choice of Featured or Regular header:\n             {[ArticleHeaderComponent newWithArticle:article]},\n             // Encapsulates insets and image size:\n             {[ArticleBodyComponent newWithArticle:article]},\n           }]]\n}\n")))}p.isMDXComponent=!0},204:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a({},n,{},e)),t},u=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?i.a.createElement(b,a({ref:n},s,{components:t})):i.a.createElement(b,a({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<o;s++)c[s]=t[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);