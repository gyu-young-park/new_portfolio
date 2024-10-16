export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
export const gridItems = [
  {
    id: 1,
    title: "I enjoy studying and developing various software, and lately, I’ve been interested in Go, cloud, and SRE!",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "object-fill w-[100%] h-[100%] opacity-50",
    titleClassName: "text-white justify-end",
    img: "/gopher.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "Working with global collegues",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech stack",
    description: "My",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "O-RAN Opensource Contributor",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Learning new tech and trying challenging",
    description: "My driving power",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to see my tech post?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Near-RT RAN Intelligence Controller",
    des: "Near-RT RIC는 'Near Real Time RAN Intelligence Controller'로 기지국으로부터 대규모, 대용량 데이터를 받아 기지국을 Control하는 실시간 분산처리 kubernetest기반 cluster 입니다. \n",
    img: "/ric.svg",
    iconLists: ["linux.png","go.png", "py.png", "c++.png","docker-mark-blue.png", "kube.png", "helm.svg"],
    link: "ric",
  },
  // {
  //   id: 2,
  //   title: "xApp",
  //   des: "xApp은 RIC의 Near-RT RIC의 Application으로 Network Slice, QoS, ML model 등 고도화된 network 기능을 제공하는 고가용성 App입니다.",
  //   img: "/xapp.svg",
  //   iconLists: ["go.png", "docker-mark-blue.png","kube.png"],
  //   link: "xapp",
  // },
  {
    id: 3,
    title: "FPGA Data Management",
    des: "FDM은 DU의 FPGA register data를 관리하고 Cell의 상황에 따라 실시간으로 업데이트해주는 Linux Server입니다.",
    img: "/fdm.svg",
    iconLists: ["linux.png","c.png","c++.png"],
    link: "fdm",
  },
  // {
  //   id: 4,
  //   title: "Platform Engineering",
  //   des: "Platform 고도화 작업으로 EFK 구축, OpenTelemetry 도입, 해외연구소와 Test 자동화 협업 등을 하였습니다.",
  //   img: "/platform.svg",
  //   iconLists: ["go.png","fluentd.png","es.png","java.png","opentelemetry.png"],
  //   link: "platform",
  // },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "TOONPLUS!",
    role: "React, GraphQL, Blockchain SDK",
    desc: `(2021.12) 최종 9인까지 선발되어 발표를 진행했습니다. \n 한화생명 Blockchain 해커톤에 참가하여 NFT Webtoon Platform을 구축하였습니다. \n 2인 팀으로 구성되었고 frontend 개발을 담당하여 React와 Typescript, GraphQL을 사용해 Webtoon 구매, NFT 드롭, NFT chart 등을 구현하였습니다. `,
    className: "md:col-span-2",
    link: "https://www.youtube.com/watch?v=NEveFzVfiXU&list=PLcQsoPfbeJAEVRTvKAzTqM6h5DSA_2p3n&index=6",
    iconList: ["js.png","ts.png","react-icon.png", "graphql.png"],
    thumbnail: "/gopher10.webp",
  },
  {
    id: 2,
    title: "SELFIE 2 WEBTOON",
    role: "React, Flask, ML",
    desc: "(2020.10~2020.12) 캡스톤 대회 대상을 수상했습니다. \n 캡스톤을 위해 GAN AI model인 U-GAT-IT을 직접 구현 및 학습시켜 사람들의 얼굴을 웹툰 캐릭터로 변환하는 웹 사이트를 구축하였습니다 \n 3인 팀으로 구성되었고 저는 model 전처리, backend, frontend를 담당하였습니다. \n React와 Flask를 사용하여 구현하여 mobile에도 접근할 수 있도록 개발하였습니다.",
    className: "md:col-span-2", // change to md:col-span-2
    link: "https://www.youtube.com/watch?v=MzxnIA9rVHk",
    iconList: ["py.png","js.png","ts.png","react-icon.png"],
    thumbnail: "/gopher9.webp",
  },
  {
    id: 3,
    title: "블록체인과 인공지능을 이용한 웹툰 플랫폼",
    role: "React, Flask",
    desc: "(2020.9~2020.10) 2등 최우수상을 수상하였습니다. \n 교내 SW공모전에 참가하기위하여, 인공지능을 활용한 웹툰 플랫폼을 구축하여 작가의 작품을 보호하고 수익을 극대화하는 Webtoon 플랫폼을 구축하였습니다. \n 4인 팀으로 구성되었고 저는 react, flask를 사용하여 frontend, backend, blockchain SDK을 담당했습니다. \n blockchain을 이용하여 작가에게 직접 수익이 가도록하였습니다. \n NLP를 이용해 덧글을 검열하며, Steganography를 사용하여 작가의 작품이 외부 노출로부터 보호될 수 있도록 하였습니다. ",
    className: "md:col-span-2", // change to md:col-span-2
    link: "https://github.com/gyu-young-park/WebToonPlatforn_DS",
    iconList: ["py.png","js.png","ts.png","react-icon.png"],
    thumbnail: "/gopher8.webp",
  },
  {
    id: 4,
    title: "Klaytn을 활용한 의료 통합 플랫폼",
    role: "React, Nodejs",
    desc: "(2019.10) 2등 최우상을 수상하였습니다. \n 탈중앙화된 Blockchain network를 사용하는 의료 통합 플랫폼을 구축하여, 환자의 정보를 안전하게 전달할 수 있도록 만들었습니다. \n 1인으로 참가하여 Jquery와 Nodejs를 사용하여 frontend, backend를 구축하였습니다. \n blockchain 연동을 위해 klaytn js SDK를 사용하였고, ERC-721 token화하여 의료 데이터의 귀속성을 보장하였습니다. ",
    className: "md:col-span-2",
    link: "",
    iconList: ["js.png", "node.png"],
    thumbnail: "/gopher7.webp",
  },
  {
    id: 5,
    title: "자전거 경로 계획 페이지 제작",
    role: "React, Nextjs, Firebase",
    desc: "(2019.9~2019.12) 스타트업 산학 프로젝트으로 A+을 받았습니다. \n 자전거 관련 IT스타트업에서 랜딩 페이지, 자전거 길찾기 기능 개발을 산학 프로젝트로 요청하여 개발하였습니다. \n 5인 팀의 팀장으로 React를 사용한 frontend개발을 총괄하였습니다. \n 사내에 처음으로 Nextjs를 도입하였고 기업용 code이므로 Jest를 이용하여 test code를 관리하였습니다.",
    className: "md:col-span-2",
    link: "https://github.com/gyu-young-park/React_Google_Map_With_GraphHopper",
    iconList: ["react-icon.png", "next.svg"],
    thumbnail: "/gopher6.webp",
  },
  {
    id: 6,
    title: "서울시 관련 정보 제공 App개발",
    role: "Android(Java)",
    desc: "(2019.8~2019.9) 서울시 앱 개발 공모전에 참가하여 본선에 진출하였습니다. \n 서울시와 관련된 이벤트, 행사, 프로그램, 복지들을 보다 보기 쉽게 할 수 있도록 앱을 만들었습니다. \n reward 기능을 제공하여 zero pay와 연동해 zero pay의 활용성을 높였습니다. \n 4인 팀의 팀장으로 초기 화면과 OAuth2 Login, 크롤링 기능, Firebase 관리를 담당하였습니다. ",
    className: "md:col-span-2",
    link: "https://www.youtube.com/watch?v=h04ovjgFKsM",
    iconList: ["java.png", "android.webp"],
    thumbnail: "/gopher5.webp",
  },
  {
    id: 7,
    title: "청소기 로봇 제어 프로그램 제작",
    role: "JS, C++, ROS",
    desc: "(2019.1~2019.6) 스타트업 산학 프로젝트으로 A+을 받았습니다. \n Path Planning 기술을 바탕으로 각 agent들이 충돌하지않고 목적지까지 움직이도록 만드는 웹 시뮬레이터를 제작하였습니다. \n 시뮬레이션 결과를 기반으로 실제 robot청소기도 똑같이 동작하도록 driver 수정, 센싱 제어를 구현하였습니다. \n 5인 팀의 팀장으로서 시뮬레이터 frontend, backend를 구현하였고, robot 청소기 제어를 위한 ROS server도 구현하였습니다.",
    className: "md:col-span-2",
    link: "https://www.youtube.com/watch?v=CdyIP20YiBs",
    iconList: ["js.png" ,"c++.png", "ros.png"],
    thumbnail: "/gopher4.webp",
  },
  {
    id: 8,
    title: "결식 아동을 위한 결제 대행 DAPP",
    role: "JS, Nodejs, Solidity",
    desc: "(2018.10) 1등 대상을 수상하였습니다. \n 교내 SW공모전에 출품한 작품으로 blockchain을 활용하여 결식 아동들이 결제를 편리하게 할 수 있고, 공무원들이 함부로 결식 아동 카드를 남용하지 못하도록 하였습니다. \n 1인으로 참가하였고 JS로 화면을 구성하고 NodeJS로 서버를 구성하였습니다. Ethereum의 Solidity를 사용하여 smart contract를 구현하였습니다.",
    className: "md:col-span-2",
    link: "https://www.youtube.com/watch?v=CdyIP20YiBs",
    iconList: ["js.png" , "node.png", "solidity.png"],
    thumbnail: "/gopher3.webp",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  }
];

