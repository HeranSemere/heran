
import React from "react";
import SkillCard from "components/SkillCard";
import { useGetGeneralInfoQuery } from "redux/services/services.all";


export default function Skills() {

    const { data: skillData, isSuccess } = useGetGeneralInfoQuery('skills');

    return (
        isSuccess ?
            <section id="skills" className="full-screen content">
                <div className="container px-5 py-10 mx-auto">
                    <div className="text-center mb-20">
                        {/* <ChipIcon className="w-10 inline-block mb-4" /> */}
                        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                            Skills &amp; Technologies
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
                            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
                            possimus est.
                        </p>
                    </div>

                    <div className="skills-container">
                        {
                            skillData.includes.Asset.map((data, index) => {
                                return <SkillCard key={data.fields.title} index={index} data={data} />
                            })
                        }
                    </div>
                </div>
            </section> : <div>Loading...</div>
    );
}