# This commit should be graded as late
# Team41: Restaurant Reviewer

#### Team Project

In this project, we are only developing the full-stack of _Restaurant Reviewer_.
So far, we are using React for our Website front end, express js for the backend and MongoDB Atlas for the database .
## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing
install Node js in local machine.
```
https://nodejs.org/en/download/
```
Clone this repository to local machine. 
```
git clone https://github.com/csc309-fall-2020/team41.git
```
change directory on terminal to the project location and run npm i. 
```
cd <project_location>
npm run setup
```

## Running the app
You can run the app by following command.

```
npm run start
```
and 
```
cd client
npm run start
```
or you can go to the deployed version
```
https://restaurant-review-app309.herokuapp.com/
```

## instructions

In this website, we divide the page into the client-facing and admin-facing pages.
The pages are divided as follows:

1. **Shared pages**

   1. **Start up Page**

      1. You can access the landing page without signing up by clicking the _"Get Started"_ Button.
      If you click on Login/Register, it will take you to the Login and Register Page.
      2. If the user login in before, local storage will save it login data and will not need to login again when visit the page next time
      

   2. **Login Page**
      1. You can login as "Restaurant Owner", "User" or "Admin".
      2. **regular user** and **Restaurant Owner** data are saved in the databases and use register to create new one.
      3. To go to the admin page, type **alan** as username and **123456** as password.
   3. **Register Page**
      1. You can register as "Restaurant Owner", "User" by the check box.
      2. If you sign up as an owner, you can upload a certificate for authentication and admin will verify it in the admin pages.<br/>
         In our implementation,
         we only accept an image of the certificate.
      3. restaurant user sign up requirement <br/>
      the restaurant also have additional field to fill up for the sign up and let admin approve it.

2. **Client-facing**
   In this page, the navigation bar is shared for all the pages below. 
   1. **Landing Page** 
        - In this page, you are shown with the different restaurants that have signed up into our website.
        - If the user clicks on the restaurant page, it will direct the user into the restaurant page. 
        - The user can also use the search bar to search for the restaurants that they want to see. User can type part 
          of the restaurant, and it will display **all** restaurants that **match the part**. 
   2. **Deals Page** 
        - We are showing all the deals, and the coupon codes that the restaurants have. 
        - search bar <br/>
           If type restaurant name in *Deal* page, it will display the coupon card correspond to that restuarant.
   3. **Profile Page** 
        1. restaurant profile
            - nav bars on the left side to navigate between *home*, *profile*, *posts*, *followers*, *menus*, *deal*
            - home <br/>
                go back to the Landing Page
            - profile <br/>
                the basic profile information for restaurant user to update and view
            - posts <br/>
                1. all history posts of the restaurant
                2. create new post
            - followers <br/>
                all followers' info of the restaurant
            - menus <br/>
                restaurant can edit its menu here
            - deal <br/>
                restaurant can edit its coupon here
        
        2. restaurant profile
             - nav bars on the left side to navigate between *home*, *profile*, *posts*, *followers*, *menus*, *deal*
             - home <br/>
                  go back to the Landing Page
            - profile <br/>
                the basic profile information for restaurant user to update and view
            - posts <br/>
                all the posts commments history of the user
             - followering <br/>
               all restaurants this user is following
            <br/>
            
   4. **Restaurant Details Page** 
        - You get directed to this page when you click one of the cards in the Landing Page. 
        - You can view information about this restaurant such as pictures, name of restaurant, address, google map location,
         and all the reviews of the users about that restaurant. 
        - In this page, you can view: 
            - Menu: This will show you the menu 
            - Blog: This will show you the blog of the restaurant with all its post
            - Follow: This will allow user to follow or unfollow the restaurant 
            - RestaurantOne title: click to go back to dashboard
            - comment on the restaurant, and you can also add your own comments
   
3. **Admin-facing**
   1. **Dashboard**
      - Dashboard shows new Restaurant owner registration request and certificate, and the admin can approve or decline this request.
   2. **User Table**
      - User Table shows all the regular users information.
   3. **Restaurant Owner Table**
      - Restaurant Owner Table shows all the restaurant owner information.
   4. **Posts Table**
      - Posts Table shows all the posts that exists on the website.
   5. **Reviews Table**
      - Reviews Table shows all the reviews that exists on the website.

## List of third party library
```
"redux": "^4.0.5",
"redux-logger": "^3.0.6",
"styled-components": "^5.2.1",
"tachyons": "^4.12.0",
google-maps-react": "^2.0.6",
"react-geocode": "^0.2.2",
"react-minimal-side-navigation": "^1.5.1",
"react-redux": "^7.2.1",
"react-sidebar": "^3.0.2",
```