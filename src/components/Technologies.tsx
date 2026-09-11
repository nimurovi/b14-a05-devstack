import { use, useState } from "react";
import Technologycard from "./Technologycard";
import Selectedtechnology from "./Selectedtechnology";

export interface Typeofdata {
    id: string,
    name: string,
    category: string,
    description: string,
    icon: string,
    rating: number,
    difficulty: string,
    badge: string
}


export interface Technologies {
    fetchedData: Promise<Typeofdata[]>;
}

export default function Technologies({ fetchedData }: Technologies) {
    const allfetchedData = use(fetchedData);
    const [selectedTechnoloies, setSelectedTechnologies] = useState<Typeofdata[]>([]);

    const handleTechnologySelect = (technology: Typeofdata) => {
        const newTechnologies = [...selectedTechnoloies, technology];
        setSelectedTechnologies(newTechnologies)
    }
    return (
        <>
            <div className='container mx-auto p-4 mt-8'>
                <h1 className="text-3xl font-extrabold mb-4">Explore the <span className="text-[#DB2777]"> Technologies</span></h1>
                <p className="text-lg text-[#475569]">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="container mx-auto p-4 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"  >
                <div className="container mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3" >
                    {
                        allfetchedData.map((technology: Typeofdata) => (
                            <Technologycard key={technology.id} technology={technology} handleSelect={handleTechnologySelect} />
                        ))
                    }
                </div>
                <div className="container mx-auto p-4  col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 gap-4" >
                    <Selectedtechnology
                        selectedTechnoloies={selectedTechnoloies}
                    />
                </div>
            </div>
        </>
    )
}