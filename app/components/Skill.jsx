import React from 'react';
import {skillList} from "@/data/skills";
const Skill = () => {

    return (
        <section id={'skill'} className={'mb-16'}>
            <h2 className={'text-3xl font-bold mb-6'}>Skill</h2>
            <div className={'grid grid-cols-2 md:grid-cols-6 gap-4 text'}>
                {skillList.map((skill, index) =>
                    (
                        <div key={index}
                            className={'flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300'}>
                            <img
                                src={skill.icon}
                                alt="skill-icon"
                                className={`h-8 w-8 ${
                                    (skill.name === 'Express' || skill.name === 'MySQL') ? 'dark:invert' : ''
                                }`}
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
