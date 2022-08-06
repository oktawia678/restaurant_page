export const Header = () => {
    return(
        <>
        <div style={{display:'flex',backgroundColor:'pink',width:'100vw',height:'15vh',justifyContent:'center',alignItems:'center'}}>
            <div style={{flexBasis: '30vw',display: 'flex',justifyContent: 'center'}}>Logo</div>
            <div style={{flexBasis: '70vw',display:'flex',flexDirection: 'row',gap: '60px',justifyContent: 'center',textTransform:'uppercase' }}>
                <div>menu</div>
                <div>dania</div>
                <div>kontakt</div>
                <div>o nas</div>
            </div>
        </div>
    
        </>
    )
}