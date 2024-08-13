import { Searchbar } from "./Searchbar"

export const Dashboard = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-around">
      <h1 className="text-slate-900 text-2xl font-bold">Dashboard</h1>
      <Searchbar />
    </div>
  )
}