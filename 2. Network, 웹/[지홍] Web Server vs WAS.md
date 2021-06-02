## **Web Server** vs **WAS**

https://gmlwjd9405.github.io/2018/10/27/webserver-vs-was.html



> ![img](https://blog.kakaocdn.net/dn/bhc2k9/btq6incGxDV/cKeK4YhXs3SBJc8zwFocZk/img.png)
>
> 
> 정적 콘텐츠(Static Pages)
>
> ex) image, html, css, javascript 등 파일과 같이 컴퓨터에 저장된 파일
>
> \- 항상 동일한 페이지 반환
>
> \- Web Server는 파일 경로 이름을 받아 경로와 일치하는 file contents를 반환
>
> 동적 콘텐츠(Dynamic Pages)
>
> \- 인자의 내용에 맞게 동적인 contents 반환
>
> \- 웹 서버에 의해 실행되는 프로그램을 통해 만들어진 결과물(Servlet) 위에서 돌아가는 Java Program



![img](https://blog.kakaocdn.net/dn/bjai5g/btq6lZaOCPu/AxB9p9uiRMkvtF4VJCYoVk/img.png)



### Web Server

◽ 하드웨어: 웹 서버 소프트웨어와 웹 사이트의 구성 요소파일을 저장하는 컴퓨터 ex) HTML 문서, 이미지, CSS 스타일 시트 및 JavaScript파일

◽ 소프트웨어: 클라이언트가 서버에 페이지를 요청(HTTP)하면 **정적 콘텐츠를 제공**하는 서버



![img](https://blog.kakaocdn.net/dn/QeU4m/btq6kHa8aSK/B5YhtvQGzNrm9wgVV3ubQ0/img.jpg)



클라이언트 요청을 가장 앞에서 처리

ex) Apache, nginx

**Web Server 기능**

\- HTTP 프로토콜을 기반으로 클라이언트의 요청을 서비스

\- 정적인 컨텐츠 제공 ▶ WAS를 거치지 않음

\- 동적인 컨텐츠 제공을 위한 요청 전달

- 클라이언트의 요청(Request)을 WAS에 전달, WAS가 처리한 결과를 클아이언트에게 전달(Response)

 



### WAS(Web Application Server)

다양한 로직 처리를 요구하는 **동적 컨텐츠를 제공**하기 위해 만들어진 Application Server (Web Server + Web Container)

\- HTTP를 통해 컴퓨터나 장치에 애플리케이션을 수행해주는 미들웨어(소프트웨어 엔진)

\- 웹 컨테이너(Web Container) 또는 서블릿 컨테이너(Servlet Conatainer)라고도 불림

- Container: JSP, Servlet을 실행시킬 수 있는 소프트웨어 ▶ WAS: **JSP, Servlet 구동 환경 제공**

ex) Tomcat, Jeus, JBoss

**WAS 기능**

\- 프로그램 실행 환경과 데이터베이스 접속 기능 제공

\- 여러 개의 트랜잭션 관리

\- 업무를 처리하는 비즈니스 로직 수행

\- Web Service 플랫폼의 역할

 



### WEB과 WAS의 차이점

동적 처리 유무 ▶ WEB은 정적O 동적X, WAS는 정적O 동적O

✔ WEB과 WAS를 나눈 이유

**자원 이용의 효율성 및 장애 극복, 배포 및 유지보수의 편의성을 위해**

> 톰캣5.5 이상부터 httpd의 native 모듈 사용 ▶ 정적파일 처리 시, 아파치 Httpd만 사용하는 것과 성능이 비슷

\1. WAS에서 정적 처리까지 같이 하면 부하가 많이 걸리기 때문

\2. 여러 대의 WAS 연결

- Load Balancing
- 장애 극복에 쉽게 대응 ▶ fail over(장애 극복), fail back 처리에 유리

\3. 물리적 분리를 통한 보안 강화 ex) SSL에 대한 암복화처리에서 Web server 사용

\4. 여러 웹 어플리케이션 서비스 ex) 하나의 서버에 PHP와 JAVA 함께 사용

 

### **Apache Tomcat**

![img](https://blog.kakaocdn.net/dn/t5GMc/btq6lpap6HV/Hzi2lD3LJhLFpcs7MaXccK/img.png)

👉 Apache와 Tomcat의 기능은 나뉘어져 있지만, 톰캣 안에 있는 컨테이너를 통해 일부 아파치 기능을 발휘하여 합쳐 부르기도 함

 

### Apache(Apache HTTP Server)

apache 단체에서 후원하는 **http웹서버** 오픈소스 프로젝트

\- http 웹서버: http 요청을 처리할 수 있는 웹서버

\- 클라이언트가 GET, POST, DELETE 등 메소드를 이용하여 요청하면 프로그램이 결과를 돌려줌

\- 80 port

 

### Tomcat

apache 단체에서 후원하는 **WAS** 오픈소스 프로젝트

\- Java EE 기반, JSP와 Servlet을 구동하기 위한 **서블릿 컨테이너** 역할

> **컨테이너**
> 동적인 데이터들을 가공하여 정적인 파일로 만들어주는 모듈
>
> **서블릿**
> 클아이언트의 요청을 받고 요청을 처리하여 결과를 클아이언트에게 제공하는 자바 인터페이스
> \- 서블릿 라이프사이클
> init() ➡ service() ➡ destory()
>
> **서블릿 컨테이너(servlet container)**
> 서블릿들을 모아 관리
> 새로운 요청이 들어올 때마다 새로운 스레드 생성
> 작업이 끝난 서블릿 스레드 자동 제거

\- DB연결, 다른 응용 프로그램, 상호 작용 등 동적인 기능 사용

\- 8080 port

\