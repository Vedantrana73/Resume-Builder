import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faEdit, faEye, faDownload, faBriefcase } from '@fortawesome/free-solid-svg-icons';

function Timeline() {
    return (
        <div>
            <div className='text-2xl text-center font-bold py-3 pt-10'>How It Works?</div>
            <ul className="timeline timeline-snap-icon timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <FontAwesomeIcon icon={faFileAlt} className="h-5 w-5" />
                    </div>
                    <div className="timeline-start mb-10 text-end">
                        <time className="font-mono italic">Step 1</time>
                        <div className="text-lg font-black">Choose A Template</div>
                    </div>
                    <hr />
                </li>
                <li>
                    <div className="timeline-middle">
                        <FontAwesomeIcon icon={faEdit} className="h-5 w-5" />
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">Step 2</time>
                        <div className="text-lg font-black">Customize Your Information</div>
                    </div>
                    <hr />
                </li>
                <li>
                    <div className="timeline-middle">
                        <FontAwesomeIcon icon={faEye} className="h-5 w-5" />
                    </div>
                    <div className="timeline-start mb-10 text-end">
                        <time className="font-mono italic">Step 3</time>
                        <div className="text-lg font-black">Preview Your Resume</div>
                    </div>
                    <hr />
                </li>
                <li>
                    <div className="timeline-middle">
                        <FontAwesomeIcon icon={faDownload} className="h-5 w-5" />
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">Step 4</time>
                        <div className="text-lg font-black">Download and Share</div>
                    </div>
                    <hr />
                </li>
                <li>
                    <div className="timeline-middle">
                        <FontAwesomeIcon icon={faBriefcase} className="h-5 w-5" />
                    </div>
                    <div className="timeline-start mb-10 text-end">
                        <time className="font-mono italic">Step 5</time>
                        <div className="text-lg font-black">Land Your Dream Job</div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Timeline;
