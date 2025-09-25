import NewItem from "./new-item";

export default function Page(){
    return (
        
        <main className="min-h-screen bg-black">

            <h1 className="text-white font-bold text-center my-10 text-3xl">Quantity Counter</h1>
            <NewItem />
        </main>
    );
}
