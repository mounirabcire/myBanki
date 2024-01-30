import Logo from './Logo';

function Contact() {
    return (
        <footer className="px-15 lg:px-90 py-60 lg:py-90 bg text-white flex flex-col lg:flex-row items-satrt lg:items-center lg:justify-between space-y-60 lg:space-y-[0px] ">
            <div>
                <Logo />
            </div>
            <div className="space-y-15 max-w-[300px]">
                <p>Be the first to know about our banking news</p>
                <input
                    type="email"
                    placeholder="Email..."
                    className="p-10 w-full bg-transparent border border-blue-50 focus:outline-none"
                />
            </div>
            <div>
                <ul className="space-y-15 max-w-[300px]">
                    <li>Mobile APP</li>
                    <li>Services</li>
                    <li>Reviews</li>
                </ul>
            </div>
            <div>
                <ul className="space-y-15 max-w-[300px]">
                    <li>Mobile APP</li>
                    <li>Services</li>
                    <li>Reviews</li>
                </ul>
            </div>
            <div>
                <ul className="space-y-15 max-w-[300px]">
                    <li>Mobile APP</li>
                    <li>Services</li>
                    <li>Reviews</li>
                </ul>
            </div>
        </footer>
    );
}

export default Contact;
