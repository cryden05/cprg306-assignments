export default function Item(props){
    return (
        <>
        <li className="p-4 w-128 mx-auto mb-4 border-4 border-blue-700 rounded" style={{fontFamily: 'Comic Sans MS, cursive, sans-serif'}}>
            {props.name} <br />
            Buy {props.quantity} in {props.category}
        </li>
        </>
    );
}1