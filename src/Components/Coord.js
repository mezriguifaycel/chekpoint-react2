
function Coord(){
 
    const facebookProfile = "https://www.facebook.com/faycel.mezrigui";
    const linkedinProfile= "https://www.linkedin.com/faycel.mezrigui";
  
    return (
        <div className="info">
            <div className="cor">
            <section className="section1">
    Nom : <br/>
    Prenom :<br/>
    Email : <br/>
   Date Naissace : <br/>
    Age : <br/> 
    <br/>
   Media Sociale : <br/>
            </section>
      
 <section className="section2">
    Faycel  <br/>
    Mezrigui <br/>
    mezrigui.faycel@gmail.com <br/>
    22/02/1988<br/>
    35 Ans <br/>
    <br/>
    <div className="mydiv">
     <a href= {facebookProfile} target="_blank" class="lnkpd"> Facebook </a>
     <a href= {facebookProfile} target="_blank" class="lnkpd"> LinkedIn</a>
    </div>
    
    </section>
 
            </div>
            
        </div>
       
    );
}

export default Coord;
