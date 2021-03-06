# Java?

- 네트워크 상에서 쓸 수 있는 객체지향프로그래밍 언어
- write once, run everywhere라는 자바의 슬로건에 맞게 운영체제에 상관없이 작동

# Java 11버전 특징?

- 문자열 앞 뒤의 공백을 제거하는 String 메서드인 strip()이 추가되었습니다. 기존에는 trim() 메서드를 이용해 공백을 제거했는데 이 메소드보다 성능이 수 배 빠른것으로 알려져있습니다.

# 객체지향프로그래밍

- 현실 세계의 사물들을 객체로 보고 객체로부터 개발하고자 하는 특징과 기능을 뽑아와 프로그래밍 하는 기법입니다. 객체와 객체의 상호작용을 통해 프로그램이 동작하는 것을 말합니다.
- 재사용성과 유지보수성을 높일 수 있습니다.

# OOP의 4가지 특징?

\*\* https://velog.io/@ygh7687/OOP%EC%9D%98-5%EC%9B%90%EC%B9%99%EA%B3%BC-4%EA%B0%80%EC%A7%80-%ED%8A%B9%EC%84%B1 참고

1. 추상화 - 구체적인 사물들의 공통적인 특성을 파악해서 이를 하나의 개념으로 다루는 것입니다.

2. 상속  \- 자식 클래스가 부모 클래스의 특성과 기능을 물려받아 사용하는 것입니다.

3. 캡슐화  \- 실제 구현 부분을 외부에 드러나지 않도록 하는 것입니다. public, private, protected가 있습니다.

4. 다형성 - 어떠한 메소드가 상황에 따라 다른 결과를 내는 것입니다. 예를 들면 오버로딩과 오버라이딩이 있습니다.

   - # 오버라이딩 vs 오버로딩?

     - overloading이란 이름은 같지만 타입이나 파라미터가 다른 메소드를 중복으로 선언하는 것을 의마하고 overriding은 부모 클래스의 메소드의 동작방법을 재정의하여 우선적으로 사용하는 것입니다.
     - overloading 시 메소드 이름은 같아야하고 파라미터의 갯수는 달라야합니다. 파라미터의 갯수가 동일할 경우 파라미터들의 데이터 타입이 달라야 합니다. 오버로딩시 프로그램의 가독성을 증가시킬 수 있다는 장점이 있습니다.

     - overriding 시에는 먼저 오버라이드 하고자 하는 메소드가 부모 클래스에 존재해야 합니다. 마찬가지로 메소드 이름은 같아야 하고 파라미터 개수와 자료형 그리고 메소드의 리턴형이 같아야 합니다.

# JVM? 

- 자바의 슬로건인 write once run everywhere을 가능하게 해주는 것입니다.

- 물리적 머신과 유사한 머신을 소프트웨어로 구현한 것 입니다.

- # JVM 동작과정? \*\*\*\*

  1. 프로그램이 실행되면 OS로부터 프로그램이 필요로 하는 **메모리 할당** 해줍니다.
  2. **자바 컴파일러가** .java 파일을 읽어 **.class파일로 변환**해줍니다.
  3. **class loader를 통해** class파일들을 **JVM으로 로딩**시켜줍니다.
  4. 로딩된 class 파일들은 **execution engine을 통해 해석**됩니다.
  5. 해석된 class들은 **runtime data area에 배치되어 실질적인 수행**이 이루어집니다.

  - # Class Loader?

    - 클래스 파일들을 엮어서 JVM 운영체제로부터 할당받은 메모리 영역인 runtime data area로 적재하는 역할을 수행합니다.

  - # Execution Engine?

    - 메모리에 적재된 클래스들을 기계어로 변경해 명령어 단위로 실행하는 역할을 합니다.

  - # Runtime Data Areas?

    -  JVM의 메모리 영역으로 자바 어플리케이션을 실행할 때 사용되는 데이터를 적재하는 영역입니다. 이 영역은 크게 method, heap, stack으로 나눌 수 있습니다.

  - # Garbage Collector?

    - heap의 메모리 영역에 생성된 객체들 중 참조되지 않는 객체들을 탐색 후 제거하는 역할을 합니다. 

# Spring Framework? ****

