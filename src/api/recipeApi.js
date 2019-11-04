import { from, of } from "rxjs";
import {
  map,
  switchMap,
  combineAll,
  concatMap,
  mergeMap
} from "rxjs/operators";
import { getAxios } from "./interceptors";
import { RECIPES_URI, API_KEY } from "./consts";

const createDetailsURl = id => `${RECIPES_URI}${id}/information${API_KEY}`;
const createMealURl = query => `${RECIPES_URI}search?query=${query}${API_KEY}`;
const axios = getAxios();

function getData() {
  return JSON.parse(
    '{"results":[{"id":215435,"title":"Three-Cheese Pizza (For Cheese Lovers)","readyInMinutes":45,"servings":8,"image":"three-cheese-pizza-for-cheese-lovers-215435.jpg","imageUrls":["three-cheese-pizza-for-cheese-lovers-215435.jpg"]},{"id":116679,"title":"Leek & Cheese Pie","readyInMinutes":75,"servings":4,"image":"leek-amp-cheese-pie-2-116679.jpg","imageUrls":["leek-amp-cheese-pie-2-116679.jpg","leek_amp_cheese_pie-116679.jpg"]},{"id":414947,"title":"Beef and Cheese Pie","readyInMinutes":60,"servings":8,"image":"Beef-and-Cheese-Pie-414947.jpg","imageUrls":["Beef-and-Cheese-Pie-414947.jpg"]},{"id":449798,"title":"Cauldron Cheese Ball","readyInMinutes":25,"servings":32,"image":"Cauldron-Cheese-Ball-449798.jpg","imageUrls":["Cauldron-Cheese-Ball-449798.jpg"]},{"id":475345,"title":"Bleu Cheese Dip","readyInMinutes":5,"servings":8,"image":"Bleu-Cheese-Dip-475345.jpg","imageUrls":["Bleu-Cheese-Dip-475345.jpg"]},{"id":510089,"title":"Stovetop Mac and Cheese","readyInMinutes":45,"servings":6,"image":"Stovetop-Mac-and-Cheese-510089.jpg","imageUrls":["Stovetop-Mac-and-Cheese-510089.jpg"]},{"id":587340,"title":"Pimento Cheese Spread","readyInMinutes":45,"servings":8,"image":"Pimento-Cheese-Spread-587340.jpg","imageUrls":["Pimento-Cheese-Spread-587340.jpg"]},{"id":589094,"title":"Cheese and veggie sandwich","readyInMinutes":25,"servings":4,"image":"Cheese-and-veggie-sandwich-589094.jpg","imageUrls":["Cheese-and-veggie-sandwich-589094.jpg"]},{"id":943857,"title":"Chili Mac and Cheese","readyInMinutes":20,"servings":6,"image":"chili-mac-and-cheese-943857.jpg","imageUrls":["chili-mac-and-cheese-943857.jpg"]},{"id":1001036,"title":"Blue Cheese Coleslaw","readyInMinutes":5,"servings":4,"image":"blue-cheese-coleslaw-1001036.jpg","imageUrls":["blue-cheese-coleslaw-1001036.jpg"]}],"baseUri":"https://spoonacular.com/recipeImages/","offset":0,"number":10,"totalResults":328,"processingTimeMs":395,"expires":1572623905666,"isStale":false}'
  );
}

const loadRecipeQueryTestData = new Promise((resolve, reject) => {
  const data = getData();

  resolve(data);
});
const loadRecipeQuery = query => axios.get(createMealURl(query));
export const recipeObservable$ = data =>
  from(loadRecipeQueryTestData).pipe(
    map(res => res.results),

    map(recipes => {
      return recipes.map(recipe => {
        return {
          ...recipe,
          subheader: `Ready in ${recipe.readyInMinutes} minutes`,
          image: `https://spoonacular.com/recipeImages/${recipe.image}`,
          info: `Provides ${recipe.servings} servings`
        };
      });
    })
  );
