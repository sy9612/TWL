### **Directed Acyclic Graph, DAG**

= 방향 비순환 그래프 = 유향 비순환 그래프 = ...



![img](https://blog.kakaocdn.net/dn/c3FCzL/btq80oM59mO/owUiLEKCJegEroIwHGYeuk/img.png)

그래프 간선(Edge)에 <방향>이 있고, 처음 출발한 노드(정점) v에서 시작하여 다시 v로 돌아가는 방법이 없는 <비순환> 그래프

 

**용어**

**선행자(predecessor)와 후행자(successor)**

DAG에서 어떤 정점 i, j에 대해 i에서 j로의 경로가 존재할 때,

i = j의 선행자

j = i의 후행자

 

**즉각 선행자(immediate predecessor)와 즉각후행자(immediate successor)**

DAG에서 어떤 정점 i, j에 대해 i에서 j로의 간선이 존재할 때,

i = j의 즉각 선행자

j = i의 즉각 후행자

 

**예시**

\- 작업의 우선순위 표현
\> 선행 작업 완수 후 작업이 진행되어야 하는 경우