- 자바 플랫폼을 위한 오픈소스 애플리케이션 프레임워크입니다. 하드웨어적인 구성이 필요없는 경량 프레임워크입니다.
- 세가지 특징이 있습니다. 제어의 역행, 의존성 주입, 관점지향프로그래밍 이라는 특징이 있습니다. 
- 제어의 역행은 컨트롤의 제어권을 프레임워크가 가지게 되어 어플리케이션의 느스한 결합을 도모합니다.
- 의존성 주입은 각 서비스간에 의존성이 존재할 경우 프레임워크가 서로 연결시켜줍니다.
- 관점지향프로그래밍은 공통적으로 사용하는 기능의 경우 해당 기능을 분리하여 관리하는것을 의미합니다.

# Spring MVC 패턴?

- Model, View, Controller로 나누어 역할을 분할하여 처리하는 패턴입니다.
  1. 사용자의 request를 Controller가 받습니다.
  2. Controller는 business logic을 Service와 같이 처리한 후 결과를 Model에 담습니다.
  3. Model에 저장된 결과를 바탕으로 시각처리를 담당하는 View를 제어하여 사용자에게 전달합니다.
- MVC 패턴은 2가지 방식으로 나뉩니다. Model1과 Model2
  - Model1 방식은 Java파일과 <Tag>를 모두 HTML에 작성해 개발합니다. JSP가 모든 요청을 처리합니다.
  - Model2 방식은 역할을 Controller, Model, View가 모두 나눠서 처리합니다. Controller는 RequestMapping을 통해 URL를 확인하여 바로 View에 던져줄지 Service에 들어가 추가적인 비즈니스 로직을 수행할지 결정하기 때문에 Model1에 비해 확장성도 좋고 유지보수 하기도 간단해집니다.

# REST API

- Representational State Transfer의 약자입니다. 즉 자원의 표현에 의한 상태 전달입니다. JSON이나 XML을 통해 주고받는 것이 일반적입니다.

- HTTP 통신에서 어떤 자원에 대한 CRUD 요청을 리소스와 메소드로 표현하여 특정한 형태로 전달하는 방식입니다.

- 서버와 클라이언트의 역할을 명확하게 분리할 수 있다는 장점이 있지만 표준이 존재하지 않고 사용할 수 있는 메소드가 4가지 밖에 없습니다.

  - # REST가 필요한 이유?

    - 다양한 클라이언트가 등장했기 때문입니다. 멀티 플랫폼에 대한 지원을 위해 서비스 자원에 대한 아키텍쳐를 세우고 이용하는 방법이기 때문입니다.

# get vs post?

- get은 클라이언트에서 서버로 데이터를 전달할 때 주소 뒤에 key와 value가 결합된 쿼리 스트링 형태로 전달합니다. 
- get은 데이터를 요청할때만 사용됩니다. 전송 데이터의 한계가 있고 post보다 전송속도가 빠릅니다.

---

- POST는 클라이언트에서 서버로 리소스를 생성하거나 업데이트하기 위해 데이터를 보낼 때 사용되는 메서드입니다. 예를들면 게시판에 게시글을 작성하는 작업 등을 할 때 사용됩니다.
- POST는 전송할 데이터를 HTTP 메시지 body 부분에 담아서 서버로 보냅니다.

## HTTP 메소드에서 GET이 먼저 나왔을까 POST가 먼저 나왔을까?

# stringbuffer vs stringbuilder

- stringbuffer와 stringbuilder 모두 string과 다르게 한번만 만들고 하나의 메모리만 사용하며 메모리의 값을 변경합니다.

- stringbuilder는 싱글스레드 환경에서 사용합니다.

- stringbuffer는 멀티스레드 환경에서 동기화가 가능합니다.


# thread vs process? ****

- 자바에는 프로세스가 존재하지 않고 스레드만 존재합니다.

- 스레드는 하나의 프로세스 내부에서 독립적으로 실행되는 하나의 작업단위입니다. 스레드를 이용하면 프로그램의 동시성을 높일 수 있습니다. 또한 스레드는 메모리를 공유하기 때문에 더 효율적입니다.

- 하지만 스레드 사용 시 하나의 공유자원에 같이 접근하게 될 수도 있습니다. 이 경우 동기화 문제가 발생합니다.

  - # 공유자원 접근 문제 해결법?

    - mutex, semaphore

-----

- 프로세스는 실행중인 프로그램을 말합니다. 완벽하게 독립적이기 때문에 메모리 영역을 다른 프로세스와 공유하지 않습니다.

# 멀티프로세스 대신 멀티스레드를 사용하는 이유?

- 프로세스를 생성해 자원을 할당하는 시스템 콜이 줄어들어 자원을 효율적으로 관리할 수 있습니다.
- 스레드를 프로그램 내의 메모리를 공유하기 때문에 스레드 간 데이터를 주고받는것이 간단해집니다.
- 스레드간의 통신 비용이 더 적고 스레드간의 전환속도가 프로세스간의 전환속도보다 빠릅니다.



