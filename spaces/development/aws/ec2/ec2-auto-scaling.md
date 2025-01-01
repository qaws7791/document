# AWS EC2 Auto Scaling

AWS EC2 Auto Scaling을 사용하면 애플리케이션의 상황에 맞는 EC2 인스턴스 수를 자동으로 계산하여 유지하도록 해준다. 최소 인스턴스 수, 최대 인스턴스 수를 정하여 해당 범위 안에서 유연하게 인스턴스 수를 조절한다

- 스케일 아웃(Scale-out): 서버 추가
- 스케일 인(Scale-in): 서버 제거

![ 			기본 Auto Scaling 그룹의 그림. 		](assets/as-basic-diagram.png)



## Auto Scaling의 장점

- 내결함성: 인스턴스를 사용하지 못하는 상태가 되면 다른 인스턴스로 교체
- 가용성: 트래픽 요구에 따른 용량 조절
- 비용 관리: 필요할 때만 인스턴스를 추가하여 비용 절감



## 그룹 조정 방법

- [수동 조정] 그룹 크기를 수동으로 조정하기
  https://docs.aws.amazon.com/ko_kr/autoscaling/ec2/userguide/ec2-auto-scaling-scaling-manually.html

- [예약된 조정] 예약된 일정에 따라 조정하기
  https://docs.aws.amazon.com/ko_kr/autoscaling/ec2/userguide/ec2-auto-scaling-scheduled-scaling.html

- [동적: 대상 추적 조정] CloudWatch 지표와 처리량에 따른 목표값을 설정하여 조정

  https://docs.aws.amazon.com/ko_kr/autoscaling/ec2/userguide/as-scaling-target-tracking.html

- [동적: 단계별 조정] 경보 위반에 크기에 따른 단계별 조정
  https://docs.aws.amazon.com/ko_kr/autoscaling/ec2/userguide/as-scaling-simple-step.html

- [예측 조정] 기계학습을 통한 트래픽 흐름의 패턴을 예측하여 인스턴스 수를 조정
  https://docs.aws.amazon.com/ko_kr/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html