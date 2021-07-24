## 기본적인 DB 구조

<img src="https://blog.kakaocdn.net/dn/qcrw5/btqJsj37BXL/vGK7sCKkLVkypRhtEV6PFK/img.png" alt="img" style="zoom:50%;" />

- DB 서버와 디스크 역할을 하는 DB 스토리지가 한 구성으로 되어 있음

- DB를 한 대만 운영할 경우에 문제점 : DB 서버가 죽으면 관련된 서비스 전체가 중단

  

## 리플리케이션이란

- DB 서버와 저장소를 같이 다중화

- master 와 slave 간의 데이터 무결성 검사를 하지 않는 **비동기 방식**으로 데이터를 동기화

- 여러 개의 DB를 권한에 따라 수직적인 구조로 구축하는 방식

  

- master node

  - 쓰기 작업만 처리

- slave node

  - 읽기 작업만 처리

  

- 처리방식

  ![img](https://blog.kakaocdn.net/dn/bHW2YF/btqKRO16Oln/UrvZZeMCO20q9xY0XKuKSK/img.png)

  1. master 노드에 쓰기 트랜잭션 수행
  2. master 노드는 데이터를 저장, 트랜잭션에 대한 로그를 파일에 기록(BIN LOG)
  3. slave 노드의 io thread는 mater 노드의 로그 파일을 replay log 파일에 복사
  4. slave 노드의 sql thread는 replay log를 한줄씩 읽으며 데이터를 저장

  

- 장점

  - DB 요청의 과반수가 읽기 작업이라 replication만으로 성능을 높일 수 있음

  - 비동기 방식으로 운영되어 지연 시간이 거의 없음

    

- 단점

  - 데이터 동기화가 보장되지 않아 일관성 있는 데이터를 얻지 못할 수 있음

  - mater 노드가 다운되면 복구 및 대처가 까다로움

    

## 클러스터링이란

- 여러 개의 DB를 수평적인 구조로 구축하는 방식(DB 서버를 다중화 하는 것)

- 동기 방식으로 노드들 간의 데이터를 동기화

- 자동 fail over 기능(시스템 대체 작동)

- active - active 구성

  - 2대가 모두 활성화 되어 동작
  - 시스템 다운 시간이 짧음
  - 성능 좋음
  - 저장소 병목 현상 가끔 발생

- active standby 구성

  - 1대가 활성화 1대 대기
  - host standby: 장애가 발생 전에도 DB가 작동, 전환 시간 짧지만 라이선스료 높음
  - cold standby: active DB 다운된 시점에 작동

- 분산 환경을 구축하여 single point of failure 와 같은 문제를 해결할 수 있는 fail over 시스템을 구축하기 위해 사용

  

- 처리방식

  ![img](https://blog.kakaocdn.net/dn/oaVae/btqKOCg14ow/kkpZDYChulrTJvyqRVKLbk/img.png)

  1. 1개의 노드에 쓰기 트랜잭션이 수행, COMMIT 실행

  2. 실제 디스크에 내용 쓰기 전에 다른 노드로 데이터 복제 요청

  3. 다른 노드에서 복제 요청 수락했다는 신호 보내고 디스크에 쓰기 시작

  4. 다른 노드로부터 신호를 받으면 실제 디스크에 데이터를 저장

     

- 장점

  - 노드들 간의 데이터를 동기화하여 일관성 있는 데이터를 얻을 수 있음
  - 1개의 노드가 죽어도 다른 노드가 살아 있음, 시스템 장애 없이 운영 

- 단점

  - 여러 노드들 간의 데이터 동기화에 시간이 필요하여 replication에 비해 쓰기 성능 떨어짐

  - 장애가 전파된 경우 처리가 까다로움, 데이터 동기화에 의해 시케일링에 한계가 있음

  - 서버 부분은 다중화할 수 있어도 저장소 부분은 다중화 할 수 없어서 데이터를 다중화하지 않는 단점, 저장소 부분 터지면 큰 위험 초래

    

## 샤딩이란

- 데이터가 너무 많아서 검색이 느려졌을 때 더 빠르게 검색할 수 있는 방법

- 테이블을 특정 기준으로 나눠서 저장 및 검색을 하는 것

- 데이터를 어떻게 잘 **분산** 시켜 저장할 것인지, 어떻게 잘 **읽을** 것인지에 대한 결정

- shard : 데이터베이스 또는 검색 엔진에 있는 데이터의 수평 파티션

- shard key: 나눠진 shard 중 어떤 shard를 선택할지 결정하는 키, 결정방식에 따라 sharding 방법이 나뉨

  - hash sharding

    ![img](https://media.vlpt.us/images/giantim/post/8afa420e-4d00-42ff-987b-80ded9708ad0/image.png)

    

    ​		- 장점 : 샤드의 수 만큼 hash 함수를 사용해서 나온 결과에 따라 DB 서버에 저장하는 방식, 구현 간단

    ​		- 단점: 확장성이 낮음, DB 서버가 추가될 경우 해쉬 함수가 변경되어야 함, shard가 늘어나면 해쉬 함수가 달라지니 기존에 저장된 데이터 정합성이 깨짐

  - Dynamic shading                                         ![img](https://media.vlpt.us/images/giantim/post/c9fed448-3427-4c87-b100-d981de694f72/image.png)

    

    ​			- 테이블 형식의 데이터를 바탕으로 샤드를 결정하여 적절히 저장하는 방식

    ​			- 장점 : 해쉬 샤딩과 달리 단순히 키만 추가해주면 되므로 확장이 쉬움

    ​			- 단점 : 로케이터에 의존적이라 로케이터 서비스에 장애 발생 시 db에도 문제 발생

  - Entity group

    ![img](https://media.vlpt.us/images/giantim/post/d6fcd28e-0cb3-49f6-a8b6-c54866189313/image.png)

    - 위에 두개는 NoSQL 최적화, 이 방식은 RDB와 잘 어울림
    - 연관성이 있는 엔티티끼리 한 샤드에 두는 방식
    - 장점 : 같은 샤드에 있는 데이터를 조회할때 효과적
    - 단점: 다른 샤드에 있는 데이터를 함께 조회할때는 오히려 성능이 떨어짐













출처

https://jordy-torvalds.tistory.com/94

https://mangkyu.tistory.com/97?category=761304

https://snow-line.tistory.com/165

https://kgh940525.tistory.com/entry/Database-DB-%EC%84%9C%EB%B2%84%EC%9D%98-%EB%8B%A4%EC%A4%91%ED%99%94Multiplexing-%ED%81%B4%EB%9F%AC%EC%8A%A4%ED%84%B0%EB%A7%81-%EB%A6%AC%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98Replication

샤딩 자세히 https://eminentstar.tistory.com/54