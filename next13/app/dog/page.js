export default async function Dog() {
    const res = await fetch('http://localhost:3000/api/dog')
    const dog = await res.json();

    return (
        <div style={{
            display: "flex", 
            flexDirection: 'column', 
            justifyContent: 'center', 
            height: '430px',
            alignItems: 'center',
            gap: '20px'
        }}> 
            <img src={dog.image} />
            <div>{dog.message}</div>
        </div>
    )
}