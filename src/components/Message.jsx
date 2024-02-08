import { useNavigate } from 'react-router-dom';

function Message({ children, type, actionColor }) {
    const navigate = useNavigate();

    function hanndleCloseMessage() {
        navigate('/dashboard');
    }

    if (type === 'signup')
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

    if (type === 'error')
        return <p className="mt-5 text-red text-small">{children}</p>;

    // if (type === 'action')
    //     return (
    //         <div className="px-15 py-10 fixed top-15 left-1/2 translate-x-[-50%] bg-green text-white rounded-large z-30">
    //             {children}
    //         </div>
    //     );
}

export default Message;
