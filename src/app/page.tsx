import { Container } from "@/components/container/Container";
import { Input } from "@/components/header/input/Input";
import { GameProps } from "@/utils/types/game"
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";




async function getDalyGames() { 
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, {next: {revalidate: 320}})
      
    return res.json()

  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Home() {
  const dalyGame: GameProps = await getDalyGames()
  
  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">Separamos um jogo exclusivo para você</h1>
        <Link href={`/game/${dalyGame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full max-h-96 h-96 relative rounded-lg">
              
            <div className="absolute z-20 text-white flex bottom-0 p-3 flex justify-center items-center gap-2">
                <p className="font-bold text-xl text-w">{dalyGame.title}</p>
                <BsArrowRightSquare size={24}/>
            </div>

              <Image
                src={dalyGame.image_url}
                alt={dalyGame.title}
                priority={true}
                quality={100}
                fill
                className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
              />
           </div>
          </section>
        </Link>
        <Input />
        
      </Container>
    
    </main>
  );
}
