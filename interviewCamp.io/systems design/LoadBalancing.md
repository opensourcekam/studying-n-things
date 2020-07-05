# On Load Balancers

> Load balancers can be dedicated hardware or be installed as software a good example is _NGINX_

## Benifits
- Improves response time
- Improves fault tolerance 
- Hides internal servers (adds layer of security)
- Handles failures (sometimes)

## How to determine which servers processes a request?

### Scheduling algorithm 
1. HTTP REQUESTS (REST API)
2. Statless app servers
3. Request take short amount of time (No long connections)

> Algos
- Round Robin (Distributes # of request evenly)
- Random 
- Weighted Round Robin (Distributes # of request evenly with factors of memory)

> Factors for how app servers are load balanced
- Geographic loction
- Server load
- Response time
- Up/ down status
- Capabilities

> Most load balancers will use a combination of the above factors

### Pros/ Cons of stateless app servers
_Pros_
- Scale
- Failover

_Cons_
- Round trip time for DB selects
- Eventual consistancy
- Misc. Cases (Video games may have colliding db selects)

## Load balancing Persistant app servers

1. How we load balance to app servers
  > This is a layer 4 approach 
  - IP address

  > These are layer 7 approach
  - Session ID
  - Cookies
  - SSL session ID
