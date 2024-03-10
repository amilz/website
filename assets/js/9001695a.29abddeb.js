"use strict";(self.webpackChunknifty_docs=self.webpackChunknifty_docs||[]).push([[384],{3114:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=t(4848),a=t(8453);const o={sidebar_label:"Overview",sidebar_position:0},i="Overview",r={id:"asset/overview",title:"Overview",description:'Current NFT standards on Solana are built on top of SPL Token, which is a fungible token program. A non-fungible is created by adding restrictions to fungible mints \u2013 i.e., for a mint to be considered "non-fungible", it must have supply 1, decimals 0 and no mint authority. As a consequence, NFT standards carry "baggage" from the requirements of fungibles to represent non-fungibles. For example, non-fungibles have a supply of 1 by definition, but you still need a separate mint and token accounts.',source:"@site/docs/asset/overview.md",sourceDirName:"asset",slug:"/asset/overview",permalink:"/nifty-docs/docs/asset/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/asset/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"Overview",sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Nifty Asset Program",permalink:"/nifty-docs/docs/category/nifty-asset-program"},next:{title:"Features",permalink:"/nifty-docs/docs/asset/features"}},d={},c=[];function l(e){const n={h1:"h1",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:'Current NFT standards on Solana are built on top of SPL Token, which is a fungible token program. A non-fungible is created by adding restrictions to fungible mints \u2013 i.e., for a mint to be considered "non-fungible", it must have supply 1, decimals 0 and no mint authority. As a consequence, NFT standards carry "baggage" from the requirements of fungibles to represent non-fungibles. For example, non-fungibles have a supply of 1 by definition, but you still need a separate mint and token accounts.'}),"\n",(0,s.jsx)(n.p,{children:"Requiring a separate mint and token accounts is wasteful and adds complexity (e.g., more accounts validation) to a standard. In the vast majority of the cases, the only information required from a non-fungible token account is the holder (owner) address, given that the amount is always expected to be 1. At the same time, a token account takes 165 bytes of storage. Additionally, SPL Token - even including Token Extensions (a.k.a., SPL Token 2022) - does not enforce constraints to define different token standards."}),"\n",(0,s.jsx)(n.p,{children:"Since different token standards will usually be defined in separate programs, the end result is a bloated standard with multiple accounts \u2013 e.g., mint, token and (potentially) metadata accounts, in addition to SPL Token and a Metadata programs. For most operations, all 5 accounts would be needed to interact with a non-fungible \u2013 and there are standards that the number of accounts is even higher."}),"\n",(0,s.jsx)(n.p,{children:'Nifty Asset takes a different approach and re-imagines how non-fungibles are represented on Solana. In essense, a non-fungible asset is a unique slab of bytes on the blockchain identified by an address and it has an specific holder. When you transfer the "ownership" of this slab of bytes, you are changing the holder information of it. The contents of a non-fungible is as flexible as possible, given that they are "just" a slab of bytes \u2013 all data can be on-chain, or it can have "pointers" to external resources.'}),"\n",(0,s.jsx)(n.p,{children:"Following this approach, Nifty Asset was created to represent non-fungible assets with performance and composability in mind:"}),"\n",(0,s.jsx)(n.p,{children:"The program is lightweight and uses a minimal set of accounts (singe account to represent an asset).\nAll design decisions were made to optimize compute units consumption.\nZero-copy (bytemuck) is used to avoid (de-)serialization overheads."})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(6540);const a={},o=s.createContext(a);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);