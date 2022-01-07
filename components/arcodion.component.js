export const Acordeon = ({ childs }) => {
    console.log(childs);
    return (
        <div className="acordeon-tabs">
            {
                childs.map((acordeonContent, index)=>{
                    return <div className="acordeon-tab" key={Math.random()}>
                        <input type="checkbox" className="acordeon-checkbox" id={index}/>
                        <label className="acordeon-tab-label" htmlFor={index}>{acordeonContent.title}</label>
                        <div className="acordeon-tab-content">
                            {acordeonContent.child}
                        </div>
                    </div>
                })
            }
        </div>

    );
};