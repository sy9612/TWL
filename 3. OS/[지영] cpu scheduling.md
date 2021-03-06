# **CPU 스케쥴링**?

- 메모리에 올라온 프로세스들 중 어떤 프로세스를 먼저 처리할지 순서를 정하는 작업을 의미합니다. 즉, Ready Queue에 있는 프로세스들 중에 누구에게 CPU를 할당해 줄 것인지 정하는것이 CPU 스케쥴링입니다.
- 운영체제가 사용자도 모르는 사이 자동으로 진행하는 작업.
- 스레드의 경우 개발자가 스케쥴링 관련 코드를 삽입해서 진행.

# **CPU 스케줄러는 언제 동작?**

- 한 프로세스가 실행상태에서 대기 상태로 전환될 때
  ex) I/O 요청에 의한 대기
- 프로세스가 실행 상태에서 준비 완료 상태로 전환될 때
  ex) 할당된 시간이 다 끝났을 때 (타이머 인터럽트가 발생했을 때)
- 프로세스가 대기 상태에서 준비완료 상태로 전환될 때
  ex) I/O 종료 시
- 프로세스가 종료될 때

# **왜 CPU 스케쥴링이 필요한지?**

- 프로세스가 cpu를 점유해 작업을 수행하는 도중 interrupt가 발생하면 프로세스는 일시적으로 cpu 상용을 중지하지만 계속 점유하고있습니다. 이러한 상황을 줄여 cpu를 최대한 활용하기 위해 cpu 스케쥴링이 필요합니다.

- CPU는 한번에 하나의 프로세스만 실행시킬 수 있습니다. 따라서 특정 프로세스가 I/O 요청에 의해 대기해야할 경우 CPU는 아무일도 안하고 있게 됩니다.

  다중 프로그래밍에서는 이러한 시간을 생산적으로 활용하고자 CPU를 그 프로세스로부터 회수해 다른 프로세스에 할당합니다.

  그 외 여러가지 예시들도 있겠지만 CPU 스케줄링이 필요한 이유는 하나로 통일되는데, 바로 CPU 이용률 극대화 입니다.

- 크게 선점 스케쥴링과 비선점 스케쥴링이 있습니다.



# **선점 스케쥴링**

- CPU가 어떤 프로세스에 의해 이미 점유당한 상태일 때 우선순위가 높은 프로세스가 CPU를 차지할 수 있습니다.

- I/O 요청, I/O 응답, Interrupt 발생등의 상황에서 선점 스케쥴링이 일어날 수 있습니다.

- 우선 순위가 높은 프로세스를 빠르게 처리해야 할 경우 유용합니다.

- 선점이 일어날 경우 오버헤드가 발생하며 처리시간을 예측하기 힘들다는 단점이 있습니다.

  - ## Shortest Remaining Time 스케쥴링

    - 짧은 시간 순서대로 프로세서를 처리합니다. 처리시간이 더 짧은 프로세스가 Ready 큐에 들어오면 그 프로세스가 바로 선점됩니다.

  - ## Round-Robin 스케쥴링??

    - 각 프로세스는 같은 크기의 CPU 시간을 할당 받고 선입선출에 의해 실행됩니다. 할당시간이 너무 크면 선입선출과 다를 바가 없어지고, 너무 작으면 오버헤드가 너무 커집니다.

  - ## Multi-level Queue 스케쥴링

    - Ready큐를 여러 개 사용하는 기법. 각각의 큐는 자신의 스케줄링 알고리즘을 수행하며, 큐와 큐 사이에도 우선순위를 부여합니다.



# **비선점 스케쥴링**

- ## First Come First Served 스케쥴링 (선입 선처리)

  - 가장 간단한 CPU 스케줄링 알고리즘으로, CPU를 먼저 요청하는 프로세스가 CPU를 먼저 할당받는 기법입니다.

- ## 우선순위 스케쥴링

  - 프로세스에게 우선순위를 정적, 혹은 동적으로 부여하여 우선순위가 높은 순서대로 처리하는 스케쥴링 기법입니다. 동적으로 부여할 경우, 구현이 복잡하고 오버헤드가 많다는 단점이 있으나, 시스템의 응답속도를 증가시킵니다.

- ## Shortest Job First 스케쥴링

  - Ready 큐 안에 있는 프로세스 중 수행시간이 짧은 프로세스를 먼저 수행시킵니다.
  - 평균 대기시간을 감소시키는 장점이 있습니다.

- ## Highest Response Ratio Next 스케쥴링

  - 긴 작업과 짧은 작업간의 지나친 불평등을 어느 정도 보완한 기법입니다. 수행시간의 길이와 대기 시간을 모두 고려해 우선순위를 정합니다.



