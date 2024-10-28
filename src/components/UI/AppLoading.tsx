const AppLoading = () => {
    return (
        <div className="w-full h-full fixed top-0 left-0 bg-black opacity-75 z-50">
            <div className="flex justify-center items-center mt-[50vh]">
                <div className="fas fa-circle-notch fa-spin fa-5x text-form-bg"></div>
            </div>
        </div>
    );
};

export default AppLoading;
