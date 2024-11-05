import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      height: '430px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px'
    }}>
      <h1>골라보세요</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '70px'
      }}>
        <Link href={'/dog'}>
          <button>강아지</button>
        </Link>
        <Link href={'/cat'}>
          <button>고양이</button>
        </Link>
      </div>
    </div>
  )
}
