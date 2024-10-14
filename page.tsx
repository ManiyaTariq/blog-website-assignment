import image from "next/image";

export default function Card(){
    return (<>
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <h1 className="text-4xl font-bold mb-4">Strawberry Cake Recipe</h1>
        <img src="dish 11.jpg" alt="Strawberry Cake" className="w-full h-[330px] object-cover mb-4"/>  
    </div>
    <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
    <ul className="list-disc pl-4 mb-4 ">
        <li>2 cups all-purpose flour</li>
        <li>1 cup sugar</li>
        <li>2 cups sliced strawberries</li>
        <li>More Ingredients</li>
        </ul>
        <h2 className="text-2xl font-bold mb-2">Instructions</h2>
        <ol className="list-decimal pl-4 mb-4">
            <li>Preheat oven to 350 degree F(180 degree C)</li>
            <li>Mix wet ingredients in a large bowl.</li>
            <li>More Instructions</li>
            </ol>
    
    
    </>)
}
    