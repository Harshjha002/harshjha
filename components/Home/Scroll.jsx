'use client'
import { useState } from "react";
import { ScrollItems } from "@/data";

const Scroll = () => {
    const [activeSection, setActiveSection] = useState("#Home");

    return (
            <div className="btm-nav  ">
            {ScrollItems.map((item) => (
                <button
                    key={item.href}
                    disabled={activeSection === item.href}
                    onClick={() => setActiveSection(item.href)}
                    className={`${activeSection === item.href ? "bg-blue-950" : ""}`}

                >
                    <a href={item.href}>{item.Label}</a>
                </button>
            ))}
            </div>
    
    )
}

export default Scroll
