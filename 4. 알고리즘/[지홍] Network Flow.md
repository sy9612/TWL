### **Network Flow**

특정한 지점에서 다른 지점으로 데이터가 얼마나 많이 흐르고 있는 지를 측정하는 알고리즘

\- 네트워크 데이터 전송, 교통 체증, 물류 시스템 등에 활용

\- 내 컴퓨터에 1초에 몇 MB의 자료를 전송 받을 수 있는가에 대한 측정

> 유량(Flow)/용량(Capacity)
>
> ![img](https://blog.kakaocdn.net/dn/bjiKYz/btq84Pp86Eb/GuhTNmJQkNtRYAqQ2q6tZk/img.png)
>
> 용량(Capacity): c(u, v)
>
> u → v로 갈 때, 보낼 수 있는 최대 용량
>
> 유량(Flow): f(u, v)
>
> 실제 보내는 용량
>
> \-
>
>  
>
> 최대 유량
>
> : 간선 중 가장 용량이 작은 간선에 의해 결정

 

 

***\*유량 네트워크\****

https://soobarkbar.tistory.com/198



![img](https://blog.kakaocdn.net/dn/cb2dsn/btq84aaxoKh/g5aAGP17KZ1564x2k4FR0k/img.png)



- (a) s → a → c → t의 경로를 따라 자료를 전송할 때, c → t 간선 용량이 10으로 가장 작음 ▶ **최대 유량 = 10**
- (b) 여러 개의 경로로 동시에 자료를 보내는 경우
  - s → a → c → t = 10
  - s → (a + 1) → b → d → t = 7
  - **최대 유량 = 17**

**Network Flow란?** 간선이 용량을 갖는 그래프에서 두 정점 사이에 얼마나 많은 흐름(Flow)를 보낼 수 있는 지 계산 

 

 

**에드몬드 카프(Edmonds-Karp) 알고리즘**

BFS를 이용하여 모든 경우의 수를 탐색하는 방법

\- 시간복잡도: O(VE²)

 



![img](https://blog.kakaocdn.net/dn/bcxf4K/btq894F4BLq/OAnvMrhhnyIEnrrl5YEGA1/img.png)



**핵심**

\1. 모든 유량을 0으로 설정

\2. 정해진 용량 안에서 가능한 용량의 양을 반복적으로 더함

**실행**

\1. ① → ⑥ 으로 가는 모든 경로를 탐색하면서, 한 간선에 흘려 보낼 수 있는 최대 유량 찾기

1-1. ① → ② → ③ → ⑥ 으로 보낼 수 있는 **최대 유량 6**을 각 간선에 더함



![img](https://blog.kakaocdn.net/dn/edQPub/btq85fXja4z/JMNrl3QA2Az9RmOtgGriTk/img.png)



1-2. ① → ② → ⑥의 **최대 유량인 6**을 각 간선에 더함



![img](https://blog.kakaocdn.net/dn/bGRtvn/btq873hmilB/YHMLDsGTek9XsJ1oifOSBk/img.png)



> 💡 최대 유량이 6인 이유
> ① → ②로 갈 때, 이미 6/12로 6의 유량을 가지고 있었 기 때문에, ① → ②로 보내줄 수 있는 최대 유량은 12 - 6 = 6이 됨

1-3. 위와 같이 ① → ⑥으로 갈 수 있는 모든 방법을 찾아서, 보낼 수 있는 최대 유량 계산

👉 1번을 마친 후 Network flow의 모습



![img](https://blog.kakaocdn.net/dn/QGCaW/btq88y9flvk/OsOD22LkgAqOPA9VxPTk4k/img.png)마지막 계산



 

 

\2. 음의 유량 계산

https://gseok.gitbooks.io/algorithm/content/b124-d2b8-c6cc-d06c-d50c-b85c-c6b0/d3ec-b4dc-d480-cee4-c2a828-ford-fulkerson-c560-b4dc-baac-b4dc-ce74-d50428-edmonds-karp.html

👉 남아있는 모든 가능한 경로를 더 찾기 위해 ▶ 유량의 대칭

2-1. 보이지 않게 반대로 가는 유량이 있다고 가정 (역간선)



![img](https://blog.kakaocdn.net/dn/EPUv6/btq89u6r4lW/lQgSCMKI8msEQr22ETRkd1/img.png)역 간선 계산



- ③ → ② 방향으로 가는 **-6/0** 유량 기록 ▶ -6 < 0 이므로 가능
- 실제 존재하지 않으므로 용량은 0, 유량은 -로 표기
- 계산 시, ③ → ②로 가는 **6**의 유량 계산

2-2. 위의 역 간선을 포함하여 1번과 같이 갈 수 있는 모든 경우의 수 계산



![img](https://blog.kakaocdn.net/dn/ChEyO/btq89wiSxio/nCKnNWTPpBrxB4BHhfaKd0/img.png)



- ① → ④ → ⑤ → ③ → ② → ⑥의 새로운 루트 확보
- ③ → ②의 경우 -5만큼을 흘리므로, ② → ③의 유량도 5가 됨

 

\3. 최종

시작점에서 출발하는 모든 간선의 유량을 더하여 **최대 유량(12 + 7 = 19)** 계산



![img](https://blog.kakaocdn.net/dn/cocd64/btq873uZtYO/kQXrrympjV8Tad02m6dWP1/img.png)



 

 

**포드-풀커슨(Ford-Fulkerson) 알고리즘**

시간이 없어서 다음으로