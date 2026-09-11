import Selectedtechcard from "./Selectedtechcard";
import type { Typeofdata } from "./Technologies";
export interface technoloyProps {
    selectedTechnoloies: Typeofdata[]
    handleRemAll: () => void
    handleRemSpacific:(id:string)=>void
     
}

export default function Selectedtechnology({ selectedTechnoloies, handleRemAll, handleRemSpacific  }: technoloyProps) {
 
    return (
        <>

            <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">


                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">
                        Your Stack
                    </h1>

                    <p className="mt-2  text-[#94A3B8]">
                        {
                            selectedTechnoloies.length === 0 ? "No technologies selected yet." : `${selectedTechnoloies.length} Technology Selected`
                        }

                    </p>
                </div>


                <div className="space-y-3">
                    {
                        selectedTechnoloies.length === 0 ? <div className=" border border-dashed  border-[#94A3B8] rounded-2xl p-7 flex container justify-center mx-auto"> <p className="text-[#94A3B8]"> Your stack is empty </p> </div> : selectedTechnoloies.map((s) => (
                            <Selectedtechcard
                                key={s.id}
                                s={s}
                                handleRemSpacific={handleRemSpacific}
                            />
                        ))
                    }

                </div>
                {
                    selectedTechnoloies.length>0 && <button onClick={handleRemAll} className="mt-24 w-full rounded-2xl border border-red-400 py-3 text-2xl font-semibold text-red-500 transition hover:bg-red-50">
                    Remove All
                </button> 
                }    
                    
            </div>



        </>
    )
}