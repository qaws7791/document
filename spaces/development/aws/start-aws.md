# Start

### AWS 공동 책임 모델

클라우드 서비스 이용 시 보안과 규정 준수에 대한 책임을 AWS와 고객이 공동으로 가진다.

AWS는  크게 소프트웨어와 하드웨어 인프라및 네트워크, 시설에 대한 책임을 가진다.

고객은 고객이 사용하는 데이터와 플랫폼, 애플리케이션과 이를 사용하기 위한 보안, 자격 증명 및 액세스 관리 등에 대한 책임을 가진다

고객은 자신의 책임 범위만 관리하면 되기 때문에 운영 제어의 고객 부담이 줄어든다.

{% embed url="https://docs.aws.amazon.com/ko_kr/wellarchitected/latest/security-pillar/shared-responsibility.html" %}
shared-responsibility
{% endembed %}

### 리전과 가용 영역

AWS의 데이터 센터는 전 세계의 30개 이상의 리전(Region)에 분산되어 있으며, 100개 이상의 가용 영역(Available Zone)을 가지고 있다. 따라서 특정 지역에 장애가 발생하더라도 다른 지역을 통해 서비스를 유지할 수 있다. AZ ID는 가용 영역에 대한 식별자로 AWS 계정마다 AZ 이름에 대응하는 AZ ID가 다를 수 있다

AZ 이름: `ap-northeast-2a`

AZ ID: `apne2-az1` &#x20;

{% embed url="https://aws.amazon.com/ko/about-aws/global-infrastructure/?pg=WIAWS" %}

{% embed url="https://docs.aws.amazon.com/ko_kr/ram/latest/userguide/working-with-az-ids.html" %}



### 요금제

시간 단위로 사용량만큼 지불하는 종량제 요금제를 기본으로 하며, 특정 기간 약정을 조건으로 더 저렴하게 사용할 수 있는 플랜 또한 존재한다.

{% embed url="https://aws.amazon.com/ko/pricing/" %}

### 자원

사용자는 서버의 자원을 쉽게 변경할 수 있고, 따라서 트래픽이 갑작스럽게 몰리는 상황과 같이 서버 증설이 필요할 때 상황에 따라 유연하게 대처할 수 있다



### 고가용성

* 리전 및 가용 영역:  리전과 가용 영역을 통한 데이터 센터 분산
* 오토 스케일링: 트래픽 및 부하에 따른 자원 조절을 통해 일관적인 성능을 유지
* S3(스토리지 복제): S3 데이터를 여러 가용 영역에 복사하여 데이터에 대한 안정성을 보장
* RDS(DB 복제): 데이터베이스를 여러 가용 영역에 복제하여 고가용성 확보
* ELB(로드밸런서): 여러 인스턴스 간 트래픽 분산을 통한 고가용성 및 확장성
* Cloud Watch(모니터링): 애플리케이션 및 인프라 모니터링을 통한 문제 감지·조기대응

### Well-Architected Framework

AWS의 전문가들이 6대 원칙을 중심으로  아키텍처 관련 모범 사례를 설명한다. AWS를 사용해 고도화된 시스템을 구축하는 데 도움을 준다.

1. 운영 우수성 원칙: 시스템을 실행 및 모니터링하고 프로세스와 절차를 지속적으로 개선하는 데 중점
2. 보안 원칙: 정보와 시스템을 보호하는 데 중점
3. 안정성 원칙: 의도한 기능을 수행하는 워크로드와 요구 사항을 충족하기 위해 실패로부터 신속하게 복구하는 방법에 중점
4. 성능 효율성 원칙: IT 및 컴퓨팅 리소스의 구조화되고 간소화된 할당에 중점
5. 비용 최적화 원칙: 불필요한 비용 발생을 방지하는 데 중점
6. 지속 가능성 원칙: 클라우드 워크로드 실행이 환경에 미치는 영향을 최소화하는 데 중점

{% embed url="https://aws.amazon.com/architecture/well-architected/" %}



### AWS 대표 서비스



#### EC2: 온디맨드 컴퓨팅 자원 제공

#### S3, EBS: 객체  스토리지, 블록 스토리지 제공

#### DynamoDB, RDS: NoSQL, SQL 데이터베이스 제공

#### Lambda: 이벤트 중심 서버리스 컴퓨팅 서비스

#### VPC: 격리된 가상 네트워크 서비스

#### Route53: DNS 서비스

#### ELB: 트래픽 분산 서비스

#### Lightsail: 가상 프라이빗 서버 제공

#### Beanstalk: 웹 애플리케이션 배포 관리 서비스

#### ECS: 완전 관리형 컨테이너 오케스트레이션 서비스



### AWS 학습

* AWS 문서 [https://docs.aws.amazon.com](https://docs.aws.amazon.com/)
* Get Started [https://aws.amazon.com/ko/getting-started](https://aws.amazon.com/ko/getting-started/?)
* 핸즈온 [https://aws.amazon.com/ko/getting-started/hands-on](https://aws.amazon.com/ko/getting-started/hands-on)
* AWS Skill Builder [https://aws.amazon.com/ko/training/digital](https://aws.amazon.com/ko/training/digital/)



### 루트 사용자와 IAM 사용자

루트 사용자는 모든 권한을 포함하여 계정의 설정을 변경하고 계약을 관리할 수 있는 권한을 가지고 있다. 따라서 계정 생성 후 IAM 사용자를 생성하여 <mark style="color:red;">**IAM 사용자 계정 만을 사용하여 개발**</mark>하는 것이 좋다.



### AWS 시작을 위한 3가지 방법

1. AWS 웹 사이트의 관리 콘솔을 통한 조작 (웹 브라우저 사용)
2. AWS CLI를 통한 조작 (운영체제 별 설치)
3. AWS SDK를 통한 조작 (지원 언어 별 설치)



### 서버 OS로써 리눅스와 윈도우

#### 리눅스

* 리눅스는 무료오픈 소스 소프트웨어로 누구나 사용할 수 있다.
* 여러 회사에서 만든 다양한 배포판이 있다.&#x20;
* 주로CLI를 통해 조작한다
* 조작을 위해 명령어를 알아야 하며 설정을 관리할 줄 알아야 한다.

#### 윈도우 서버

* 윈도우 사용을 위해 라이선스 수수료 + CAL(Client Access License) 비용 소모
* 리눅스에 비해 자원을 많이 사용하여 저사양에서 효율적이지 않을 수 있다
* 주로GUI 통해 조작한다.

