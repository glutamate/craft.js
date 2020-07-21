(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(47),r=n(207),d=(n(0),n(208)),a=n(210),i={id:"useEditor",title:"useEditor()",sidebar_label:"useEditor()"},c={id:"api/useEditor",title:"useEditor()",description:"A Hook that provides methods and state information associated with the entire editor.",source:"@site/docs/api/useEditor.md",permalink:"/r/docs/next/api/useEditor",version:"next",sidebar_label:"useEditor()",sidebar:"docs",previous:{title:"<Element />",permalink:"/r/docs/next/api/element"},next:{title:"useNode()",permalink:"/r/docs/next/api/useNode"}},s=[{value:"Reference",id:"reference",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Collecting state information",id:"collecting-state-information",children:[]},{value:"Updating props",id:"updating-props",children:[]},{value:"Creating new Nodes",id:"creating-new-nodes",children:[]},{value:"Hiding and Deleting a Node",id:"hiding-and-deleting-a-node",children:[]},{value:"Moving a Node",id:"moving-a-node",children:[]},{value:"Getting the currently selected Node&#39;s descendants",id:"getting-the-currently-selected-nodes-descendants",children:[]},{value:"Displaying Drop Indicator for the best possible drop location",id:"displaying-drop-indicator-for-the-best-possible-drop-location",children:[]}]},{value:"Legacy API",id:"legacy-api",children:[{value:"Parameters",id:"parameters-1",children:[]},{value:"Injected Props",id:"injected-props",children:[]},{value:"Example",id:"example",children:[]}]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(d.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(d.b)(a.b,{type:"hook",mdxType:"Badge"}),Object(d.b)("p",null,"A Hook that provides methods and state information associated with the entire editor."),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"const { connectors, actions, query, ...collected } = useEditor(collector);\n")),Object(d.b)("h2",{id:"reference"},"Reference"),Object(d.b)("h3",{id:"parameters"},"Parameters"),Object(d.b)(a.a,{items:[["collector","(state: EditorState, query: Query) => Collected","A function that collects relevant state information from the editor state. The component will re-render when the values returned by this function changes."]],mdxType:"API"}),Object(d.b)("h3",{id:"returns"},"Returns"),Object(d.b)(a.a,{items:[[null,"Object",[["connectors","Object",[["select","(dom: HTMLElement, nodeId: NodeId) => HTMLElement","Specifies the DOM that when clicked will in turn click the specified Node's user component"],["hover","(dom: HTMLElement, nodeId: NodeId) => HTMLElement","Specifies the DOM that when hovered will in turn hover the specified Node's user component"],["drag","(dom: HTMLElement, nodeId: NodeId) => HTMLElement","Specifies the DOM that when dragged will move the specified Node's user component. Only applicable if the component is rendered as an immediate child of a &lt;Canvas /&gt; component."],["create","(dom: HTMLElement, userElement: React.ReactElement) => HTMLElement","Specifies the DOM that when dragged will create a new instance of the specified User Element at the drop location."]]],["actions","ActionMethods",[["add","(nodes: Node, parentId?: NodeId, index?: number) => void","Add a Node to the given parent node ID at the specified index. By default the parentId is the id of the Root Node"],["addNodeTree","(tree: NodeTree, parentId?: NodeId) => void","Add a NodeTree to the given parent node ID at the specified index. By default the parentId is the id of the Root Node"],["clearEvents","() => void","Resets the editors events state"],["delete","(nodeID: NodeId) => void","Delete the specified Node"],["deserialize","(data: SerializedNodes | string) => void","Recreate Nodes from a SerializedNodes object/json. This will clear all the current Nodes in the editor state with the recreated Nodes"],["move","(nodeId: NodeId, targetParentId: NodeId, index: number) => void","Move a Node to the specified parent Node at the given index."],["setProp","(nodeId: NodeId, update: (props: Object) => void) => void","Manipulate the props of the given Node"],["setCustom","(nodeId: NodeId, update: (custom: Object) => void) => void","Manipulate the custom values of the given Node"],["setHidden","(nodeId: NodeId, bool: boolean) => void","When set to true, the User Component of the specified Node will be hidden, but not removed"],["setOptions","(options: Object) => void","Update the editor's options. The options object passed is the same as the &lt;Editor /&gt; props."],["selectNode","(nodeId: NodeId | null) => void","Select the specified node. You can clear the selection by passing `null`"]]],["query","QueryMethods",[["getSerializedNodes","() => SerializedNodes","Return the current Nodes into a simpler form safe for storage"],["serialize","() => String","Return getSerializedNodes() in JSON"],["getOptions","() => Object","Get the options specified in the &lt;Editor /&gt; component"],["getDropPlaceholder","(sourceNodeId: NodeId, targetNodeId: NodeId, pos: {x: number, y: number}, nodesToDOM?: (node: Node) => HTMLElement = node => node.dom)","Given the target Node and mouse coordinates on the screen, determine the best possible location to drop the source Node. By default, the Node's DOM property is taken into consideration."],["node","(id: NodeId) => NodeHelpers","Returns an object containing helper methods to describe the specified Node. Click <a href='/craft.js/r/docs/api/helpers/'>here</a> for more information."],["parseReactElement","(element: React.ReactElement) => Object",[["toNodeTree","(normalize?: (node: Node, jsx: React.ReactElement) => void) => NodeTree","Parse a given React element into a NodeTree"]]],["parseSerializedNode","(node: SerializedNode) => Object",[["toNode","(normalize?: (node: Node) => void) => Node","Parse a serialized Node back into it's full Node form"]]],["parseFreshNode","(node: FreshNode) => Object",[["toNode","(normalize?: (node: Node) => void) => Node","Parse a fresh/new Node object into it's full Node form, ensuring all properties of a Node is correctly initia lised. This is useful when you need to create a new Node."]]]]],["inContext","boolean","Returns false if the component is rendered outside of the &lt;Editor /&gt;. This is useful if you are designing a general component that you also wish to use outside of Craft.js."],["...collected","Collected","The collected values returned from the collector"]]]],mdxType:"API"}),Object(d.b)("h2",{id:"examples"},"Examples"),Object(d.b)("h3",{id:"collecting-state-information"},"Collecting state information"),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import {useEditor} from "@craftjs/core";\n\nconst Example = () => {\n  const { hoveredNodeId } = useEditor((state) => ({\n    hoveredNodeId: state.events.hovered\n  }));\n\n  return (\n    <div>\n      The ID of the node currently being hovered is: {hoveredNodeId}\n    </div>\n  )\n}\n')),Object(d.b)("h3",{id:"updating-props"},"Updating props"),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import {useEditor} from "@craftjs/core";\n\nconst Example = () => {\n  const { selectedNodeId, actions: {setProp} } = useEditor((state) => ({\n    selectedNodeId: state.events.selected\n  }));\n\n  return (\n    <a\n      onClick={_ => {\n        setProp(selectedNodeId, props => {\n          props.text = "new value";\n        });\n      }}\n    >\n      Update\n    </a>\n  )\n}\n')),Object(d.b)("h3",{id:"creating-new-nodes"},"Creating new Nodes"),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"import {useEditor} from \"@craftjs/core\";\n\nconst Example = () => {\n  const { query, actions } = useEditor((state, query) => ({\n    hoveredNodeId: state.events.hovered\n  }));\n\n  return (\n    <div>\n      <a onClick={() => {\n        const nodeTree = query.parseReactElement(<h2>Hi</h2>).toNodeTree();\n        actions.addNodeTree(nodeTree);\n      }}>\n        Add a new Node from a React Element\n      </a>\n        \n      <a onClick={() => {\n        // A fresh Node is a partial Node object\n        // where only the data.type property is required\n        const freshNode = {\n            data: {\n                type: 'h1'\n            }\n        };\n        \n        // Create a new valid Node object from the fresh Node\n        const node = query.parseFreshNode(freshNode).toNode();\n        actions.add(node, 'ROOT');\n      }}>\n        Add a new Node from a Node object\n      </a>\n    </div>\n  )\n}\n")),Object(d.b)("h3",{id:"hiding-and-deleting-a-node"},"Hiding and Deleting a Node"),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const Example = () => {\n  const {selectedNodeId, actions} = useEditor((state) => ({\n    selectedNodeId: state.events.selected\n  }));\n  return selectedNodeId && (\n    <div>\n      <h2>Node selected: {selectedNodeId}</h2>\n      <a onClick={() => actions.hide(selectedNodeId)}>Hide</a>\n      <a onClick={() => actions.delete(selectedNodeId)}>Delete</a>\n    </div>\n  )\n}\n")),Object(d.b)("h3",{id:"moving-a-node"},"Moving a Node"),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'const Example = () => {\n  const [sourceId, setSourceId] = useState();\n  const [targetId, setTargetId] = useState();\n  \n  const {selectedNodeId, actions, query} = useEditor((state) => ({\n    selectedNodeId: state.events.selected\n  }));\n\n  return selectedNodeId && (\n    <div>\n      <h2>Node selected: {selectedNodeId}</h2>\n      <div>\n        <input type="text" value={sourceId} placeholder="Source" disabled />\n        <button onClick={() => selectedNodeId && setSourceId(selectedNodeId)}>Set selected Node as source</button>\n      </div>\n      <div>\n        <input type="text" value={targetId} placeholder="Target" disabled />\n        <button onClick={() => selectedNodeId && setTargetId(selectedNodeId)}>Set selected Node as target</button>\n      </div>\n      {\n        sourceId && targeId ? (\n          <button onClick={() => {\n            try {\n              // .canDropInParent will throw an error message if the conditions failed\n              query.canDropInParent(sourceId, targetId); \n              actions.move(sourceId, targetId);\n            } catch (e) {\n              console.error(e.message);\n            } \n          }}>Move Node</button>\n        )\n      }\n    </div>\n  )\n}\n')),Object(d.b)("h3",{id:"getting-the-currently-selected-nodes-descendants"},"Getting the currently selected Node's descendants"),Object(d.b)("blockquote",null,Object(d.b)("p",{parentName:"blockquote"},"Query methods are also accessible from within the collector function.")),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import {useEditor} from "@craftjs/core";\n\nconst Example = () => {\n  const { selectedDescendants } = useEditor((state, query) => ({\n    selectedDescendants: state.events && query.node(state.events.selected).descendants().map(node => node.id)\n  }));\n\n  return (\n    <ul>\n      {\n        selectedDescendants && selectedDescendants.map(id => <li>{id}</li> )\n      }\n    </ul>\n  )\n}\n')),Object(d.b)("h3",{id:"displaying-drop-indicator-for-the-best-possible-drop-location"},"Displaying Drop Indicator for the best possible drop location"),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'const Example = () => {\n  const [screenClick, setScreenClick] = useState(false);\n  const [sourceId, setSourceId] = useState();\n  const [targetId, setTargetId] = useState();\n  \n  const {selectedNodeId, actions, query} = useEditor((state) => ({\n    selectedNodeId: state.events.selected\n  }));\n\n  const disableScreenClick = useEffect((e) => {\n     if(e.key === "Escape") {\n       setScreenClick(false);\n    }\n  }, [screenClick]);\n\n  const clickOnScreen = useEffect((e) => {\n    const {clientX: x, clientY: y} = e;\n    const dropIndicator = query.getDropIndicator(sourceId, targetId, {x, y});\n    actions.setDropIndicator(dropIndicator);\n  }, [screenClick]);\n  \n\n  useEffect(() => {\n    window.addEventListener("click", clickOnScreen);\n    window.addEventListener("keyup", disableScreenClick);\n    return (() => {\n      window.removeEventListener("click", clickOnScreen);\n      window.removeEventListener("keyup", disableScreenClick);\n    })\n  }, [clickOnScreen, disableScreenClick]);\n\n  return selectedNodeId && (\n    <div>\n      <h2>Node selected: {selectedNodeId}</h2>\n      <div>\n        <input type="text" value={sourceId} placeholder="Source" disabled />\n        <button onClick={() => selectedNodeId && setSourceId(selectedNodeId)}>Set selected Node as source</button>\n      </div>\n      <div>\n        <input type="text" value={targetId} placeholder="Target" disabled />\n        <button onClick={() => selectedNodeId && setTargetId(selectedNodeId)}>Set selected Node as target</button>\n      </div>\n      {\n        sourceId && targeId ? (\n          <button onClick={() => {\n            setScreenClick(true);\n          }}>\n            {screenClick ? "Click anywhere on the screen to display indicator" : "Start"}\n          </button>\n        )\n      }\n    </div>\n  )\n}\n')),Object(d.b)("h2",{id:"legacy-api"},"Legacy API"),Object(d.b)("p",null,"For Class Components, use ",Object(d.b)("inlineCode",{parentName:"p"},"connectEditor")," instead."),Object(d.b)(a.b,{type:"hoc",title:!1,mdxType:"Badge"}),Object(d.b)("h3",{id:"parameters-1"},"Parameters"),Object(d.b)(a.a,{items:[["collector","(node: Node) => Collected","A function that collects relevant state information from the corresponding Node. The component will re-render when the values returned by this function changes."]],mdxType:"API"}),Object(d.b)("h3",{id:"injected-props"},"Injected Props"),Object(d.b)(a.a,{items:[["...useEditor(collector)","Object","Identical return values as the useEditor() hook above"]],mdxType:"API"}),Object(d.b)("h3",{id:"example"},"Example"),Object(d.b)("pre",null,Object(d.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'import { connectEditor } from "@craftjs/core";\n\nclass SidebarInner extends React.Component {\n  render() {\n    const { actions, query, enabled, currentSelectedNodeId } = this.props;\n    return (\n      <div>\n        <input type="checkbox" value={enabled} onChange={\n          e => actions.setOptions(options => options.enabled = !enabled)\n        } />\n        <button \n          onClick={() => {\n            console.log(query.serialize())\n          }}\n        >\n            Serialize JSON to console\n        </button>\n      </div>\n    )\n  }\n}\n\nexport const Sidebar = connectEditor((state) => ({\n  currentSelectedNodeId: state.events.selected\n}))(SidebarInner);\n')))}u.isMDXComponent=!0},207:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r={},d=Object.keys(e);for(o=0;o<d.length;o++)n=d[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return o}))},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},d=Object.keys(e);for(o=0;o<d.length;o++)n=d[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(o=0;o<d.length;o++)n=d[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,d=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,b=u["".concat(a,".").concat(m)]||u[m]||p[m]||d;return n?r.a.createElement(b,i(i({ref:t},s),{},{components:n})):r.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var d=n.length,a=new Array(d);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<d;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},209:function(e,t,n){"use strict";var o=n(0),r=n(48);t.a=function(){return Object(o.useContext)(r.a)}},210:function(e,t,n){"use strict";var o=n(0),r=n.n(o),d=function(e){var t=e.item,n=t[0],o=t.length>1&&"string"==typeof t[1]&&t[1],d=3==t.length?"string"==typeof t[2]&&t[2]:4==t.length&&"string"==typeof t[3]&&t[3],i=t.length>1&&Array.isArray(t[t.length-1])&&t[t.length-1];return r.a.createElement("li",{className:"api-item"},r.a.createElement("div",null,n&&r.a.createElement("code",{className:"api-title"},n),o&&r.a.createElement("strong",{className:"api-type"},o)),d&&r.a.createElement("div",{className:"api-description",dangerouslySetInnerHTML:{__html:d}}),i&&r.a.createElement(a,{items:i}))},a=function(e){var t=e.items;return r.a.createElement("ul",null,t&&t.map((function(e,t){return r.a.createElement(d,{item:e,key:t})})))},i=function(e){var t,n=e.type,o=e.title,d=void 0===o||o,a=e.noMargin,i=void 0===a||a;switch(n){case"hoc":t="Higher-Order Component";break;default:t=n[0].toUpperCase()+n.substring(1)}return r.a.createElement("div",{className:"badge-wrapper"},r.a.createElement("span",{className:"badge badge-"+n+" "+(d?"badge-title":"")+" "+(i?"badge-no-margin":"")},t))},c=n(209),s=function(e){var t=e.img,n=Object(c.a)().siteConfig.baseUrl;return r.a.createElement("div",{className:"img-wrapper"},r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("img",{src:n+"img/"+t})))};n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"b",(function(){})),n.d(t,"c",(function(){return s}))}}]);