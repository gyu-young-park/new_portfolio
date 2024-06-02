This is a portfolio project inspired by 'JavaScript Mastery'(https://www.youtube.com/watch?v=FTH6Dn3AyIQ)

## How to build
1. First, Install npm modules
```js
npm i
```

2. And run dev mode
```js
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# project들 정리

1. FDM
    - c/c++기반의 임베디드 linux server로 FPGA register data를 관리, 수정해주는 기능을 하는 module
    - c, c++, linux
    - 사업자의 Cell 형상에 따른 동적 FPGA register data 업데이트
    - LTE(4g), NR(5g) 동시 지원을 위한 spec구현
    - 실시간 운용자의 configuration 반영을 위한 pthread기반의 동시성 프로그래밍 구현
    - 그룹 Logging을 위한 C log library 구조 설계 및 개발
    - gtest를 통한 BT 100% 달성 및 code 품질 최우수 유지
2. Near-RT-RIC Platform
    1. Kubernetes cluster resource 유지, 보수
        - 개발에 필요한 yaml, helm chart, shell script 추가 및 수정
        - 각종 OS에서 발생하는 kubernetes error 보완 및 수정
    2. Near-RT RIC cluster pod 유지보수
        - Near-RT RIC는 대규모 데이터 처리를 위한 분산 처리시스템으로, 여러 개의 component들을 통해서 event driven하게 실시간 data를 처리
        - golang으로 이루어진 Near-RT RIC cluster주요 pod 디버깅 및 기능 개발(appmgr, submgr, e2mgr, rtmgr)
    2. cluster 고도화를 위한 APIPorxy, ricctl 개발
        - python의 fastapi 기반의 APIProxy는 cluster내부의 API 호출 및 디버깅, reconcilate기능 제공(kubernetes-api-server와 유사)
        - ricctl은 golang기반으로 만들어진 cli로 cluster내의 api호출, 디버깅을 위한 기능을 제공 (kubectl과 유사)
    3. Kong Ingress Controller
        - 외부로 traffic을 흘려보내는 kong ingress controller 유지, 보수
        - platform 고도화를 위한 OAuth2 plugin, http2, IPv6도입
        - EKS형상에서의 IPv6 Opensource bug fix 및 golang custom plugin 개발
    4. logging platform 고도화를 위한 EFK(Elasticsearch + Fluentd + Kibana) 도입
        - logging 관리를 위한 EFK 스터디 자료 준비 및 도입
        - fluented를 통한 각 pod의 비표준 log, data formatting, filltering 구현
        - data retention policy 도입
        - Java SDK를 통한 RIC cluster, xApp error 검출 App개발

3. A1Mediator
    python flask기반의 server로 Near-RT RIC cluster에서 pod로 deploy되며, Non-RT RIC의 policy와 xApp사이의 policy 정합성을 관리해주는 server
    1. A1Mediator 개발 및 유지 보수
        - Opensource기반 A1Mediator project 인수인계
        - A1 interface feature에 맞게 code 수정
        - A1Mediator에 RMR(socket 통신 모듈) 연동 및 A1Mediator와의 RMR통신을 위한 xApp framework A1mediator 통신 부분 구현
        - A1TP(TLS, OAuth2, JWT token) spec 구현
        - opensource error 수정 및, RMR을 통한 xApp과 연동, REST를 통한 Non-RT RIC와의 연동 성공
    2. A1Migration 개발
        - A1Mediator 관리 및 spec에는 없는 추가 기능 구현을 위한 별도의 pod
        - python thread기반으로 A1mediator의 초기 policy 정보 update 및 policy 통계 정보 생성 기능 개발 
        - policy 통계 정보를 EMS server로 제공하는 기능 개발
    3. A1Mediator E2E Test자동화를 위한 mock app개발
        - A1mediator와 xApp, Non-RT RIC는 연동되어 하나의 flow를 만듦으로, E2E test를 자동화하기위한 xApp, Non-RT RIC App이 필요
        - A1Mediator와 연동하기 위한 golang기반의 xApp mock app과 python기반의 Non-RT RIC mock app 개발
        - delay, 부하 테스트 등 각종 test scenario feature를 설정할 수 있는 xApp, Non-RT RIC test mock app개발
        - 해외 연구소외의 협업을 통한 test scenario 100% 자동화 구현
4. xApp
    xApp은 Near-RT RIC cluster에서 RAN(기지국)에 고도화된 인텔리전스 기능을 제공하는 App으로 network packet을 slice하거나 QoS model을 통한 configuration을 제공합니다.
    1. golang기반의 e2node-config xApp개발
        - F1AP spec을 따르는 msg를 받고, 파싱하여 slice xApp에 필요한 data를 전달해줄 수 있는 xApp이 필요
        - f1ap spec 구현 및 원하는 data extract할 수 있는 기능 개발
        - RMR(socket)기반의 통신과 redis기반의 통신 및 data처리 기능 개발
        - test code coverage 100% 및 e2e test를 위한 e2sim 연동
        - 이후 xApp들이 고도화됨에 따라 e2node-config golang library로 수정 및 업데이트
    2. golang 기반의 xApp-benchmarker 개발
        - xApp은 현장에서 대용량, 대규모 데이터를 실시간(1ms 이하) 처리해야하므로 성능 테스트가 중요
        - 초당 몇 건의 msg와 정해진 기간동안 받은 msg용량의 총합, msg parsing에 걸린 시간 등에 대한 통계 제공
        - redis stream을 통한 실시간 모니터링 data 제공