- # 동기 vs 비동기?

  - 동기

    - 요청을 보내고 실행이 끝나면 다음 동작을 처리하는 방식입니다.
    - 여러가지 요청을 동시에 처리할 수 없어 효율이 떨어지는 단점이 있습니다.

  - 비동기

    - 요청을 보내고 해당 요청의 완료 여부와 관계 없이 다음 동작을 처리하는 방식

    - 효율적이지만 작업이 완료된 요청의 결과를 제어하기 어려움

    - udp 방식

    - # TCP vs UDP?

      - 신뢰적 데이터 전송 지원 or not

  

# 인터페이스 vs 추상클래스?

- 인터페이스는 상속관계에 연연하지 않고 각 기능을 클래스에서 오버라이딩 할 수 있기 때문에 여러가지 형태로 구현할 수 있습니다.
- 인터페이스는 상수와 추상 메소드로만 구성되어 있는 클래스입니다. Implements 키워드를 이용해 인터페이스를 구현합니다.
- 추상 method로 이루어진 클래스입니다.
- 추상클래스를 상속받은 클래스는 추상클래스 내의 추상메서드를 모두 구현해야합니다.

# 에외 vs 에러?

- 에러는 하드웨어적 문제로 개발자의 잘못이 아니라 어떻게 통제를 할 수 없는 상황이 생겨 프로그램이 멈추는 경우입니다.

- 예외는 개발자나 사용자의 실수로 프로그램이 멈추는것을 말합니다. 에러와는 다르게 예외처리를 하여 핸들링을 할 수 있습니다.

# http vs https?

- http는 서버-클라이언트 모델을 따라 데이터를 주고 받기 위한 프로토콜입니다. https는 http에 데이터 암호화가 추가된 프로토콜입니다.

- http

  - 실제 전송은 TCP를 통해 이루어지며 80번 포트를 사용합니다.
  - 상태를 가지고 있지 않는 프로토콜입니다.
  - Method, Path, Version, Headers, Body로 구성됩니다.
  - http로 주고받은 정보를 제3자가 조회할 수 있다 —> 그래서 https가 등장

- https

  - SSL로 암호화해서 보안 강화

  - # SSL? ****

    1. 인터넷 사이트는 자신의 정보와 공개 키를 인증기관에 제출합니다.
    2. 인증기관은 개인키로 사이트에서 제출한 정보를 암호화합니다. 인증서를 발급해줍니다.
    3. 인증기관은 웹 브라우저에서 자신의 공개키를 제공합니다.
    4. 사용자가 사이트에 접속하면 자신의 인증서를 웹 브라우저에게 보냅니다.
    5. 웹 브라우저는 미리 받았던 인증기관의 공개키로 인증서를 검증합니다.
    6. 이렇게 얻은 사이트의 공개키로 대칭키를 암호화해서 다시 사이트에 보냅니다.
    7. 사이트는 개인키로 암호문을 해독해 대칭키를 얻게 되고 이 대칭키로 데이터를 주고받을 수 있게 됩니다.

# jpa?

- jpa란 개발자가 db에 직접 sql문을 넘기는것이 아닌 jpa 내부에서 api를 사용해 sql을 호출하고 db와 통신합니다. 중복되는 코드를 지울 수 있고 sql중심에서 객체 중심으로 개발할 수 있습니다.

  - # API?

    - application programming interface의 약자로 데이터와 기능의 집합을 제공하여 컴퓨터 프로그램간 상호작용을 촉진하며, 서로 정보를 교환가능 하도록 하는 것입니다.

# servlet vs jsp?

- servlet은 웹 페이지에서 데이터를 동적으로 생성하거나 데이터 처리를 수행하기 위해 자바로 작성된 코드입니다.
- java 코드 안에 html 코드가 들어있습니다. 그렇기 때문에 Controller에 사용하기 좋습니다.

---

- jsp는 html 안에 java 코드가 들어있는 방식입니다. 그래서 View에 사용하기 좋습니다.

# 쿠키 vs 세션? **\***

\*\* https://interconnection.tistory.com/74 참고

- 쿠키는 서버가 사용자의 웹 브라우저에 저장하는 데이터로 브라우저마다 저장되는 쿠키가 다릅니다. 예를 들면 장바구니