const detailsTest = () =>
  JSON.parse(
    '{"vegetarian":false,"vegan":false,"glutenFree":false,"dairyFree":false,"veryHealthy":false,"cheap":false,"veryPopular":false,"sustainable":false,"weightWatcherSmartPoints":7,"gaps":"no","lowFodmap":false,"ketogenic":false,"whole30":false,"sourceUrl":"http://www.myrecipes.com/m/recipe/three-cheese-pizza-for-cheese--50400000110662/","spoonacularSourceUrl":"https://spoonacular.com/three-cheese-pizza-for-cheese-lovers-215435","aggregateLikes":1,"spoonacularScore":21.0,"healthScore":2.0,"creditsText":"My Recipes","sourceName":"My Recipes","pricePerServing":105.93,"extendedIngredients":[{"id":2049,"aisle":"Produce;Spices and Seasonings","image":"thyme.jpg","consitency":"solid","name":"fresh thyme leaves","original":"2 tablespoons fresh thyme leaves","originalString":"2 tablespoons fresh thyme leaves","originalName":"fresh thyme leaves","amount":2.0,"unit":"tablespoons","meta":["fresh"],"metaInformation":["fresh"],"measures":{"us":{"amount":2.0,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2.0,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":4053,"aisle":"Oil, Vinegar, Salad Dressing","image":"olive-oil.jpg","consitency":"liquid","name":"olive oil","original":"1 tablespoon truffle or extra-virgin olive oil","originalString":"1 tablespoon truffle or extra-virgin olive oil","originalName":"truffle or extra-virgin olive oil","amount":1.0,"unit":"tablespoon","meta":["extra-virgin"],"metaInformation":["extra-virgin"],"measures":{"us":{"amount":1.0,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1.0,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":1033,"aisle":"Cheese","image":"parmesan.jpg","consitency":"solid","name":"parmesan cheese","original":"2 tablespoons finely grated Parmesan cheese","originalString":"2 tablespoons finely grated Parmesan cheese","originalName":"finely grated Parmesan cheese","amount":2.0,"unit":"tablespoons","meta":["finely grated"],"metaInformation":["finely grated"],"measures":{"us":{"amount":2.0,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2.0,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":1028,"aisle":"Cheese","image":"shredded-cheese-white.jpg","consitency":"solid","name":"part-skim mozzarella cheese","original":"3/4 cup grated part-skim mozzarella cheese","originalString":"3/4 cup grated part-skim mozzarella cheese","originalName":"grated part-skim mozzarella cheese","amount":0.75,"unit":"cup","meta":["grated"],"metaInformation":["grated"],"measures":{"us":{"amount":0.75,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":177.441,"unitShort":"ml","unitLong":"milliliters"}}},{"id":1037,"aisle":"Cheese","image":"ricotta.png","consitency":"liquid","name":"part-skim ricotta cheese","original":"1/2 cup part-skim ricotta cheese","originalString":"1/2 cup part-skim ricotta cheese","originalName":"part-skim ricotta cheese","amount":0.5,"unit":"cup","meta":[],"metaInformation":[],"measures":{"us":{"amount":0.5,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":118.294,"unitShort":"ml","unitLong":"milliliters"}}},{"id":93770,"aisle":"Pasta and Rice;Refrigerated","image":"pizza-dough.jpg","consitency":"solid","name":"pizza crust","original":"prebaked pizza crust","originalString":"prebaked pizza crust","originalName":"prebaked pizza crust","amount":8.0,"unit":"servings","meta":[],"metaInformation":[],"measures":{"us":{"amount":8.0,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":8.0,"unitShort":"servings","unitLong":"servings"}}}],"id":215435,"title":"Three-Cheese Pizza (For Cheese Lovers)","readyInMinutes":45,"servings":8,"image":"https://spoonacular.com/recipeImages/215435-556x370.jpg","imageType":"jpg","cuisines":["Mediterranean","Italian","Eastern European","European","Greek"],"dishTypes":["side dish"],"diets":[],"occasions":[],"winePairing":{},"instructions":"Place a prebaked pizza crust on a shallow baking pan. Dollop ricotta cheese evenly over crust. Sprinkle with mozzarella cheese, Parmesan cheese, and fresh thyme leaves. Bake 8 minutes or until top is golden brown and cheese is melted. Drizzle with truffle or extra-virgin olive oil. Cut into 8 slices; serve.","analyzedInstructions":[{"name":"","steps":[{"number":1,"step":"Place a prebaked pizza crust on a shallow baking pan. Dollop ricotta cheese evenly over crust. Sprinkle with mozzarella cheese, Parmesan cheese, and fresh thyme leaves.","ingredients":[{"id":2049,"name":"fresh thyme","image":"thyme.jpg"},{"id":1033,"name":"parmesan","image":"parmesan.jpg"},{"id":93770,"name":"prepared pizza crust","image":"pizza-dough.jpg"}],"equipment":[{"id":404646,"name":"baking pan","image":"roasting-pan.jpg"}]},{"number":2,"step":"Bake 8 minutes or until top is golden brown and cheese is melted.","ingredients":[],"equipment":[],"length":{"number":8,"unit":"minutes"}},{"number":3,"step":"Drizzle with truffle or extra-virgin olive oil.","ingredients":[{"id":1034053,"name":"extra virgin olive oil","image":"olive-oil.jpg"}],"equipment":[]},{"number":4,"step":"Cut into 8 slices; serve.","ingredients":[],"equipment":[]}]}]}'
  );
const loadRecipeDetailsTestData = new Promise((resolve, reject) => {
  const data = detailsTest();
  resolve(data);
});

const loadRecipeDetails = id => axios.get(createDetailsURl(id));
 
const getInstructions = instructions => {
  return instructions.reduce((instructionSteps, instruction) => {
    instructionSteps.push(instruction.steps);
    return instructionSteps;
  }, []);
};
export const recipeDetailsObservable$ = id =>
  from(loadRecipeDetails(id)).pipe(
    map(response => response.data),
    map(recipe => {
    
      const [instructions, ...rest] = getInstructions(
        recipe.analyzedInstructions
      );

      return {
        instructions: instructions,
        ingredients: recipe.extendedIngredients,
        image: recipe.image,
        title: recipe.title
      };
    })
  );
