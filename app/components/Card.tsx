import React from "react";

interface Section {
  title: string;
  content: string | string[];
}

interface CardProps {
  img?: string;
  name?: string;
  age?: string;
  education?: string;
  location?: string;
  job?: string;
  hobbies?: string;
  sections?: Section[];
}

const Card: React.FC<CardProps> = ({ img, name, age, education, location, job, hobbies,  sections = [] }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md">
      {img && (
        <div className="flex justify-center">
          <img src={img} alt={name} className="rounded-xl object-cover" style={{ width: 400, height: 300 }} />
        </div>
      )}

      <div className="mt-4 space-y-2">
        {name && <p className="text-gray-700 dark:text-gray-300"><strong>NAME:</strong> {name}</p>}
        {age && <p className="text-gray-700 dark:text-gray-300"><strong>AGE:</strong> {age}</p>}
        {job && <p className="text-gray-700 dark:text-gray-300"><strong>JOB:</strong> {job}</p>}
        {hobbies && <p className="text-gray-700 dark:text-gray-300"><strong>HOBBIES:</strong> {hobbies}</p>}
      </div>
      
      {sections.length > 0 && (
        <div className="mt-4 space-y-4">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold dark:text-white">{section.title}</h3>
              {Array.isArray(section.content) ? (
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  {section.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 dark:text-gray-300">{section.content}</p>
              )}
            </div>
          ))}
        </div>
      )} 
    </div>
  );
};
export default Card;
