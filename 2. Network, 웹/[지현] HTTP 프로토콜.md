### 네트워크 - HTTP 프로토콜



#### **HTTP** (**H**yper**T**ext **T**ransfer **P**rotocol)

인터넷에서 데이터를 주고 받기 위한 통신 규약. 80번 포트를 사용한다.

HTTP는 애플리케이션 레벨의 프로토콜로 TCP/IP의 socket을 이용해 연결된다.



HTTP 특징

* 비연결성 (Connectionless)

  클라이언트 요청에 서버가 응답을 마치면 연결을 끊는다.  불특정 다수의 통신환경이기 때문에 더 많은 연결을 위해 연결을 유지하기 위한 리소스를 줄이는 비연결 지향으로 설계되었다. 연결을 유지하지 않는 프로토콜이기 때문에 요청/응답 방식으로 동작한다.

* 무상태성 (Stateless)

  HTTP의 비연결 특성으로 인해 서버와 클라이언트는 클라이언트가 이전에 요청한 결과(상태)를 기억하지 않는다. 이러한 특징 때문에 정보를 유지하기 위해 Cookie, Session으로 클라이언트의 상태를 유지시켜준다.



#### **HTTPS **(**H**yper**T**ext **T**ransfer **P**rotocol **S**ecure)

HTTP에 보안성을 강화한 프로토콜. 433번 포트를 사용한다.

HTTP 레이어 바로 밑단에 SSL을 추가해서, HTTP 메세지를 TCP로 보내기 전에 먼저 SSL에서 모든 데이터를 암호화한다.

HTTP는 암호화가 되지 않은 데이터를 전송하는 프로토콜이기 때문에 공격에 취약한 것과 달리, HTTPS는 데이터의 송수신 과정에서 데이터를 가로채려는 공격 등으로부터 대응이 가능하다는 차이가 있다. 그러나 HTTPS는 암호화/복호화 과정이 필요하기 때문에 HTTP보다 비교적 속도가 느리다. 또한 인증서를 발급하고 유지하기 위한 추가 비용이 발생한다.



------



#### **Cookie**

클라이언트(브라우저) 로컬에 저장되는 key-value 형태의 데이터 파일이다. 

서버에서 HTTP Response Header에 Set-Cookie 속성을 이용하여 클라이언트의 상태 정보를 로컬에 저장한다.

사용자가 따로 요청하지 않아도 브라우저가 Request시에 Request Header를 넣어서 자동으로 서버에 전송한다.

사용자 인증이 유효한 시간을 명시할 수 있기 때문에 유효 시간이 정해지면 브라우저가 종료되어도 인증이 유지된다는 특징이 있다.



#### **Session**

클라이언트의 상태 정보를 서버에 저장하고, 서버측에서 관리한다.

클라이언트를 구분하기 위해 세션 ID를 부여한 뒤 이 세션 ID를 이용해서 인증받고 정보를 이용한다.

 웹 브라우저가 서버에 접속해서 브라우저를 종료할 때까지 인증상태를 유지하는데, 접속 시간에 제한을 두어 일정 시간 응답이 없다면 정보가 유지되지 않게 설정이 가능하다.

사용자에 대한 정보를 서버에 두기 때문에 쿠키보다 보안에 좋지만, 사용자가 많아질수록 서버 메모리를 많이 차지하게 되고, 동접자 수가 많은 웹 사이트인 경우 서버에 과부하를 주게 되므로 성능 저하의 요인이다.



------



#### **HTTP  요청메서드**

클라이언트가 서버에 사용자 요청의 목적/종류를 알리는 수단이다. GET/POST의 특징과 비교는 본문 아래 링크에서 확인할 것.

- GET: 클라이언트가 서버에게 URL에 해당하는 자료의 전송을 요청한다.
- HEAD: GET 요청으로 반환될 데이터 중 헤더 부분에 해당하는 데이터만 요청한다.
- POST: 클라이언트가 서버에서 처리할 수 있는 자료를 보낸다. 
- PATCH: 클라이언트가 서버에게 지정한 URL의 데이터를 부분적으로 수정할 것을 요청한다.
- PUT: 클라이언트가 서버에게 지정한 URL에 지정한 데이터를 저장할 것을 요청한다.
- DELETE: 클라이언트가 서버에게 지정한 URL의 정보를 제거할 것을 요청한다.
- TRACE: 클라이언트가 서버에게 송신한 요청의 내용을 반환해 줄 것을 요청한다.
- CONNECT: 클라이언트가 특정 종류의 프록시 서버에게 연결을 요청한다.
- OPTIONS: 해당 URL에서 지원하는  요청 메시지의 목록을 요청한다.



#### **HTTP 상태 코드**

클라이언트가 보낸 HTTP 요청에 대한 서버의 응답 코드로, 상태 코드에 따라 요청의 성공/실패 여부를 판단한다.

상태코드는 3자리 숫자로 만들어져 있으며 상태코드의 첫번째 숫자에 따라 5가지로 분류된다.

- 1xx : Informational (요청을 받아 작업을 계속 진행)
- 2xx : Success (요청을 성공적으로 받음)
- 3xx : Redirection (요청 완료를 위해 추가 작업 조치가 필요)
- 4xx : Client Error (클라이언트가 보낸 요청의 문법이 잘못되었거나 요청을 처리할 수 없음)
- 5xx : Server Error (서버의 문제로 클라이언트가 보낸 요청을 수행할 수 없음)

상태코드 목록은 본문 아래 참고 링크에서 확인할 것.



------



#### **REST** (REpresentational State Transfer)

HTTP 통신에서 CRUD 요청을 Resource와 Method로 표현하여 Representation of Resource로 전달하는 방식



#### **REST API**

REST 기반의 API를 웹으로 구현한 것.

CRUD 연산에 대한 요청을 할 때, 요청을 위한 Resource(URI)와 이에 대한 Method(HTTP 요청메서드), 그리고 Representation of Resource( JSON)를 사용하면 표현이 명확해지므로 이를 REST라 하며, 이러한 규칙을 지켜서 설계된 API를 Rest API 또는 Restful API라고 한다.



------

**이 내용과 연결되는 네트워크 지식**

1. TCP/IP 4계층
2. IP주소와 PORT번호
3. SSL
4. OAuth, JWT



------

**참고 사이트**

네트워크 면접 예상 질문: https://minhamina.tistory.com/234

HTTP와 HTTPS: https://mangkyu.tistory.com/98

GET과 POST 비교 및 차이: https://mangkyu.tistory.com/17

HTTP 상태코드(1): https://brunch.co.kr/@leedongins/65 

HTTP 상태코드(2): https://velog.io/@sangyeon217/http-status-code

Cookie / Session: https://interconnection.tistory.com/74

REST API: https://meetup.toast.com/posts/92