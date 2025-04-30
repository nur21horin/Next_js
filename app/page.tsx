import Link from "next/link"


export default function Home(){
    return(
      <div>
        <main>
        
          <Link href='/project/list'>
          <h2>See Project</h2>
          </Link>
          <h1>Home</h1>
        </main>
  
      </div>
    )
  }

