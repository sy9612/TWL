### **Collection**

요소로 알려진 객체 그룹, 데이터를 저장하는 기본적인 자료구조들을 한 곳에 모아 관리하고 편하게 사용하기 위해 제공하는 것

**Iterator**

자바 컬렉션에 저장된 요소를 읽어오는 방법을 표준화 한 인터페이스

Collection에서 iterator() 메서드를 정의하여 각 요소에 접근함

```
LinkedList<Integer> ll = new LinkedList<>();

ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);

Iterator<Integer> it = ll.iterator();
while(it.hasNext()){
	//하나 씩 접근
}
```

**장점**

\- Colletion 종류에 상관 없이 일관성 있게 프로그래밍 가능

**단점**

\- 하나 씩 접근 가능

\- size() 반복문으로 접근하는 것보다 더 오래 걸림



![img](https://blog.kakaocdn.net/dn/mc5nM/btq7nzOYa6u/wQU5TF7akDKONEF1xXCkQ1/img.png)

![img](https://blog.kakaocdn.net/dn/p3oqW/btq7nufYngq/Rv6Rt9Clr5NN7tFD1SItTK/img.jpg)



 

### **List**

순서가 있는 데이터의 집합, 데이터 중복 허용

|      | Array           | ArrayList                      | Linked List              |
| ---- | --------------- | ------------------------------ | ------------------------ |
| 형식 | 기본 타입, 객체 | 객체만                         | 객체만                   |
| 크기 | 고정적          | 가변적                         | 가변적                   |
| 기능 | -               | addAll, removeAll, iterator 등 |                          |
| 속도 | -               | 검색 O(1) 삽입/삭제 O(N)       | 삽입/삭제 O(1) 검색 O(N) |



![img](https://blog.kakaocdn.net/dn/cdxuko/btq7FiTWckE/SJuFImUIy58pSgc0kZ8Zy0/img.png)



#### ArrayList

\- 단방향 포인터 구조

\- 자료에 대해 순차적 접근, 탐색이 빠름

▶ 데이터 추가/삭제에 시간이 오래 걸리는 이유: 배열이 다 차면 배열의 크기를 두배로 늘림

\- index로 객체 관리

#### LinkedList

\- 양방향 포인터 구조, 인접 참조를 링크해서 체인처럼 관리

\- 데이터 삽입, 삭제 시 빠른 성능 / 느린 탐색

\- 이전 요소와 다음 요소 참조 저장 ▶ 더 많은 메모리 소비

\- 스택, 큐 등

#### Vector

\- ArrayList 구형 버전, ArrayList와 동일한 내부 구조를 가짐

\- 모든 메소드 동기화 ➡ 멀티 스레드 시 동시에 실행X

#### Stack



![img](https://blog.kakaocdn.net/dn/oEXWU/btq7GBeDFJk/VCAVPvMokd8TSpDAjsWZJ0/img.png)



\- 자료의 입력과 출력이 한 곳인 구조, LIFO(Last In First Out)

\- 삽입: push, 삭제 : pop

\- 함수의 콜스택, 문자열 역순, 연산자 후위표기법, 뒤로가기 등

 

### **Queue**

#### Queue



![img](https://blog.kakaocdn.net/dn/zjcCk/btq7Fi0Gz8Y/WikqfSX6YJJoOLhBNQhY9k/img.png)



\- 자료의 입력과 출력이 한 쪽 끝(front, rear)으로 제한한 구조, FIFO(Frist In Frist Out)

\- 삽입연산 위치: rear - 인큐(enQueue), 삭제연산: front - 디큐(dnQueue)

\- 컴퓨터 버퍼, 은행 업무, 프로세스 관리, BFS, Cache

#### Deque

\- 자료의 입력과 출력이 양 쪽 끝에서 모두 가능한 구조

\- 스크롤: 입력이 한 쪽 끝으로만 가능하도록 제한한 덱

\- 셀프: 출력이 한 쪽 끝으로만 가능하도록 제한한 덱

 

### **Set**

순서를 유지하지 않는 데이터 집합, 데이터의 중복을 허용하지 않음

#### HashSet

\- 객체들을 순서없이 저장, 동일한 객체(같은 해시코드) 중복 저장X

\- 가장 빠른 임의 접근 속도

#### LinkedHashSet

\- 추가된 순서, 가장 최근에 접근한 순서대로 접근 가능

#### TreeSet

\- 이진 트리 기반 컬렉션

\- 정렬된 순서대로 보관, 정렬 방법 지정 가능

\- 객체 저장 시 자동 정렬 ➡ 부모값보다 작을 경우 왼쪽, 큰 경우 오른쪽 자식 노드에 저장

\- 검색, 정렬이 빠르지만 HastSet보다 데이터 추가, 삭제 시간이 더 걸림

> **힙
> **
>
> ![img](https://blog.kakaocdn.net/dn/2IvzZ/btq7Ezn5dt4/7t7qcmk8kRUb2zhGn0l5Kk/img.png)
>
> ◽ 최대값 또는최소값을 찾아내는 연산을 쉽게하기 위해 고안된 구조
> ◽ 각 노드의 키값이 자식의 키값보다 작지 않거나(최대 힙) 그 자식의 키값보다 크지 않은(최소힙) 완전 이진트리

 

### **Map**

Key와 Value의 쌍으로 연관지어 저장하는 객체

#### HashMap

\- Map 인터페이스를 구현하기 위해 해싱(Hashing) 기법 사용

 

> Hashing
>
> ◽ 해시함수를 이용해 해시테이블에 저장하고 검색하는 기법
>
> ◽ 해싱에 사용되는 자료구조는 array + linked list가 조합된 형태
>
> **Hash Table**
>
> ![img](https://blog.kakaocdn.net/dn/cgZlAO/btq7CTtLiIL/APnMxGiDaNm20SaaSPhymk/img.png)
>
> ◽ Key - Value로 데이터를 저장하는 자료 구조
>
> ◽ 내부적인 배열을 사용하여 데이터를 저장하므로 검색 속도가 빠름
>
> ◽ 각각 key 값에 해시함수를 적용해 배열의 고유한 index를 생성하여 값을 저장하거나 검색
>
> ◽ index 값이 충돌된 경우, index 값에 연결된 데이터들을 조회하여 원하는 값을 조회하므로 O(N)까지 증가할

 

\- 중복 허용X, 순서 보장X

\- 키와 값이 null 허용

#### HashTable

\- HashMap 보다는 느리지만 동기화를 지원

\- 키와 값이 null 허용 X

#### TreeMap

\- 이진검색트리의 형태로 키와 값의 쌍으로 이루어진 데이터 저장

\- 정렬된 순서로 키/값 쌍을 저장하여 빠른 검색 가능

\- 저장시 정렬을 하여 저장시간이 오래 걸림

\- 정렬된 상태로 데이터를 조회하는 경우가 빈번할 때 사용

#### LinkedHashMap

\- HashMap을 상속받아 사용하여 HashMap과 유사

\- Map에 있는 엔트리들의 연결 리스트를 유지하여 입력한 순서대로 반복 가능

