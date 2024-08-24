'use client'

import { classNames, shuffle } from '@/app/lib/utils'
import { Tab, Transition } from '@headlessui/react'
import { useState } from 'react'
import { tab } from './_component/Text'
import ProjectTab from './_component/Tab/ProjectTab'
import { BadgeholderMetrics } from '@/app/(white_navbar)/explore/RetroPGF4/RetroType4'
import HistorySection from '@/app/component/HistorySection'
import StatisticSection from '@/app/component/StatisticSection'
import BadgeholderSection from '@/app/(white_navbar)/explore/RetroPGF4/_component/Tab/BadgeholderTab'

import { RetroPGF5Project } from './type'
import { makeRequest } from '@/app/hook/makeRequest'

interface iCpage {
  // projectData: RetroPGF5Project[]
  badgeholderData: BadgeholderMetrics[]
}

export const getRealTimeRetroPGF5 = () => {
  const data: RetroPGF5Project[] = [
    {
      name: 'Nfts ',
      description: 'nft creation ',
      projectAvatarUrl:
        'https://storage.googleapis.com/op-atlas/39cfa64d-46e8-43a1-9bf8-baf6d41de613.png',
      projectCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/f43cc8a7-8575-45c8-843f-01f9830befd0.png',
      category: 'NFT',
      osoSlug: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: null,
        mirror: null,
      },
      team: ['427926'],
      github: [],
      packages: [],
      contracts: [],
      grantsAndFunding: {
        ventureFunding: [],
        grants: [],
        revenue: [],
      },
      pricingModel: 'free',
      pricingModelDetails: '',
      links: [],
    },
    {
      name: 'Nfts ',
      description: 'nft creation ',
      projectAvatarUrl:
        'https://storage.googleapis.com/op-atlas/39cfa64d-46e8-43a1-9bf8-baf6d41de613.png',
      projectCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/f43cc8a7-8575-45c8-843f-01f9830befd0.png',
      category: 'NFT',
      osoSlug: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: null,
        mirror: null,
      },
      team: ['427926'],
      github: [],
      packages: [],
      contracts: [],
      grantsAndFunding: {
        ventureFunding: [],
        grants: [],
        revenue: [],
      },
      pricingModel: 'free',
      pricingModelDetails: '',
      links: [],
    },
    {
      name: 'Nfts ',
      description: 'nft creation ',
      projectAvatarUrl:
        'https://storage.googleapis.com/op-atlas/39cfa64d-46e8-43a1-9bf8-baf6d41de613.png',
      projectCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/f43cc8a7-8575-45c8-843f-01f9830befd0.png',
      category: 'NFT',
      osoSlug: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: null,
        mirror: null,
      },
      team: ['427926'],
      github: [],
      packages: [],
      contracts: [],
      grantsAndFunding: {
        ventureFunding: [],
        grants: [],
        revenue: [],
      },
      pricingModel: 'free',
      pricingModelDetails: '',
      links: [],
    },
    {
      name: 'Nfts ',
      description: 'nft creation ',
      projectAvatarUrl:
        'https://storage.googleapis.com/op-atlas/39cfa64d-46e8-43a1-9bf8-baf6d41de613.png',
      projectCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/f43cc8a7-8575-45c8-843f-01f9830befd0.png',
      category: 'NFT',
      osoSlug: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: null,
        mirror: null,
      },
      team: ['427926'],
      github: [],
      packages: [],
      contracts: [],
      grantsAndFunding: {
        ventureFunding: [],
        grants: [],
        revenue: [],
      },
      pricingModel: 'free',
      pricingModelDetails: '',
      links: [],
    },
    {
      name: 'MonstersOnBase',
      description:
        "Hello, I am a designer. I am an artificial intelligence designer. I am 25 years old. I'm from Turkey. I need some support. I want to do more for Optimisim. I don't know much about Github. But everything I did here is as you want. I increased the on-chain activity and interacted with 420 wallets.",
      projectAvatarUrl:
        'https://storage.googleapis.com/op-atlas/ef7bc6d3-c915-4390-9d7f-f781d6f7fea3.png',
      projectCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/6cf81b2e-43b7-4645-ab66-39f71cb1132b.png',
      category: 'NFT',
      osoSlug: 'MonstersOnBase',
      socialLinks: {
        website: ['https://element.market/collections/monstersonbase'],
        farcaster: [],
        twitter: null,
        mirror: null,
      },
      team: ['569945'],
      github: [
        {
          url: 'https://github.com/mali030303/MonstersOnBasee',
          name: null,
          description: null,
        },
      ],
      packages: [],
      contracts: [],
      grantsAndFunding: {
        ventureFunding: [],
        grants: [],
        revenue: [],
      },
      pricingModel: 'freemium',
      pricingModelDetails:
        'Our price is the lowest fee. Our goal is community before money. It is usually a fee like 0.00001 Eth that everyone can reach.',
      links: [],
    },
    {
      name: 'MonstersOnBase',
      description:
        "Hello, I am a designer. I am an artificial intelligence designer. I am 25 years old. I'm from Turkey. I need some support. I want to do more for Optimisim. I don't know much about Github. But everything I did here is as you want. I increased the on-chain activity and interacted with 420 wallets.",
      projectAvatarUrl:
        'https://storage.googleapis.com/op-atlas/ef7bc6d3-c915-4390-9d7f-f781d6f7fea3.png',
      projectCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/6cf81b2e-43b7-4645-ab66-39f71cb1132b.png',
      category: 'NFT',
      osoSlug: 'MonstersOnBase',
      socialLinks: {
        website: ['https://element.market/collections/monstersonbase'],
        farcaster: [],
        twitter: null,
        mirror: null,
      },
      team: ['569945'],
      github: [
        {
          url: 'https://github.com/mali030303/MonstersOnBasee',
          name: null,
          description: null,
        },
      ],
      packages: [],
      contracts: [],
      grantsAndFunding: {
        ventureFunding: [],
        grants: [],
        revenue: [],
      },
      pricingModel: 'freemium',
      pricingModelDetails:
        'Our price is the lowest fee. Our goal is community before money. It is usually a fee like 0.00001 Eth that everyone can reach.This is true for all the projects I do.',
      links: [],
    },
    {
      name: 'BASE BTC EARTH 🌍',
      description:
        "Hello, I am a designer. I am an artificial intelligence designer. I am 25 years old. I'm from Turkey. I need some support. I want to do more for Optimisim. I don't know much about Github. But everything I did here is as you want. I increased the on-chain activity and interacted with 420 wallets. https://element.market/collections/base-btc-earth",
      projectAvatarUrl:
        'https://storage.googleapis.com/op-atlas/f7b97236-dce1-4e44-873c-74bb5f31b49c.png',
      projectCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/963d18b8-32a1-4d7c-a09a-640cd20e4f22.png',
      category: 'NFT',
      osoSlug: 'BASE BTC EARTH 🌍',
      socialLinks: {
        website: ['https://element.market/collections/base-btc-earth'],
        farcaster: [],
        twitter: null,
        mirror: null,
      },
      team: ['569945'],
      github: [
        {
          url: 'https://github.com/mali030303/BASE-BTC-EARTH--',
          name: null,
          description: null,
        },
      ],
      packages: [],
      contracts: [],
      grantsAndFunding: {
        ventureFunding: [],
        grants: [],
        revenue: [],
      },
      pricingModel: 'pay_to_use',
      pricingModelDetails:
        'Our price is the lowest fee. Our goal is community before money. It is usually a fee like 0.00001 Eth that everyone can reach.This is true for all the projects I do.',
      links: [],
    },
    {
      name: 'Dragons On Op Stack 🔴',
      description:
        "Hello, I am a designer. I am an artificial intelligence designer. I am 25 years old. I'm from Turkey. I need some support. I want to do more for Optimisim. I don't know much about Github. But everything I did here is as you want. I increased the on-chain activity and interacted with 420 wallets.",
      projectAvatarUrl:
        'https://storage.googleapis.com/op-atlas/7d8db529-7225-43f2-bc2c-ade2f7aaf7af.png',
      projectCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/af6a4fb6-52e3-4570-840a-e6c949ff905e.png',
      category: 'NFT',
      osoSlug: 'Dragons On Op Stack 🔴',
      socialLinks: {
        website: ['https://element.market/collections/dragons-on-op-stack'],
        farcaster: [],
        twitter: null,
        mirror: null,
      },
      team: ['569945'],
      github: [
        {
          url: 'https://github.com/mali030303/Dragons-On-Op-Stack--',
          name: null,
          description: null,
        },
      ],
      packages: [],
      contracts: [],
      grantsAndFunding: {
        ventureFunding: [],
        grants: [],
        revenue: [],
      },
      pricingModel: 'pay_to_use',
      pricingModelDetails:
        'Our price is the lowest fee. Our goal is community before money. It is usually a fee like 0.00001 Eth that everyone can reach.This is true for all the projects I do.',
      links: [],
    },
    {
      name: 'FANBASE ✨',
      description:
        'This is a fanbase community that operates in the field of social engagement.',
      projectAvatarUrl:
        'https://cdn.charmverse.io/user-content/6020d938-f07e-4f95-a756-5562f175762e/f6550061-4756-49ac-b3da-6dc87fd589a9/76716e6b0c575e52832cf0f58cae6f2c.jpg',
      projectCoverImageUrl:
        'https://cdn.charmverse.io/user-content/6020d938-f07e-4f95-a756-5562f175762e/906bad2e-6a95-4bba-9261-aeaf88ff7afe/Screenshot_20240823-030141_1.jpg',
      category: 'Social',
      osoSlug: '',
      socialLinks: {
        website: ['https://www.fanbase.app/'],
        farcaster: [
          'https://warpcast.com/denzooo',
          'https://warpcast.com/phynn',
          'https://warpcast.com/cepodr',
        ],
        twitter: '',
        mirror: null,
      },
      team: ['508591'],
      github: [],
      packages: [],
      contracts: [],
      grantsAndFunding: {
        ventureFunding: [],
        grants: [],
        revenue: [],
      },
      pricingModel: 'free',
      pricingModelDetails: '',
      links: [
        {
          url: 'https://news.fanbase.app/',
          name: 'Fanbase',
          description:
            'Fanbase is a FREE Next-Generation Social Media App that allows ANY user to earn money from day one.\nUnlike other social apps, Fanbase is the one place you can truly be you ',
        },
      ],
    },
    {
      name: 'Punk Shield',
      description:
        'Punkshield is an advanced security solution designed to protect your valuable digital assets. It offers a multi-signature (multi-sig) wallet, adding multiple layers of security to safeguard your crypto holdings. Punkshield allows users to enable two-factor authentication (2FA) through Email or Google Authenticator for enhanced protection. The platform also includes a mobile-friendly interface, making it easy to manage your assets on the go.',
      projectAvatarUrl:
        'https://storage.googleapis.com/op-atlas/7782a4d3-48ab-4027-b2ac-7685dd744470.png',
      projectCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/31d95f35-43e6-4c07-821b-70221b57e233.png',
      category: 'Utility',
      osoSlug: '',
      socialLinks: {
        website: ['https://punkshield.xyz/'],
        farcaster: ['https://warpcast.com/punkshield.eth'],
        twitter: 'https://x.com/Punkonbase',
        mirror: null,
      },
      team: ['841741'],
      github: [],
      packages: [],
      contracts: [
        {
          address: '0xD8461A9760D3DCE9b87259b7D1fB82c20656de3E',
          deploymentTxHash:
            '0xb2f1f9c12a683959b290825bdf408392a5ac2ae5c942ef57aaea25528e72a06f',
          deployerAddress: '0x2b9C5411E205E8Ea59C1BE1Da4EFdd5FFa7A8a23',
          verificationProof:
            '0x230f16e658a22aed665c57a4c2a95003a93eb9be4c85d89e741243abb8cd92b90309927a6d3e07b654a1e016ddc492568b58c5dcec49aacd5ee0e33cc08e48d81c',
          chainId: 8453,
        },
      ],
      grantsAndFunding: {
        ventureFunding: [],
        grants: [],
        revenue: [],
      },
      pricingModel: 'freemium',
      pricingModelDetails:
        'All basepunk holder can access this for free & who have not held basepunk nft, they need to pay 0.0013 Eth to create punkshiled wallet for one time fees.',
      links: [
        {
          url: 'https://basescan.org/tx/0xb2f1f9c12a683959b290825bdf408392a5ac2ae5c942ef57aaea25528e72a06f',
          name: 'Punk Shield',
          description:
            "Punkshield revolutionizes digital asset security by providing unmatched protection and peace of mind. With its multi-sig wallet, two-factor authentication, and seamless integration of advanced features like swapping and bridging, Punkshield empowers users to take control of their crypto assets confidently. It safeguards against potential threats, ensuring that users' investments remain secure and accessible, allowing them to focus on growth and innovation in the digital world. With Punkshield, your assets are not just protected—they're fortified for the future.",
        },
      ],
    },
    {
      name: 'Solady',
      description:
        "Solady is an open-source repository containing highly-optimized Solidity snippets. It offers efficient implementations of commonly-used libraries, such as MerkleProofLib, alongside cutting-edge features like LibZip.\n\nBy thoughtfully encapsulating low-level inline assembly within flexible APIs, Solady simplifies the process of writing clean and efficient Solidity code. More than just a library, Solady also serves as a learning resource and experimental laboratory for pioneering gas-optimization techniques.\n\nSolady is used in the codebases of Optimism and Coinbase.\n\nWith respect to the OP stack, Solady contributes in the following ways:\n- Provides a Solidity and JavaScript implementation of FastLZ compression algorithm, which is used for more accurate gas estimations in the Fjord upgrade. The JavaScript code is very minimal, allowing for it's easy translation into Go.\n- Various other utilities such as bytecode proxies and string operations.",
      projectAvatarUrl:
        'https://storage.googleapis.com/op-atlas/0e726459-df1e-4cea-bddb-25399f88acea.png',
      projectCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/0615ef25-edbb-4b19-934d-79614daf8040.png',
      category: 'Utility',
      osoSlug: '',
      socialLinks: {
        website: ['https://solady.org'],
        farcaster: [],
        twitter: 'https://twitter.com/optimizoor',
        mirror: null,
      },
      team: ['4686'],
      github: [
        {
          url: 'https://github.com/Vectorized/solady',
          name: 'Solady',
          description: 'Optimized Solidity snippets',
        },
      ],
      packages: [],
      contracts: [],
      grantsAndFunding: {
        ventureFunding: [],
        grants: [
          {
            grant: null,
            link: null,
            amount: '99379',
            date: '',
            details: null,
          },
          {
            grant: null,
            link: null,
            amount: '45018',
            date: '',
            details: null,
          },
        ],
        revenue: [],
      },
      pricingModel: 'free',
      pricingModelDetails: '',
      links: [
        {
          url: 'https://github.com/search?q=repo%3Aethereum-optimism%2Foptimism%20solady&type=code',
          name: 'Solady usage in Optimism',
          description: 'Solady usage in Optimism',
        },
      ],
    },
    {
      name: 'xuwinnie.review',
      description: 'Security Researcher.',
      projectAvatarUrl:
        'https://storage.googleapis.com/op-atlas/23976744-db3b-49b9-b5d4-3b629a28dd3a.png',
      projectCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/f7905adc-4525-4ea2-bc64-925690c7069c.png',
      category: 'Utility',
      osoSlug: '',
      socialLinks: {
        website: ['xuwinnie.review'],
        farcaster: [],
        twitter: null,
        mirror: null,
      },
      team: ['462511'],
      github: [
        {
          url: 'https://github.com/xuwinnie/reports',
          name: null,
          description: null,
        },
      ],
      packages: [],
      contracts: [],
      grantsAndFunding: {
        ventureFunding: [],
        grants: [],
        revenue: [],
      },
      pricingModel: 'freemium',
      pricingModelDetails: 'NA',
      links: [],
    },
    {
      name: 'Builderism',
      description: 'Make your op stack with just a few commands!',
      projectAvatarUrl:
        'https://storage.googleapis.com/op-atlas/e74ad0ba-d2bc-449d-9411-cbcad9bc8105.png',
      projectCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/c7c58454-c6b7-4ce0-8b5f-cd60576940f4.png',
      category: 'Utility',
      osoSlug: '',
      socialLinks: {
        website: ['https://github.com/rabbitprincess/builderism'],
        farcaster: [],
        twitter: null,
        mirror: null,
      },
      team: ['841662'],
      github: [
        {
          url: 'https://github.com/rabbitprincess/builderism',
          name: 'Builderism',
          description: 'Make your mainnet using OP Stack!',
        },
      ],
      packages: [],
      contracts: [],
      grantsAndFunding: {
        ventureFunding: [],
        grants: [],
        revenue: [],
      },
      pricingModel: 'free',
      pricingModelDetails: '',
      links: [],
    },
    {
      name: 'Moved Network',
      description:
        "We're building the next generation Ethereum L2 blockchain on Optimism OP Stack that supports the most secure Move smart contract language. Our goal is to help the security and parallel execution of Move meet Ethereum’s vast liquidity.",
      projectAvatarUrl:
        'https://storage.googleapis.com/op-atlas/4088a7f3-ba0f-4ec6-a6bc-ff4caaf666eb.png',
      projectCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/68088c9d-248f-4b4c-b8b7-1e8c52c5569a.png',
      category: 'Cross Chain',
      osoSlug: '',
      socialLinks: {
        website: ['https://moved.network'],
        farcaster: [],
        twitter: 'https://x.com/MovedNetwork',
        mirror: null,
      },
      team: ['831955'],
      github: [],
      packages: [],
      contracts: [],
      grantsAndFunding: {
        ventureFunding: [],
        grants: [
          {
            grant: null,
            link: null,
            amount: 'under-1m',
            date: '2024',
            details:
              'Received some of the pre-seed investment from 4 VCs and 2 angels. The rounds is still open for more investment.',
          },
        ],
        revenue: [],
      },
      pricingModel: 'pay_to_use',
      pricingModelDetails: 'Users pay for transaction fees',
      links: [
        {
          url: 'https://www.crunchbase.com/organization/moved-network',
          name: 'Crunchbase',
          description: 'Company investor profile',
        },
      ],
    },
    {
      name: 'xuwinnie.review',
      description: 'Security Researcher.',
      projectAvatarUrl:
        'https://storage.googleapis.com/op-atlas/23976744-db3b-49b9-b5d4-3b629a28dd3a.png',
      projectCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/f7905adc-4525-4ea2-bc64-925690c7069c.png',
      category: 'Utility',
      osoSlug: '',
      socialLinks: {
        website: ['xuwinnie.review'],
        farcaster: [],
        twitter: 'https://x.com/xuwinniexu',
        mirror: null,
      },
      team: ['462511'],
      github: [
        {
          url: 'https://github.com/xuwinnie/reports',
          name: null,
          description: null,
        },
      ],
      packages: [],
      contracts: [],
      grantsAndFunding: {
        ventureFunding: [],
        grants: [],
        revenue: [],
      },
      pricingModel: 'freemium',
      pricingModelDetails:
        'Factors include sloc, complexity, postive impact...',
      links: [],
    },
    {
      name: 'hildr',
      description:
        'Hildr is an OP Stack rollup node client written in Java 21. \n\nWe are OptimismJ who continue to build open source public goods to help the Ethereum and Optimism community get better and better. Our main work is on OP Stack core protocols and ecosystem tools and libraries. You can view more detailed information on our official website https://optimism-java.github.io .',
      projectAvatarUrl:
        'https://storage.googleapis.com/op-atlas/d304db21-cc7e-4236-8a63-a2a5161c4aee.png',
      projectCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/2d30ac8c-806b-4332-b596-c8b5faadc032.png',
      category: 'Utility',
      osoSlug: 'hildr-optimism-java',
      socialLinks: {
        website: ['https://optimism-java.github.io/hildr-docs'],
        farcaster: [],
        twitter: 'https://x.com/optimism_java',
        mirror: null,
      },
      team: ['193400', '754190'],
      github: [
        {
          url: 'https://github.com/optimism-java/hildr',
          name: '',
          description: '',
        },
      ],
      packages: [
        {
          url: 'https://github.com/optimism-java/hildr/pkgs/container/hildr',
          name: null,
          description: null,
        },
        {
          url: 'https://github.com/optimism-java/hildr/releases/tag/v0.4.4',
          name: null,
          description: null,
        },
      ],
      contracts: [],
      grantsAndFunding: {
        ventureFunding: [],
        grants: [
          {
            grant: null,
            link: null,
            amount: '62608.95',
            date: '',
            details: null,
          },
          {
            grant: 'token-house-mission',
            link: 'https://app.charmverse.io/op-grants/page-4923039239406415',
            amount: '25000',
            date: '2023-07-05',
            details: '',
          },
        ],
        revenue: [],
      },
      pricingModel: 'free',
      pricingModelDetails: '',
      links: [
        {
          url: 'https://www.opensource.observer/project/hildr-optimism-java',
          name: '',
          description: '',
        },
      ],
    },
    {
      name: 'op-besu',
      description:
        'Op-besu is an OP Stack execution client written in Java 21. We are OptimismJ who continue to build open source public goods to help the Ethereum and Optimism community get better and better. Our main work is on OP Stack core protocols and ecosystem tools and libraries. You can view more detailed information on our official website https://optimism-java.github.io .',
      projectAvatarUrl:
        'https://storage.googleapis.com/op-atlas/cccbc3c2-e7e4-4f1f-9eb9-110b9d3006dd.png',
      projectCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/11b27f90-aab4-4013-b554-1375533a88c5.png',
      category: 'Utility',
      osoSlug: '',
      socialLinks: {
        website: ['https://optimism-java.github.io/op-besu-docs'],
        farcaster: [],
        twitter: 'https://x.com/optimism_java',
        mirror: null,
      },
      team: ['193400'],
      github: ['https://github.com/optimism-java/op-besu'],
      packages: [],
      contracts: [],
      grantsAndFunding: {
        ventureFunding: [],
        grants: [
          {
            grant: 'token-house-mission',
            link: 'https://app.charmverse.io/op-grants/op-besu-an-op-stack-execution-client-based-on-hyperledger-besu-2818630304747294',
            amount: '50000',
            date: '2024-05-09',
            details: '',
          },
        ],
        revenue: [],
      },
      pricingModel: 'free',
      pricingModelDetails: '',
      links: [],
    },
  ]
  return data
}
export default function Cpage({ badgeholderData }: iCpage) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  let projectData: RetroPGF5Project[] = getRealTimeRetroPGF5()
  const data = shuffle(projectData)
  const filterUniqueData = data.filter((item, index, self) => {
    return index === self.findIndex((x) => x.name === item.name)
  })
  projectData = filterUniqueData

  function handleChangeSelectedIndex(index: number) {
    setSelectedIndex(index)
  }

  return (
    <>
      <Tab.Group
        selectedIndex={selectedIndex}
        onChange={handleChangeSelectedIndex}
      >
        <Tab.List className="border-b flex gap-2 min-[400px]:gap-6">
          {tab.map((item, i) => (
            <Tab
              key={i}
              // className="hover:text-primaryRed  cursor-pointer flex items-center gap-2 px-4 py-1.5 relative"
              className={({ selected }) =>
                classNames(
                  'hover:text-primaryRed  cursor-pointer flex items-center gap-2 px-1 py-1.5 relative outline-none lg:text-lg lg:font-medium text-base font-semibold',
                  selected ? 'text-slate-900' : 'text-slate-500'
                )
              }
            >
              <span className={`line-clamp-1`}>{item.text}</span>
              {item.index === selectedIndex && (
                <div className="absolute inset-x-0 bottom-0 h-1 bg-primaryRed animate-slideup"></div>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="outline-none">
            <Transition
              appear
              show={selectedIndex === 0}
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-200 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <ProjectTab projectData={projectData} />
            </Transition>
          </Tab.Panel>
          <Tab.Panel className="outline-none min-h-[70vh]">
            <Transition
              appear
              show={selectedIndex === 1}
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-200 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className="font-rubik">
                <HistorySection round={5} />
              </div>
            </Transition>
          </Tab.Panel>
          <Tab.Panel className="outline-none min-h-[70vh]">
            <Transition
              appear
              show={selectedIndex === 2}
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-200 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <StatisticSection data={projectData} round={5} />
            </Transition>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}
