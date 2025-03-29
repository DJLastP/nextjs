import React from 'react';
const Skill = ({ skillList, title }) => {

    const darkInvertSkills = ['Express', 'Git', 'SQL', 'NextJS', 'OpenAI', 'AWS'];


    return (
        <section id={'skill'} className={'mb-16'}>
            <h2 className={'text-3xl font-bold mb-6'}>{title}</h2>
            <div className={'grid grid-cols-2 md:grid-cols-4 gap-4 text'}>
                {skillList.map((skill, index) =>
                    (
                        <div key={index}
                            className={'flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300'}>
                            <img
                                src={skill.icon}
                                alt="skill-icon"
                                className={`h-10 w-10 ${darkInvertSkills.includes(skill.name) ? 'dark:invert' : ''}`}
                            />

                            <h3 className={'text-lg mt-1 font-semibold'}>
                                {skill.name}
                            </h3>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Skill;
