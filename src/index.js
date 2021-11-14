/*

steps:
  - get restuarants in area by zipcode (limit size to 5 or)
  (ex: https://api.documenu.com/v2/restaurants/zip_code/11211?size=5)
  - store those restaurants in a json file or object with
  each restuarant's name linked to its id
  - render those restaurants on the page
  - if user clicks a restaurant get its menu information
  - fetch restaurant's menu information by its id
  (ex: https://api.documenu.com/v2/restaurant/4068705373999617/menuitems)

*/

async function getRestaurant() {
  const response = await fetch(
    "https://api.documenu.com/v2/restaurants/state/NY"
  );
  const jsonData = await response.json();
  return jsonData;
}

getRestaurant().then((data) => {
  console.log(data);
});
