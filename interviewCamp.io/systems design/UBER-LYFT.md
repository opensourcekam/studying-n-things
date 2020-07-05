# Design a taxi hailing service such as Uber/Lyft

> Note: We are assuming that this is a general System Design Interview, which mostly involves backend design. If you are interviewing for a frontend-specific role, you will focus more on the UI.

## FEATURES (2-3 Core features)

This question is very open-ended. Taxi-hailing apps can have any number of features. You want to distill the question down to 2-3 core features and design a system around those. Later on, you can always add more.

Make sure you talk to the interviewer while negotiating these features. Some interviewers might want a certain feature, or not care about another.

Ask them if it is ok to stick to these features and add more features later. While this is implicitly implied, it is good to call it out and get on the same page.

### A good way of thinking about core features:

Which feature will a Minimum Viable Product (MVP) require?
Which feature will the system be incomplete without?
A ride-hailing service will be incomplete without being able to hail a ride and get in the cab.

We can also add User/Driver profiles because it comes for free with our Scaling Web Applications Framework. It also helps us nail down what we need to store in the system.

### Here is a list of features we can implement:

- User (Rider) and Driver Profile
Rider can hail a ride (find a nearby driver), Driver can give a ride
USE CASES

A ride-hailing app is very state-based. Both the Driver and Rider are in different states, and you have to coordinate the transitions from the backend. Here are the different states they go through:

- Rider

Request Ride
Get ETA
Ride to Destination
Ride Ends
Driver

Accept/Reject Request
Pickup Rider
Drive to Destination
End Ride

Above, we added a couple features that may or may not fit in an MVP. For example, giving the Rider an ETA of when the driver is arriving. That can be skipped if you want it simpler. You can always add those later. Same goes for letting the driver choose to accept/reject a request.

Since this is a mobile app, you can draw simple screens of each state. This will make the functionality clear. Here are some simple diagrams. Yes, they actually represent how the mobile app will look. Just simple screens with text and buttons. If you want to make a better UI, you can add that later.

Or, if this is a frontend design interview, you may need to add more UI bells and whistles. Ask the interviewer what they are expecting here.



The Rider starts the state machine by pressing the "Request Ride" button. The system will look for a Driver that is available close to the rider. It will then send the driver a request. If the driver accepts, the system will notify the rider of the driver's ETA (which updates periodically). It will also give the driver the rider's location. We don't do anything with Maps or Directions in our system. We are assuming that the driver can use Google Maps to get directions.

The Driver pressed the "Pickup" button on picking up the rider, and both the driver and rider go to a Riding Screen. Again, no maps, for now, the screen will just show "Riding". The Driver will press the "End Ride" button after dropping off the Rider.

## Design Assumption

You should clarify if your system should be scalable to millions of users. This tells you that you should design with scalability in mind. This is where our Scalable Web Backend System fits best. Most interviews will require designing with scalability.

We have seen a lot of blogs suggest doing more detailed estimations, such as calculating how much memory is needed for 1,000,000 users, or how much bandwidth they will consume. In our opinion, if you want to do that, you can do that later during detailed design.

Why? Because if a system has to be scalable, the high-level design is still the same. So there is no point in spending your time on math estimations. After all, this is a System Design interview.

### What to STORE?

Defining what you need to store gives you a better idea of what the backend should look like.

Don't define any Database Model/Tables for now. Quickly list down the essential data you need.

You will need to store a Driver and Rider Profile. Let's keep it simple and just store the name and email.

#### Driver

Name
Email
Rider

Name
Email
For Drivers, we also need their location to keep track of where they are and send ETAs.

Also, since this is a State-based system, we want to store the user's State.

#### Driver

Name
Email
Location
State
Rider

Name
Email
State
Let's define what States we can have. We use the screen flow drawn above to define states.

#### Rider State

Not Riding
Requesting a Driver
Waiting for Driver
Riding
Driver State

Waiting for Riders
Ride Request (Accept/Reject)
Picking Up
Driving
We can formalize the states with the following names:

#### Rider State

NOT_RIDING
REQUESTING
WAITING
RIDING
Driver State

NOT_DRIVING
WAITING
REQUESTED
PICKING_UP
RIDING
That is enough for our use cases. We can also store another object, Ride, that summarizes each ride and stores it. This can be used later for data analysis.

## HIGH-LEVEL DESIGN

To understand this section better, please go through the following sections:

- Section: Anatomy of a Scalable Web Application

For our high-level design, we use our framework for scaling web applications. We extend it to the cab-hailing use case. Here is what it looks like:



The Distributed Database can store the User and Driver Profiles (Name, Email, etc). Distributed Databases scale well as we add more users.

The In-Memory Database is used for fast lookups and updates. We can store two things here.

1. States of active Riders and Drivers.

2. Driver's Location (for sending ETA to riders)

Both of the above will see a lot of updates in relatively short times, so an In-Memory DB (such as Redis) works well here.

When a request comes in, it gets assigned to an App Server. We will make our REST API stateless so that any App Server can handle a request. This makes it easy to scale app servers by adding more machines. (To learn more about Stateless APIs and their benefits, check out the Load Balancer Section)

What happens when a user requests a ride?

When a rider requests a ride, the app server sets the Rider to the REQUESTING state. It then sends a request to the Matching system to find a driver.

The Matching System maintains a pool of available drivers (WAITING state). It finds a driver near the user and sends him/her a request. If the driver rejects, the system keeps sending requests to new drivers until one accepts or we run out of nearby drivers.

When a driver accepts, the Matching System responds to the App Server with the driver info. The app server sets that Driver's state to PICKING_UP and sets the Rider's state to WAITING. It also notifies the Rider that a Driver is on the way.

At each state change, we inform the Rider/Driver of the change, so that the mobile UIs can be updated. With the notification, we also send any other info the device might need. For example, when the User is notified that he/she has been changed to the WAITING state, we also calculate the Driver's ETA and send that with the notification, so that the User's device can display the ETA.

We use a similar flow for all our API requests. A Request goes to an App Server, and the App Server processes the request. This involves State Updates to the In Memory DB, Profile Updates to the NoSQL DB, Requests to/from the Matching System and notifying the Riders/Drivers of State changes.

### How is the Driver's Location Updated?

We need to periodically ping the Driver's location for all active drivers (drivers not in the NOT_DRIVING state). This can be part of the mobile application. The app can periodically call an HTTP handler with the driver's current location. This location is simply written to the In-Memory DB by App Servers. The location is also sent to the Matching System.

Note that the Matching System needs to keep the Driver's location updated. The Matching System finds drivers near a user. It will store each active Driver's location in a Spatial Index for such queries (details in the Spatial Indexing Section).

## DETAIL DESIGN (Describe each component)

Let's say you proposed the high-level design we showed above. Now, the interviewer will usually ask you to dig deeper into a particular subsystem.

Luckily (well, by our design), if you go over the following sections, you will get the design of each component in detail:

## Load Balancer, App Servers

Section: Load Balancer
Matching System

Section: Spatial Indexing - Nearest Neighbors Search
Distributed Database

Section: Databases - Intro to Indexing and NoSQL
Section: Wide Column Stores
In Memory DB

Section: Key-Value Stores incl. Object Stores, In Memory DBs


## ADDITIONAL QUESTIONS

In this system, how do you verify that a rider is actually riding when the driver clicks on the Riding button?

The system can verify that the User and Driver's location is the same.