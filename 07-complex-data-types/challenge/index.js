const companies = [
    { name: "Money 4 U", industry: "Finance", start: 1981, end: 2004 },
    { name: "The Clothes Bay", industry: "Retail", start: 1992, end: 2008 },
    { name: "Luxurious Limousines", industry: "Auto", start: 1999, end: 2007 },
    { name: "Sunglasses House", industry: "Retail", start: 1989, end: 2010 },
    { name: "Vantage Solutions", industry: "Technology", start: 2009, end: 2014 },
    { name: "Money Banking", industry: "Finance", start: 1987, end: 2010 },
    { name: "Triple Motors", industry: "Auto", start: 1986, end: 1996 },
    { name: "Mech Smart", industry: "Technology", start: 2011, end: 2016 },
    { name: "Ice-Cream Lettuce", industry: "Retail", start: 1981, end: 1989 },
  ];

  const displayButton = document.getElementsByTagName("button")[0];
  const container = document.getElementsByClassName("card-container")[0];
  const companyName = document.getElementsByClassName("card__name")[0];
  const industry = document.getElementsByClassName("card__industry")[0];
  const start = document.getElementsByClassName("card__start")[0];
  const end = document.getElementsByClassName("card__end")[0];
   

const getCompanyHtml = (company) => {
  return `
  <div class="card">
  <div class="card__name">Company Name: ${company.name}</div>
  <div class="card__industry">Industry: ${company.industry}</div>
  <div class="card__start">Start: ${company.start}</div>
  <div class="card__end">End: ${company.end}</div>
</div>
`
};


 displayButton.addEventListener("click", () => {

  companies.forEach(company  => {
    container.innerHTML += getCompanyHtml(company)


 });

  
 });



//  const container = document.querySelector(".card-container");
// albums.forEach((album) => {
  // container.appendChild.....
  // container.innerHTML += getAlbumHtml(album)
