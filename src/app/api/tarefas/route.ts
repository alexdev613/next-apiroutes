import { NextResponse } from 'next/server';

let tarefas = ['Comprar coca', 'Estudar NextJS']

export async function GET(request: Request) {
  return NextResponse.json(tarefas);
}