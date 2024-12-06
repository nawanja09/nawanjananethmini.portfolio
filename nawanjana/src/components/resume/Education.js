 import React from "react";
 import ResumeCard from "./ResumeCard";

 const Education = () => {
    return(
        <div className="w-full gap-20">
                <div className="py-12 font-titleFont">
                    <p className="text-sm test-desighColor tracking-[4px]">My journey and achievement in education are as follows.</p>  
                </div>
                <div className="mt-12 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex-col gap-10">
                    <ResumeCard
                        title="Sri Lanka Institute of Information Technology(SLIIT)"
                        subTitle="BSc (Hons) in Information Technology(Special) "
                        result="2022 - 2026"
                        des="Embarking on the journey of higher education at SLIIT, I am currently pursuing a Bachelor of Science (Honors) in Information Technology (Special). 
                        The program is equipping me with a comprehensive understanding of cutting-edge technologies and their applications. This academic pursuit is not only 
                        broadind my knowledge in the field but is also fostering critical thinking and problem-solving skills. The specialized curriculum provides a solid 
                        foundation in various aspects of Information Technology,preparing me for the dunamic challenges of the digital area. I am enthusiastic about 
                        leveraging this educational experience to contribute meaningfully to the evolving landscape of IT."
                    />
                    <br/>
                    <ResumeCard
                        title="Sri Sumangala National College"
                        subTitle="Advanced Level (Engineering Technology)"
                        result="2012 - 2020"
                        des="During my studies at ri Sumangala National College, I pursued and completed Ordinary-level and Advanced-level studies in Engineering Technology. 
                        Beyond actively I developed strong leadership skills,discipline and extra curricular activities."
                    />
                </div>
            </div>
    )
 }

 export default Education