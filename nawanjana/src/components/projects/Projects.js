import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { Lab01,Lab02,Lab04,car_racing,MERN,paygo,hospital} from "../../assets/index";

const Projects = () => {
    return(
        <section id="projects" className="w-full py-20 items-centerr border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title 
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" 
                    des="My Projects"
                />
            </div>
            <div>
                <h2>Web App | Android App | UI/UX Design</h2>
            </div>
            <br/>
            <div className="grid grid-cols-3 gap-14">
                <ProjectsCard
                    title="Coffee For You"
                    des="This is a sample landing page for a coffee ordering website.
                    This project was built for a get an good idea about UX design,CSS,CSS flexbox and AOS..."
                    src={Lab01}
                    
                />
                <ProjectsCard
                    title="24*7 Healthcare App"
                    des=" This is 24*7 healthcare app which is developed using Android Studio + Kotlin. 
                    This project was  beginner built as a part of 2nd year 2nd semester MAD game development project..."
                    src={Lab02}
                />
                <ProjectsCard
                    title="NEW GEN"
                    des="THis project was built using React,Node.js,Express and MongoDB as the local development server. 
                    This feature-rich application includes user authentication, profile management, seamless Google Auth integration,
                    and responsive design. Check out the seamless functionality and user-friendly interface showcased in this
                    project, a testament to my proficiency in full-stack web development. "
                    src={MERN}
                />
                <ProjectsCard
                    title="PayGo"
                    des="This is a online paypal system which is developed using a combination of HTML,CSS,Bootstrap 5,Javascript seamlessly integrated into PHP.
                    This project was built as a part of 1st year 2nd semester IWT project."
                    src={paygo} 
                />
                <ProjectsCard
                    title="Car Reacing Gaming App"
                    des="This is a car reacing game which is developed using Android Studio + Kotlin. 
                    This project was built as a part of 2nd year 2nd semester MAD game development project..."
                    src={car_racing}
                />
                <ProjectsCard
                    title="Book Library App"
                    des="This is a creating a book library app which is creating using SQLite + Android Studio. Our application will have all the necessary functionality which every app with database should have. That includes CRUD (Create, Read, Update, Delete) functions.
                    This project was built as a part of 2nd year 2nd semester MAD Project."
                    src={Lab04}
                />
                <ProjectsCard
                    title="HospitalDemo"
                    des="HospitalDemo is a java web-based applicaton for an Online Hospital Management System that brings a user-friendly design with JSP(JavaServer Pages) and Servlet technologies.Developed using HTML,CSS,JS,Java and MySQL.
                    This project was built to SLIIT 2nd year 1st semester OOP Project.."
                    src={hospital}
                />
            </div>
        </section>
    )
    
}

export default Projects