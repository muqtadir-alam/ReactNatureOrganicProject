import "../csscomponents/testimonials.css";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
     
      desc:
             `"Thank you for all the amazing produce and products you deliver each week…
             you make my life so easy an bring goodness into our family eating. 
             I’ve been roasting a lot of brussel sprouts and"`, },
  
   
  ];
    return (
      <>
    <div className="testimonials" id="testimonials">
      
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              {/* <img src="" className="left" alt="" /> */}
              <img
                className="user"
                src={d.img}
                alt=""
              />
            
                </div>
                
                <div class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  
                </div>
                <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
            <div className="center">
              {d.desc}
            </div>
        
          </div>
        ))}
      </div>
    </div>
          </>
  );
}