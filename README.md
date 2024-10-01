# Sail & Sea Rentals
## Technologies used
- HTML
- TAILWIND CSS
- JAVASCRIPT
- REACT JS

# Home page
![homepage](./S&S.png)

# Explore page
![explore page](./S&S%20about%20page.png)

1. Create an Admin Link to the navbar that takes you to the / admin path
2. create the following components in the pages/admin folder
    a. Dashboard ("/admin)
    b. Income ("/admin/income") 
3. these components just can have an h1 

  /admin
  /admin/income
  /admin/review
  /admin/boats
  /admin/boats/:id
  /admin/boats/:id/pricing
  /admin/boats/:id/photos

- create AdminLayout.jsx
2. it should use link to navigate to the following routes
  - Dashboard   "/admin"
  - Income      "/admin/income"
  - Review      "/admin/review"
3. Then replace the parent "/admin" routes element with the new admin layoutcomponent

1. what is the primary reason to use a nested toute
2. what is a layout route
3. what does the outlet component do?when do you use it
4. What is an index route

1. Add the admin/boat and admin/boat:id routes
as well as the boat link in the admin navbar
2. for now just create the stubbed-out version of the pages
3. Dont worry about adding navigation from admin/boat to admin/boat/:id
4. when decieding whether or not to use nested route keep in mind what will /wont be shared between these two pages


-  Building out the admin boat list and details pages