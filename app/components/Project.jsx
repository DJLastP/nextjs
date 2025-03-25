"use client";
import React, {useState} from 'react';
import ProjectModal from "./ProjectModal.jsx";
import { projects } from '../data/projects'; // 절대경로 사용시 jsconfig.json 설정 필요

const Project = () => {

    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <>
            <section id={'project'} className={'mb-16'}>
                <h2 className={'text-3xl font-bold mb-6'}>Project</h2>
                <div className={'grid grid-cols-1 md:grid-cols-3 gap-6'}>
                    {projects.map((project, index) => (
                        <article key={index + 'aa'}
                                 className={'bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'}>
                            <img className={'w-full h-48 object-cover rounded-lg'}
                                 src={project.image}
                                 alt={'project'}/>
                            <div className={'p-6'}>
                                <h3 className={'text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100'}>{project.name}</h3>
                                <div className="flex flex-wrap gap-2 mb-4 h-12 items-start">
                                    {project?.stack?.map((stack, idx) => (
                                        <span
                                            key={idx + 'bb'}
                                            className="bg-gray-200 dark:bg-gray-700 font-bold text-xs px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
                                        >
                                          {stack}
                                        </span>
                                    ))}
                                </div>
                                <div className={'space-x-2'}>
                                    <a onClick={() => setSelectedProject(project)}
                                       className={'text-sm bg-gray-700 dark:bg-gray-300 px-3 py-1 rounded-md text-white dark:text-gray-800 hover:cursor-pointer'}>상세</a>
                                    {project.link &&
                                        <a href={project.link} target={'_blank'}
                                           className={'text-sm bg-blue-600 px-3 py-1 rounded-md text-white'}>링크</a>
                                    }
                                </div>
                            </div>
                        </article>
                    ))
                    }
                </div>
            </section>
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)}/>
        </>

    );
};

export default Project;
