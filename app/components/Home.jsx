import React from 'react';

const Home = () => {
    return (
        <section id={'home'} className={'flex flex-col md:flex-row justify-between items-center mb-12'}>
            <div className={'shrink-0 mb-6 md:mb-0 md:mr-10'}>
                <img
                    className={'w-56 h-56 rounded-full border-2 object-cover'}
                    src={'/assets/profile.png'}
                    alt={'Profile'}
                />
            </div>
            <div className={'text-center text-left md:text-right'}>
                <h1 className={'text-4xl font-bold mb-2'}>윤지수</h1>
                <p className="text-xl mb-4 dark:text-gray-100">풀스택 개발자로 성장중인 백엔드 개발자</p>
                <p className="text-gray-600 text-sm md:text-base dark:text-gray-300 leading-relaxed a">
                    안녕하세요. 3년차 백엔드 개발자 <strong className="font-semibold text-gray-800 dark:text-white">윤지수</strong>입니다. <br/>
                    React와 Spring 중심의 웹 서비스를 주로 개발해왔고, <br/>
                    Express, MongoDB 등 다양한 기술 스택도 함께 사용했습니다. <br/>
                    여러 프로젝트를 기획부터 배포까지 혼자서 완성한 경험이 있으며, <br/>
                    Docker와 Github Actions로 CI/CD 환경을 구성한 적도 있습니다. <br/>
                    GPT 기반 LLM 구축 프로젝트에는 팀원으로 참여했고, <br/>
                    TensorFlow로 머신러닝 모델을 학습시켜 본 경험도 있습니다. <br/>
                </p>
            </div>
        </section>
    );
};

export default Home;
