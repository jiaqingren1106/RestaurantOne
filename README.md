# Team41: Restaurant Reviewer

#### Team Project Phase 1

In this project, we are only developing the front-end of _Restaurant Reviewer_.
So far, we are using React for our Website.


Keep in mind that all the data used in this website are hardcoded in preparation for Phase 2.
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
npm i
```

## Running the app
You can run the app by following command.

```
npm run start
```
or you can go to the deployed version
```
https://restaurant-review-app309.herokuapp.com/
```

## Features

In this website, we divide the page into the client-facing and admin-facing pages.
The pages are divided as follows:

1. **Shared pages**

   1. **Start up Page**

      You can access the landing page without signing up by clicking the _"Get Started"_ Button.
      If you click on Login/Register, it will take you to the Login and Register Page.

   2. **Login Page**
      1. You can login as "Restaurant Owner", "User" or "Admin"
      2. There is authentication using hardcoded data to sign up as the 3 stakeholders:
         - "Restaurant Owner" - username: owner, password: owner
         - "User" - username: user, password: user
         - "Admin" - username: admin, password: admin
   3. **Register Page**
      1. You can register as "Restaurant Owner", "User"
      2. If you sign up as an owner, you can upload a certificate for authentication. In our implementation,
         we only accept an image of the certificate.
      3. This part is not completed yet since we need to store the certificate picture in our database. Right now, it's 
      just a button to let you choose files from the local computer.

2. **Client-facing**
   In this page, the navigation bar is shared for all the pages below. 
   1. **Landing Page** - In this page, you are shown with the different restaurants that have signed up into our website. - If the user clicks on the restaurant page, it will direct the user into the restaurant page. - The user can also use the search bar to search for the restaurant that they want to see. 
   2. **Deals Page** - We are showing all the deals and the coupon codes that the restaurants are showing. 
   3. **Profile Page** - The profile page shows the information of the user. - The user can change their information in this profile page by clicking the Edit button. 
   4. **Restaurant Details Page** - You get directed to this page when you click one of the cards in the Landing Page. - You can view information about this restaurant such as pictures, name of restaurant, address,
   and all the reviews of the users about that restaurant. - In this page, you can view: - Menu: This will show you the menu - Blog: This will show you the blog of the restaurant - Follow: This will allow user to follow or unfollow the restaurant - Back: To go back to dashboard
3. **Admin-facing**
   1. **Dashboard**
      - Dashboard shows new Restaurant owner registration request and the admin can approve or decline this request.
   2. **User Table**
      - User Table shows all the users information
   3. **Restaurant Owner Table**
      - Restaurant Owner Table shows all the restaurant owner information.
   4. **Reviews Table**
      - Reviews Table shows all the reviews that exists in the website.
   5. **Posts Table**
      - Posts Table shows all the posts that exists in the website.
