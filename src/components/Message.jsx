import { useNavigate } from 'react-router-dom';

function Message({ children, type }) {
    const navigate = useNavigate();

    function hanndleCloseMessage() {
        navigate('/dashboard');
    }

    return (
        <div className="w-screen h-screen backdrop-blur-md bg-[#000000a9] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute flex items-center justify-center">
            <div className="py-30 px-60 rounded-normal bg-white text relative ">
                {children}
                <span
                    onClick={hanndleCloseMessage}
                    className="px-10 absolute top-[0px] right-[0px] text-h4 cursor-pointer bg text-white"
                >
                    x
                </span>
            </div>
        </div>
    );
}

export default Message;
