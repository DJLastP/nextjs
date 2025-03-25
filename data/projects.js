   export const projects = [
        {
            name: '다모아 울산',
            image: '/assets/damoa.png',
            description: '',
            stack: ['React', 'MySQL', 'Python', 'Spring', 'OpenSearch', 'OpenAI'],
            role: '프론트엔드 전체 및 데이터 크롤링 서버',
            environment: 'Azure + Nginx + MySQL',
            period: '3개월',
            features: [
                '크롤링을 통한 울산시 데이터 정기수집 하여 포털형태로 제공',
                'GPT 모델을 울산시 정보에 맞게 파인튜닝하여 LLM 서비스 구축.',
                '공공기관 API 연동 하여 편의 정보 제공'
            ],
            link: 'https://www.ulsan.go.kr/damoa',
        },
       {
           name: 'PG 정산시스템',
           image: '/assets/ggpay.png',
           stack: ['React', 'MariaDB', 'Express', 'Spring'],
           role: '1인 개발 및 운영',
           environment: 'Linux + Nginx + MySQL + Docker + Github Actions',
           period: '3개월',
           features: [
               'PG의 카드결제 노티데이터 연동',
               '가맹점과 영업점에 따른 수수료적용 및 시각화',
               '다중 PG 연동 및 6종 수수료체계 적용',
               '카드 수기결제'
           ],
       },
       {
           name: '사내업무웹',
           image: '/assets/panffice.png',
           stack: ['React', 'MariaDB', 'Spring'],
           role: '1인 개발 및 운영',
           environment: 'Linux + Nginx + MySQL + Docker + Github Actions',
           period: '1개월',
           features: [
               '기존 구글시트로 진행하던 업무를 웹앱으로 전환',
           ],
       },
       {
           name: '카드개인결제 서비스',
           image: '/assets/ggshop.png',
           stack: ['React', 'MariaDB', 'Express', 'Spring'],
           role: '1인 개발 및 운영',
           environment: 'Linux + Nginx + MySQL + Docker + Github Actions',
           period: '3개월',
           features: [
               'NICE API 본인인증 연동',
               'PG 카드결제 모듈 연동',
               'Github Action CI/CD',
               '카드 결제 및 결제정보 시각화'
           ],
       },
       {
           name: '담배피는 호랑이',
           image: '/assets/damho.png',
           stack: ['VUE', 'MongoDB', 'Express', 'PWA'],
           role: '1인 개발 및 운영',
           environment: 'AWS + Nginx + MongoDB, 원스토어',
           period: '1개월',
           features: [
               '상품 주문 및 영업점 납품거래처 관리 웹앱',
               'PWA 적용 및 firebase push 알림',
               '원스토어 배포'
           ],
       },
       {
           name: '한별투어 (과제)',
           image: '/assets/tour.png',
           stack: ['Spring', 'Thymeleaf', 'Python', 'Oracle', 'Tensorflow'],
           role: '백엔드 프론트 머신러닝',
           period: '2개월',
           features: [
               '개발자 양성과정 팀 프로젝트 과제',
               '여행상품판매 쇼핑몰',
               'logistic을 외부데이터로 학습하여 페이지에 등록된 리뷰에 대한 긍/부정 및 사용단어통계',
           ],
       },
    ]