const Tips = ({ text, typeOf }) => {
    return (
        <>
            <div
                className="tip-overlay"
                style={{
                    display: "none",
                    zIndex: typeOf === "home" ? 5 : 16777271,
                }}
                onClick={(e) => {
                    document.querySelector(".tip-overlay").style.opacity = "0";
                    setTimeout(() => {
                        document.querySelector(".tip-overlay").style.display =
                            "none";
                    }, 600);
                }}>
                <div className="tip-gif"></div>
                <p>{text}</p>
            </div>
        </>
    );
};

export default Tips;
