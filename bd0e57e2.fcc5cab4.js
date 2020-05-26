(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{189:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var o=t(2),a=t(11),i=(t(0),t(201)),r={title:"Actions"},c={id:"actions",title:"Actions",description:"Often child components must communicate back to their parents. For example, a button component may need to signal that it has been tapped. Component actions provide a way to do this.",source:"@site/docs/actions.md",permalink:"/docs/actions",sidebar:"docs",previous:{title:"Responder Chain",permalink:"/docs/responder-chain"},next:{title:"State",permalink:"/docs/state"}},p=[{value:"What are Component Actions?",id:"what-are-component-actions",children:[]},{value:"Using Component Actions",id:"using-component-actions",children:[]},{value:"Why not blocks?",id:"why-not-blocks",children:[]},{value:"Hybrid Responder Chain",id:"hybrid-responder-chain",children:[]},{value:"Automatic Promotion",id:"automatic-promotion",children:[]},{value:"Explicit Demotion",id:"explicit-demotion",children:[]}],s={rightToc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Often child components must communicate back to their parents. For example, a button component may need to signal that it has been tapped. Component actions provide a way to do this."),Object(i.b)("h3",{id:"what-are-component-actions"},"What are Component Actions?"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"CKAction<T...>")," is an Objective-C++ class that wraps a ",Object(i.b)("inlineCode",{parentName:"p"},"SEL")," (basically a method name in Objective-C), and a target. ",Object(i.b)("inlineCode",{parentName:"p"},"CKAction<T...>")," allows you to specify the types of the arguments that are provided to the receiving method."),Object(i.b)("p",null,"Where possible, you should explicitly define the target of your action using either a component scope, or a target for non-Component targets."),Object(i.b)("p",null,"An action may be sent through the ",Object(i.b)("inlineCode",{parentName:"p"},"send")," function on ",Object(i.b)("inlineCode",{parentName:"p"},"CKAction"),", which takes the sender component, and the parameters to be passed to the receiver."),Object(i.b)("p",null,"For legacy reasons, we also support using ",Object(i.b)("inlineCode",{parentName:"p"},"CKActionSend"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"CKActionSend")," function takes an action, a sender, and an optional opaque context object. It follows the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/responder-chain"}),"component responder chain")," until it finds a component (or component controller) that responds to the given selector, then sends a message with the sender and context as parameters."),Object(i.b)("div",{class:"note-important"},Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"CKComponentActionSend")," must be called on the main thread.")),Object(i.b)("h3",{id:"using-component-actions"},"Using Component Actions"),Object(i.b)("p",null,"Here's an example of how to handle a component action."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-objectivec"}),"@implementation SampleComponent\n+ (instancetype)new\n{\n  CKComponentScope scope(self);\n  return [super newWithComponent:\n          [CKButtonComponent\n           newWithAction:{scope, @selector(someAction:event:)}\n           options:{}]];\n}\n\n- (void)someAction:(CKButtonComponent *)sender event:(UIEvent *)event\n{\n  // Do something\n}\n@end\n\n@implementation SampleOtherComponentThatDoesntCareAboutEvents\n+ (instancetype)new\n{\n  CKComponentScope scope(self);\n  return [super newWithComponent:\n          [CKButtonComponent\n           newWithAction:{scope, @selector(someAction:)}\n           options:{}]];\n}\n\n- (void)someAction:(CKButtonComponent *)sender\n{\n  // Do something\n}\n@end\n\n@implementation SampleOtherComponentThatDoesntCareAboutAnyParameters\n+ (instancetype)new\n{\n  CKComponentScope scope(self);\n  return [super newWithComponent:\n          [CKButtonComponent\n           newWithAction:{scope, @selector(someAction)}\n           options:{}]];\n}\n\n- (void)someAction\n{\n  // We don't take any arguments in this example.\n}\n@end\n\n@interface SampleControllerDelegatingComponentController : CKComponentController\n/** Component actions may be implemented either on the component, or the controller for that component. */\n- (void)someAction;\n@end\n\n@implementation SampleControllerDelegatingComponent\n+ (instancetype)new\n{\n  CKComponentScope scope(self);\n  return [super newWithComponent:\n          [CKButtonComponent\n           newWithAction:{scope, @selector(someAction)}\n           options:{}]];\n}\n@end\n\n@implementation SampleControllerDelegatingComponentController\n- (void)someAction\n{\n  // Do something\n}\n@end\n")),Object(i.b)("div",{class:"note-important"},Object(i.b)("p",null,"Component actions will only be sent up the component responder chain in a mounted component hierarchy. Trying to call send on a responder chain-based action from an unmounted component will raise an assertion. Use a scope-based component action if you need to send an action while not mounted.")),Object(i.b)("p",null),Object(i.b)("div",{class:"note-important"},Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"CKAction")," is a C++ object which can lead to subtle problems when a ",Object(i.b)("inlineCode",{parentName:"p"},"CKAction")," reference (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"CKAction &")," or ",Object(i.b)("inlineCode",{parentName:"p"},"const CKAction &"),") is captured by a block. The reason? C++ references are not managed by ARC, which can result in crashes that are difficult to debug. The best way to avoid this problem is the pass actions by value, or by explicitly creating a copy for use within the block.")),Object(i.b)("h3",{id:"why-not-blocks"},"Why not blocks?"),Object(i.b)("p",null,"Blocks might seem like a more natural way to specify callbacks. Unfortunately it's far too easy to introduce retain cycles when using blocks: components hold strong references to their child components, and the child might hold a block with a strong reference back to the parent."),Object(i.b)("h3",{id:"hybrid-responder-chain"},"Hybrid Responder Chain"),Object(i.b)("p",null,"Component actions begin traversal of the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/responder-chain"}),"component responder chain")," from the target or scoped component, or if neither are defined, at the sender of the action. They traverse upwards from there."),Object(i.b)("p",null,"In general, you should avoid using the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/responder-chain"}),"component responder chain"),", but for legacy reasons it still exists. Instead, you should use target- or scope-based actions, which will verify that the action is handled directly. If you use the scope-based component action, the type-checking machinery will verify that your component or controller responds to the selector with the expected param types (to the extent that Obj-C allows) at runtime."),Object(i.b)("h3",{id:"automatic-promotion"},"Automatic Promotion"),Object(i.b)("p",null,'In order to support a progressive adoption of typed actions, we allow automatic "promotion" of component actions. By promotion, we mean you can provide a component action that takes less arguments to a component that expects more arguments. So, for instance, you can provide a ',Object(i.b)("inlineCode",{parentName:"p"},"CKAction<id>(scope, @selector(actionWithSender:firstParam:))")," to a component that expects a ",Object(i.b)("inlineCode",{parentName:"p"},"CKAction<id, id>"),". At runtime, your method will simply not receive the additional parameters that it does not expect."),Object(i.b)("h3",{id:"explicit-demotion"},"Explicit Demotion"),Object(i.b)("p",null,'Legacy callsites also may use "demotion", but it is disabled by default. By demotion, we mean providing a component action that expects ',Object(i.b)("em",{parentName:"p"},"more")," parameters than handled. So for instance, this would be like passing ",Object(i.b)("inlineCode",{parentName:"p"},"CKAction<id, id, id>")," to a component which expects an action of type ",Object(i.b)("inlineCode",{parentName:"p"},"CKAction<id>"),". In this case, at action-call time we would be getting less parameters than we expected. For this reason, we have forced these conversions to be explicit. You must explicitly convert your action to demote it by calling the demoted copy constructor: ",Object(i.b)("inlineCode",{parentName:"p"},"CKAction<id>(CKAction<id, id, id>(scope, @selector(someMethodWithSender:param1:param2:param3:)))"),". At runtime the parameters that aren't provided by the action will be filled with zeros (so nil for object types, zerod structs or primitives)."))}l.isMDXComponent=!0},201:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return h}));var o=t(0),a=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},m=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(t),b=o,h=m["".concat(r,".").concat(b)]||m[b]||d[b]||i;return t?a.a.createElement(h,c({ref:n},s,{components:t})):a.a.createElement(h,c({ref:n},s))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<i;s++)r[s]=t[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);