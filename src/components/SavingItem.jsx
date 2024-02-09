import { numberFormat } from "../utils/numberFormat";

function SavingItem({ saving }) {
    const { object, amount } = saving;
    return (
        <div className="border-b flex items-start justify-between gap-10">
            <div>{object}</div>
            <div className="flex items-start justify-center gap-10">
                <div>
                    <progress className="" value={50} max={amount}></progress>
                    <div className="text-small text-end font-semibold">${numberFormat(amount)}</div>
                </div>
                <div className=" w-[25px] rounded-normal cursor-pointer bg text-white flex justify-center items-center">
                    <i className="ri-add-line"></i>
                </div>
            </div>
        </div>
    );
}

export default SavingItem;
