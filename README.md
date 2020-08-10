# Stack Review


## Inspiration
Ever since I started coding, being judged based on my code was my biggest fear, becoming an expert is not an overnight process. My first criticism came with my first article, which was a tutorial on creating a **Twitter Bot**, being the first article I was so happy and proud to share with the world. It was then I was criticized for the way it was coded, for example, instead of splitting code into different functions, I only had one big function that took care of everything. 

Making sure the code works is the priority for someone who has just started coding, as it was for me. Criticism is essential for growth, but only constructive criticism and sometimes negative criticism can affect someone's confidence, negative criticism is a real problem that exists and affects programmers. 

So, I thought, is there any way someone can review my code without me being judged by others. This problem inspired us to create **Stack Review**, a peer code review portal where you can share your code snippets and get it reviewed by experts and the community without disclosing your information. To scare off potential scammers, to review code, one must register on the portal. Isn't it Awesome? 

## What it does?
Stack Review helps you to get your code reviewed by your peers and community members anonymously. To get started, you simply need to register on the portal. After that, you can share posts or code snippets and get it reviewed by other community members. You can also evaluate other people's code and let them know how they can improve it. In a nutshell, **Stack Review** is where you can improve your coding skills and help others do the same.

## How we built it
Choosing the right tech stack is crucial in any project, so we first decided on the tech stack, which was:
Nextjs - Web Application Framework, we initially considered React, but because of the different features that Nextjs offers, we decided on it.
Auth0 - Having an Authentication Portal was important to scare off potential scammers.
Vercel - To deploy our project and inspect every PR
MongoDB - To store the Posts and Comments Data
Material UI - To style our project
React Ace - To embed and code editor in our Create New Post form
React Highlight - To highlight the code in a post on the homepage
Our first step was to create the frontend of the project. Using Material UI, we added a Navbar with Login/Logout button.

Next, we integrated Auth0 in our application; this became easier with ` @auth0/auth0-react`. We successfully integrated Auth0 and added a Ternary Operation to show either Login Button or Logout Button. We also added a user Avatar in the Navbar pulling the image from `user.picture` in the user's object.

After this, we created a `Post`, actual posts that are shown on the user's homepage. We used custom CSS, Material UI, and React Highlight to develop this.

The next step was to create a form where the user can create new Posts. We used `React Ace` to embed a code editor inside the form.
 
 There is no separate backend as we use the Vercel API Routes support to build an API. 
 We've created an API with a [Swagger description](https://stackreview.vercel.app/api-doc) to document what's planned to do. Some endpoints might be missing at this stage as it was mainly about CRUD operations.
 
 We use a MongoDB database provided by MongoDB Atlas. We planned to use MongoDB Realms as there is some cool stuff about schema validation and role-based rules. The integration into Vercel did not works well as the Node SDK failed to initialize. So we moved to use MongoDB Driver directly.
 
 The realm application has been exported to a Github repository while working on it : https://github.com/stack-review/stackreview-mongodb-realm. It's not complete.
 Work has been done in the UI (not available in the repo) to use custom JWT with Auth0, using JWK URI. 
 
 We've build a small validation layer while addding a new review to show how do validate payload submitted to API. It's built using @hapi/joi module. It should be implemented then for all POST and PATCH operations.
 
 All the necessary secrets are managed through vercel env CLI. It enables us to provide different values for production or development. And last but not least we can enforce team synchronisation for env variables using `vercel env pull .env.local` command. The `.env.local` file is ignored by git so we're safe !
 
 All API Routes require the auth0 access token as first validation. It's used to identify current user either the author of a code review request or a contributor adding some comments.
 
 Code review can be required to be anonymous, which means that author is know from the system but not displayed publicly. The API route is responsible for removing all author data prior to sending response back to the Next.js application.
 
 
 Testing - 
 
 It's plan to add API integration testing using Jest & AVA. This tests will verify all API routes error codes and will be run on each pull request using Azure Pipelines Github integration. 
 It will help us to not relying on manual testing or curl testing. It was not possible to setup Azure Pipelines in a so short amount of times even using Github Actions.
   



## Challenges we ran into
We ran into quite a few challenges along the way; one of our teammates had to leave the hackathon due to some personal reasons that significantly affected the work distribution among us. Still, we tackled this issue and redistributed the tasks among ourselves and completed this project. 
Another challenge was that we had quite a few hours difference between us, and it was hard to be available at the same time. 

There are so many things that can be done with this project, although not everything is possible in the time frame of the hackathon, figuring out which functionalities to implement was a hard challenge.

## Accomplishments that we're proud of
We are most proud of creating a platform that empowers beginner programmers to grow their skills without being judged.

We are proud of our efficiency as a team; it is hard to believe this is our first time working together, despite the time zone issue, we were able to work together and complete this project.



## What we learned
We learned so many things in such a short period; this is why Hackathons are fantastic. We came to know about so many new things along the way.
But the best takeaway we learned was that it was effortless to use and integrate Auth0 in our project. 

## What's next for StackReview
There are so many things that can be done with this project, which is why we will be making this project open source and continue to work on this in the future.
Here are some ideas :
 - Integrating Twilio for push notification whenever someone reviews your code.
 - It might be a good idea to add a different registration for experts in their field and give reviewers the title of Reviewers.
 - To keep people engaged, we can provide them badges for different tasks and accomplishments.
 - It might be interesting to add components as a sidebar or on the homepage: last code reviews, recent comments.
 - User Dashboard, where we can display the code snippets submitted and commented.



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## API

API is provided using [Next.js API routes](https://nextjs.org/docs/api-routes/introduction).

API documentation is provided using OpenAPI specification (OAS) 3.0. Definition has been validated through [API Security Tools
API Contract Security Audit](https://apisecurity.io/tools/audit/). Current version raised 76/100. Mainly minor issues. Only point is about documenting how to retrieve Auth0 token and use it as a authorization bearer.


