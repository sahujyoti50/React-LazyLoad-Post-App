export default function Post({ userId, id, title, body }) {
    return (
        <div style={{ display: 'inline-flex', borderRadius: '5px', border: '1px solid grey', margin: '10px', padding: '5px', background: 'white' }}>
            
            <div>
                <img src={`https://picsum.photos/id/${id}/200/200`} alt={id} />
            </div>
            <div style={{padding:'10px'}}>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    )
}