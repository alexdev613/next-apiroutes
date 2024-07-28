import { NextResponse } from 'next/server';

let tarefas = ['Comprar coca', 'Estudar NextJS']

export async function GET(request: Request) {
  return NextResponse.json(tarefas);
}

export async function POST(request: Request) {
  const data = await request.json();
  // console.log(data);
  tarefas.push(data.name);

  return NextResponse.json(tarefas);
}