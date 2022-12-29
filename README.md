1. npm init
2. npm i express
3. npm i -D nodemon
4. express middleware (request가 통과하는 함수 비슷한 것)
   - CORS: 보안, 외부 도메인 요청 막고 싶을 때
   - JSON parse: JSON으로 온 것을 javascript로 parsing해서 쓸 수 있게 함
   - authenticate: 인증 처리
   - logging
   - router1
   - router2
5. async 비동기
   - Non-blocking: 웨이터(Call Stack)는 요리 큐(Callback Queue), 주방장(DB)은 주문 큐(APIs)를 봐야 함
     - Event Loop: APIs의 Event를 주기적으로 확인하여 Callback Queue로 전달하는 역할
6. async 함수 안에서만 await을 쓸 수 있다.
7. Promise.all([]) 동시에 처리하고 싶은 함수를 묶어서 병렬처리로 실행
