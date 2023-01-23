# nodejs-with-express-adopt-a-pet

Step 6

In this step:

- A <a> element was added to the for loop with the <li> element so upon clicking it could be redirected to the specific animal.
- A new route to each individual animal was created to display the individual animal when redirected with the <a> element in the previous step.
- Inside the route we req.params of the pet_type and the pet_id to be able to find the right animal in the array of objects and then display its info in the res.send.
- In the res.send we display the name, image, description, age and breed of the animal that matches the pet_type and pet_id.
