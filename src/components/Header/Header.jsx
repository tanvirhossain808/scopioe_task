
const Header = () => {
    return (
        <div className="bg-color-primary">
            <div className="container bg-color-white px-4 flex justify-between items-center">
                <div>
                    <img src="/assets/images/logo/LOGO (1).png" alt="logo" width={88} height={36} />
                </div>
                <div className="flex items-center gap-3">
                    <img src="/assets/images/logo/Notification (1).svg" width={24} height={24} alt="notification logo" />
                    <img src="/assets/images/logo/Menu_Alt_01.svg" width={24} height={24} alt="menu" />
                </div>
            </div>
        </div>

    );
};

export default Header;