- 세션은 일정 시간동안 같은 브라우저로부터 들어오는 일련의 요구사항을 하나의 상태로 보고 상태를 유지시킴, 브라우저 종료시 소멸됩니다.

- 세션은 사용자의 수 만큼 서버 메모리를 차지하기 때문에 이런 문제를 보완한 토큰 기반의 인증방식인 JWT를 사용하는 추세입니다.

- 예를 들면 로그인/로그아웃

- # JWT?

  - JSON 포맷을 이용해 사용자에 대한 속성을 저장하는 웹 토큰입니다. JWT는 상태를 저장하지 않기 때문에 토큰 만료시간을 지정해주어야 합니다.
  - 어플리케이션이 실행될 때 JWT를 로컬스토리지에 저장해서 사용합니다. 사용자 로긍아웃시에는 로컬스토리지에 저장되어있던 JWT 데이터를 제거합니다.

- # 토큰기반인증시스템?

  - 인증받은 사용자들에게 토큰을 발급하고 서버에 요청을 할 때 헤더에 토큰을 함께 보내도록 해서 유효성 검사를 진행합니다. 이 시스템에서는 사용자의 인증정보를 서버나 세션에 유지하지 않고 클라이언트에서 들어오는 요청만으로 작업을 처리합ㄴ니다.

  1. 사용자가 아이디와 비밀번호로 로그인
  2. 서버측에서 해당 정보를 검증
  3. 정보가 정확하다면 서버측에서 사용자에게 토큰 발급
  4. 클라이언트에서 서버에서 준 토큰을 저장해두고 서버에서 요청을 할 때마다 HTTP 요청 헤더에 토큰을 포함시켜서 서버에 전달
  5. 서버는 토큰을 검증한 후 클라이언트의 요청에 응답합니다.

# CORS 에러?

- 도메인이 다른 2개의 사이트가 데이터를 주고 받을 때 발생하는 문제로 서버내에서 요청이 허락된 도메인에만 데이터를 주기 위해서, 요청을 허락하기 위해서는 response의 헤더에 추가해줘야합니다.

# builder?

- maven?

- gradle?

- # maven vs gradle?

  - maven과 gradle 둘 다 빌드관리도구입니다. 프로젝트에서 작성한 java 코드와 프로젝트에 필요한 각종 properties와 jar파일들을 JVM이 인식할 수 있도록 패키징해주는 도구입니다.
  - Maven은 외부저장소에서 필요한 라이브러리를 xml 설정파일에 추가하여 사용합니다. 프로젝트가 커질수록 스크립트의 내용이 길어지고 가독성이 떨어지게 됩니다.
  - Gradle은 Java와 거의 비슷한 코드를 써서 빌드 처리를 관리할 수 있습니다. 프로젝트의 규모가 커질수록 maven과 비교해 훨씬 적은 양의 스크립트로 짧고 간결하게 작성할 수 있습니다. 빌드 속도도 maven보다 월등히 빠릅니다.

# Java Collection?

- List

  - # ArrayList vs LinkedList?

    - ArrayList는 데이터들이 순서대로 쭉 늘어선 배열의 형식을 취하고 있습니다.

    - search에는 상수시간 O(1)

    - 시작/중간지점에서 삽입/삭제 O(n), 끝지점에서 삽입/삭제 O(1)

    - 무작위 접근이 가능합니다.

      ---------------------------

    - LinkedList는 순서대로 늘어선 것이 아니라 자료의 주소 값으로 서로 연결되어있는 구조를 취하고 있습니다. 

    - search시에는 O(n)

    - 참조자만 바꿈으로써 데이터의 삽입 삭제에 최적화되어있습니다. 시작지점에서 삽입/삭제 O(1)

    - 순차접근만이 가능합니다. 단방향성을 갖고 있기 때문에 인덱스를 이용하여 자료를 검색하는 프로세스에는 적합하지 않습니다.

- Set

- Map

- # Stack/Queue

  - Stack: LIFO. 예를 들면 실행 취소, 웹 브라우저에서 뒤로가기 가 있습니다.
  - Queue: FIFO. 예를 들면 자판기, 콜센터, 프린터기 인쇄 대기열 등이 있습니다.

# Agile 방법론? ****

- 일정한 주기를 가지고 계속 검토해나가면서 요구사항을 더해 개발하는 프로세스 모델방식입니다.
- 에자일 방법론은 총 5개의 단계가 반복됩니다. 계획, 설계, 개발, 테스트, 검토 순으로 진행되는데 이는 프로젝트를 시작한 후에 끊임없이 개선하기 위한 것입니다.
