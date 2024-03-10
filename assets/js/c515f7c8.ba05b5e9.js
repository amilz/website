"use strict";(self.webpackChunknifty_docs=self.webpackChunknifty_docs||[]).push([[705],{9494:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=t(4848),a=t(8453);const i={sidebar_label:"Features",sidebar_position:1},o="Features",r={id:"asset/features",title:"Features",description:"Nifty is designed as a fully-featured digital asset standard for Solana, while also being lightweight and efficient. It is designed to be a minimalistic and flexible standard for representing non-fungible assets on Solana.",source:"@site/docs/asset/features.md",sourceDirName:"asset",slug:"/asset/features",permalink:"/nifty-docs/docs/asset/features",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/asset/features.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Features",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/nifty-docs/docs/asset/overview"},next:{title:"Nifty Assets",permalink:"/nifty-docs/docs/category/nifty-assets"}},l={},c=[{value:"Description of Features",id:"description-of-features",level:2},{value:"On-Chain Traits",id:"on-chain-traits",level:3},{value:"On-Chain Generic Data",id:"on-chain-generic-data",level:3},{value:"On-Chain Metadata",id:"on-chain-metadata",level:3},{value:"Royalty Enforcement",id:"royalty-enforcement",level:3},{value:"On-Chain Grouping/Collections",id:"on-chain-groupingcollections",level:3},{value:"Pointer to Off-Chain Data",id:"pointer-to-off-chain-data",level:3},{value:"Delegate System",id:"delegate-system",level:3},{value:"Locking and Unlocking of Assets",id:"locking-and-unlocking-of-assets",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"features",children:"Features"}),"\n",(0,s.jsx)(n.p,{children:"Nifty is designed as a fully-featured digital asset standard for Solana, while also being lightweight and efficient. It is designed to be a minimalistic and flexible standard for representing non-fungible assets on Solana."}),"\n",(0,s.jsx)(n.p,{children:"It has the following features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"On-chain traits via the Attributes extension"}),"\n",(0,s.jsx)(n.li,{children:"On-chain generic data (image, gif, etc.) via the Blob extension"}),"\n",(0,s.jsx)(n.li,{children:"On-chain metadata via the Metadata extension"}),"\n",(0,s.jsx)(n.li,{children:"Royalty enforcement via the Royalty and Creators extensions"}),"\n",(0,s.jsx)(n.li,{children:"On-chain grouping/collections via the Collection extension"}),"\n",(0,s.jsx)(n.li,{children:"Pointer to off-chain data via the Link extension"}),"\n",(0,s.jsx)(n.li,{children:"A delegate system with various roles"}),"\n",(0,s.jsx)(n.li,{children:"Locking and unlocking of assets (e.g. for escrowless marketplaces)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Nifty extensions can be combined to create a wide variety of non-fungible assets, from simple to complex. The standard is designed to be as flexible as possible, allowing for a wide range of use cases and\nyou only pay rent for the data you actually need."}),"\n",(0,s.jsx)(n.h2,{id:"description-of-features",children:"Description of Features"}),"\n",(0,s.jsx)(n.h3,{id:"on-chain-traits",children:"On-Chain Traits"}),"\n",(0,s.jsxs)(n.p,{children:["The Nifty ",(0,s.jsx)(n.code,{children:"Attributes"}),' extension allows creating a list of on-chain "traits" -- key/value pairs -- for an asset. The on-chain aspect means these values can be read by other Solana programs and therefore be used by them, e.g. for gaming.\nOff-chain attributes are also supported via the ',(0,s.jsx)(n.code,{children:"Metadata"})," or ",(0,s.jsx)(n.code,{children:"Links"})," extensions which allow pointing to external data, similar to other NFT standards on Solana."]}),"\n",(0,s.jsx)(n.h3,{id:"on-chain-generic-data",children:"On-Chain Generic Data"}),"\n",(0,s.jsxs)(n.p,{children:["The Nifty ",(0,s.jsx)(n.code,{children:"Blob"})," extension allows storing generic data on-chain, such as images, gifs, etc. This data can be read by other Solana programs and therefore be used by them, e.g. for displaying the asset in a marketplace.\nStoring large amounts of data in Solana account data is quite expensive, but this extension gives the ability for Fully On Chain (FOC) collections for those who wish for them."]}),"\n",(0,s.jsx)(n.h3,{id:"on-chain-metadata",children:"On-Chain Metadata"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Metadata"})," extension allows for the NFT to have a symbol and uri pointing to off-chain metadata, for compatibility with existing NFT standards.\nThis is one way to attach external data (e.g. image, description, traits) to a Nifty asset. In addition, the ",(0,s.jsx)(n.code,{children:"Links"})," extension is a more generic way to do this."]}),"\n",(0,s.jsx)(n.h3,{id:"royalty-enforcement",children:"Royalty Enforcement"}),"\n",(0,s.jsxs)(n.p,{children:["Nifty encodes royalty enforcement directly into its transfer instruction, ensuring that creators receive a portion of the proceeds from secondary sales. This is done via the ",(0,s.jsx)(n.code,{children:"Royalty"})," and ",(0,s.jsx)(n.code,{children:"Creators"})," extensions.\nThe ",(0,s.jsx)(n.code,{children:"Creators"})," extension specifies the recipients and share of any royalties. The ",(0,s.jsx)(n.code,{children:"Royalty"})," extension is a system of composable ",(0,s.jsx)(n.code,{children:"Constraints"})," that can be used to create restrictions such as an Allowlist or Denylist.\nThis can be used to exclude or include specific programs as valid owners of the asset, similar to the approach used by pNFTs in the Metaplex standard."]}),"\n",(0,s.jsx)(n.h3,{id:"on-chain-groupingcollections",children:"On-Chain Grouping/Collections"}),"\n",(0,s.jsxs)(n.p,{children:["Nifty Assets can be part of an on-chain group or collection using the ",(0,s.jsx)(n.code,{children:"Group"})," field on the Asset. A group asset is created and the members of the group point to the asset in their ",(0,s.jsx)(n.code,{children:"Group"})," field.\nThis can be used to specify attributes that are common to all assets in the group, such as Royalties or specific Traits. Transfers of members of a group also require the Group asset to be passed in so any potential royalties constraints can be evaluated."]}),"\n",(0,s.jsx)(n.h3,{id:"pointer-to-off-chain-data",children:"Pointer to Off-Chain Data"}),"\n",(0,s.jsxs)(n.p,{children:["In addition to the ",(0,s.jsx)(n.code,{children:"Metadata"})," extension discussed above, the ",(0,s.jsx)(n.code,{children:"Link"})," extension allows for a more generic way to point to off-chain data. This can be used to point to any off-chain data, not just metadata.\nThe ",(0,s.jsx)(n.code,{children:"Links"})," extension consists of a list of ",(0,s.jsx)(n.code,{children:"Link"})," structs, each of which contains a ",(0,s.jsx)(n.code,{children:"Name"})," and a ",(0,s.jsx)(n.code,{children:"Uri"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"delegate-system",children:"Delegate System"}),"\n",(0,s.jsx)(n.p,{children:"Nifty assets include a delegate system with the following roles:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Burn"}),"\n",(0,s.jsx)(n.li,{children:"Lock"}),"\n",(0,s.jsx)(n.li,{children:"Transfer"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This allows creating a delegate for a Nifty asset that can perform specific actions on behalf of the owner. This is useful for escrowless marketplaces, for example."}),"\n",(0,s.jsx)(n.h3,{id:"locking-and-unlocking-of-assets",children:"Locking and Unlocking of Assets"}),"\n",(0,s.jsx)(n.p,{children:"Nifty assets can be locked and unlocked. This is useful for applications such as escrowless marketplaces. When an asset is locked, it cannot be transferred. When an asset is unlocked, it can be transferred again."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(6540);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);