import moment from "moment";
import { useEffect, useRef, useState } from "react";
import ProjectModal from "./components/ProjectModal";

const Projects = () => {
    const [currentTime, setCurrentTime] = useState(moment());
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const projectModalRef = useRef(null);
    const loading = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(moment());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            loading.current.style.opacity = "0";
            setTimeout(() => {
                loading.current.style.display = "none";
            }, 500);
        }, 2500);
        fetch("/projects.json")
            .then((response) => response.json())
            .then((data) => {
                setProjects(data.projects);
            });
    }, []);

    const openProjectModal = (project) => {
        setSelectedProject(project);
        if (projectModalRef.current) {
            projectModalRef.current.style.display = "block";
        }
    };

    const closeProjectModal = () => {
        setSelectedProject(null);
        if (projectModalRef.current) {
            projectModalRef.current.style.display = "none";
        }
    };

    return (
        <>
            <div className="windows-loading" ref={loading}>
                <div className="logo"></div>
                <div className="projects-loading-box">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
            </div>
            <div className="projects-container">
                <div className="all-projects">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-folder"
                            onClick={() => openProjectModal(project)}>
                            <div className="folder"></div>
                            <div className="heading">{project.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                projectModalRef={projectModalRef}
                onClose={closeProjectModal}
            />

            <div id="taskbar">
                <div className="background sliced vertical">
                    <div className="row top"></div>
                    <div className="row middle"></div>
                    <div className="row bottom"></div>
                </div>
                <div id="start-button">
                    <div className="container">
                        <div className="background sliced">
                            <div className="column left">
                                <div className="row top"></div>
                                <div className="row middle"></div>
                                <div className="row bottom"></div>
                            </div>
                            <div className="column middle">
                                <div className="row top"></div>
                                <div className="row middle"></div>
                                <div className="row bottom"></div>
                            </div>
                            <div className="column right">
                                <div className="row top"></div>
                                <div className="row middle"></div>
                                <div className="row bottom"></div>
                            </div>
                        </div>
                        <div className="content">
                            <span className="icon">
                                <img src="https://raw.githubusercontent.com/tdcosta100/WindowsXP/master/images/System/WindowsLogo-small.png" />
                            </span>
                            <span className="text">Start</span>
                        </div>
                    </div>
                </div>
                <div id="task-band"></div>
                <div id="tray-notify">
                    <div className="container">
                        <div className="background sliced">
                            <div className="column left">
                                <div className="row top"></div>
                                <div className="row middle"></div>
                                <div className="row bottom"></div>
                            </div>
                            <div className="column middle">
                                <div className="row top"></div>
                                <div className="row middle"></div>
                                <div className="row bottom"></div>
                            </div>
                            <div className="column right">
                                <div className="row top"></div>
                                <div className="row middle"></div>
                                <div className="row bottom"></div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="clock">
                                <div className="text">
                                    {currentTime.format("h:mm A")}
                                </div>
                                <div
                                    className="overlay"
                                    title="segunda-feira, 8 de abril de 2019"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