export const projectDetailList = [
  {
    id: "voma",
    img: "/voma.png",
    title: "Cloud VoMA",
    company: "Samsung Electronics Network Team",
    descriptions: [
      {
        subTitle: "1. VoMA cloud transformation",
        introduction: "Java기반의 VoMA application을 Cloud화 작업 진행 중 입니다.",
        iconLists: ["linux.png","go.png", "docker-mark-blue.png","kube.png", "helm.svg"],
        description: `VoMA Cloud화 Architecture 설계 참여, VoMA관련 Kubernetes manifest, Helm 작성 \n
          모니터링을 위한 Prometheus 도입  \n
          동적 Configuration을 위한 Golang기반의 VoMA Operator 개발, CRD 작성
          빌드, 배포 자동화 shell script 개발\n
          `,
        duration: "2024.8~현재"
      },
    ],
  },
  {
    id: "ric",
    img: "/near-rt-ric.webp",
    title: "Near-RT RIC Project",
    introduction: "",
    company: "Samsung Electronics Network Team",
    descriptions: [
      {
        subTitle: "1. Near-RT RIC Platform 유지, 보수",
        introduction: "Near-RT RIC Platform application과 infra에 관한 유지 보수 작업을 하였습니다. ",
        iconLists: ["linux.png","docker-mark-blue.png", "kube.png", "helm.svg"],
        description: `On-Premise 환경의 RIC 빌드, 배포, 테스트 자동화 script 개발 \n
          Helm chart, template 유지 보수 \n
          MSA기반 분산처리시스템인 Near-RT RIC Platform 버그 Fix 및 기능 추가 \n
          Go기반 component인 Rtmgr, Submgr, e2mgr, Appmgr pod에 대한 유지 보수 및 버그 Fix`,
          duration: "2022.7~2024.6"
      },
      {
        subTitle: "2. APIPorxy, ricctl 개발",
        introduction: "사업자의 On-Premise환경에서 배포되는 Near-RT RIC cluster를 운용자가 쉽게 제어하고 동작할 수 있도록 tool을 개발하였습니다.",
        iconLists: ["go.png", "py.png","docker-mark-blue.png", "kube.png", "redis2.png"],
        description: `FastAPI기반 APIProxy server를 개발하여 Near-RT RIC cluster에 대한 REST API 제공 \n
                      APIproxy server를 통해 cluster pod들에 필요한 동적 config 설정 등 reconciliation 기능 제공\n
                      Go cobra를 통해 ricctl CLI를 개발하여 APIProxy API호출, config 설정 자동화 기능 제공`,
        duration: "2023.7~2023.11"
      },
      {
        subTitle: "3. A1Mediator 개발 및 유지 보수",
        introduction: "A1Mediator는 Flask기반의 server로 Near-RT RIC cluster에 deploy되어 Non-RT RIC의 policy와 xApp사이의 policy 정합성을 관리해주는 server입니다.",
        iconLists: ["py.png", "kube.png", "redis2.png"],
        description: `Opensource기반 A1Mediator project 인수인계 및 버그 Fix \n
          O-RAN A1AP interface spec을 따르는 Policy관련 REST API 개발 \n
          O-RAN A1TP spec을 따르는 mTLS, OAuth2, JWT token 기능 구현 \n
          A1 Policy Data 관리 및 통계 정보 제공을 위한 A1Migration pod 추가 개발`,
        duration: "2023.3~2024.6"
      },
      // {
      //   subTitle: "4. A1Migration 개발",
      //   introduction: "O-RAN A1 spec에는 없는 A1Mediator 추가 기능 구현을 위한 별도의 pod가 필요하였습니다.",
      //   iconLists: ["py.png", "kube.png", "redis2.png"],
      //   description: `A1 spec에는 없지만 실제 사업자 운용중에 필요한 기능과 추가 요청 feature를 구현한 별도의 pod \n
      //   python thread기반으로 A1mediator의 policy 관련 metadata update 기능 개발 \n 
      //   현재 운용 중인 A1 policy 통계 정보 생성 기능 개발 \n
      //   현재 A1 policy 통계 정보를 EMS server로 제공하는 기능 개발`, 
      //   duration: "2024.3~2024.6"
      // },
      {
        subTitle: "4. Golang기반의 App개발",
        introduction: "O-RAN F1AP spec을 따르는 e2nodeConfig xApp과 RIC Platform 부하 test를 위한 Benchmark xApp을 개발하였습니다.",
        iconLists: ["go.png","kube.png", "redis2.png"],
        description: `Go기반 e2nodeConfig xApp을 개발하여 O-RAN F1AP spec을 준수하는 msg 생성, 파싱 및 통신 가능 개발\n
          Goroutine을 통한 F1AP msg처리 효율화 진행\n
          해외연구소와 협업하여 e2nodeConfig xApp과 무선 장비 simulator 테스트 자동화 \n
          xApp들이 고도화됨에 따라 e2nodeConfig xApp 기능을 golang library로 개발하여 제공 \n
          Go기반 Benchmarker xApp 개발하여 Near-RT RIC Platform의 성능을 평가 metrics 생성 \n
          코드 품질 강화 및 개선을 위해 xApp test code coverage 100% 달성\n`,
        duration: "2022.8~2023.5"
      },
      // {
      //   subTitle: "6. golang 기반의 xApp-benchmarker 개발",
      //   introduction: "xApp은 현장에서 대용량, 대규모 데이터를 실시간(1ms 이하)으로 고속 처리해야 하므로 성능 테스트가 중요했습니다.",
      //   iconLists: ["go.png","kube.png", "redis2.png"],
      //   description: `xApp-benchmarker를 개발하여 xApp과 Near-RT RIC Platform의 성능을 평가\n  
      //   초당 몇 건의 msg받았고 받은 msg의 용량 총합, msg 파싱에 걸린 시간 등에 대한 통계 제공 \n
      //     redis stream을 통한 실시간 모니터링 data 제공`,
      //   duration: "2022.11~2023.1"
      // },
      {
        subTitle: "5. Cloud-Native Infra(Prometheus, Kong ingress controller, EFK, OpenTelemetry)",
        introduction: "RIC Platform과 xApp 운영에 필요한 Infra관리",
        iconLists: ["go.png", "kube.png", "linux.png", "es.png","opentelemetry.png",],
        description: `
          Prometheus PromQL 관리, go기반 tsdb 버그 수정 기능 개발 \n
          Kong ingress controller를 통한 OAuth2 custom plugin, http2, IPv6, mTLS 개발 및 도입  \n
          EFK stack을 제공하여 RIC component들의 log형식 표준화 및 log 모니터링, 검색 기능 제공 \n
          OpenTelemetry, Jaeger를 도입하여 Trace Observability 강화`,
        duration: "2023.5~2024.6"
      },
      // {
      //   subTitle: "8. logging platform 고도화를 위한 EFK(Elasticsearch + Fluentd + Kibana) 도입",
      //   introduction: "Near-RT RIC는 Event-Driven기반의 분산 처리시스템으로 로깅 추적과 정형화 필터링이 어려운 문제가 있었습니다.",
      //   iconLists: ["linux.png", "es.png", "kube.png"],
      //   description: `Logging 관리를 위한 EFK 스터디 자료 준비 및 도입 \n
      //     Fluented를 통해 각 pod의 비표준 log를 포맷팅하여 log형식 표준화 \n`,
      //    duration: "2023.11~2024.2"
      // },
      // {
      //   subTitle: "9. OpenTelemetry trace PoC",
      //   introduction: "비동기 분산 처리 시스템인 Near-RT RIC에서 logic상의 문제가 발생하였을 때 request의 흐름을 추적하기 어려운 문제가 있었습니다.",
      //   iconLists: ["linux.png","go.png", "py.png", "opentelemetry.png"],
      //   description: `Kubernetes환경에서 OpenTelemetry 배포를 위한 resource 준비 및 자동화 배포 script 개발 \n
      //     HTTP기반의 분산 추적을 위한 golang, python span주입 개발 SDK 개발 \n
      //     시각화를 위한 jeager 도입 및 자동화 script 개발 \n
      //     과제가 drop되어 개발 중단`,
      //    duration: "2024.3~2024.6"
      // },
    ],
  },
  // {
  //   id: "a1m",
  //   img: "/a1.webp",
  //   company: "Samsung Electronics Network Team",
  //   title: "A1 mediator",
  //   descriptions: [
  //     {
  //       subTitle: "1. A1Mediator 개발 및 유지 보수",
  //       introduction: "A1Mediator는 python flask기반의 server로 Near-RT RIC cluster에 deploy되어 Non-RT RIC의 policy와 xApp사이의 policy 정합성을 관리해주는 server입니다.",
  //       iconLists: ["py.png", "kube.png", "redis2.png"],
  //       description: `Opensource기반 A1Mediator project 인수인계 및 버그 fix \n
  //         O-RAN A1 interface spec을 따르는 REST API 개발 \n
  //         A1Mediator에 RMR(socket 통신 모듈) 연동 및 A1Mediator와의 RMR통신을 위한 xApp framework A1mediator 통신 부분 구현 \n
  //         O-RAN A1TP spec을 따르는 mTLS, OAuth2, JWT token 구현`,
  //       duration: "2023.3~2024.6"
  //     },
  //     {
  //       subTitle: "2. A1Migration 개발",
  //       introduction: "O-RAN A1 spec에는 없는 A1Mediator 추가 기능 구현을 위한 별도의 pod가 필요하였습니다.",
  //       iconLists: ["py.png", "kube.png", "redis2.png"],
  //       description: `A1 spec에는 없지만 실제 사업자 운용중에 필요한 기능과 추가 요청 feature를 구현한 별도의 pod \n
  //       python thread기반으로 A1mediator의 policy 관련 metadata update 기능 개발 \n 
  //       현재 운용 중인 A1 policy 통계 정보 생성 기능 개발 \n
  //       현재 A1 policy 통계 정보를 EMS server로 제공하는 기능 개발`, 
  //       duration: "2024.3~2024.6"
  //     },
  //   ],
  // },
  // {
  //   id: "xapp",
  //   img: "/xapp1.webp",
  //   title: "xApp",
  //   company: "Samsung Electronics Network Team",
  //   descriptions: [
  //     {
  //       subTitle: "1. golang기반의 e2node-config xApp개발",
  //       introduction: "O-RAN F1AP spec을 따르는 msg를 받고 파싱하여 slice xApp에 필요한 data를 전달해줄 수 있는 xApp이 필요했습니다.",
  //       iconLists: ["go.png","kube.png", "redis2.png"],
  //       description: `무선 통신 장비로 부터 전달된 F1 msg를 parsing하고 redis를 통해 다른 xApp에 data를 전달할 수 있는 e2node-config xApp 개발 \n
  //         O-RAN F1AP spec을 준수하는 golang data model 구현 \n
  //         F1 msg를 parsing할 수 있는 golang engine 개발 \n
  //         golang의 goroutine을 활용하여 msg를 동시처리 \n 
  //         Redis를 통해 parsing한 data를 다른 xApp으로 전달할 수 있는 기능 개발 \n
  //         코드 품질 강화 및 개선을 위해 Test code coverage 100% 달성\n
  //         해외연구소와 협업하여 e2node-config xApp과 무선 장비 simulator 테스트 자동화 \n
  //         이후 xApp들이 고도화됨에 따라 e2node-config xApp 기능을 golang library로 개발하여 제공`,
  //       duration: "2022.8~2023.5"
  //     },
  //     {
  //       subTitle: "2. golang 기반의 xApp-benchmarker 개발",
  //       introduction: "xApp은 현장에서 대용량, 대규모 데이터를 실시간(1ms 이하)으로 고속 처리해야 하므로 성능 테스트가 중요했습니다.",
  //       iconLists: ["go.png","kube.png", "redis2.png"],
  //       description: `xApp-benchmarker를 개발하여 xApp과 Near-RT RIC Platform의 성능을 평가\n  
  //       초당 몇 건의 msg받았고 받은 msg의 용량 총합, msg 파싱에 걸린 시간 등에 대한 통계 제공 \n
  //         redis stream을 통한 실시간 모니터링 data 제공`,
  //       duration: "2022.11~2023.1"
  //     },
  //   ],
  // },
  // {
  //   id: "platform",
  //   img: "/pe.webp",
  //   title: "Platform Engineering",
  //   company: "Samsung Electronics Network Team",
  //   descriptions: [
  //     {
  //       subTitle: "1. Kong Ingress Controller",
  //       introduction: "On-Premise 환경에서 배포되는 Near-RT RIC cluster의 단일 traffic point로 HTTP2, IPv6, mTLS 등의 기능을 제공하기 위하여 도입하였습니다.",
  //       iconLists: ["go.png", "kube.png"],
  //       description: `외부로 traffic을 흘려보내는 kong ingress controller 유지, 보수 \n
  //         platform 고도화를 위한 OAuth2 plugin, http2, IPv6, mTLS 도입 \n
  //         EKS에서의 IPv6 OAuth2.0 plugin bug fix\n
  //         golang기반의 IPv6 호환 custom OAuth2.0 plugin을 개발`,
  //       duration: "2023.5~2024.5"
  //     },
  //     {
  //       subTitle: "2. logging platform 고도화를 위한 EFK(Elasticsearch + Fluentd + Kibana) 도입",
  //       introduction: "Near-RT RIC는 Event-Driven기반의 분산 처리시스템으로 로깅 추적과 정형화 필터링이 어려운 문제가 있었습니다.",
  //       iconLists: ["linux.png","java.png", "es.png", "kube.png"],
  //       description: `Logging 관리를 위한 EFK 스터디 자료 준비 및 도입 \n
  //         Fluented를 통해 각 pod의 비표준 log를 포맷팅하여 log형식 표준화 \n
  //         Elasticsearch Java SDK를 통한 Data retention policy 도입 및 log 분석 기능 개발 \n`,
  //        duration: "2023.11~2024.2"
  //     },
  //     {
  //       subTitle: "3. OpenTelemetry trace PoC",
  //       introduction: "비동기 분산 처리 시스템인 Near-RT RIC에서 logic상의 문제가 발생하였을 때 request의 흐름을 추적하기 어려운 문제가 있었습니다.",
  //       iconLists: ["linux.png","go.png", "py.png", "opentelemetry.png"],
  //       description: `Kubernetes환경에서 OpenTelemetry 배포를 위한 resource 준비 및 자동화 배포 script 개발 \n
  //         HTTP기반의 분산 추적을 위한 golang, python span주입 개발 SDK 개발 \n
  //         시각화를 위한 jeager 도입 및 자동화 script 개발 \n
  //         과제가 drop되어 개발 중단`,
  //        duration: "2024.3~2024.6"
  //     },
  //   ],
  // },
  {
    id: "fdm",
    img: "/fdm.webp",
    title: "FDM",
    company: "Samsung Electronics Network Team",
    descriptions: [
      {
        subTitle: "1. FPGA Controller",
        introduction: "linux c/c++기반의 임베디드 server로 FPGA register data를 동적으로 관리해줍니다. 또한, 전체 System board의 초기 생명주기를 관리하여 init단계에 필요한 config를 LTE,NR에 따라 적절하게 설정해주는 process입니다.",
        iconLists: ["linux.png","c++.png","docker-mark-blue.png"],
        description: `사업자의 요청에 따른 초기 FPGA data 설정 \n
          운용자의 실시간 config값 변경에 따른 cell정보 yang database 업데이트 기능 개발 \n
          TCP socket 통신을 통한 event-driven programming 구현 \n
          pthread기반의 동시성 프로그래밍 구현  \n
          Test coverage 60% -> 90% 향상, 사내 Code 품질 지표 향상을 위한 sw활동, 활발한 Code review 활동을 통한 개발 문화관련 수상`,
          duration: "2021.1~2022.7"
      },
    ],
  },
  {
    id: "core",
    img: "/automater.webp",
    company: "Samsung Electronics Network Team - 인턴",
    title: "자동화 TC 생성 Tool",
    descriptions: [
      {
        subTitle: "1. Core망 Test Generator",
        introduction: "LTE/NR Core망을 설정값이 올바른 지 정합성을 검사하기 위한 자동화 Tool을 개발하였습니다.",
        iconLists: ["py.png", "js.png", "electron.png"],
        description: `Core망에 사용되는 Network config 데이터를 파싱하는 Python기반 엔진 개발 \n  
                      파싱 결과를 바탕으로 정합성 검토를 실행하고, TC 자동 생성 기능 개발  \n
                      시용자 편의성을 위해 Electron Desktop GUI 개발`,
        duration: "2020.7~2020.8"
      },
      // {
      //   subTitle: "2. GUI Desktop App",
      //   introduction: "LTE/NR Core망을 설정값이 올바른 지 정합성을 검사하기 위한 자동화 Tool을 개발하였습니다.",
      //   iconLists: ["js.png", "electron.png"],
      //   description: `사용하기 편하도록 JS Electron Desktop앱 제공 \n
      //                 Python 엔진을 기반으로 Network config 데이터의 정합성을 시각화 \n
      //                 잘못된 설정값을 넣었던 config data가 무엇인 지 알려주는 기능 제공 \n
      //                 Preset과 같은 사용자 편의 기능 추가`,
      //   duration: "2020.7~2020.8"
      // },
    ],
  },
  // {
  //   id: "anthena",
  //   img: "/ems.webp",
  //   title: "EMS",
  //   company: "Novo Networks - 인턴",
  //   descriptions: [
  //     {
  //       subTitle: "1. Spring AMQP 도입",
  //       introduction: "EMS는 Spring기반의 server로 REST 기반으로 만들어져 있었습니다. 장비를 다루기에는 적절하지 않은 부분들이 많아, 기존 Spring code구조를 분석하여 RabbitMQ기반의 Spring AMQP code 도입 및 고도화하였습니다.",
  //       iconLists: ["java.png", "spring2.ico"],
  //       description: `RabbitMQ 사용 방법 정리 및 배포 \n 기존 REST기반 code를 Spring AMQP기반의 code로 변경 \n connection error 등의 문제를 자동 해결할 수 있는 wrapper 개발`,
  //       duration: "2020.3~2020.6"
  //     },
  //     {
  //       subTitle: "2. AU 시뮬레이터 개발",
  //       introduction: "EMS에 AU를 3D로 시각화하여 AU의 스케줄링 및 config 데이터 설정을 하도록 요청을 받았습니다. ",
  //       iconLists: ["js.png", "ts.png","react-icon.png", "threejs.png"],
  //       description: `React와 javascript, typescript를 사용하여 개발을 진행 \n 3D component 구현에 대해서는 Threejs를 사용하여 개발 \n AU장비 시뮬레이터 studio 개발 \n config 스케줄링 설정 기능 개발 \n 모니터링 기능 개발(장비 온도, 각도, 방사각 등)`,
  //       duration: "2020.3~2020.6"
  //     },
  //   ]
  // },
]