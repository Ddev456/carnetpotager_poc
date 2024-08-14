import { Payment, Plant, columns } from "../components/plantes/columns"
import { DataTable } from "../components/plantes/data-table"

async function getData(): Promise<Plant[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "Laitue",
      category: "Légume Feuille",
      description: "Plante 1",
      image: "lettuce.jpg",
    },
    {
      id: "728edZ1f",
      name: "Tomate",
      category: "Légume Fruit",
      description: "Plante 2",
      image: "tomato.jpg",
    },
    {
      id: "342RT45",
      name: "Petit pois",
      category: "Légume Grain",
      description: "Plante 3",
      image: "greenpea.jpg",
    },
    {
      id: "728ed52f",
      name: "Tournesol",
      category: "Fleur",
      description: "Plante 4",
      image: "sunflower.jpg",
    },
    {
      id: "7281E2f",
      name: "Carotte",
      category: "Légume Racine",
      description: "Plante 6",
      image: "carrot.jpg",
    },
    {
      id: "4526RTZ4",
      name: "Concombre",
      category: "Légume Fruit",
      description: "Plante 7",
      image: "cucumber.jpg",
    }
    // ...
  ]
}

export default async function PlantesPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
