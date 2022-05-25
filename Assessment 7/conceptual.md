### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

- What is the signature portion of the JWT?  What does it do?

- If a JWT is intercepted, can the attacker see what's inside the payload?

- How can you implement authentication with a JWT?  Describe how it works at a high level.

- Compare and contrast unit, integration and end-to-end tests.
    - Unit Tests focus on small units, work independently and should be very fast.
    - End-to-end tests are good at capturing bugs but not pinpointing where the bugs are in the code.
    - Integration tests are a good combination of the other two. They make sure the code works well individually as well as checking that they flow well together.

- What is a mock? What are some things you would mock?
    A mock is an object that has the same interface as a more complex object that can't be used in test but it is created so it can be controlled in test. Things that can be mocked are database connections, user variables or other objects that need to be used to run a test.

- What is continuous integration?
    Continuous Integration is automating testing so that bugs are caught in the earlier stage and fewer bugs make it to production. Issues will be caught as new code is added and pushed to the main branch.

- What is an environment variable and what are they used for?
    An environment variable is an object on a computer than can be edited and it helps programs know where to install files, store temporary files, and find user profile settings.

- What is TDD? What are some benefits and drawbacks?
    TDD is "Test Driven Development". It is good since you are always writing small tests and it allows you to catch bugs much easier. The cons are that the test suite has to be constantly be updated and it is difficult to write tests beyond unit tests.

- What is the value of using JSONSchema for validation?
    First, user data will fail fast, blocking bad data from getting to your DB. It reduces the amount of code for processing and validating data. It is also very easy to setup and maintain.

- What are some ways to decide which code to test?
    Ideally you would like to get close to 100% coverage. You should test all functions/classes. Any part of the code that has a use case should be tested. This will allow you to find where the bugs are much easier than just testing some parts of the code.

- What does `RETURNING` do in SQL? When would you use it?
    "RETURNING" will return a specified part of the modified data after using an SQL statement. This shoudlm be used when you need to return information and want to save time by not writing more SQL statments to SELECT the data.

- What are some differences between Web Sockets and HTTP?
    1. Http creates a connection for the response and closes it once received while websockets leave the connection open.
    2. HTTP does not work well with frequent type apps like chat, trading, etc., while Websockets work well.
    3. Websocket communicates at both ends but HTTP connection is only built at one end.


- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
    I preferred using Express. The main reasons are that it used the Node framework which makes things much easier and it also seemed to be much less code to do the same things that needed much more code in Flask.
