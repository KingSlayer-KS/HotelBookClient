import classes from './WhyUsPage.module.css';


const cards = [
  {
    head: "BENIFITS OF ADVENTURE TIME HOLIDAYS",
    des: "Holiday ownership means enjoying a guaranteed standard of quality, and knowing that personal expectations will be satisfied year after year. The certainty of superb facilities and comfortable accommodation always being available. You can share the company of fellow owners who also have the desire for a quality holiday, backed up by the security of ownership. Enjoy knowing that a large part of your future holidays has already paid for and at todays prices. You can also become part of IAP, one of the worlds holiday Exchange companies. Enjoy all the benefits and flexibility of their exchange and travel services. Above all, holiday ownership means great holidays every year for life",
  },

  {
    head: "The Concept",
    des: "Holiday ownership is a very simple concept, which lets you buy a week/s holidays home for a fixed number of years or forever. Effectively you own a share of the development and therefore you only pay for the unkeep of what you actually own. And because the overall cost of development is split across all of the owners, a higher quality of ammenities and furnishing becomes affordable. Your costs are the once only payment for the week/s which you purchase and an annual maintainance fee which: covers your share of the unkeep of your particular accommodation plus any common areas such as swimming pool. This charge will usually be paid to a Management company who will be responsible for the day to day running and maintainance of the development. Holiday ownership complexes are builtby developers. While the development is still being sold the rights of the owners will usually be protected by a recognised legal structure. The concept of holiday ownership has now been operating successfully for almost 30 years.",
  },

  {
    head: "Choice",
    des: "As well as a range of locations you'll also find various sizes of accommodation to suit your needs from comfortable studios and hotels rooms through to more spacious apartments and villas with several bedrooms to accommodate larger famijes - and all with the timeshare hallmark of quality furnishings and facilities. And finally you can choose to own your vacations during the time of year which suits you best high season if you wish to travel during the school holidays, mid season if you can be a little more flexible and low season if getting away from it all for a bit more peace and quiet is what you want."
  },

  {
    head: "Use",
    des: "For a lifetime memorable holidays, whether it is a day, a week or more.",
  },

  {
    head: "Share",
    des: "As a gift with family, extended family, friends or business associates.",
  },

  {
    head: "Exchange",
    des: "Through an International program which allows Owners access to holiday resorts around the world.",
  },

  {
    head: "Rent",
    des: "If you cannot get away an holiday, you can rent it out for others. Transfers part of your estate to be enjoyed for generations to come.",
  },

  {
    head: "Quality",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quos, cupiditate quis numquam consequatur maiores atque debitis non eum nihil explicabo! Ipsum optio cumque omnis enim non, adipisci tempore ea.",
  },

  {
    head: "Flexibility",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quos, cupiditate quis numquam consequatur maiores atque debitis non eum nihil explicabo! Ipsum optio cumque omnis enim non, adipisci tempore ea.",
  },
];

function WhyUsPage() {
  return (
   <div className={classes.html}>
     <div className={classes.cryptoServices}>
      <h1 className={classes.cryptoServicesHeading}>
        <span>Why Us</span>
      </h1>
      <div className={classes.cryptoServicesBoxContainer}>
        {cards.map((card) => (
          <div className={classes.cryptoServicesBox} key={card.head}>
           
            <h3>{card.head}</h3>
            <p>{card.des}</p>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
}

export default WhyUsPage;