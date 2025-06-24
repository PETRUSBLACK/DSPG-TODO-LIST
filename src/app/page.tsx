import { prisma } from "@/db";
import Link from "next/link";

const todos = prisma.todo.create({ data: { title: "test", complete: false}})

export default async function Home(){

  const todos = await prisma.todo.findMany()
  console.log("hello")
  console.log(todos)

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2x1">Todos</h1>
        <Link 
          className="border border-slate-300 text-slate-300 px-2 py-1 
          rounded hover:bg-slate-700 focus-within:bg-slate-700 
          outline-none"  href="/new">New</Link>
      </header>

    <ul className="pl-4">
      {todos.map( (todo:any) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>


    </>
  )
}