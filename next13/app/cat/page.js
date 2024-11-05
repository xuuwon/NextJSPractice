export default async function Cat() {
    const res = await fetch('http://localhost:3000/api/cat')
    const cat = await res.json();

    return (
        <div style={{
            display: "flex", 
            flexDirection: 'column', 
            justifyContent: 'center', 
            height: '430px',
            alignItems: 'center',
            gap: '20px'
        }}>
            <img src={cat.image} />
            <div>{cat.message}</div>
        </div>
    )
}