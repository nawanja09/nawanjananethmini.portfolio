import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile} from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
    return (
        <section id="features" className="w-full py-20 items-centerr border-b-[1px] border-b-black">
            <Title title="Features" des="What I Do"/>

            <div className="grid grid-cols-3 gap-20">
                <Card
                    icon= {<AiFillAppstore />}
                    title= "App Development"
                    des= "Create stunning websites with cutting-edge technologies for an immersive online presence."
                />
                <Card
                    icon= {<FaMobile />}
                    title= "Android Development"
                    des="Shape the future of mobile applications with intuitive and feature-rich Android development."
                />
                <Card
                    icon= {<SiAntdesign />}
                    title= "UI/UX Design"
                    des= "Craft visually appealing and user-friendly interfaces for an enhanced digital experience."
                />
            </div>

        </section>
        
    )
}

export default Features