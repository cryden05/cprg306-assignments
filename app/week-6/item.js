export default function Item({name, quantity, category}){
    return (
        <>
        <li className="p-4 w-128 mx-auto mb-4 border-4 border-blue-700 rounded text-white" style={{ fontFamily: '"Comic Sans MS", cursive, sans-serif' }}>
            {name} <br />
            Buy {quantity} in {category}
        </li>
        </>
    );
}