const Tips = ({ text }) => {
    return (
        <>
            <div
                className="tip-overlay"
                style={{
                    display: "none",
                }}
                onClick={() => {
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
