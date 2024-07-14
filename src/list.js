
const List = ({Listitem})=>{
    return(
        <>
        <ul>
            {Listitem.map((each)=>{
                <li>{each}</li>
            })}
        </ul>
        </>
    )
};
 
export default List;

