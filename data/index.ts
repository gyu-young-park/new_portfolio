export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
export const gridItems = [
  {
    id: 1,
    title: "Loving all kinkd of Software!",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "object-fill w-[100%] h-[100%] opacity-50",
    titleClassName: "text-white justify-end",
    img: "/gopher.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "Collaborating in others!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
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
    des: "Near-RT RIC는 'Near Real Time RAN Intelligence Controller'로 기지국으로부터 대규모, 대용량 데이터를 받아 기지국을 Control하는 실시간 분산처리 kubernetest cluster 입니다. \n",
    img: "/ric.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg", "go.png"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "xApp",
    des: "xApp은 RIC의 Near-RT RIC의 Application으로 Network Slice, QoS, ML model 등 고도화된 network 기능을 제공하는 고가용성 App입니다.",
    img: "/xapp.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "FPGA Data Management",
    des: "FDM은 DU의 FPGA register data를 관리하고 Cell의 상황에 따라 실시간으로 업데이트해주는 Linux Server입니다.",
    img: "/fdm.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Platform Engineering",
    des: "Platform 고도화 작업으로 ELK 구축, OpenTelemetry 도입, 해외연구소와 Test 자동화 협업 등을 하였습니다.",
    img: "/platform.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
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
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

export const projectDetailList = [
  {
    id: 1,
    img: "/near-rt-ric.webp",
    title: "Near-RT RIC Project",
    introduction: "",
    descriptions: [
      {
        subTitle: "1. Kubernetes cluster resource 유지, 보수",
        introduction: "Near-RT RIC cluster관리를 위한 helm chart, shell script 추가 및 수정이 필요 ",
        description: `xApp build shell script 작성 \n
          helm chart, value 수정 및 추가 \n
          각종 OS에서 발생하는 kubernetes error 보완 및 수정 \n`, 
      },
      {
        subTitle: "2. Near-RT RIC cluster pod 유지보수",
        introduction: "Near-RT RIC는 대규모 데이터 처리를 위한 분산 처리시스템으로, 여러 개의 component들을 통해서 event driven하게 실시간 data를 처리",
        description: "golang으로 이루어진 Near-RT RIC cluster주요 pod 디버깅 및 기능 개발(appmgr, submgr, e2mgr, rtmgr)", 
      },
      {
        subTitle: "3. cluster 고도화를 위한 APIPorxy, ricctl 개발",
        introduction: "",
        description: `- python의 fastapi 기반의 APIProxy는 cluster내부의 API 호출 및 디버깅, reconcilate기능 제공(kubernetes-api-server와 유사) \n
        - ricctl은 golang기반으로 만들어진 cli로 cluster내의 api호출, 디버깅을 위한 기능을 제공 (kubectl과 유사)`, 
      },
      {
        subTitle: "4. Kong Ingress Controller",
        introduction: "",
        description: `외부로 traffic을 흘려보내는 kong ingress controller 유지, 보수 \n
          platform 고도화를 위한 OAuth2 plugin, http2, IPv6도입 \n
          EKS형상에서의 IPv6 Opensource bug fix 및 golang custom `, 
      },
      {
        subTitle: "5. logging platform 고도화를 위한 EFK(Elasticsearch + Fluentd + Kibana) 도입",
        introduction: "Near-RT RIC는 대규모 데이터 처리를 위한 분산 처리시스템으로, 여러 개의 component들을 통해서 event driven하게 실시간 data를 처리",
        description: `logging 관리를 위한 EFK 스터디 자료 준비 및 도입 \n
          fluented를 통한 각 pod의 비표준 log, data formatting, filltering 구현 \n
          data retention policy 도입 \n
          Java SDK를 통한 RIC cluster, xApp error 검출 App개발`, 
      },
    ],
    duration: "2022.12~2024.5"
  },
  {
    id: 2,
    img: "/a1.webp",
    title: "A1 mediator",
    descriptions: [
      {
        subTitle: "1. A1Mediator 개발 및 유지 보수",
        introduction: "python flask기반의 server로 Near-RT RIC cluster에서 pod로 deploy되며, Non-RT RIC의 policy와 xApp사이의 policy 정합성을 관리해주는 server",
        description: `Opensource기반 A1Mediator project 인수인계 \n
          A1 interface feature에 맞게 code 수정 \n
          A1Mediator에 RMR(socket 통신 모듈) 연동 및 A1Mediator와의 RMR통신을 위한 xApp framework A1mediator 통신 부분 구현 \n
          A1TP(TLS, OAuth2, JWT token) spec 구현 \n
          opensource error 수정 및, RMR을 통한 xApp과 연동, REST를 통한 Non-RT RIC와의 연동 성공` 
      },
      {
        subTitle: "2. A1Migration 개발",
        introduction: "A1Mediator 관리 및 spec에는 없는 추가 기능 구현을 위한 별도의 pod",
        description: `A1Mediator 관리 및 spec에는 없는 추가 기능 구현을 위한 별도의 pod \n
        python thread기반으로 A1mediator의 초기 policy 정보 update 및 policy 통계 정보 생성 기능 개발 \n
        policy 통계 정보를 EMS server로 제공하는 기능 개발`, 
      },
    ],
    duration: "2022.12~2024.5"
  },
  {
    id: 3,
    img: "/xapp1.webp",
    title: "xApp",
    descriptions: [
      {
        subTitle: "1. golang기반의 e2node-config xApp개발",
        introduction: "F1AP spec을 따르는 msg를 받고, 파싱하여 slice xApp에 필요한 data를 전달해줄 수 있는 xApp이 필요",
        description: `f1ap spec 구현 및 원하는 data extract할 수 있는 기능 개발 \n
          RMR(socket)기반의 통신과 redis기반의 통신 및 data처리 기능 개발 \n
          test code coverage 100% 및 e2e test를 위한 e2sim 연동 \n
          이후 xApp들이 고도화됨에 따라 e2node-config golang library로 수정 및 업데이트`,
      },
      {
        subTitle: "2. golang 기반의 xApp-benchmarker 개발",
        introduction: "xApp은 현장에서 대용량, 대규모 데이터를 실시간(1ms 이하) 처리해야하므로 성능 테스트가 중요",
        description: `초당 몇 건의 msg와 정해진 기간동안 받은 msg용량의 총합, msg parsing에 걸린 시간 등에 대한 통계 제공 \n
          redis stream을 통한 실시간 모니터링 data 제공`,
      },
    ],
    duration: "2022.12~2024.5"
  },
  {
    id: 4,
    img: "/fdm.webp",
    title: "FDM",
    descriptions: [
      {
        subTitle: "1. FPGA Controller",
        introduction: "linux c/c++기반의 임베디드 server로 FPGA register data를 동적으로 관리해줍니다. 또한, 전체 System board의 초기 생명주기를 관리하여 init단계에 필요한 config를 LTE,NR에 따라 적절하게 설정해주는 process입니다.",
        description: `사업자의 요청에 따른 초기 FPGA data 설정 \n
          운용자의 실시간 config값 변경에 따른 cell정보 yang database 업데이트 기능 개발 \n
          부서 간 협의를 통해 socket 통신으로 event-driven programming 구현 \n
          실시간 고속처리를 위한 pthread기반의 동시성 프로그래밍 구현  \n
          Test coverage 60% -> 90% 향상, 사내 Code 품질 지표 향상을 위한 sw활동, 활발한 Code review 활동을 통한 개발 문화관련 수상`,
      },
    ],
    duration: "2022.12~2024.5"
  },
]