import { useState } from "react";
import "./styles.css";

export default function CalculosCard({ titulo, img, cor }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    
    return(
        <div className="calculos-card" 
            style={{ backgroundColor: cor }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div 
                className={`calculos-background ${isHovered ? 'hover' : ''}`} 
                style={{ backgroundImage: img }}
            />
            <p className="calculos-titulo">{titulo}</p>
        </div>
    );
}