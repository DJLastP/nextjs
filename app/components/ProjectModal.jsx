import {useEffect, useRef} from 'react';

const ProjectModal = ({project, onClose}) => {
    const modalRef = useRef();

    // ✅ 항상 Hook은 실행되게 위치 고정
    useEffect(() => {
        if (!project) return;

        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [project]);

    const handleOverlayClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    // ✅ 여기서 조건부 렌더링
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={handleOverlayClick}
        >
            <div
                ref={modalRef}
                className="bg-white dark:bg-gray-700   rounded-2xl shadow-lg max-w-2xl w-full mx-5 max-h-4/5 md:max-h-[90vh] p-0 overflow-auto"
                onClick={(e) => e.stopPropagation()} // ✅ 내부 클릭은 버블링 막음
            >
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover rounded-lg"
                />

                <div className="p-6 space-y-4">

                    <div className="flex justify-between items-start">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{project.name}</h2>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">기술 스택</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.stack?.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="bg-gray-200 dark:bg-gray-500 font-bold text-xs px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">맡은 역할</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">{project.role}</p>
                    </div>
                    {project.environment && (
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">배포 환경</h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{project.environment}</p>
                        </div>
                    )}

                    {project.features && (
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">주요 기능</h3>
                            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200">
                                {project.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.period && (
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">개발 기간</h3>
                            <p className="text-sm text-gray-700 dark:text-gray-200">{project.period}</p>
                        </div>
                    )}

                    {project.description && (
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">상세설명</h3>
                            <p className="text-sm text-gray-700 dark:text-gray-200">{project.description}</p>
                        </div>
                    )}
                    <div className="flex justify-end gap-2 pt-4 border-t">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                배포 링크
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
