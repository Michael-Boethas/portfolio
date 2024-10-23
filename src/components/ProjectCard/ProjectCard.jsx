import { useState } from 'react';
import Image from 'next/image';

export default function ProjectCard({ projectData }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleContent = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="project-card card shadow">
      <Image
        className="project-card__image"
        src={projectData.thumbnail_url}
        alt={`Screenshot of ${projectData.name}`}
        width={400}
        height={300}
        onClick={toggleContent}
      />
      <div className="card-body">
        <h5 className="card-title" onClick={toggleContent}>
          {projectData.name}
        </h5>
        
        <div className={`card-text collapse ${isCollapsed ? '' : 'show'}`}>
          <p>{projectData.description}</p>

          <div className="d-flex flex-column gap-2 py-3">
            <a href={projectData.project_url} className="btn btn-primary">
              Site
            </a>
            <a href={projectData.codebase_url} className="btn btn-primary">
              Code
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
