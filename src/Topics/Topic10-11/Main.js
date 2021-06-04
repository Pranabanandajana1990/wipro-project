import React, { useState } from 'react'

export default function Assignment() {

    const [math, setMath] = useState(0)
    const [phy, setPhy] = useState(0)
    const [chem, setChem] = useState(0)
    const [bio, setBio] = useState(0)

    function handleSubmit(e) {
        e.preventDefault();
        const result = (math + phy + chem + bio) / 4;
        if (isNaN(result)) {
            alert("Please input Numbers only")
        } else {
            alert(result);
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="math" id="" onChange={(e) => { setMath(parseInt(e.target.value , 10 )) }} required
                 placeholder="Math" /> <br />
                <input type="text" name="phy" id="" onChange={(e) => { setPhy(parseInt(e.target.value, 10)) }} required placeholder="Physics" /> <br />
                <input type="text" name="chem" id="" onChange={(e) => { setChem(parseInt(e.target.value, 10)) }} required placeholder="Chemistry" /> <br />
                <input type="text" name="bio" id="" onChange={(e) => { setBio(parseInt(e.target.value, 10)) }} required placeholder="Biology" /><br />
                <input type="submit" value="Average" />
            </form>
        </>
    )
}
