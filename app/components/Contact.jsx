import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentSms, faEnvelope, faMobileScreenButton} from "@fortawesome/free-solid-svg-icons";
import GPTChat from "@/app/components/GPTChat";

const Contact = () => {
    return (
        <section>
            <h2 className={'text-3xl font-bold mb-6'}>Contact</h2>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-8 min-h-72 mb-6'}>
                <div className={'min-h-72'}>
                    <GPTChat />
                </div>
                <div className={'flex flex-col items-start md:ms-20 justify-center gap-y-4'}>
                    <a href={'tel:01026467285'} className={'flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors'}>
                        <FontAwesomeIcon icon={faMobileScreenButton}/>
                        <span>Phone : 010-2646-7285</span>
                    </a>
                    <a href={'mailto:djlastp12345@gmail.com'} className={'flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors'}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>djlastp12345@gmail.com</span>
                    </a>
                    <a href={'http://qr.kakao.com/talk/4q5pYUC51x9TFZhcD2.QTufKowk-'} className={'flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors'}>
                        <FontAwesomeIcon icon={faCommentSms} />
                        <span>카카오톡</span>
                    </a>
                    <a href={'/files/resume-jobkorea.pdf'} download className={'flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors'}>
                        <FontAwesomeIcon icon={faCommentSms} />
                        <span>이력서 (잡코리아양식)</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
