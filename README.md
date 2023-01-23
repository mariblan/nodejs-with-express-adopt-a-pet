# nodejs-with-express-adopt-a-pet

Step 5

In this step:
- helper.js file was created and inside the object pets with the keys dogs, cats and rabits were aded.
- pets was imported into index.js
- inside the '/animal/:pet_type' route:
  1. Found the key of pets that matched pet_type and add it to the value of a variable named key.
  2. Created a constant name animal and gave it the value of said key.
  3. Created an html variable and then concataneted it to an ul tag.
  4. Build a for lop where the name each item of the array of animals was added to html and then html was return.
  5. Concatanated after the for loop the html with a clousing tag of ul
  6. In the res.send, after the h1, the html variable is added so it can also be render in the screen.
