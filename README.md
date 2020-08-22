A cart check-out application created with node,express,mongodb.

* Instrumented with APM.
* Written in TypeScript.
* Build automated with gulp.
* Tests using jest/vanila test libs like chai,sinon,mocha,nock and supertest etc.
* Deployment with pm2.


## Set up APM server
 - cd docker-compose
 - docker-compose -f apm-server.docker.yml up -d
 
 Above commands will setup mongo,elastic,kibana , and APM server as well.
 
## Launch kibana UI 
 http://localhost:5601

## Launch APM UI 
![apm-launch](https://github.paypal.com/kkkalyani/cart-manager/blob/master/images/launch-apm.png) 
 

## What does APM instruments :
 - CPU/memory usage
 - Transaction and it spans.
 - internal and external http or other IO calls.
 - custom spans.
 
## Samples from APM
![Request Distribution](https://github.com/kamalkalyani/cart-manager/blob/master/images/request-distribution.png)
![Response percentile](https://github.com/kamalkalyani/cart-manager/blob/master/images/95-99-percentile-reponse.png)
![API preformance](https://github.com/kamalkalyani/cart-manager/blob/master/images/api-performance.png)
![req-dist-per-response](https://github.com/kamalkalyani/cart-manager/blob/master/images/request-distribution-in-response-time.png)
![api-span](https://github.com/kamalkalyani/cart-manager/blob/master/images/api-request-spans.png)
