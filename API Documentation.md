# **Starbucks  API Documentation**

## **Base URL**

http://localhost:3000/drinks

---

## **Endpoints**

### 1. **Get Video Information**

- **URL:** `/drinks/by-name`
- **Method:** `GET`
- **Description:** Fetches details about a specific video by its ID.

#### **Query Parameters:**
| Parameter   | Type   | Required | Description           |
|-------------|--------|----------|-----------------------|
| `name`      | string | Yes      | Name of the drink to search for.   |

#### **Headers:**
| Header            | Description            |
|--------------------|------------------------|
| `X-Rapidapi-Host`  | API host for the service |
| `X-Rapidapi-Key`   | API key for authentication |

#### **Example Request:**
```http
GET http://localhost:3000/drinks/by-name?name=mocha

Example Response:


[
    {
        "id": "6681b8d94507f78afe80185f",
        "name": "Salted Caramel Mocha​",
        "image": "https://athome.starbucks.com/sites/default/files/2022-05/1_CAH_SaltedCaramelMocha_Hdr_2880x1660_0.jpg",
        "description": "Sea salt, whipped cream and caramel flavors meet in your mug for this delicious drink. With one sip, it’s easy to see why Starbucks® Salted Caramel Mocha is a café favorite. Learn how to make this sweet, salty, delicious drink at home with this recipe.",
        "category": "HOT BEVERAGES",
        "yield": "1 serving",
        "prepTime": "PT4M",
        "totalTime": "PT4M",
        "ingredients": [
            "1.5 Tbsp toffee nut syrup",
            "3 Tbsp dark chocolate sauce/syrup",
            "1 shot Starbucks® Espresso Roast",
            "1 cup 2% milk",
            "homemade Caramel Sauce (or storebought) for garnish"
        ],
        "instructions": [
            {
                "stepName": "01",
                "description": "Add toffee nut syrup and dark chocolate sauce into the mug.",
                "image": "https://athome.starbucks.com/sites/default/files/2021-07/SaltedCaramelMocha_Step1.jpg"
            },
            {
                "stepName": "02",
                "description": "Prepare shot of espresso.",
                "image": "https://athome.starbucks.com/sites/default/files/2021-07/SaltedCaramelMocha_Step2.jpg"
            },
            {
                "stepName": "03",
                "description": "Stir hot espresso into chocolate and toffee nut flavorings.",
                "image": null
            },
            {
                "stepName": "04",
                "description": "Froth 2% milk using your preferred method. For more information on how to froth your milk, see our frothing guide here.",
                "image": null
            },
            {
                "stepName": "05",
                "description": "Pour frothed milk into your mug.",
                "image": null
            },
            {
                "stepName": "06",
                "description": "Top with whipped cream, drizzle of caramel sauce and sprinkle of smoked sea salt and sugar topping.",
                "image": null
            }
        ]
    },
    {
        "id": "6681b8d94507f78afe80184d",
        "name": "Iced Cinnamon Dolce Mocha With Cinnamon Oatmilk Cold Foam",
        "image": "https://athome.starbucks.com/sites/default/files/2023-07/CinnamonDolceLatte_Web_Header_2880x1660.jpg",
        "description": "Chocolate syrup, cinnamon syrup and creamy oatmilk cold foam come together with Starbucks® Cinnamon Dolce Naturally Flavored Coffee for a drink that’s equal parts rich and refreshing. Take a moment for yourself and chill out with an Iced Cinnamon Dolce Mocha with Cinnamon Oatmilk Cold Foam. ​",
        "category": "ICED BEVERAGES",
        "yield": "1 serving",
        "prepTime": "PT20M",
        "totalTime": "PT20M",
        "ingredients": [
            "2 Tbsp chocolate syrup​",
            "8 oz Starbucks® Cinnamon Dolce Naturally Flavored Coffee, brewed and cooled",
            "1 cup ice",
            "0.25 cup of extra creamy oatmilk​",
            "2 Tbsp homemade Cinnamon Dolce Syrup (or storebought)",
            "Ground cinnamon, cinnamon stick, cocoa, or chocolate shavings for garnish (optional)"
        ],
        "instructions": [
            {
                "stepName": "01",
                "description": "Pour chocolate syrup into a 16-oz glass.​",
                "image": null
            },
            {
                "stepName": "02",
                "description": "Add cooled Starbucks® Cinnamon Dolce to the glass. Stir.​",
                "image": null
            },
            {
                "stepName": "03",
                "description": "Fill the cup with ice to ½ inch below the rim.​",
                "image": "https://athome.starbucks.com/sites/default/files/2023-07/CinnamonDolceLatte_Web_RecipeStep_1740x1050_2.jpg"
            },
            {
                "stepName": "04",
                "description": "Froth oatmilk and cinnamon syrup using your preferred cold method. You can use a handheld frother or froth the oatmilk by hand. For more information on how to froth milk or milk alternatives, see our frothing guide here.",
                "image": null
            },
            {
                "stepName": "05",
                "description": "Fill the glass to the rim with the cinnamon oatmilk cold foam.",
                "image": "https://athome.starbucks.com/sites/default/files/2023-07/CinnamonDolceLatte_Web_RecipeStep_1740x1050_3.jpg"
            },
            {
                "stepName": "06",
                "description": "Garnish with a sprinkle of cocoa or ground cinnamon, a cinnamon stick or chocolate shavings.",
                "image": null
            }
        ]
    },
    {
        "id": "6681b8d94507f78afe801870",
        "name": "Mocha Frozen Blended Coffee​",
        "image": "https://athome.starbucks.com/sites/default/files/2022-05/1_CAH_MochaFrozenBlendedCoffee_Hdr_2880x1660_0.jpg",
        "description": "The Mocha Frozen Blended Coffee, where coffee, milk, ice and chocolaty goodness all come together for a delicious cold drink. Inspired by the café favorite Starbucks® Frappuccino® Blended Beverage, this recipe is perfect whenever you're in need of a sweet pick-me-up. Top it off with whipped cream and chocolate shavings for a sweet ending that’s deliciously Starbucks.",
        "category": "ICED BEVERAGES",
        "yield": "1 serving",
        "prepTime": "PT4M",
        "totalTime": "PT4M",
        "ingredients": [
            "1 shot Starbucks® Espresso Roast",
            "1.5 cups ice",
            "0.75 cup whole milk",
            "2 Tbsp dark chocolate sauce/syrup"
        ],
        "instructions": [
            {
                "stepName": "01",
                "description": "Prepare 1 shot of espresso.",
                "image": "https://athome.starbucks.com/sites/default/files/2021-07/MochaFrozenBlendedCoffee%E2%80%8B_Step1.jpg"
            },
            {
                "stepName": "02",
                "description": "Place ice, milk, chocolate sauce and espresso into a blender. Start at low speed, then blend on high for 30 seconds.",
                "image": "https://athome.starbucks.com/sites/default/files/2021-07/MochaFrozenBlendedCoffee%E2%80%8B_Step2.jpg"
            },
            {
                "stepName": "03",
                "description": "Pour blended mixture into 16-oz glass.",
                "image": null
            },
            {
                "stepName": "04",
                "description": "Top with whipped cream and chocolate shavings.",
                "image": "https://athome.starbucks.com/sites/default/files/2021-07/MochaFrozenBlendedCoffee%E2%80%8B_Step4.jpg"
            }
        ]
    },
    {
        "id": "6681b8d94507f78afe80183b",
        "name": "Caffè Mocha",
        "image": "https://athome.starbucks.com/sites/default/files/2021-06/1_CAH_CaffeMocha_Hdr_2880x16602.jpg",
        "description": "This Starbucks classic combines espresso, bittersweet mocha sauce and steamed milk for a sweetly satisfying coffee. Top it off with whipped cream and chocolate shavings for a delicious mug of coffee ready to be enjoyed any time at home.",
        "category": "HOT BEVERAGES",
        "yield": "1 serving",
        "prepTime": "PT7M",
        "totalTime": "PT7M",
        "ingredients": [
            "1 oz  Starbucks® Espresso Roast ground coffee or",
            "1 cup milk of your choice",
            "3 Tbsp mocha sauce"
        ],
        "instructions": [
            {
                "stepName": "01",
                "description": "Prepare 1 shot of espresso and pour into a mug.",
                "image": null
            },
            {
                "stepName": "02",
                "description": "Froth your milk using your preferred method. For more information on how to froth your milk, see our frothing guide here.",
                "image": null
            },
            {
                "stepName": "03",
                "description": "Add mocha sauce into your mug and gently stir into the coffee.",
                "image": null
            },
            {
                "stepName": "04",
                "description": "Gently pour your frothed milk into your mug until it’s almost full.",
                "image": null
            }
        ]
    }


**2. Get Channel Information
**
# URL: /video/channel/about
Method: GET
Description: Retrieves information about a category of thr foods.

Query Parameters:
Parameter	Type	Required	Description
CATEGORY	string	Yes	      category of drinks
Headers:
Header	Description
X-Rapidapi-Host	API host for the service
X-Rapidapi-Key	API key for authentication

Example request:

GET http://localhost:3000/drinks/by-category?category=FOOD

Example Response:

[
    {
        "id": "6681b8d94507f78afe80186e",
        "name": "Cinnamon Coffee Cake",
        "description": "Our Coffee Cake has been a classic in our cafés for almost as long as they’ve been open. Bring the quintessential sweet treat home in all its cinnamon swirly goodness with this recipe. Enjoy alongside a cup of rich and lively Breakfast Blend coffee for a delicious combination of sweet morning flavors.",
        "image": "https://athome.starbucks.com/sites/default/files/2021-09/CinnamonCoffeeCake_overview_2880x1660.jpg",
        "category": "FOOD",
        "recipeYield": "1 serving",
        "prepTime": "PT45M",
        "totalTime": "PT45M",
        "ingredients": [
            "0.333 cup light brown sugar, packed",
            "0.666 cup all-purpose flour",
            "1.5 tsp ground cinnamon",
            "0.25 tsp salt",
            "4 Tbsp  unsalted cold butter, cubed"
        ],
        "instructions": [
            {
                "stepName": "01",
                "text": "Preheat oven to 325°F."
            },
            {
                "stepName": "02",
                "text": "In a large bowl, mix together room temperature butter and sugar. It should be light and fluffy; do not over whip."
            },
            {
                "stepName": "03",
                "text": "Stop and scrape down the sides and bottom of bowl."
            },
            {
                "stepName": "04",
                "text": "Now add in 1 egg at a time, mixing in between each addition. Stop and scrape down the sides and bottom of bowl."
            },
            {
                "stepName": "05",
                "text": "Combine the vanilla extract and Greek yogurt."
            },
            {
                "stepName": "06",
                "text": "In a separate bowl, combine the flour, baking powder, baking soda and salt."
            },
            {
                "stepName": "07",
                "text": "Add ⅓ of the flour mixture to the egg mixture, followed by ⅓ of the yogurt mixture. Repeat 2 more times until all the ingredients are incorporated."
            },
            {
                "stepName": "08",
                "text": "Combine all cinnamon streusel ingredients with a fork until they reach a crumbly consistency, do not over mix into paste."
            },
            {
                "stepName": "09",
                "text": "Fill ⅓ of a greased muffin tin or mini loaf pan with batter, sprinkle thin layer of cinnamon streusel mixture on top of batter, then repeat process one more time so that muffin tin or loaf pan is ⅔ filled with streusel on top."
            },
            {
                "stepName": "10",
                "text": "Bake for 12–15 minutes, let cool, then serve and enjoy alongside a freshly brewed cup of Starbucks® Breakfast Blend coffee."
            }
        ]
    },
    {
        "id": "6681b8d94507f78afe801859",
        "name": "Chocolate Chip Cookies Recipe",
        "description": "Chocolate chip cookies? Even better, Starbucks® Coffee Chocolate Chip Cookies! They’re a classic snack for a reason, and in this recipe we bring the childhood favorite back with a twist to be enjoyed alongside your favorite cup of Starbucks® coffee.",
        "image": "https://athome.starbucks.com/sites/default/files/2021-09/Chocolate%20Chip%20Cookies%20Recipe%20Header_0.png",
        "category": "FOOD",
        "recipeYield": "1 Serving",
        "prepTime": "PT25M",
        "totalTime": "PT25M",
        "ingredients": [
            "1.75 cups butter",
            "2 tsp vanilla extract",
            "3 eggs",
            "1.25 cups sugar",
            "0.75 cup brown sugar",
            "2 tsp salt",
            "2 tsp baking soda",
            "5.5 cups all-purpose flour",
            "3 cups chocolate chips",
            "Starbucks VIA® Instant Italian Roast (optional)"
        ],
        "instructions": [
            {
                "stepName": "01",
                "text": "Preheat oven to 350°F."
            },
            {
                "stepName": "02",
                "text": "Combine butter and vanilla extract in a mixing bowl and cream the mixture until properly aerated."
            },
            {
                "stepName": "03",
                "text": "Add the eggs, one at a time, scraping the sides of the bowl after each egg is added and fully combined."
            },
            {
                "stepName": "04",
                "text": "Sift the dry ingredients together in a separate bowl."
            },
            {
                "stepName": "05",
                "text": "Add dry ingredients to butter and egg mixture and mix until combined."
            },
            {
                "stepName": "06",
                "text": "Add the chocolate chips and mix to incorporate."
            },
            {
                "stepName": "07",
                "text": "Scoop the batter and deposit onto parchment-lined sheet pans."
            },
            {
                "stepName": "08",
                "text": "Bake for 14–16 minutes until center is almost done, rotate halfway."
            }
        ]
    },
    {
        "id": "6681b8d94507f78afe80186c",
        "name": "Overnight Grain Bowl",
        "description": "Introducing meal prep that's both easy and tasty. Our Overnight Grain Bowl is a hearty way to start your day and couldn't be easier to plan around. Simply whip oats, barley and fruit together, let sit overnight, and enjoy a delicious breakfast the next day with your favorite cup of Starbucks® coffee.",
        "image": "https://athome.starbucks.com/sites/default/files/2021-08/1_CAH_OvernightGrainBowl_Hdr_2880x1660_0.jpg",
        "category": "FOOD",
        "recipeYield": "1 serving",
        "prepTime": "PT15M",
        "totalTime": "PT15M",
        "ingredients": [
            "8 cups (2 qt) coconutmilk, unsweetened",
            "0.5 cup  raw barley",
            "1.333 cups  raw oats",
            "0.333 cup and 2 Tbsp raw bulgur",
            "0.75 cup  and 2 Tbsp maple syrup",
            "3 tsp  vanilla extract",
            ""
        ],
        "instructions": [
            {
                "stepName": "01",
                "text": "The night before you want to eat the grain bowl, combine 4 cups of the coconutmilk and remainder of ingredients in a large saucepan. While stirring, bring to boil."
            },
            {
                "stepName": "02",
                "text": "Turn off heat and let sit covered for 30 minutes."
            },
            {
                "stepName": "03",
                "text": "Add remaining coconutmilk and refrigerate overnight."
            },
            {
                "stepName": "04",
                "text": "The next morning, stir the mixture. It should be thick and creamy."
            },
            {
                "stepName": "05",
                "text": "If needed, add a small amount of coconutmilk to thin."
            },
            {
                "stepName": "06",
                "text": "Place in bowl and top with fresh fruit and toppings such as puffed quinoa, chia seeds and local honey."
            },
            {
                "stepName": "07",
                "text": "For best quality and safety, eat within 3 days of preparation."
            }
        ]
    },
    {
        "id": "6681b8d94507f78afe801874",
        "name": "Lemon Bars Recipe",
        "description": "Lemon bars are a perfectly powdery and tastefully tart way to sweeten up someone’s day. Whether it’s a special occasion, a treat alongside breakfast or a lemony accompaniment to your favorite cup of Starbucks® coffee, this recipe is guaranteed to be a delectable crowd-pleaser.",
        "image": "https://athome.starbucks.com/sites/default/files/2021-09/LemonBars_overview_2880x1660.jpg",
        "category": "FOOD",
        "recipeYield": "1",
        "prepTime": "PT60M",
        "totalTime": "PT60M",
        "ingredients": [
            "4 eggs",
            "1.333 cup sugar",
            "3 Tbsp all-purpose flour",
            "0.666 cup  lemon juice",
            "0.333 cup milk",
            ""
        ],
        "instructions": [
            {
                "stepName": "01",
                "text": "Preheat oven to 350°F."
            },
            {
                "stepName": "02",
                "text": "Mix all crust ingredients together into a coarse meal."
            },
            {
                "stepName": "03",
                "text": "Line bottom quarter of your sheet-pan with mix. Pack firmly by pressing with hands."
            },
            {
                "stepName": "04",
                "text": "Bake to dry out for 15 minutes. Let cool before adding lemon batter."
            },
            {
                "stepName": "05",
                "text": "Mix all filling ingredients together."
            },
            {
                "stepName": "06",
                "text": "Pour lemon batter over cool lemon bar crust."
            },
            {
                "stepName": "07",
                "text": "Bake in oven for 20 minutes or until set to the touch."
            },
            {
                "stepName": "08",
                "text": "Let the bars cool and then chill in the refrigerator."
            },
            {
                "stepName": "09",
                "text": "Once cold, remove from baking pan, then cut into bars, about 1½ by 2½ inches."
            },
            {
                "stepName": "10",
                "text": "Sprinkle with powdered sugar."
            }
        ]
    },
    {
        "id": "6681b8d94507f78afe801879",
        "name": "Affogato",
        "description": "Cold, sweet ice cream meets hot, roasty espresso. The affogato is easy to make and a treat for the senses. Learn how to make this quintessential Italian dessert, topped off with a pinch of chocolate and a sprinkling of sea salt.",
        "image": "https://athome.starbucks.com/sites/default/files/2021-07/1_CAH_Affogato_Hdr_2880x16601.jpg",
        "category": "FOOD",
        "recipeYield": "1 serving",
        "prepTime": "PT5M",
        "totalTime": "PT5M",
        "ingredients": [
            "2 scoops vanilla bean ice cream",
            "0.25 cup hot espresso or brewed coffee",
            "0.5 Tbsp Grand Marnier® or Cointreau® (optional)",
            "",
            ""
        ],
        "instructions": [
            {
                "stepName": "01",
                "text": "Add ice cream to a bowl or cup. Pour espresso or coffee over ice cream."
            },
            {
                "stepName": "02",
                "text": "Drizzle with Grand Marnier® or Cointreau® (optional)."
            },
            {
                "stepName": "03",
                "text": "Top with chocolate shavings."
            },
            {
                "stepName": "04",
                "text": "Sprinkle sea salt on top and serve immediately."
            }
        ]
    },
    {
        "id": "6681b8d94507f78afe8018a4",
        "name": "Smoked Salmon Avocado Benedict",
        "description": "Delicious salmon and avocado lie on a bed of fluffy English muffin—and every bite is better than the last. Pair with your favorite coffee to make every morning a good morning.",
        "image": "https://athome.starbucks.com/sites/default/files/2021-07/1_CAH_SmokedSalmonAvocadoBenedict_Hdr_2880x16601.jpg",
        "category": "FOOD",
        "recipeYield": "1 serving",
        "prepTime": "PT25M",
        "totalTime": "PT25M",
        "ingredients": [
            "2 avocados",
            "6 tomatillos",
            "3 cilantro sprigs",
            "1 Tbsp  honey",
            "1 gallon  water",
            "2 oz  white vinegar",
            "8 eggs",
            "8 oz  smoked salmon",
            "4 English muffins",
            "",
            "",
            ""
        ],
        "instructions": [
            {
                "stepName": "01",
                "text": "Cut the avocados across the short side through the center, creating a ring. Peel away the skin and reserve the rings for plating. Save the remaining trim for the sauce."
            },
            {
                "stepName": "02",
                "text": "In a sauté pan, char the whole tomatillos in olive oil."
            },
            {
                "stepName": "03",
                "text": "In a blender, combine the charred tomatillos, avocado scraps, cilantro, honey, lime juice, and salt and pepper. Purée until smooth and chill in the refrigerator until needed."
            },
            {
                "stepName": "04",
                "text": "Bring water to a boil then set to a simmer. Add white vinegar."
            },
            {
                "stepName": "05",
                "text": "Crack an egg into the simmering water and cook for approx. 4 minutes. The yolk should still be soft with the outside white set."
            },
            {
                "stepName": "06",
                "text": "Remove from the water with a slotted spoon and dry well. Reserve in warm water until ready to assemble."
            },
            {
                "stepName": "07",
                "text": "Toast the English muffin."
            },
            {
                "stepName": "08",
                "text": "Lay 1 slice of smoked salmon on one side of the English muffin."
            },
            {
                "stepName": "09",
                "text": "Place the avocado ring on top of the salmon."
            },
            {
                "stepName": "10",
                "text": "Place the poached egg into the center of the avocado."
            },
            {
                "stepName": "11",
                "text": "Spoon the tomatillo sauce over the poached egg. Repeat steps 5 through 11 for each of the remaining sandwiches."
            }
        ]
    },
    {
        "id": "6681b8d94507f78afe801888",
        "name": "Coffee Smoothie Bowl Recipe",
        "description": "Mix up your morning with delicious coffee and fresh fruit, all in the same bowl! Just follow these simple steps to create a bright Veranda Blend® Coffee Smoothie Bowl.",
        "image": "https://athome.starbucks.com/sites/default/files/2021-06/1_CAH_CoffeeSmoothieBowl_Hdr_2880x16601.jpg",
        "category": "FOOD",
        "recipeYield": "1 serving",
        "prepTime": "PT7M",
        "totalTime": "PT7M",
        "ingredients": [
            "1 cup brewed Starbucks® Veranda Blend® coffee",
            "1 banana",
            "0.5 cup oatmilk",
            "0.25 cup rolled oats",
            "0.25 cup peanut butter",
            "2 cups  ice cubes",
            "1 pinch  cinnamon"
        ],
        "instructions": [
            {
                "stepName": "01",
                "text": "Brew Starbucks® Veranda Blend® coffee in your coffee brewer or coffee press and let it cool."
            },
            {
                "stepName": "02",
                "text": "Put all the ingredients in a blender and blend until smooth. You want a consistency like a smooth ice cream."
            },
            {
                "stepName": "03",
                "text": "Transfer to a bowl and top with your favorite add-ons like fruit, nuts, granola and coconut flakes!"
            }
        ]
    },
    {
        "id": "6681b8d94507f78afe801892",
        "name": "Coffee Drizzle Glaze​",
        "description": "Next time you’re brewing coffee, put a little to the side to make this simple, flavorful drizzle—perfect for topping off all your favorite baked goods.",
        "image": "https://athome.starbucks.com/sites/default/files/2021-06/CoffeeDrizzleGlaze_overview.jpg",
        "category": "FOOD",
        "recipeYield": "1 serving",
        "prepTime": "PT3M",
        "totalTime": "PT3M",
        "ingredients": [
            "1 cup  powdered sugar",
            "2 Tbsp (warm) strong brewed coffee"
        ],
        "instructions": [
            {
                "stepName": "01",
                "text": "Whisk together powdered sugar and coffee in a small bowl until it’s smooth and has reached the desired thickness."
            },
            {
                "stepName": "02",
                "text": "Drizzle over your favorite croissants and pastries."
            }
        ]
    },
    {
        "id": "6681b8d94507f78afe801887",
        "name": "Chocolate Covered Coffee Beans​",
        "description": "Create a melt-in-your-mouth treat with a roasty crunch. All you need are espresso beans and melted chocolate to create a perfect accompaniment for any coffee beverage.",
        "image": "https://athome.starbucks.com/sites/default/files/2021-07/1_CAH_ChocolateCoveredCoffeeBeans_Hdr_2880x166011.jpg",
        "category": "FOOD",
        "recipeYield": "1 serving",
        "prepTime": "PT15M",
        "totalTime": "PT15M",
        "ingredients": [
            "1 high-quality chocolate bar, broken into large pieces",
            "0.333 cup espresso beans (we recommend Starbucks® Espresso Roast)"
        ],
        "instructions": [
            {
                "stepName": "01",
                "text": "Line baking sheet or plate with parchment paper and set aside."
            },
            {
                "stepName": "02",
                "text": "In double boiler, melt chocolate bar, stirring continuously. Once melted, remove from heat."
            },
            {
                "stepName": "03",
                "text": "Pour in coffee beans. Mix well to ensure all beans are coated."
            },
            {
                "stepName": "04",
                "text": "Using a fork, remove beans one at a time, letting excess chocolate drip off, and place on parchment paper."
            },
            {
                "stepName": "05",
                "text": "Let beans sit for a few hours to dry."
            },
            {
                "stepName": "06",
                "text": "Remove from baking sheet and place in airtight container. Store in the refrigerator and enjoy cold."
            }
        ]
    },
    {
        "id": "6681b8d94507f78afe8018b1",
        "name": "French Toast Bread Pudding with Peach Compote​",
        "description": "Introducing the recipe where each word (and bite) is more delicious than the last. Enjoy this warm, comforting, fruity baked good with a hot cup of Breakfast Blend. It’s perfect for breakfast, dessert or any time of the day.",
        "image": "https://athome.starbucks.com/sites/default/files/2021-09/1_CAH_FrenchToastBreadPuddingwithPeachCompote_Hdr_2880x1660_0.jpg",
        "category": "FOOD",
        "recipeYield": "1",
        "prepTime": "PT45M",
        "totalTime": "PT45M",
        "ingredients": [
            "1 lb  peaches",
            "0.25 cup  maple syrup",
            "0.25 cup  brown sugar",
            "1 tsp vanilla extract",
            "",
            ""
        ],
        "instructions": [
            {
                "stepName": "01",
                "text": "Preheat oven to 325°F."
            },
            {
                "stepName": "02",
                "text": "Combine whole milk, heavy cream, eggs, sugar, vanilla extract and salt in a bowl to make the custard. Whisk until evenly combined."
            },
            {
                "stepName": "03",
                "text": "Slice a variety of bread (multigrain, sourdough, white bread, brioche, etc.) into 1-inch cubes."
            },
            {
                "stepName": "04",
                "text": "Combine all bread in a greased 9”x13” baking dish. Pour custard liquid evenly and gently press bread down to ensure all pieces are saturated."
            },
            {
                "stepName": "05",
                "text": "Cover baking dish with foil, place in a roasting pan and put into oven."
            },
            {
                "stepName": "06",
                "text": "Once in the oven add 1-inch of warm water to the roasting pan. This will help the custard cook more evenly."
            },
            {
                "stepName": "07",
                "text": "Cover French Toast Bread Pudding with foil and bake for 35 minutes."
            },
            {
                "stepName": "08",
                "text": "Blanch peaches, by first boiling a large pot of water. Have a large bowl of ice water prepared as well. Make a thin cut around the circumference of the peaches."
            },
            {
                "stepName": "09",
                "text": "When water is boiling, carefully drop or lower peaches into the water, then set a timer for 2 minutes. Using a slotted spoon or ladle retrieve peaches from pot and place in ice water; the skins should come off very easily. Dice the peaches."
            },
            {
                "stepName": "10",
                "text": "For peach compote, combine peaches, maple syrup, brown sugar, lemon juice, lime zest and vanilla extract in a sauce pan, heat to just below a simmer and let stew for 15–20 minutes until peaches are soft. Do not allow the compote to boil."
            },
            {
                "stepName": "11",
                "text": "Remove foil and cook for an additional 10 to 15 minutes until top is golden brown and custard is set. Remove from oven and allow to cool slightly before slicing and serving."
            }
        ]
    },
    {
        "id": "6681b8d94507f78afe80187d",
        "name": "Vanilla Coffee Cheesecake​",
        "description": "With sweet vanilla, rich coffee and luscious cream cheese, our Vanilla Coffee Cheesecake recipe is a perfect balance of complementary flavors. Enjoy alongside a cup of your favorite Starbucks® coffee for a perfectly delicious dessert.",
        "image": "https://athome.starbucks.com/sites/default/files/2021-09/1_CAH_VanillaCoffeeCheesecake_Hdr_2880x1660_0.jpg",
        "category": "FOOD",
        "recipeYield": "1",
        "prepTime": "PT65M",
        "totalTime": "PT65M",
        "ingredients": [
            "24 oz  cream cheese",
            "1 cup  granulated sugar",
            "1 cup  sour cream",
            "1 cup sour cream",
            "3 eggs",
            "1 Tbsp  vanilla extract",
            "4 packets  Starbucks VIA® Colombia coffee"
        ],
        "instructions": [
            {
                "stepName": "01",
                "text": "Preheat oven to 325°F. Wrap the bottom and sides of the springform pan with foil to prevent water seepage when baking."
            },
            {
                "stepName": "02",
                "text": "Mix all crust ingredients together."
            },
            {
                "stepName": "03",
                "text": "Line 10-inch springform pan with crust mixture on the bottom, reserving about ¼ for along the sides. Pack firmly by pressing with hand."
            },
            {
                "stepName": "04",
                "text": "Bake to dry out for 15 minutes."
            },
            {
                "stepName": "05",
                "text": "Mix cream cheese, sugar and sour cream until smooth. Do not over mix."
            },
            {
                "stepName": "06",
                "text": "Add 1 egg at a time, and be careful not to aerate."
            },
            {
                "stepName": "07",
                "text": "Divide the batter in 2."
            },
            {
                "stepName": "08",
                "text": "Flavor ⅔ of the batter with vanilla extract, and the other ⅓ with the coffee packets."
            },
            {
                "stepName": "09",
                "text": "Pour the vanilla batter into a springform pan with graham cracker crust."
            },
            {
                "stepName": "10",
                "text": "Pour the coffee batter in a circle along the outer edge of the pan."
            },
            {
                "stepName": "11",
                "text": "Using a skewer or small knife, gently swirl the batter to form a marble pattern. Do not over swirl. Less is more."
            },
            {
                "stepName": "12",
                "text": "Place cheesecake pan into a larger baking pan and fill halfway with warm water."
            },
            {
                "stepName": "13",
                "text": "Bake cheesecake in the water bath until the center is firm to the touch."
            },
            {
                "stepName": "14",
                "text": "Remove cheesecake pan from the water bath carefully and allow to cool."
            },
            {
                "stepName": "15",
                "text": "Remove springform and chill until needed."
            }
        ]
    },
    {
        "id": "6681b8d94507f78afe8018a5",
        "name": "Fruit Crisp",
        "description": "Enjoy a sweet berry treat alongside your favorite Starbucks® coffee. Our comforting Fruit Crisp recipe pairs perfectly as a breakfast complement or an after-dinner dessert.",
        "image": "https://athome.starbucks.com/sites/default/files/2021-09/1_CAH_FruitCrisp_Hdr_2880x1660_0.jpg",
        "category": "FOOD",
        "recipeYield": "1",
        "prepTime": "PT35M",
        "totalTime": "PT35M",
        "ingredients": [
            "1 pt  strawberries",
            "1 oz  basil",
            "1 pt blueberries",
            "1 pt blackberries",
            "1 pt raspberries",
            "1 pinch  salt",
            "1 oz olive oil"
        ],
        "instructions": [
            {
                "stepName": "01",
                "text": "Clean and cut strawberries."
            },
            {
                "stepName": "02",
                "text": "Clean basil then remove leaves and tear by hand into small strips."
            },
            {
                "stepName": "03",
                "text": "Mix all Berry Basil ingredients together."
            },
            {
                "stepName": "04",
                "text": "Place in the baking pan."
            },
            {
                "stepName": "05",
                "text": "Combine flour, sugars, cinnamon and salt."
            },
            {
                "stepName": "06",
                "text": "Dice cold butter."
            },
            {
                "stepName": "07",
                "text": "Add cold butter to the dry ingredients and mix at low speed until incorporated."
            },
            {
                "stepName": "08",
                "text": "Add oats and mix until just combined."
            },
            {
                "stepName": "09",
                "text": "Lightly grease a baking pan and fill ⅔ of the way with desired fruits."
            },
            {
                "stepName": "10",
                "text": "Loosely top your favorite filling with the crisp batter and bake at 325°F until golden brown (about 30 minutes). Rotate halfway."
            }
        ]
    },
    {
        "id": "6681b8d94507f78afe8018ac",
        "name": "Mushroom Toast with Poached Eggs",
        "description": "Delicious sourdough bread topped with cremini mushrooms and poached eggs—and every bite is better than the last. Pair with your favorite coffee to make every morning a good morning.",
        "image": "https://athome.starbucks.com/sites/default/files/2021-08/1_CAH_MushroomToastwithPoachedEggs_Hdr_2880x1660_0.jpg",
        "category": "FOOD",
        "recipeYield": "4 serving",
        "prepTime": "PT25M",
        "totalTime": "PT25M",
        "ingredients": [
            "2.5 oz portobello mushrooms",
            "2.5 oz  cremini mushrooms",
            "2.5 oz  button mushrooms",
            "1 Tbsp olive oil",
            "1 sprigs of thyme",
            "2 slices of sourdough bread",
            "2 eggs",
            "0.25 gallon of water",
            "0.5 oz white vinegar",
            "",
            ""
        ],
        "instructions": [
            {
                "stepName": "01",
                "text": "Slice all the mushrooms about ⅛\" thick."
            },
            {
                "stepName": "02",
                "text": "In a large sauté pan, heat olive oil."
            },
            {
                "stepName": "03",
                "text": "Add mushrooms and sauté over medium heat until all the moisture evaporates."
            },
            {
                "stepName": "04",
                "text": "Add the sprigs of thyme and salt and pepper to taste. Reserve warm."
            },
            {
                "stepName": "05",
                "text": "Toast the sourdough and reserve warm."
            },
            {
                "stepName": "06",
                "text": "Bring water to a boil then set to a simmer. Add white vinegar."
            },
            {
                "stepName": "07",
                "text": "Crack an egg into the simmering water and cook for approx. 4 minutes. The yolk should still be soft with the outside white set."
            },
            {
                "stepName": "08",
                "text": "Remove from the water with a slotted spoon and dry well. Reserve in warm water until ready to assemble."
            },
            {
                "stepName": "09",
                "text": "Place sautéed mushrooms on top of the grilled toast. Try to create a well for the eggs to sit."
            },
            {
                "stepName": "10",
                "text": "Place the poached eggs on top of the mushrooms."
            }
        ]
    },
    {
        "id": "6681b8d94507f78afe8018ae",
        "name": "Potato Bacon Frittata​",
        "description": "Enjoy our savory Potato Bacon Frittata recipe with a cup of your favorite Starbucks® coffee.",
        "image": "https://athome.starbucks.com/sites/default/files/2021-07/PotatoBaconFrittata_header_0.jpg",
        "category": "FOOD",
        "recipeYield": "1 serving",
        "prepTime": "PT60M",
        "totalTime": "PT60M",
        "ingredients": [
            "1 russet potato",
            "1 rosemary sprig",
            "1 medium onion",
            "4 bacon strips",
            "8 eggs",
            "0.25 cup  cream",
            "2 oz diced Pepper Jack cheese",
            "",
            "",
            ""
        ],
        "instructions": [
            {
                "stepName": "01",
                "text": "Preheat oven to 350°F."
            },
            {
                "stepName": "02",
                "text": "Peel the potato and cut into a 1⁄2\" dice."
            },
            {
                "stepName": "03",
                "text": "Toss in olive oil, salt, pepper and rosemary."
            },
            {
                "stepName": "04",
                "text": "Bake for 30 minutes or until the center is soft and outside crispy."
            },
            {
                "stepName": "05",
                "text": "Slice onion into thin strips and caramelize over low heat."
            },
            {
                "stepName": "06",
                "text": "Bake the strips of bacon until crispy. Chop once cooled."
            },
            {
                "stepName": "07",
                "text": "Combine the eggs and cream and whisk until homogeneous."
            },
            {
                "stepName": "08",
                "text": "In a 6\" nonstick, oven-safe sauté pan, combine all the toppings and sauté in olive oil."
            },
            {
                "stepName": "09",
                "text": "Add the egg mixture and cook on the stovetop until the outside edges solidify. Place in the oven and bake until the center is firm."
            },
            {
                "stepName": "10",
                "text": "Remove from the oven and invert onto a plate."
            }
        ]
    }
]