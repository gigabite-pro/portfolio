import { useSpring, useTrail, animated } from "react-spring";
import { useSound } from "use-sound";

const roundTo = (number, places = 0) =>
    Math.round(number * 10 ** places) / 10 ** places;

const DarkModeToggle = ({ size = 50, colorMode, setColorMode }) => {
    const [playOn] = useSound("./switch-on.mp3", {
        volume: 1,
    });
    const [playOff] = useSound("./switch-off.mp3", {
        volume: 1,
    });

    const isDark = colorMode === "dark";

    function toggleColorMode(event) {
        event.preventDefault();
        setColorMode(isDark ? "light" : "dark");

        document.querySelector(".toggleBtn").style.borderColor = isDark
            ? "#000"
            : "#FFF";

        if (isDark) {
            playOn();
        } else {
            playOff();
        }
    }

    const svgSpring = useSpring({
        transform: isDark ? "rotate(40deg)" : "rotate(90deg)",
        immediate: false,
    });
    const maskSpring = useSpring({
        cx: isDark ? 10 : 25,
        cy: isDark ? 2 : 0,
        config: {
            mass: 3.1,
            friction: 21,
        },
        immediate: false,
    });
    const sunMoonSpring = useSpring({
        r: isDark ? 8 : 5,
        immediate: false,
    });

    const sunDotAngles = [0, 60, 120, 180, 240, 300];

    const sunDotTrail = useTrail(sunDotAngles.length, {
        transform: isDark ? 0 : 1,
        transformOrigin: "center center",
        immediate: isDark || false,
        config: {
            tension: 210,
            friction: 20,
        },
    });

    return (
        <IconWrapper
            onClick={(e) => toggleColorMode(e)}
            aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
            title={isDark ? "Activate light mode" : "Activate dark mode"}>
            <MoonOrSun
                width={size}
                height={size}
                viewBox="-4 0.5 25 18"
                style={svgSpring}>
                <mask id={`moon-mask`}>
                    <rect x="0" y="0" width="18" height="18" fill="#FFF" />
                    <animated.circle {...maskSpring} r="8" fill="black" />
                </mask>

                <animated.circle
                    cx="9"
                    cy="9"
                    fill={isDark ? "#FFF" : "#000"}
                    mask={`url(#moon-mask)`}
                    {...sunMoonSpring}
                />

                {/* Sun dots */}
                <g>
                    {sunDotTrail.map(({ transform, ...props }, index) => {
                        const angle = sunDotAngles[index];
                        const centerX = 9;
                        const centerY = 9;

                        const angleInRads = (angle / 180) * Math.PI;

                        const c = 8; // hypothenuse

                        // I was getting a rehydration error because apparently
                        // there was a different # of decimal places between
                        // Node and browser. Round to 6 decimal places to avoid
                        // this rehydration warning.
                        const a = roundTo(
                            centerX + c * Math.cos(angleInRads),
                            6
                        );
                        const b = roundTo(
                            centerY + c * Math.sin(angleInRads),
                            6
                        );

                        return (
                            <animated.circle
                                key={angle}
                                cx={a}
                                cy={b}
                                r={1.5}
                                fill="#000"
                                style={{
                                    ...props,
                                    transform: transform.to(
                                        (t) => `scale(${t})`
                                    ),
                                }}
                            />
                        );
                    })}
                </g>
            </MoonOrSun>
        </IconWrapper>
    );
};

const iconWrapperStyles = {
    position: "fixed",
    zIndex: 5,
    bottom: "25px",
    right: "25px",
    border: "2px solid",
    borderColor: "#000",
    borderRadius: "50%",
    background: "none",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transitionDuration: "0.3s",
};

const moonOrSunStyles = {
    position: "relative",
    overflow: "visible",
};

const IconWrapper = ({ children, ...props }) => (
    <button className="toggleBtn" style={iconWrapperStyles} {...props}>
        {children}
    </button>
);

const MoonOrSun = ({ children, ...props }) => (
    <animated.svg style={moonOrSunStyles} {...props}>
        {children}
    </animated.svg>
);

const DarkModeToggleContainer = ({ colorMode, setColorMode }) => {
    return <DarkModeToggle colorMode={colorMode} setColorMode={setColorMode} />;
};

export default DarkModeToggleContainer;
