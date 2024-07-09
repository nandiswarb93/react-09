
const Table = ()=>
{
    return(
        <div>
           <table style={{border:"1px"}}>
            <tr>
                <th>Name</th>
                <th>id</th>
                <th>number</th>
                <th>dept</th>
                <th>year</th>
            </tr>

            <tr>
                <td>Nandiswar</td>
                <td>1</td>
                <td>12345678</td>
                <td>cse</td>
                <td>2023</td>
            </tr>

            <tr>
                <td>Nandis</td>
                <td>2</td>
                <td>0987654321</td>
                <td>cse</td>
                <td>2024</td>
            </tr>
           </table>

        </div>
    );
}
export default Table;