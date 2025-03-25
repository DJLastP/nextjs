import React from 'react';

const About = () => {
    return (
        <>
            <section id={'about'} className={'mb-16'}>
                <h2 className={'text-3xl font-bold mb-6'}>About</h2>
                <div className={'grid grid-cols-1 md:grid-cols-2 gap-6'}>
                    <article className={'bg-gray-100 dark:bg-gray-800 shadow-md p-6 rounded-lg hover:scale-105 transition-transform duration-300'}>
                        <h3 className={'text-xl font-semibold mb-4'}>
                            교육 및 활동
                        </h3>
                        <ul className={'text-gray-800 dark:text-gray-300 leading-relaxed'}>
                            <li> ~2025 (주)두리누리 개발팀 </li>
                            <li> 2024 정보통신전문학사 / 평생교육진흥원 </li>
                            <li> 2023 ATech 솔루션 개발팀 </li>
                            <li> 2023 빅데이터 시각화 웹 서비스 개발자 양성과정 </li>
                        </ul>
                    </article>
                    <article className={'bg-gray-100 dark:bg-gray-800 shadow-md p-6 rounded-lg hover:scale-105 transition-transform duration-300'}>
                        <h3 className={'text-xl font-semibold mb-4'}>
                            자격증
                        </h3>
                        <ul className={'text-gray-800 dark:text-gray-300 leading-relaxed'}>
                            <li> 네트워크관리사 2급 </li>
                            <li> 무선설비기능사 </li>
                            <li> 컴퓨터활용능력 2급 </li>
                            <li> 워드프로세서 </li>
                        </ul>
                    </article>
                </div>
            </section>
        </>
    );
};

export default About;
