# CICD

* cicd란 무엇인가 - [https://www.redhat.com/ko/topics/devops/what-is-ci-cd](https://www.redhat.com/ko/topics/devops/what-is-ci-cd)
* 지속적 통합이란 무엇입니까? - [https://aws.amazon.com/ko/devops/continuous-integration/](https://aws.amazon.com/ko/devops/continuous-integration/)
* 지속적 전달이란 무엇입니까? - [https://aws.amazon.com/ko/devops/continuous-delivery/](https://aws.amazon.com/ko/devops/continuous-delivery/)
* aws 백서 - cicd - [https://docs.aws.amazon.com/ko\_kr/whitepapers/latest/practicing-continuous-integration-continuous-delivery/what-is-continuous-integration-and-continuous-deliverydeployment.html](https://docs.aws.amazon.com/ko\_kr/whitepapers/latest/practicing-continuous-integration-continuous-delivery/what-is-continuous-integration-and-continuous-deliverydeployment.html)
* 지속적 통합이란? - [https://www.ibm.com/kr-ko/topics/continuous-integration](https://www.ibm.com/kr-ko/topics/continuous-integration)



### 지속적 통합(Continuous Integration)

* 코드 변경사항을 공통 브랜치로 병합하기 용이 하도록 자동화하는 단계
* 코드의 변경 내용이 발생 -> 자동으로 빌드 및 테스트를 트리거 -> 완료시 코드 통
* "merge day"가 필요 없어짐으로 인해 병합을 위한 시간 절약



### 지속적 제공(Continuous Delivery)

* CI를 거친 코드를 자동으로  리포지토리에 릴리스(업로드)하는 단계
* 이 프로세스가 끝나면 신속하게 프로덕션배포할 준비가 완료



### 지속적 배포(Continious Deployment)

* 지속적 제공에서 한 단계 더 나아가 코드 변경 사항 발생 시 프로덕션 배포까지 자동으로 수행

