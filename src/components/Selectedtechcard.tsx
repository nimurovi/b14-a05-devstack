import { ImCross } from "react-icons/im";
import type { Typeofdata } from "./Technologies";
interface Selectedtechcardprops {
    s: Typeofdata;
}

export default function Selectedtechcard({ s }: Selectedtechcardprops) {
    console.log(s);
    return (
        <>
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4">

               
                <div className="flex items-center gap-4">
 
                    <img
                        src={s.icon}
                        alt={s.name}
                        className="h-12 w-12 object-contain"
                    />
 
                    <div>
                        <h2 className="text-lg font-bold text-slate-800">
                            {s.name}
                        </h2>

                        <p className="text-sm text-slate-400">
                            {s.category}
                        </p>
                    </div>

                </div>
 
                <button  className="text-3xl text-slate-400 hover:text-red-500">
                   <ImCross />
                </button>

            </div>
        </>
    )
}