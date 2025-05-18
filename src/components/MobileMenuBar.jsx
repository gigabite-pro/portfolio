import { useState, useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useSound from "use-sound";
import { Tooltip } from "react-tooltip";

gsap.registerPlugin(useGSAP);

const MobileMenuBar = ({ colorMode, activeMenuItem, setActiveMenuItem }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuBarRef = useRef(null);
    const [toolTipVisbile, setToolTipVisible] = useState(false);

    const menuItems = [
        { name: "Projects", id: "projects", icon: "fa-solid fa-folder-open" },
        { name: "Resume", id: "resume", icon: "fa-solid fa-file" },
        { name: "Spotify", id: "spotify", icon: "fa-brands fa-spotify" },
    ];

    // about section if want to add later
    // { name: "About", id: "about", icon: "fa-solid fa-circle-info" },

    const [playSwish] = useSound("./swish.wav", {
        volume: 0.3,
    });

    const [playSwishReverse] = useSound("./swish-rev.wav", {
        volume: 0.3,
    });

    const [playStartup] = useSound("./windows-xp-startup.mp3", {
        volume: 0.5,
    });

    const [playShutDown] = useSound("./windows-xp-shutdown.mp3", {
        volume: 0.5,
    });

    useEffect(() => {
        if (menuOpen) {
            gsap.timeline()
                .to(menuBarRef.current, {
                    duration: 0.2,
                    y: "0%",
                    ease: "power2.out",
                    display: "flex",
                })
                .to(".menu-item", {
                    duration: 0.1,
                    y: "0%",
                    opacity: 1,
                    ease: "power2.out",
                    stagger: 0.05,
                });
        } else {
            gsap.timeline()
                .to(".menu-item", {
                    duration: 0.1,
                    y: "-40%",
                    opacity: 0,
                    ease: "power2.out",
                    stagger: 0.05,
                })
                .to(menuBarRef.current, {
                    duration: 0.2,
                    y: "-100%",
                    ease: "power2.in",
                    stagger: 0.1,
                    onComplete: () => {
                        if (menuBarRef.current) {
                            menuBarRef.current.style.display = "none";
                        }
                    },
                });
        }
    }, [menuOpen]);

    return (
        <>
            <Tooltip id="my-tooltip" isOpen={toolTipVisbile} scrollHide={false} resizeHide={false} />
            <div
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Click me to go back to normal view!"
                title="Open menu"
                className="outer-circ outer-circ-2"
                style={{
                    borderColor: colorMode === "dark" ? "#FFF" : "#000",
                }}
                onClick={() => {
                    setMenuOpen(true);
                    setToolTipVisible(true);
                    if (activeMenuItem !== "default") {
                        // camera mode
                        setActiveMenuItem("default");
                        setMenuOpen(false);

                        // remove spotify embed if it exists
                        const spotifyWindow = document.querySelector(".spotify");
                        if (spotifyWindow.style.display === "block") {
                            spotifyWindow.style.opacity = "0";
                            setTimeout(() => {
                                spotifyWindow.style.display = "none";
                                playSwishReverse();
                            }, 400);
                        }

                        // remove projects frame if it exists
                        const projectsFrame = document.querySelector("#projectsFrame");
                        if (projectsFrame.style.display === "block") {
                            playShutDown();
                            projectsFrame.style.opacity = "0";
                            setTimeout(() => {
                                projectsFrame.style.display = "none";
                                playSwishReverse();
                            }, 1000);
                        }

                        // if coming back from resume
                        const resumeLabel = document.querySelector("#resumeLabel");
                        if (resumeLabel.style.transform == "scale(1)") {
                            resumeLabel.style.transform = "scale(0)";
                            playSwishReverse();
                        }

                        setToolTipVisible(false);
                    }
                }}
            >
                {activeMenuItem === "default" ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-video"></i>}
            </div>

            <div className="menu-bar" ref={menuBarRef}>
                <div
                    title="Close menu"
                    className="outer-circ outer-circ-3"
                    style={{
                        borderColor: "#FFF",
                    }}
                    onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}
                >
                    <i className="fa-solid fa-xmark"></i>
                </div>
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={`menu-item ${activeMenuItem}`}
                        onClick={() => {
                            setActiveMenuItem(item.id);
                            setMenuOpen(false);
                            playSwish();

                            if (item.id === "projects") {
                                const projectsFrame = document.querySelector("#projectsFrame");
                                projectsFrame.style.display = "block";
                                setTimeout(() => {
                                    projectsFrame.contentWindow.location.reload();
                                    projectsFrame.style.opacity = 1;
                                    setTimeout(() => {
                                        playStartup();
                                    }, 2000);
                                }, 1000);
                            } else if (item.id === "resume") {
                                const resumeLabel = document.querySelector("#resumeLabel");
                                resumeLabel.style.transform = "scale(1)";
                            }
                        }}
                    >
                        <i className={item.icon}></i>
                        <p>{item.name}</p>
                    </div>
                ))}
                <div className="mobile-socials menu-item">
                    <a href="https://www.linkedin.com/in/v-sharma03/" target="_blank" className="mobile-social-icon">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/gigabite-pro" target="_blank" className="mobile-social-icon">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.instagram.com/_.chintuuu._" target="_blank" className="mobile-social-icon">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.behance.net/chin2sharma" target="_blank" className="mobile-social-icon">
                        <i className="fa-brands fa-behance"></i>
                    </a>
                </div>
            </div>
        </>
    );
};

export default MobileMenuBar;
