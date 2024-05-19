import "./loader.css";

function Loader() {
    return (
        <>
        <div className="loaderOverlay vh-100"></div>

        <div className="loaderRapper">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        </>
    );
}

export default Loader;
