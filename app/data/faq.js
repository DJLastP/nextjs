export const projectFaq = [
    // ✅ 다모아 울산
    {
        question: '다모아 울산 프로젝트에서 사용된 주요 기술은 무엇인가요?',
        answer: 'React, MySQL, Python, Spring, OpenSearch, OpenAI 등이 사용되었습니다.',
    },
    {
        question: '다모아 울산 프로젝트에서 어떤 역할을 수행하셨나요?',
        answer: '프론트엔드 전체 개발과 데이터 크롤링 서버 구현을 맡았습니다.',
    },
    {
        question: '다모아 울산의 핵심 기능은 무엇인가요?',
        answer: '울산시 데이터를 정기적으로 수집하고, GPT 기반 LLM 서비스 및 공공기관 API 연동을 통해 포털 형태로 제공합니다.',
    },

    // ✅ PG 정산시스템
    {
        question: 'PG 정산시스템은 어떤 시스템인가요?',
        answer: 'PG 카드결제 데이터 연동, 수수료 시각화, 다중 PG 연동 및 수기 결제를 제공하는 내부 정산 시스템입니다.',
    },
    {
        question: 'PG 정산시스템은 어떤 환경에서 운영되나요?',
        answer: 'Linux, Nginx, MySQL, Docker, Github Actions 기반으로 운영됩니다.',
    },

    // ✅ 사내업무웹
    {
        question: '사내업무웹 프로젝트의 목표는 무엇이었나요?',
        answer: '기존에 Google Sheet로 관리하던 업무 프로세스를 웹앱으로 전환하여 효율성을 높였습니다.',
    },
    {
        question: '사내업무웹은 어떤 기술 스택으로 구성되었나요?',
        answer: 'React, MariaDB, Spring을 기반으로 개발되었습니다.',
    },

    // ✅ 카드개인결제 서비스
    {
        question: '카드개인결제 서비스의 주요 기능은 무엇인가요?',
        answer: 'NICE API를 활용한 본인인증, 카드 결제 모듈 연동, 결제 내역 시각화 기능을 포함합니다.',
    },
    {
        question: '카드개인결제 서비스는 어떻게 배포되었나요?',
        answer: 'Docker 및 Github Actions 기반의 CI/CD 환경에서 배포되었습니다.',
    },

    // ✅ 담배피는 호랑이
    {
        question: '담배피는 호랑이 프로젝트는 어떤 앱인가요?',
        answer: '상품 주문 및 영업점 납품 거래처를 관리할 수 있는 PWA 웹앱입니다.',
    },
    {
        question: '담배피는 호랑이 앱의 배포 방식은 어떻게 되나요?',
        answer: 'PWA 기반으로 개발되었으며, Firebase Push 알림과 함께 원스토어에 배포되었습니다.',
    },

    // ✅ 한별투어 (과제)
    {
        question: '한별투어 프로젝트는 어떤 목적의 과제인가요?',
        answer: '개발자 양성과정 팀 프로젝트로, 여행 상품 쇼핑몰을 주제로 했습니다.',
    },
    {
        question: '한별투어 프로젝트에서 머신러닝을 어떻게 적용했나요?',
        answer: 'Tensorflow를 사용하여 리뷰에 대한 긍·부정 분석 및 키워드 통계를 시각화했습니다.',
    },
    {
        question: '윤지수님의 주요 기술 스택은 무엇인가요?',
        answer: '- React, Spring, Node.js, Python\n- MySQL, MongoDB\n- Docker, Linux, Nginx 등 다양한 환경에서 개발 경험이 있습니다.',
    },
    {
        question: '1인 개발 경험이 있나요?',
        answer: '네, PG 정산시스템, 카드개인결제 서비스, 사내업무웹, 담배피는 호랑이 등 다수 프로젝트를 1인 개발로 진행했습니다.',
    },
    {
        question: '다모아 울산 프로젝트의 목적은 무엇이었나요?',
        answer: '울산시 데이터를 정기적으로 수집하고, GPT 기반 LLM과 연동해 시민들에게 정보를 제공하는 포털 서비스입니다.',
    },
    {
        question: 'PG 정산시스템은 어떤 시스템인가요?',
        answer: 'PG사의 카드결제 데이터를 수집해 수수료를 계산하고, 가맹점과 영업점 기준으로 시각화하여 관리하는 시스템입니다.',
    },
    {
        question: '다모아 울산에서 GPT는 어떻게 활용되었나요?',
        answer: 'OpenAI 기반 모델을 울산시 정보에 맞게 파인튜닝해, 사용자의 질문에 울산 관련 정보를 제공하는 AI 서비스로 구현했습니다.',
    },
    {
        question: 'Github Actions는 어떤 용도로 사용했나요?',
        answer: 'CI/CD 자동화를 위해 Docker 기반으로 빌드 및 배포 파이프라인을 구성했습니다.',
    },
    {
        question: 'React로 프론트엔드를 구성한 이유는?',
        answer: 'SPA 환경 구축과 빠른 UI 반응성, 컴포넌트 기반 아키텍처로 유지보수와 확장성이 뛰어나기 때문입니다.',
    },
    {
        question: '데이터 크롤링은 어떤 방식으로 수행했나요?',
        answer: 'Python을 사용해 공공기관 사이트에서 주기적으로 데이터를 수집하고 정제하여 데이터베이스에 저장했습니다.',
    },
    {
        question: 'OpenSearch는 어디에 활용되었나요?',
        answer: '크롤링된 울산시 데이터를 검색하기 위한 인덱싱 시스템으로 사용했습니다.',
    },
    {
        question: '사내업무웹은 어떤 문제를 해결하기 위해 개발되었나요?',
        answer: '기존에 구글 시트로 수작업 관리하던 업무 데이터를 웹 기반으로 전환하여 효율성과 접근성을 높였습니다.',
    },
    {
        question: 'PWA 적용 경험이 있나요?',
        answer: '네, "담배피는 호랑이" 프로젝트에 PWA를 적용해 설치형 웹앱처럼 사용 가능하게 했습니다.',
    },
    {
        question: '카드개인결제 서비스에서는 어떤 기능이 있었나요?',
        answer: '본인인증(NICE), 카드 결제, 결제 정보 시각화 기능을 포함했습니다.',
    },
    {
        question: '1인 개발 프로젝트에서 가장 중요했던 점은?',
        answer: '설계부터 배포까지 모든 과정을 주도해야 하기 때문에 아키텍처 구조와 개발 일정 관리가 핵심이었습니다.',
    },
    {
        question: 'Docker는 어떤 방식으로 활용했나요?',
        answer: '개발 환경을 컨테이너로 통일하고, 배포 시에도 컨테이너로 구동하여 일관성과 유지보수를 확보했습니다.',
    },
    {
        question: 'Linux 서버 운영 경험이 있나요?',
        answer: '네, 대부분의 배포 환경이 Ubuntu 기반 Linux 서버였으며, Nginx 세팅, 보안 설정 등을 직접 수행했습니다.',
    },
    {
        question: 'Express는 어떤 프로젝트에서 사용했나요?',
        answer: 'PG 정산시스템과 카드개인결제 서비스에서 백엔드 API 서버로 사용했습니다.',
    },
    {
        question: '팀 프로젝트 경험도 있으신가요?',
        answer: '네, 다모아울산 개인결제는 팀프로젝트로 진행했습니다.',
    },
    {
        question: '한별투어 프로젝트에서는 어떤 머신러닝 기술을 사용했나요?',
        answer: 'Tensorflow와 Python을 활용해 리뷰 감정 분석 모델을 학습시켰습니다.',
    },
    {
        question: 'MariaDB와 MySQL을 모두 사용해본 경험이 있나요?',
        answer: '네, MariaDB는 사내 시스템에서, MySQL은 다모아 울산 등 다양한 프로젝트에서 사용했습니다.',
    },
    {
        question: '어떤 형태의 배포 자동화를 구성해보셨나요?',
        answer: 'Github Actions를 통해 Docker 이미지 빌드 후, 원격 서버에 자동 배포되도록 CI/CD 파이프라인을 구축했습니다.',
    },

    // 30개 이상 이어서 추가
    {
        question: 'Next.js를 사용한 경험이 있나요?',
        answer: '현재 포트폴리오 사이트를 Next.js 14 기반으로 구축 중이며, SSR/CSR, API Route, App Router를 사용합니다.',
    },
    {
        question: '다양한 프레임워크를 사용한 이유는 무엇인가요?',
        answer: '프로젝트의 성격과 요구사항에 따라 적합한 기술을 선택하기 위해 다양한 프레임워크를 도입해봤습니다.',
    },
    {
        question: 'CI/CD의 중요성은 어떻게 생각하시나요?',
        answer: '자동화를 통해 개발 효율을 극대화하고, 배포 실수를 줄이는 핵심 요소라고 생각합니다.',
    },
    {
        question: 'AI 서비스 개발 경험이 있나요?',
        answer: '네, GPT 기반 챗봇을 구현하여 사용자의 질문에 실시간으로 답변하는 시스템을 만들었습니다.',
    },
    {
        question: '포트폴리오 사이트에 구현된 주요 기능은?',
        answer: '- 프로젝트 소개\n- AI 자기소개 챗봇\n- 다크모드 전환\n- 반응형 디자인',
    },
    {
        question: 'Tailwind CSS는 어떤 점이 좋다고 생각하나요?',
        answer: '유틸리티 기반으로 빠른 프로토타입과 유지보수가 가능하며, 클래스 충돌이 적습니다.',
    },
    {
        question: '데이터베이스 설계 시 중요하게 여기는 점은?',
        answer: '정규화, 인덱스 전략, 확장성 있는 테이블 구조, 데이터 무결성을 중시합니다.',
    },
    {
        question: 'OpenAI API 외 다른 AI 경험이 있나요?',
        answer: '과거 Tensorflow를 이용해 감정 분석 모델을 학습시켜본 경험이 있습니다.',
    },
    {
        question: 'React에서 상태 관리를 어떻게 하시나요?',
        answer: '기본적으로 useState와 useEffect를 사용하고, 규모가 커질 경우 Context 또는 Recoil 고려합니다.',
    },
    {
        question: '최근에 가장 의미 있었던 프로젝트는?',
        answer: '다모아 울산 프로젝트는 GPT, 크롤링, 공공 API 연동 등 다양한 기술을 접목한 의미 있는 프로젝트였습니다.',
    },
    {
        question: 'RESTful API 설계 경험이 있나요?',
        answer: 'Express와 Spring 기반으로 RESTful API를 다수 설계하고 연동한 경험이 있습니다.',
    },
    {
        question: 'UX를 고려한 기능 구현 예시가 있나요?',
        answer: '카드개인결제 서비스에서 사용자 결제 상태를 시각적으로 표시하여 UX를 개선했습니다.',
    },
    {
        question: '크로스브라우징 고려 경험이 있나요?',
        answer: '모든 프로젝트는 Chrome, Safari, Edge 기준으로 반응형과 호환성을 고려해 개발했습니다.',
    },
    {
        question: 'React 프로젝트에서 성능 최적화를 어떻게 하셨나요?',
        answer: '불필요한 리렌더 방지, memoization, lazy loading 등을 활용했습니다.',
    },
    {
        question: '향후 배우고 싶은 기술은 무엇인가요?',
        answer: 'Next.js 기반 Full SSR, GraphQL, 서버리스 아키텍처, AI 파인튜닝 기술에 관심이 있습니다.',
    }
];
