const ProjectModal = ({ project, projectModalRef, onClose }) => {
    if (!project) return null;

    return (
        <>
            <div className="window" ref={projectModalRef}>
                <div className="title-bar">
                    <div className="title-bar-title">Project Details</div>
                    <div
                        className="title-bar-close"
                        onClick={() => {
                            onClose();
                        }}></div>
                </div>
                <div className="content">
                    <div
                        className="github-img"
                        style={{
                            background: `url(${project.image})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                        }}></div>
                    <div className="heading">{project.name}</div>
                    <div className="description">{project.description}</div>
                    <a className="link" target="_blank" href={project.link}>
                        Github
                    </a>
                </div>
            </div>
        </>
    );
};

export default ProjectModal;
