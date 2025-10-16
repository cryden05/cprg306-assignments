import ItemList from "./item-list";

export default function Page(){
    return (
        
        <main className="min-h-screen bg-black">
            <h1 className="text-white font-bold text-center my-10 text-3xl">Shopping List</h1>
            <ItemList />
        </main>
    );
}