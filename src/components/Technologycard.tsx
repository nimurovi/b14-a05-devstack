
import { TiTick } from "react-icons/ti";
import type { Typeofdata } from "./Technologies";


export default function Technologycard({ technology , handleSelect,selectedTechnoloies  }: { technology: Typeofdata; handleSelect: (technology: Typeofdata) => void ;selectedTechnoloies: Typeofdata[] }) {
       const isSelected=selectedTechnoloies.some((item)=>item.id===technology.id)

    return (
        <div className="w-full max-w-[340px] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">


            <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center">
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-10 w-10 object-contain"
                    />
                </div>

                <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-500">
                    {technology.badge}
                </span>
            </div>

            <h2 className="mt-5 text-2xl font-bold text-slate-900">
                {technology.name}
            </h2>

            <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
                {technology.description}
            </p>

            <div className="my-4 border-t border-slate-100"></div>

            <div className="flex items-center justify-between gap-2 text-sm">

                <span className="rounded-md bg-slate-100 px-3 py-1 text-slate-600">
                    {technology.category}
                </span>

                <span className="text-slate-500">
                    {technology.difficulty}
                </span>

                <span className="flex items-center gap-1 text-slate-600">
                    <span className="text-yellow-400">★</span>
                    {technology.rating}
                </span>
            </div>

            <button
                type="button"
                disabled={isSelected}
                className={ `mt-5 w-full rounded-lg   py-3 text-sm font-medium  transition hover:bg-[#DB2777] hover:text-white ${isSelected?"cursor-not-allowed bg-slate-300 text-[#DB2777]" :"bg-slate-950 text-white hover:bg-slate-800"}`} 
                onClick={() => handleSelect(technology)}
            >
                {isSelected?<div className="flex justify-center gap-2 "> <TiTick /> Added to Stack </div>:"Add to Stack"}
            </button>
        </div>
    );
}
