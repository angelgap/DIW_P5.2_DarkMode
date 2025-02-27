import React from "react";
import { Link } from "react-router-dom";

interface Section {
  title: string;
  content: string | string[];
}

interface CardProps {
  img?: string;
  name?: string;
  age?: string;
  job?: string;
  hobbies?: string;
  sections?: Section[];
  className?: string;
}

const Card: React.FC<CardProps> = ({ img, name, age, job, className, hobbies, sections = [] }) => (
  <div className={`${className} bg-card-bg-light dark:bg-card-bg-dark dark:text-card-paragraph-dark text-card-paragraph-light p-3 rounded-2xl shadow-lg w-full max-w-md`}>
    {img && (
      <div className="flex justify-center">
        <img src={img} alt={name} className="rounded-xl object-cover" style={{ width: 400, height: 300 }} />
      </div>
    )}

    <div className="mt-4 space-y-2">
      {name && <div className="flex items-center mt-7"><h2 className=" mr-2 text-card-h2-light dark:text-card-h2-dark  font-bold text-md">NAME:</h2> <p className="text-card-paragraph-light">{name}</p></div>}
      {age && <div className="flex items-center mt-7"><h2 className="text-card-h2-light dark:text-card-h2-dark mr-2  font-bold text-md">AGE:</h2> <p className="text-card-paragraph-light">{age}</p></div>}
      {job && <div className="flex items-center mt-7"><h2 className="text-card-h2-light dark:text-card-h2-dark mr-2  font-bold text-md">JOB:</h2> <p className="text-card-paragraph-light">{job}</p></div>}
      {hobbies && <div className="flex items-center mt-7"><h2 className="text-card-h2-light mr-2 dark:text-card-h2-dark  font-bold text-md">HOBBIES:</h2> <p className="text-card-paragraph-light">{hobbies}</p></div>}
    </div>

    {sections.length > 0 && (
      <div className="mt-4 space-y-2">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-card-h2-light dark:text-card-h2-dark font-bold text-md">{section.title}</h2>
            {Array.isArray(section.content) ? (
              <ul className=" pl-5 text-card-paragraph-light dark:text-card-paragraph-dark">
                {section.content.map((item, idx) => (
                  <li  key={idx}><span className="before:content-['-'] before:mr-2 font-bold text-list-bullet-light dark:text-list-bullet-dark"></span>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-card-paragraph-light dark:text-card-paragraph-dark">{section.content}</p>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
);
export default Card;