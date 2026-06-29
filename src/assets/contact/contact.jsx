import { useState } from "react"

export default function Contact(){
    const [showPopup, setShowPopup] = useState(false)
    return(
        <div>
            <button onClick={()=>showPopup(true)}>
            click me
            </button>
            {showPopup && (
                <div className="overlay">
                    <div className="popup">
                        
                    </div>
                </div>
            )
            }
        </div>
    )
}