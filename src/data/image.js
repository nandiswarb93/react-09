export const Image=(prop)=>{
const {path,alter,hei,wid}=prop;
    return(<>
    {
        <img
        src = {path}
        alt = {alter}
        height = {hei}
        width = {wid}
        />
    }
    </>)
}